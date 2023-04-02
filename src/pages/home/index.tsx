import React, { use, useEffect, useState } from "react";
import { CharsContainer, ContainerHome, Content } from "./styles";
import { useGetAllCharactersWithFilterQuery } from "@/generated/graphql";
import graphqlRequestClient from "@/client/GraphQLClient";
import Card from "@/components/card";
import Pagination from "@/components/pagination";
import SearchBar from "@/components/searchBar";
import Filters from "@/components/filters";
import ReactLoading from "react-loading";
import FilterSelect from "@/components/filterSelect";

export default function Home() {
  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchName, setSearchName] = useState<string>("");
  const [genderFilter, setGenderFilter] = useState<string>("");
  const [speciesFilter, setSpeciesFilter] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [typeFilter, setTypeFilter] = useState<string>("");

  const { data: chars, isLoading } = useGetAllCharactersWithFilterQuery(
    graphqlRequestClient,
    {
      name: searchName,
      page: currentPage,
      gender: "",
      species: "",
      status: "",
      type: "",
    }
  );

  useEffect(() => {
    console.log(filterIsOpen);
  }, [filterIsOpen]);

  return (
    <ContainerHome>
      <Filters setIsOpen={setFilterIsOpen} isOpen={filterIsOpen}>
        <FilterSelect
          name="Species"
          options={[
            "Human",
            "Alien",
            "Humanoid",
            "Poopybutthole",
            "Mythological",
            "Unknown",
            "Animal",
            "Disease",
            "Robot",
            "Cronenberg",
            "Planet",
          ]}
        />
        <FilterSelect
          name="f"
          options={[
            "Human",
            "Alien",
            "Humanoid",
            "Poopybutthole",
            "Mythological",
            "Unknown",
            "Animal",
            "Disease",
            "Robot",
            "Cronenberg",
            "Planet",
          ]}
        />
      </Filters>
      <Content>
        <SearchBar
          setFiltersOpen={() => setFilterIsOpen(!filterIsOpen)}
          setName={setSearchName}
        />
        <CharsContainer>
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
        </CharsContainer>
        <Pagination
          totalPages={chars?.characters?.info?.pages}
          currentPage={currentPage}
          handleChangePage={setCurrentPage}
        />
      </Content>
    </ContainerHome>
  );
}
