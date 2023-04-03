import React from "react";
import graphqlRequestClient from "@/client/GraphQLClient";
import { useGetCharacterQuery } from "@/generated/graphql";
import { useRouter } from "next/router";
import { CharCard, ContainerChar, ImageChar, InfoChar } from "./styles";
import Image from "next/image";
import { NameCard } from "@/components/card/styles";
import ReactLoading from "react-loading";

export default function CharacterInfo() {
  const { query } = useRouter();
  const id = query.id;

  const { data: char, isLoading } = useGetCharacterQuery(graphqlRequestClient, {
    id: id as unknown as string,
  });

  return (
    <ContainerChar>
      {char?.character ? (
        <CharCard>
          <ImageChar
            alt={char.character.name || ""}
            src={char.character.image || ""}
          />
          <InfoChar>
            <NameCard>{char.character.name}</NameCard>
          </InfoChar>
        </CharCard>
      ) : (
        <>
          {isLoading ? (
            <ReactLoading
              color="#00b5cc"
              type="spin"
              height={300}
              width={300}
              className="loading"
            />
          ) : (
            <></>
          )}
        </>
      )}
    </ContainerChar>
  );
}
