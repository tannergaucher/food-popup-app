import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { Header, Footer } from "."
import "./layout.css"

const StyledLayout = styled.div``

const StyledMain = styled.main`
  min-height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
