import * as React from "react"
import PropTypes from "prop-types"

import styled from "styled-components"
import { StyledLink } from "./styledComponents"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <StyledLink to="/" color="white">
          {siteTitle}
        </StyledLink>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
