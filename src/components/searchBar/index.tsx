import React, { SetStateAction } from "react";
import { MdFilterList } from "react-icons/md";
import { ContainerSearch, DivToCenter } from "./styles";

interface SearchBarProps {
  setName: React.Dispatch<SetStateAction<string>>;
  setFiltersOpen: () => void;
}

export default function SearchBar({ setName, setFiltersOpen }: SearchBarProps) {
  return (
    <ContainerSearch>
      <MdFilterList
        style={{ cursor: "pointer", margin: "0px 10px" }}
        onClick={setFiltersOpen}
        size={40}
      />
      <input onChange={(e) => setName(e.target.value)} />
      <DivToCenter />
    </ContainerSearch>
  );
}
