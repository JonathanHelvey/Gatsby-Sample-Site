/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import OverlayMenu from './OverlayMenu'
import Hamburger from './Hamburger'
import Footer from './Footer'

import './layout.css'
import 'bootstrap/dist/css/bootstrap-grid.css'

const Primary = styled.main`
  padding: 110px 0 0 0;
`

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleOverlayMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <Hamburger handleOverlayMenu={handleOverlayMenu} />
      <OverlayMenu menuOpen={menuOpen} callBack={handleOverlayMenu} />
      <Header />
      <Primary id="primary" className="content-area">
        <main id="main" className="site-main" role="main">
          {children}
        </main>
      </Primary>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
