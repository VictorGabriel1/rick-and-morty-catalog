import React from "react";
import graphqlRequestClient from "@/client/GraphQLClient";
import { useGetCharacterQuery } from "@/generated/graphql";
import { useRouter } from "next/router";
import { TbGenderMale, TbGenderFemale, TbGenderAgender } from "react-icons/tb";
import {
  CharCard,
  ContainerChar,
  ImageChar,
  InfoChar,
  NameChar,
  SubInfo,
} from "./styles";
import Image from "next/image";
import ReactLoading from "react-loading";
import { StatusCard } from "@/components/card/styles";

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
            <StatusCard status={char.character.status || ""}>
              {char.character.status}
            </StatusCard>
            <NameChar>
              {char.character.name}
              {char.character.gender === "Male" ? (
                <TbGenderMale size={25} color="#2eabe8" />
              ) : char.character.gender === "Female" ? (
                <TbGenderFemale size={25} color="#ed0984" />
              ) : char.character.gender === "Genderless" ? (
                <TbGenderAgender size={25} />
              ) : (
                <TbGenderAgender size={25} />
              )}
            </NameChar>
            <SubInfo>
              <SubInfo className="title">Location: </SubInfo>
              {char.character.location?.name}
            </SubInfo>
            <SubInfo>
              <SubInfo className="title">Origin: </SubInfo>{" "}
              {char.character.origin?.name} - {char.character.origin?.dimension}
            </SubInfo>
            <SubInfo>
              <SubInfo className="title">Species: </SubInfo>
              {char.character.species}
            </SubInfo>
            {char.character.type ? (
              <SubInfo>
                <SubInfo className="title">Type: </SubInfo>
                {char.character.type}
              </SubInfo>
            ) : (
              ""
            )}
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
