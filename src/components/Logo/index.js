import React from 'react'
import PropTypes from 'prop-types'

import logoPath from '../../../static/assets/img/logo.svg'
import logoWhitePath from '../../../static/assets/img/logo-white.svg'
import getThemeColor from '../../utils/getThemeColor'

import * as S from './styled'

const Logo = ({ isLightMode }) => {
  return (
    <S.LogoWrapper
      cover
      direction="bottom"
      bg={getThemeColor()}
      duration={0.6}
      to="/"
    >
      <S.LogoLink className={'no-animate'}>
        <S.Logo title="" src={isLightMode ? logoPath : logoWhitePath} />
      </S.LogoLink>
      <S.LogoName className={'no-animate'}>
        Felipe<br/>
        Côrtes
      </S.LogoName>
    </S.LogoWrapper>
  );
};

Logo.propTypes = {
  isLightMode: PropTypes.bool.isRequired,
};

export default Logo;
