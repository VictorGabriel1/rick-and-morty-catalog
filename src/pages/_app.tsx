import type { AppProps } from "next/app";
import { useCallback, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "@/themes/darkTheme";
import { lightTheme } from "@/themes/lightTheme";
import NextNProgress from "nextjs-progressbar";
import Header from "@/components/header";
import ReactLoading from "react-loading";

const queryClient = new QueryClient({
  defaultOptions: {
    // Configurção padrão paras querys
    queries: {
      cacheTime: 0,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurentTheme] = useState<"light" | "dark">(); // Tema Atual

  useEffect(() => {
    const localTheme = localStorage.getItem("@currentTheme"); // Verifica se o usuario já escolheu seu tema anteriormente
    setCurentTheme(localTheme === "light" ? "light" : "dark"); // se não, coloca como tema atual o dark
  }, []);

  // Função para alterar o tema e deixar salvo como preferencia local
  const toggleTheme = useCallback(() => {
    localStorage.setItem(
      "@currentTheme",
      currentTheme === "light" ? "dark" : "light"
    );
    setCurentTheme(currentTheme === "light" ? "dark" : "light");
  }, [currentTheme]);

  // Previne que a página seja formada até que useEffect escolha um tema
  if (!currentTheme) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          width: "100%",
          backgroundColor: "#181818",
        }}
      >
        <ReactLoading
          color="#00b5cc"
          type="spin"
          height={300}
          width={300}
          className="loading"
        />
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
        <NextNProgress
          color="#bdffa0"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <GlobalStyle />
        <Header currentTheme={currentTheme} toggleTheme={toggleTheme} />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
