import React, { useState, useEffect } from 'react'
import { Moon, Sun } from 'styled-icons/boxicons-solid'
import { Search } from 'styled-icons/boxicons-regular'
import { Github, LinkedinSquare } from 'styled-icons/boxicons-logos'

import logoPath from '../../../static/assets/img/logo.svg'
import logoWhitePath from '../../../static/assets/img/logo-white.svg'
import getThemeColor from '../../utils/getThemeColor'

import * as S from './styled'

const Navbar = () => {
  const [theme, setTheme] = useState(null);
  const isLightMode = theme === 'light';
  const stateLogo = sessionStorage.getItem('animate_logo');
  if (stateLogo) {
    setTimeout(() => sessionStorage.setItem('animate_logo', 'no-animate'), 1000);
  }

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
        <S.LogoWrapper
          cover
          direction="bottom"
          bg={getThemeColor()}
          duration={0.6}
          to="/"
        >
          <S.LogoLink className={stateLogo}>
            <S.Logo src={isLightMode ? logoPath : logoWhitePath} />
          </S.LogoLink>
          <S.LogoName className={stateLogo}>
            Felipe<br/>
            Côrtes
          </S.LogoName>
        </S.LogoWrapper>
        <S.LinkWrapper>
          {links.map((link, i) => (
            <S.NavbarLink
              cover
              direction="top"
              bg={getThemeColor()}
              duration={0.6}
              key={i}
              to={link.path}
              activeClassName="active"
            >
              {link.name}
            </S.NavbarLink>
          ))}
          <S.FeatureWrapper>
            <S.Icon>
              <Search />
            </S.Icon>
            <S.Icon title="Mudar tema" onClick={() => {
              window.__setPreferredTheme(isLightMode ? 'dark' : 'light')
            }}>
              {isLightMode ? <Moon /> : <Sun />}
            </S.Icon>
          </S.FeatureWrapper>
          <S.SocialWrapper>
            <S.Icon title="Github">
              <a target="-_blank" rel="noopener noreferrer" href="https://github.com/kyfelipe">
                <Github />
              </a>
            </S.Icon>
            <S.Icon title="LinkedIn">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/felipe-cortes/">
                <LinkedinSquare />
              </a>
            </S.Icon>
          </S.SocialWrapper>
        </S.LinkWrapper>
      </S.NavbarContent>
    </S.NavbarWrapper>
  );
}

export default Navbar;
