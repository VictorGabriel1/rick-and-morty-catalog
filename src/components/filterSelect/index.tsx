import { motion } from "framer-motion";
import React, { SetStateAction, useCallback, useState } from "react";
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
  setFilter: React.Dispatch<SetStateAction<string>>;
  currentFilter: string;
}

// variaveis responsaveis pela animação da seta de abrir
const arrowVariants = {
  open: { rotate: 180, transition: { bounce: false } },
  closed: { rotate: 0, transition: { bounce: false } },
};

// variaveis responsaveis pela animação de dropdown
const dropDownVariants = {
  visible: {
    height: "auto",
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { bounce: false },
  },
  hidden: {
    height: 0,
    y: -50,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export default function FilterSelect({
  name,
  options,
  currentFilter,
  setFilter,
}: FilterSelectProps) {
  const [isDropDown, setIsDropDown] = useState<boolean>(false);

  // função para ativar o dropdown
  const handleDropDown = useCallback(() => {
    setIsDropDown(!isDropDown);
  }, [isDropDown]);

  return (
    <ContainerFilterSelect>
      <FilterSelectName onClick={() => handleDropDown()}>
        {name}
        <motion.div
          variants={arrowVariants}
          animate={isDropDown ? "open" : "closed"}
          initial="closed"
          style={{
            position: "absolute",
            right: 10,
            top: 0,
          }}
        >
          <MdKeyboardArrowDown size={25} />
        </motion.div>
      </FilterSelectName>
      <WrapperFilterSelect
        variants={dropDownVariants}
        animate={isDropDown ? "visible" : "hidden"}
        initial="hidden"
      >
        {options.map((item) => (
          <FilterSelectOptions
            className={currentFilter === item ? "active" : ""}
            onClick={() => setFilter((old) => (old === item ? "" : item))}
            key={item}
          >
            {item}
          </FilterSelectOptions>
        ))}
      </WrapperFilterSelect>
    </ContainerFilterSelect>
  );
}
