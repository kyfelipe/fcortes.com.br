import React from 'react'

import FloatButton from './FloatButton'
import Menu from './Menu'

import * as S from './styled'

const QuickMenu = () => {
  let isHiddenMenu = true;
  const menu = document.getElementById("menu");

  function swapStateMenu() {
    if (isHiddenMenu) {
      showMenu();
    } else {
      hideMenu();
    }

    isHiddenMenu = !isHiddenMenu;
  }

  function showMenu() {
    menu.removeAttribute("hidden");
  }

  function hideMenu() {
    menu.setAttribute("hidden", "");
  }

  return (
    <S.MenuWrapper>
      <FloatButton funcSwapMenu={swapStateMenu}/>
      <Menu />
    </S.MenuWrapper>
  );

}

export default QuickMenu;
