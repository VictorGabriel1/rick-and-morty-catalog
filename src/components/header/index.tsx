import React from "react";
import { ToggleSlider } from "react-toggle-slider";
import { HeaderContainer, HeaderWrapper, Logo } from "./styles";
import { MdMenu } from "react-icons/md";
import { useTheme } from "styled-components";
import { useRouter } from "next/router";

interface HeaderProps {
  toggleTheme: () => void;
  currentTheme: "light" | "dark" | string;
}

export default function Header({ toggleTheme, currentTheme }: HeaderProps) {
  const { push } = useRouter();
  return (
    <HeaderContainer>
      <HeaderWrapper>
        {/* <MdMenu style={{ cursor: "pointer" }} size={40} /> */}
        <Logo onClick={() => push("/home")} src="/rick_and_morty_logo.png" />
        <ToggleSlider
          barBackgroundColor="#181818"
          barBackgroundColorActive="#fff"
          handleBackgroundColorActive="#181818"
          handleBackgroundColor="#fff"
          active={currentTheme === "dark"}
          onToggle={toggleTheme}
          draggable={false}
        />
      </HeaderWrapper>
    </HeaderContainer>
  );
}
