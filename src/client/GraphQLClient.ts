import { GraphQLClient } from "graphql-request";

const graphqlRequestClient = new GraphQLClient(
  "https://rickandmortyapi.com/graphql"
  // {
  //   headers: {
  //     "x-hasura-admin-secret": "",
  //   },
  // }
);

export default graphqlRequestClient;
