import styled from "styled-components";

interface StatusCardProps {
  status: string;
}

export const ContainerCard = styled.div`
  width: 300px;
  height: 400px;
  margin: 20px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 8px 20px black;
  /* border: 2px solid ${({ theme }) => theme.header.shadow}; */
  cursor: pointer;
`;

export const ImgCard = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 5px 5px 0px 0px;
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 100px;
  justify-content: space-between;
`;

export const NameCard = styled.span`
  position: relative;
  display: flex;
  font-size: 17.5px;
  font-weight: bold;
  max-width: 150px;
  align-items: center;
`;

export const WrapperCard = styled.div`
  max-height: 70px;
  min-height: 30px;
  padding: 5px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &.nameGender {
    justify-content: flex-start;
    width: 200px;
  }
`;

export const StatusCard = styled.span<StatusCardProps>`
  display: flex;
  width: 100px;
  margin: 5px;
  height: 20px;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ status }) =>
    // Verifica o status para definir a cor
    status === "Alive" // vivo
      ? "green"
      : status === "Dead" // morto
      ? "red"
      : "grey"}; // nenhum dos dois (desconhecido)
`;

export const InfoCard = styled.span`
  width: 100%;
  padding: 5px;
`;
