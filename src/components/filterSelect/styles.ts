import styled from "styled-components";

export const ContainerFilterSelect = styled.div`
  width: 260px;
  border-radius: 5px;
  border: 2px solid #00b5cc;
  padding: 5px;
  margin: 10px 0px;
`;

export const FilterSelectName = styled.span`
  position: relative;
  height: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const WrapperFilterSelect = styled.div`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

export const FilterSelectOptions = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 100px;
  margin: 5px;
  height: 20px;
  border: 1px solid #00b5cc;
  background-color: transparent;
`;
