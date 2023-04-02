import styled from "styled-components";

export const ContainerSearch = styled.div`
  padding: 0px 10px;
  flex-direction: row;
  height: 60px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.header.background};
  input {
    width: 50%;
    height: 40px;
    padding: 5px;
    font-size: 20px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.body.background};
  }
`;

export const DivToCenter = styled.div`
  height: 60px;
  width: 60px;
`;
