import React from 'react'
import { Menu } from 'styled-icons/boxicons-regular'
import { CloseOutline } from 'styled-icons/evaicons-outline'

import * as S from './styled'

const FloatButton = ({ funcSwapMenu }) => (
  <S.FloatWrapper onClick={funcSwapMenu}>
    <S.FloatButton>
      <S.Icon id="menu_open_icon">
        <Menu />
      </S.Icon>
      <S.Icon id="menu_close_icon" hidden>
        <CloseOutline />
      </S.Icon>
    </S.FloatButton>
  </S.FloatWrapper>
);

export default FloatButton;
