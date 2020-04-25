import React from 'react'
import PropTypes from 'prop-types'

import Navbar from '../components/Navbar'
import GlobalStyles from '../styles/global'
import Main from '../styles/main'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles/>
      <Navbar />
      <Main>
        <main>{children}</main>
      </Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
