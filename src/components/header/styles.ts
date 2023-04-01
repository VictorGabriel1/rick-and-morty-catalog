import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 4rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.header.background};
  box-shadow: 2px 2px 20px ${({ theme }) => theme.header.shadow};
`;

export const HeaderWrapper = styled.div`
  flex-direction: row;
  padding: 0px 1rem;
  height: 100%;
  width: 100%;
  max-width: 2260px;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 3.5rem;
  width: 14rem;
  align-self: center;
`;
