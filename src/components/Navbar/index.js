import React, { useState, useEffect } from 'react'
import { Moon, Sun } from 'styled-icons/boxicons-solid'
import { Search } from 'styled-icons/boxicons-regular'
import { Github, LinkedinSquare } from 'styled-icons/boxicons-logos'

import Logo from '../Logo'

import * as S from './styled'

const Navbar = () => {
  const [theme, setTheme] = useState(null);
  const isLightMode = theme === 'light';

  const links = [
    {
      name: `Blog`,
      path: `/`
    },
    {
      name: `Sobre mim`,
      path: `/sobre-mim`
    }
  ];

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme);
  }, []);

  return (
    <S.NavbarWrapper>
      <S.NavbarContent>
        <Logo isLightMode={isLightMode}/>
        <S.LinkWrapper>
          {links.map((link, i) => (
            <S.NavbarLink
              key={i}
              to={link.path}
              activeClassName="active"
            >
              {link.name}
            </S.NavbarLink>
          ))}
          <S.SocialWrapper>
            <S.Icon title="Github">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/kyfelipe">
                <Github />
              </a>
            </S.Icon>
            <S.Icon title="LinkedIn">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/felipe-cortes/">
                <LinkedinSquare />
              </a>
            </S.Icon>
          </S.SocialWrapper>
          <S.FeatureWrapper>
            <S.Icon title="Mudar tema" onClick={() => {
              window.__setPreferredTheme(isLightMode ? 'dark' : 'light')
            }}>
              {isLightMode ? <Moon /> : <Sun />}
            </S.Icon>
            <S.Icon>
              <Search />
            </S.Icon>
          </S.FeatureWrapper>
        </S.LinkWrapper>
      </S.NavbarContent>
    </S.NavbarWrapper>
  );
}

export default Navbar;
