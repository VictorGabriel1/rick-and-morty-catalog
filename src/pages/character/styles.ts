import styled from "styled-components";

export const ContainerChar = styled.div`
  margin-top: 30px;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const CharCard = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  width: 70%;
  align-items: flex-start;
  max-width: 600px;
  min-width: 310px;
  height: 500px;
  border: 500px;
  border: 5px solid #00b5cc;
  border-radius: 10px;
`;

export const ImageChar = styled.img`
  height: 300px;
  width: 300px;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const InfoChar = styled.div`
  padding: 10px;
  min-width: 300px;
`;

export const NameChar = styled.span`
  font-size: 50px;
  font-weight: bold;
`;
