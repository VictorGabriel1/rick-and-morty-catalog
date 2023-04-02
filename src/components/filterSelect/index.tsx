import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  ContainerFilterSelect,
  FilterSelectName,
  FilterSelectOptions,
  WrapperFilterSelect,
} from "./styles";

interface FilterSelectProps {
  name: string;
  options: string[];
}

export default function FilterSelect({ name, options }: FilterSelectProps) {
  return (
    <ContainerFilterSelect>
      <FilterSelectName>
        {name}
        <MdKeyboardArrowDown
          size={25}
          style={{
            cursor: "pointer",
            position: "absolute",
            right: 10,
            top: 0,
          }}
        />
      </FilterSelectName>
      <WrapperFilterSelect>
        {options.map((item) => (
          <FilterSelectOptions key={item}>{item}</FilterSelectOptions>
        ))}
      </WrapperFilterSelect>
    </ContainerFilterSelect>
  );
}
