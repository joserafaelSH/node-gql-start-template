import { YogaInitialContext } from "graphql-yoga";

export type GraphQLContext = {
  currentUser: unknown | null;
};

// create your auth function
async function authenticateUser(request: Request) {}

export async function createContext(
  initialContext: YogaInitialContext,
): Promise<GraphQLContext | undefined> {
  return {
    currentUser: await authenticateUser(initialContext.request),
  };
}
