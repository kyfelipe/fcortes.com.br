import React from 'react'
import PropTypes from 'prop-types'

import Navbar from '../components/Navbar'
import GlobalStyles from '../styles/global'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles/>
      <Navbar />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`
        }}
      >
        <main>{children}</main>
        {/*<footer>*/}
        {/*  © {new Date().getFullYear()}, Built with*/}
        {/*  {` `}*/}
        {/*  <a href="https://www.gatsbyjs.org">Gatsby</a>*/}
        {/*</footer>*/}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
