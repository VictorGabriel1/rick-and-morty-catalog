import * as styled from "styled-components";

export const GlobalStyle = styled.createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body,
  #__next {
    min-height: 100%;
    min-width: 100%;
    background: ${({ theme }) => theme.body.background};
  }

  div,
  form {
    display: flex;
    flex-direction: column;
  }

  a {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  // anything else you would like to include
`;
