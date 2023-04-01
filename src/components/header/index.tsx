import React from "react";
import { ToggleSlider } from "react-toggle-slider";
import { HeaderContainer, HeaderWrapper, Logo } from "./styles";
import { MdMenu } from "react-icons/md";
import { useTheme } from "styled-components";

interface HeaderProps {
  toggleTheme: () => void;
  currentTheme: "light" | "dark" | string;
}

export default function Header({ toggleTheme, currentTheme }: HeaderProps) {
  const theme = useTheme();

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <MdMenu
          style={{ cursor: "pointer" }}
          color={theme.header.menu}
          size={40}
        />
        <Logo src="/rick_and_morty_logo.png" />
        <ToggleSlider
          barBackgroundColor="#181818"
          barBackgroundColorActive="#fff"
          handleBackgroundColorActive="#181818"
          handleBackgroundColor="#fff"
          active={currentTheme === "dark"}
          onToggle={toggleTheme}
        />
      </HeaderWrapper>
    </HeaderContainer>
  );
}
