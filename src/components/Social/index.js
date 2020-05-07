import React from 'react'
import { Github, LinkedinSquare } from 'styled-icons/boxicons-logos'

import * as S from './styled'

const Social = () => (
  <S.SocialWrapper>
    <S.Icon title="Github">
      <a target="_blank" aria-label="LinkedIn" rel="noopener noreferrer" href="https://github.com/kyfelipe">
        <Github />
      </a>
    </S.Icon>
    <S.Icon title="LinkedIn">
      <a target="_blank" aria-label="LinkedIn" rel="noopener noreferrer" href="https://www.linkedin.com/in/felipe-cortes/">
        <LinkedinSquare />
      </a>
    </S.Icon>
  </S.SocialWrapper>
);


export default Social;
