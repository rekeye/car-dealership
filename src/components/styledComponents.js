import { Link } from "gatsby"
import GraphImg from "graphcms-image"
import styled, { css } from "styled-components"

export const SectionTwoColumns = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  margin: ${({ $margin }) => ($margin ? "3em 0" : "0")};
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    @media (min-width: 1000px) {
      width: 50%;
      padding: 2em;
    }
  }
  p,
  ul {
    margin-bottom: 1em;
  }
  ${({ $postpage }) =>
    $postpage &&
    css`
      > div {
        margin: 0;
        background: transparent;
        margin-bottom: 1em;
        @media (min-width: 768px) {
          padding: 1em;
        }
      }
    `}
`

export const ColumnSpaceBetween = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const FlexSpaceBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const StyledLink = styled(Link)`
  color: ${({ $color }) => ($color ? $color : "var(--black)")};
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
  ${({ $button }) =>
    $button &&
    css`
      display: flex;
      align-items: center;
      justify-content: ${({$center}) => ($center ? 'center' : 'space-between')};
      font-size: 1.4rem;
      padding: 0.75em;
      width: 100%;
    `}
  ${({ $cta }) =>
    $cta &&
    css`
      gap: 0.5em;
      border: 3px solid var(--base-dark-red);
      color: var(--base-dark-red);
    `}
  ${({ $solidcta }) =>
    $solidcta &&
    css`
      margin: 0.75em 0;
      background: var(--base-dark-red);
      color: white;
    `}
`

export const SectionTitle = styled.h2`
  color: ${({ $color }) => ($color ? $color : "var(--black)")};
  font-size: ${({ $bigger }) => ($bigger ? "2.2rem" : "1.8rem")};
  text-align: ${({ $cta }) => ($cta ? "center" : "inherit")};
  padding: 0.75em 0;
  @media (min-width: 768px) {
    font-size: ${({ $bigger }) => ($bigger ? "2.6rem" : "2.2rem")};
    padding: ${({ $padding }) => ($padding ? "0.75em 0" : "0")};
  }
`

export const StyledGraphImg = styled(GraphImg)`
  width: inherit;
  margin: auto;
  ${({ $postpage }) =>
    $postpage &&
    css`
      @media (min-width: 768px) {
        width: 75%;
      }
    `}
`

export const PostsContainer = styled.section`
  display: grid;
  gap: 2em;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1286px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
