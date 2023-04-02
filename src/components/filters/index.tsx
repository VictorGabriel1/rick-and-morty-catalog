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
  const FilterVariants = {
    visible: { width: 280, left: 0 },
    hidden: {
      width: 0,
      left: -280,
      transition: {
        duration: 0.15,
      },
    },
  };

  return (
    <ContainerFilters
      animate={isOpen ? "visible" : "hidden"}
      variants={FilterVariants}
    >
      <WrapperFilters
        animate={isOpen ? "visible" : "hidden"}
        variants={FilterVariants}
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
