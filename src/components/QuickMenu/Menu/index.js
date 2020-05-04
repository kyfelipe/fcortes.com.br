import React, { useEffect, useState } from "react"
import scrollTop from '../../../utils/scrollTop'

import * as S from './styled'

const Menu = () => {
  const [fontSize, setFontSize] = useState(null);
  const fontSizeIcon = document.getElementById("font_size_icon");
  const fontSizeWrapper = document.getElementById("font_size_wrapper");
  const isSmallFont = fontSize === 'small';
  const isNormalFont = fontSize === 'normal';
  const isLargeFont = fontSize === 'large';

  const fontSizeMenu = () => {
    if (fontSizeIcon.classList.contains('active')) {
      fontSizeIcon.classList.remove('active');
      fontSizeWrapper.setAttribute("hidden", "");
    } else {
      fontSizeIcon.classList.add('active');
      fontSizeWrapper.removeAttribute("hidden");
    }
  }

  useEffect(() => {
    setFontSize(window.__fontSize);
    window.__onFontSizeChange = () => setFontSize(window.__fontSize);
  }, []);

  return (
    <S.MenuWrapper id="menu" hidden>
      <S.FeatureWrapper>
        <S.FeatureIcon onClick={scrollTop}>
          <S.ArrowIcon/>
        </S.FeatureIcon>
        <S.FeatureIcon onClick={fontSizeMenu}>
          <S.FontSizeIcon id="font_size_icon"/>
        </S.FeatureIcon>
        <S.FontSizeWrapper id="font_size_wrapper" hidden>
          <S.FontSizeType
            className={isSmallFont ? 'active' : ''}
            onClick={() =>
              isSmallFont ? '' : window.__setPreferredFontSize('small')
            }
          >
            P
          </S.FontSizeType>
          <S.FontSizeType
            className={isNormalFont ? 'active' : ''}
            onClick={() =>
              isNormalFont ? '' : window.__setPreferredFontSize('normal')
            }
          >
            M
          </S.FontSizeType>
          <S.FontSizeType
            className={isLargeFont ? 'active' : ''}
            onClick={() =>
              isLargeFont ? '' : window.__setPreferredFontSize('large')
            }
          >
            G
          </S.FontSizeType>
        </S.FontSizeWrapper>
      </S.FeatureWrapper>
    </S.MenuWrapper>
  );
};

export default Menu;
