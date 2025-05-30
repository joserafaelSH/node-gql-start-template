import { createYoga } from "graphql-yoga";
import Koa from "koa";
import { koaBody } from "koa-body";
import { schema } from "./schema/schema";
import { createContext } from "./context";
import { logger } from "../logger/logger";

export async function createGqlServer() {
  const app = new Koa();
  const yoga = createYoga({
    cors: {
      origin: "http://localhost:4000",
      credentials: true,
      allowedHeaders: ["X-Custom-Header"],
      methods: ["POST"],
    },
    schema,
    context: createContext,
    graphqlEndpoint: "/api/graphql",
  });

  app.use(koaBody());

  // response time
  app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set("X-Response-Time", `${ms}ms`);
  });

  // global error handler
  app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err: unknown) {
      ctx.status = err.status || 500;
      ctx.body = {
        success: false,
        message: err.message || "Internal Server Error",
      };
      ctx.app.emit("error", err, ctx);
    }
  });
  // request log
  app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get("X-Response-Time");
    logger.info(`${ctx.method} ${ctx.url} - ${rt}`);
  });

  app.use(async (ctx: Koa.Context) => {
    // Second parameter adds Koa's context into GraphQL Context
    // If you use any body parsing middleware in your application,
    // Make sure it is `ctx.request` and not `ctx.req`
    const response = await yoga.handleNodeRequestAndResponse(
      ctx.request,
      ctx.res,
    );

    // Set status code
    ctx.status = response.status;

    // Set headers
    response.headers.forEach((value, key) => {
      ctx.append(key, value);
    });

    // Converts ReadableStream to a NodeJS Stream
    ctx.body = response.body;
  });

  app.on("error", (err, ctx) => {
    logger.error("server error", {
      message: err.message,
      stack: err.stack,
      path: ctx.request.path,
      method: ctx.request.method,
    });
  });

  return app;
}
