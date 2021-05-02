import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

function CTABackgroundImage() {
    const { image } = useStaticQuery(
        graphql`
            query {
                file(relativePath: {eq: "/cta-background.jpg"}) {
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
            fluid={ image } >
            <h2>Call To Action</h2>
        </BackgroundImage>
    );
}

export default CTABackgroundImage;