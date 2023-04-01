import React from "react";
import { HomeCotainer } from "./styles";
import { useGetAllCharactersWithFilterQuery } from "@/generated/graphql";
import graphqlRequestClient from "@/client/GraphQLClient";
import Card from "@/components/card";

export default function Home() {
  const { data: chars } = useGetAllCharactersWithFilterQuery(
    graphqlRequestClient,
    { name: "hole", page: 1 }
  );

  return (
    <HomeCotainer>
      {chars?.characters?.results ? (
        chars.characters.results.map((char) => (
          <Card
            key={char?.id}
            id={char?.id}
            name={char?.name}
            image={char?.image}
            gender={char?.gender}
            species={char?.species}
            status={char?.status}
            type={char?.type}
          />
        ))
      ) : (
        <></>
      )}
    </HomeCotainer>
  );
}
