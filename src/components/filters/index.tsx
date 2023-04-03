import React, { ReactNode, SetStateAction } from "react";
import { MdClose } from "react-icons/md";
import {
  ContainerClose,
  ContainerFilters,
  Title,
  WrapperFilters,
} from "./styles";

interface FilterProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  children: ReactNode[];
}

export default function Filters({ isOpen, setIsOpen, children }: FilterProps) {
  // variaveis responsaveis pela animação de entrada da aba de filtros
  const FilterVariants = {
    visible: { width: 280, paddingLeft: 280 },
    hidden: {
      width: 0,
      paddingLeft: 0,
    },
  };

  const FilterWrapperVariants = {
    visible: { width: 280, height: "100vh", left: 0 },
    hidden: {
      width: 0,
      left: -280,
    },
  };

  return (
    <ContainerFilters
      animate={isOpen ? "visible" : "hidden"}
      variants={FilterVariants}
    >
      <WrapperFilters
        animate={isOpen ? "visible" : "hidden"}
        variants={FilterWrapperVariants}
      >
        <Title>Filters</Title>
        <ContainerClose>
          <MdClose
            style={{ cursor: "pointer" }}
            onClick={() => setIsOpen(false)}
            size={35}
          />
        </ContainerClose>
        {children}
      </WrapperFilters>
    </ContainerFilters>
  );
}
