import { createSchema } from "graphql-yoga";

import { GraphQLContext } from "../context";

// (parent: unknown, args:  { email: string; pass: string }, context: GraphQLContext
export const schema = createSchema({
  typeDefs: /* GraphQL */ ``,
  resolvers: {
    Query: {},
    Mutation: {},
  },
});
