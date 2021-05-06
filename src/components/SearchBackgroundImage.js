import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { SectionTitle } from "./styledComponents"
import SearchFilter from './search/SearchFilter'

const SearchBackgroundImage = ({ className }) => {
  const {
    image: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "cta-background.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={fluid}
      backgroundColor="white"
    >
      <SectionTitle $color="white" $bigger $cta>
        Znajdź swój wymarzony samochód
      </SectionTitle>
      <SearchFilter/>
    </BackgroundImage>
  )
}

const StyledSearchBackgroundImage = styled(SearchBackgroundImage)`
  min-height: 35em;
  width: calc(100%+3em);
  margin: 0 -1.5em;
  padding: 2em 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  &::before {
    content: "";
    height: 100%;
    width: 100%;
    background-color: #5e5e5e !important;
    background-image: none !important;
    opacity: 0.5 !important;
  }
  &::after {
    opacity: 0.99 !important;
  }
  @media (min-width: 768px) {
    width: calc(100%+8em);
    margin: 0 -4em;
    padding: 2em 4em;
  }
`

export default StyledSearchBackgroundImage
