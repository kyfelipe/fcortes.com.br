import React from 'react'

import logoPath from '../../../static/assets/img/logo.svg'
import { Moon, Sun } from 'styled-icons/boxicons-solid'
import { Search } from 'styled-icons/boxicons-regular'
import { Github, LinkedinSquare } from 'styled-icons/boxicons-logos'

import * as S from './styled'

const Navbar = () => {
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

  return (
    <S.NavbarWrapper>
      <S.NavbarContent>
        <S.LogoWrapper to="/">
          <S.LogoLink>
            <S.Logo src={logoPath} />
          </S.LogoLink>
          <S.LogoName>
            Felipe<br/>
            Côrtes
          </S.LogoName>
        </S.LogoWrapper>
        <S.LinkWrapper>
          {links.map((link, i) => (
            <S.NavbarLink key={i} to={link.path} activeClassName="active">
              {link.name}
            </S.NavbarLink>
          ))}
          <S.FeatureWrapper>
            <S.Icon>
              <Search />
            </S.Icon>
            <S.Icon>
              <Moon />
            </S.Icon>
          </S.FeatureWrapper>
          <S.SocialWrapper>
            <S.Icon>
              <a target="-_blank" rel="noopener noreferrer" href="https://github.com/kyfelipe">
                <Github />
              </a>
            </S.Icon>
            <S.Icon>
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
