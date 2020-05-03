import React, { useEffect, useState } from "react"
import { Close } from 'styled-icons/material-rounded'
import { Github, LinkedinSquare } from 'styled-icons/boxicons-logos'
import { Moon, Sun } from 'styled-icons/boxicons-solid'
import { Search } from 'styled-icons/boxicons-regular'

import Logo from '../Logo'

import * as S from './styled'

const QuickMenu = () => {
  const [theme, setTheme] = useState(null);
  const isLightMode = theme === 'light';

  const button = document.getElementById("menu_button");
  const menu = document.getElementById("menu_body");
  const overlay = document.getElementById("menu_overlay");

  function showMenu() {
    button.setAttribute("hidden", "");
    menu.removeAttribute("hidden");
    overlay.removeAttribute("hidden");
  }

  function hideMenu() {
    menu.setAttribute("hidden", "");
    overlay.setAttribute("hidden", "");
    button.removeAttribute("hidden");
  }

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme);
  }, []);

  return (
    <S.MenuWrapper>
      <S.MenuButton id="menu_button" onClick={() => showMenu()}>
        Quick Menu
      </S.MenuButton>
      <S.MenuBody id="menu_body" hidden>
        <S.MenuHeader>
          <Logo isLightMode={isLightMode}/>
          <S.MenuCloseButton onClick={() => hideMenu()} id="menu_close" title="Close">
            <Close />
          </S.MenuCloseButton>
        </S.MenuHeader>
        <S.MenuLinksWrapper>
          <S.MenuLink to="/">Blog</S.MenuLink>
          <S.MenuLink to="/">Sobre mim</S.MenuLink>
        </S.MenuLinksWrapper>
        <S.MenuFooterWrapper>
          <S.MenuFunctionsWrapper>
            <S.Icon>
              <Search />
            </S.Icon>
            <S.Icon title="Mudar tema" onClick={() => {
              window.__setPreferredTheme(isLightMode ? 'dark' : 'light')
            }}>
              {isLightMode ? <Moon /> : <Sun />}
            </S.Icon>
          </S.MenuFunctionsWrapper>
          <S.MenuContactWrapper>
            <S.Icon>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/kyfelipe">
                <Github />
              </a>
            </S.Icon>
            <S.Icon>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/felipe-cortes/">
                <LinkedinSquare />
              </a>
            </S.Icon>
          </S.MenuContactWrapper>
        </S.MenuFooterWrapper>
      </S.MenuBody>
      <S.MenuOverlay id="menu_overlay" onClick={() => hideMenu()} hidden />
    </S.MenuWrapper>
  );
};

export default QuickMenu;
