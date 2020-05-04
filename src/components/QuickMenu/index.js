import React from 'react'

import FloatButton from './FloatButton'
import Menu from './Menu'

import * as S from './styled'

const QuickMenu = () => {
  let isHiddenMenu = true;
  const menu = document.getElementById("menu");
  const iconOpen = document.getElementById("menu_open_icon");
  const iconClose = document.getElementById("menu_close_icon");

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
    iconOpen.setAttribute("hidden", "");
    iconClose.removeAttribute("hidden");
  }

  function hideMenu() {
    menu.setAttribute("hidden", "");
    iconOpen.removeAttribute("hidden");
    iconClose.setAttribute("hidden", "");
  }

  return (
    <S.MenuWrapper>
      <FloatButton funcSwapMenu={swapStateMenu}/>
      <Menu />
    </S.MenuWrapper>
  );

}

export default QuickMenu;
