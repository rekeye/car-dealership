import * as React from "react"
import PropTypes from "prop-types"

import styled, { css } from "styled-components"
import { StyledLink } from "./styledComponents"

const StyledHeaderDiv = styled.div`
  background: ${props => (props.colored && css`var(--base-dark-red)`)};
  padding: 2em 4em;
`
const StyledSiteTitle = styled.h1`
  font-weight: 300;
  font-size: 2.5rem;
`

const Header = ({ siteTitle }) => (
  <header>
    <StyledHeaderDiv colored>
      <StyledSiteTitle>
        <StyledLink to="/" color="white">
          {siteTitle}
        </StyledLink>
      </StyledSiteTitle>
    </StyledHeaderDiv>
    <StyledHeaderDiv>
asdadsad
    </StyledHeaderDiv>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
