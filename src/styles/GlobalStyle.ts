import * as styled from "styled-components";

export const GlobalStyle = styled.createGlobalStyle`
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    transition: background-color 0.3s ease-in-out; // garente a animação de transição de cores em todos os lugares
  }

  html,
  body,
  #__next {
    min-height: 100%;
    min-width: 100%;
    font-family: sans-serif;
    color: ${({ theme }) => theme.font.color};
    background: ${({ theme }) =>
      theme.body.background}; // background do tema atual
  }

  // todas as divs criadas já serão flex com sentido column por padrão
  div {
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
`;
