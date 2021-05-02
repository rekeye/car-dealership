import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import GlobalStyle from "./globalStyle" //Global style component provided by styled-components (https://www.gatsbyjs.com/docs/how-to/styling/styled-components/#creating-global-styles)

const Footer = styled.footer`
  width: 100%;
  padding: 2em 1.5em;
  @media(min-width: 768px) {
    padding: 2em 4em
  }
`
const Main = styled.main`
  padding: 0 1.5em;
  @media(min-width: 768px) {
    padding: 0 4em
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Main>{children}</Main>
      <Footer>© {new Date().getFullYear()}, Szymon Paluch</Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
