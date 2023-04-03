import { motion } from "framer-motion";
import styled from "styled-components";

export const ContainerFilterSelect = styled.div`
  width: 260px;
  border-radius: 5px;
  border: 3px solid #00b5cc;
  padding: 5px;
  margin: 10px 0px;
`;

export const FilterSelectName = styled.span`
  position: relative;
  font-weight: bold;
  height: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: 2;
  cursor: pointer;
`;

export const WrapperFilterSelect = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  z-index: 0;
`;

export const FilterSelectOptions = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 100px;
  margin: 5px;
  height: 20px;
  border: 3px solid #00b5cc;
  border-radius: 2px;
  background-color: transparent;
  &.active {
    background-color: #00b5cc;
    color: #fff;
    :hover {
      opacity: 0.8;
    }
  }
  :hover {
    background-color: #00b5cc;
    color: #fff;
  }
`;
