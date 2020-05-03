import React from 'react'
import { Menu } from 'styled-icons/boxicons-regular'

import * as S from './styled'

const FloatButton = ({ funcSwapMenu }) => (
  <S.FloatWrapper onClick={funcSwapMenu}>
    <S.FloatShadow />
    <S.FloatButton>
      <S.Icon>
        <Menu />
      </S.Icon>
    </S.FloatButton>
  </S.FloatWrapper>
);

export default FloatButton;
