import React from 'react'
import PropTypes from 'prop-types'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
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
          padding: `0px 1.0875rem 1.45rem`,
          position: `relative`,
          minHeight: `92vh`
        }}
      >
        <main>{children}</main>
        {/*<Footer />*/}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
