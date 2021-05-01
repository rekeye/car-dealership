import { Link } from "gatsby"
import styled, { css } from "styled-components"

export const StyledLink = styled(Link)`
  color: ${props => (props.color ? props.color : "var(--black)")};
  text-decoration: none;
  ${props =>
    props.navbar &&
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
`
