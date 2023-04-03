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
  max-width: 710px;
  min-width: 310px;
  min-height: 300px;
  border: 500px;
  border: 5px solid #00b5cc;
  border-radius: 10px;
  @media screen and (max-width: 1020px) {
    width: min-content;
  }
`;

export const ImageChar = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 5px;
`;

export const InfoChar = styled.div`
  padding: 10px;
  max-width: 400px;
  min-width: 300px;
`;

export const NameChar = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

export const SubInfo = styled.span`
  font-size: 20px;
  padding: 10px 0px;
  &.title {
    color: #00b5cc;
    font-weight: bold;
  }
`;
