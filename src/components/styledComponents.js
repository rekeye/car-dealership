import { Link } from "gatsby"
import GraphImg from "graphcms-image"
import styled, { css } from "styled-components"

export const StyledLink = styled(Link)`
  color: ${({ color }) => (color ? color : "var(--black)")};
  text-decoration: none;
  ${({ $navbar }) =>
    $navbar &&
    css`
      padding: 0.75em;
      font-size: 1.2rem;
      transition: border-bottom 1s;
      &:after {
        display: block;
        content: "";
        border-bottom: 1.5px solid var(--black);
        transform: scaleX(0);
        transform-origin: 0% 50%;
        transition: transform 250ms ease-in-out;
      }
      &:hover:after {
        transform: scaleX(1);
      }
    `}
  ${({ $cta }) =>
    $cta &&
    css`
      display: flex;
      align-items: center;
      gap: 0.5em;
      border: 3px solid var(--base-dark-red);
      color: var(--base-dark-red);
      padding: 0.75em;
      width: 100%;
    `}
`

export const SectionTitle = styled.h2`
  color: ${({ color }) => (color ? color : "var(--black)")};
  font-size: ${({ cta }) => (cta ? "2.6rem" : "2.2rem")};
  text-align: ${({ cta }) => (cta ? "center" : "inherit")};
  padding: ${({ padding }) => (padding ? "0.75em 0" : "0")};
  font-weight: 300;
`

export const SectionTwoColumns = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 3em 0;
  div {
    background: var(--white);
    width: 100%;
    padding: 2em;
    @media (min-width: 768px) {
      width: 50%;
    }
  }
  p {
    margin-bottom: 1em;
  }
`

export const StyledGraphImg = styled(GraphImg)`
  width: inherit;
`
