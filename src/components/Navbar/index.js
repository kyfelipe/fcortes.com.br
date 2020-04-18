import React from 'react'

import logoPath from '../../../static/assets/img/logo.svg'

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
        </S.LinkWrapper>
      </S.NavbarContent>
    </S.NavbarWrapper>
  );
}

export default Navbar;
