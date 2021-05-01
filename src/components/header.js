import React, { useState } from "react"
import PropTypes from "prop-types"

import { useScrollPosition } from "../hooks/useScrollPosition"

import styled, { css } from "styled-components"
import { StyledLink } from "./styledComponents"

const HeaderDiv = styled.div`
  background: var(--base-dark-red);
  padding: 1.5em;
  @media (min-width: 768px) {
    padding: 2em 4em;
  }
  ${({ navcontainer }) =>
    navcontainer &&
    css`
      width: 100%;
      background: white;
      padding: 1em 1.5em;
      display: flex;
      flex-direction: column;
      @media (min-width: 768px) {
        padding: 1em 4em;
        flex-direction: row;
        justify-content: flex-end;
      }
    `}
  ${({ sticky }) =>
    sticky &&
    css`
      position: fixed;
      top: 0;
      right: 0;
    `}
`
const SiteTitle = styled.h1`
  font-weight: 300;
  font-size: max(4vw - 1.75rem, 1.9rem);
`
const Hamburger = styled.button`
  align-self: flex-end;
  background: transparent;
  border: 0;
  padding: 0;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  @media (min-width: 768px) {
    display: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: var(--black);
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`
const Navbar = styled.nav`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  width: 100%;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: all 0.3s linear;
  @media (min-width: 768px) {
    display: flex;
    transform: translateX(0);
    flex-direction: row;
    width: auto;
  }
`
const StickedDiv = styled.div`
  content: "";
  width: 100%;
  height: ${({ sticky }) => (sticky ? "9vh" : "0")};
`

const Header = ({ siteTitle }) => {
  const [nav, setNav] = useState(false)
  const [scroll, setScroll] = useState(0)

  const isSticky = scroll <= -120

  useScrollPosition(function setScrollPosition({ curPosition }) {
    setScroll(curPosition.y)
  })

  return (
    <header>
      <HeaderDiv>
        <SiteTitle>
          <StyledLink to="/" color="white">
            {siteTitle}
          </StyledLink>
        </SiteTitle>
      </HeaderDiv>
      <StickedDiv sticky={isSticky} />
      <HeaderDiv navcontainer sticky={isSticky}>
        <Hamburger open={nav} onClick={() => setNav(!nav)}>
          <div />
          <div />
          <div />
        </Hamburger>
        <Navbar open={nav}>
          <StyledLink to="/" $navbar>
            Strona główna
          </StyledLink>
          <StyledLink to="/offers" $navbar>
            Wszystkie oferty
          </StyledLink>
          <StyledLink to="/contact" $navbar>
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
  siteTitle: "",
}

export default Header
