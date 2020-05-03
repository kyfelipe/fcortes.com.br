import React from 'react'
import scrollTop from '../../../utils/scrollTop'

import * as S from './styled'

const Menu = () => (
  <S.MenuWrapper id="menu" hidden>
    <S.FeatureWrapper>
      <S.FeatureIcon>
        <S.ArrowIcon onClick={scrollTop}/>
      </S.FeatureIcon>
    </S.FeatureWrapper>
  </S.MenuWrapper>
);

export default Menu;
