import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerFilters = styled(motion.div)`
  width: 280px;
  height: 100vh;
  position: relative;
  height: 100%;
  z-index: 1;
`;

export const WrapperFilters = styled(motion.div)`
  position: fixed;
  align-items: center;
  top: 0;
  left: 0;
  width: 280px;
  height: 100vh;
  background-color: ${({ theme }) => theme.filters.background};
`;

export const Title = styled.span`
  height: 60px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
`;

export const ContainerClose = styled.div`
  width: 100%;
  height: 60px;
  align-items: flex-end;
  justify-content: center;
`;
