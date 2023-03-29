import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://rickandmortyapi.com/graphql",
  documents: "./src/**/*.graphql",
  config: {
    fetcher: "graphql-request",
  },
  generates: {
    "src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
    },
  },
};

export default config;
