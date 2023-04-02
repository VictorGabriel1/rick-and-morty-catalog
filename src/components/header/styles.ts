import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  height: 60px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.header.background};
  box-shadow: 0px 1px 20px ${({ theme }) => theme.header.shadow};
  z-index: 2;
`;

export const HeaderWrapper = styled.div`
  flex-direction: row;
  padding: 16px;
  height: 100%;
  width: 100%;
  max-width: 2260px;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 55px;
  width: 250px;
  align-self: center;
`;
