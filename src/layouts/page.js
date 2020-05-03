import React from 'react'
import PropTypes from 'prop-types'
import { TransitionPortal } from 'gatsby-plugin-transition-link'

import Navbar from '../components/Navbar'
import GlobalStyles from '../styles/global'
import Main from '../styles/main'
import LayoutWrapper from '../styles/layout'
import QuickMenu from '../components/QuickMenu'

const Layout = ({ children }) => {
  const isPost = window.location.href.split('/')[3] === 'post';

  return (
    <LayoutWrapper>
      <GlobalStyles/>
      <TransitionPortal level="top">
        <Navbar />
      </TransitionPortal>
      <Main>
        {children}
      </Main>
      {isPost &&
        <TransitionPortal level="top">
          <QuickMenu />
        </TransitionPortal>
      }
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
