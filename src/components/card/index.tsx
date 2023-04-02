import graphqlRequestClient from "@/client/GraphQLClient";
import React from "react";
import { TbGenderMale, TbGenderFemale, TbGenderAgender } from "react-icons/tb";
import {
  ContainerCard,
  ImgCard,
  InfoCard,
  InfoContainer,
  NameCard,
  StatusCard,
  WrapperCard,
} from "./styles";

interface CardProps {
  id?: string | null;
  name?: string | null;
  image?: string | null;
  gender?: string | null;
  status?: string | null;
  species?: string | null;
  type?: string | null;
}

export default function Card({
  id,
  name,
  image,
  gender,
  species,
  status,
}: CardProps) {
  return (
    <ContainerCard>
      <ImgCard src={image || ""} />
      <InfoContainer>
        <WrapperCard>
          <WrapperCard className="nameGender">
            <NameCard>{name}</NameCard>
            {gender && gender === "Male" ? (
              <TbGenderMale size={25} color="#2eabe8" />
            ) : gender === "Female" ? (
              <TbGenderFemale size={25} color="#ed0984" />
            ) : gender === "Genderless" ? (
              <TbGenderAgender size={25} />
            ) : (
              <TbGenderAgender size={25} />
            )}
          </WrapperCard>
          <StatusCard status={status ? status : ""}>{status}</StatusCard>
        </WrapperCard>
        <WrapperCard>
          <InfoCard>Species: {species}</InfoCard>
        </WrapperCard>
      </InfoContainer>
    </ContainerCard>
  );
}
