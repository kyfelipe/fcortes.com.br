import React from 'react'

import * as S from './styled'

const Footer = () => (
  <S.Footer>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </S.Footer>
);

export default Footer;
