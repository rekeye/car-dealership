import React, { useState } from "react"
import PropTypes from "prop-types"

import styled, { css } from "styled-components"
import { StyledLink } from "./styledComponents"

const HeaderDiv = styled.div`
  background: var(--base-dark-red);
  padding: 2em 4em;
  ${props => (props.subheader && css`
    background: transparent;
    padding: 1em 4em;
    display: flex;
    justify-content: flex-end;
  `)}
`
const Hamburger = styled.button`
  cursor: pointer;
  @media (min-width: 768px) {
    dislay: none;
    visibility: invisible;
  }
` 
const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  transform: ${props => props.showNav ? scaleX(0) : scaleX(1)};
  transition: transform 250ms ease-in-out;
  @media (min-width: 768px) {
    flex-direction: row;
    width: auto;
  }
`
const SiteTitle = styled.h1`
  font-weight: 300;
  font-size: 2.5rem;
`

const Header = ({ siteTitle }) => {
  const [ menu, showMenu ] = useState(true);

  return (
    <header>
      <HeaderDiv>
        <SiteTitle>
          <StyledLink to="/" color="white">
            {siteTitle}
          </StyledLink>
        </SiteTitle>
      </HeaderDiv>
      <HeaderDiv subheader>
        <Navbar>
          <StyledLink to="/" showNav={menu}>
            Strona główna
          </StyledLink>
          <StyledLink to="/offers" showNav={menu}>
            Wszystkie oferty
          </StyledLink>
          <StyledLink to="/contact" showNav={menu}>
            Kontakt
          </StyledLink>
        </Navbar>
      </HeaderDiv>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
