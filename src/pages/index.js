import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { StyledSectionTitle } from "../components/styledComponents"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Post from "../components/post"

const PostsContainer = styled.section`
  display: grid;
  gap: 1em;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1286px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const IndexPage = () => {
  const {
    products: { nodes },
  } = useStaticQuery(pageQuery)

  return (
    <Layout>
      <Seo title="Strona główna" />

      <StyledSectionTitle>Najnowsze oferty:</StyledSectionTitle>
      <PostsContainer>
        {nodes.map(node => (
          <Post key={node.slug} data={node} />
        ))}
      </PostsContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    products: allGraphCmsProduct(limit: 6) {
      nodes {
        title
        slug
        price
        mileage
        bodyType
        transmissionType
        fuelType
        images {
          handle
          height
          width
        }
      }
    }
  }
`

export default IndexPage
