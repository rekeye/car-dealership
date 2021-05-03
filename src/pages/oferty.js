import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SectionTitle, PostsContainer } from "../components/styledComponents"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Post from "../components/post"
import StyledSearchBackgroundImage from "../components/SearchBackgroundImage"

const OffersPage = () => {
  const {
    products: { nodes },
  } = useStaticQuery(pageQuery)

  return (
    <Layout>
      <Seo title="Oferty" />
      <StyledSearchBackgroundImage/>
      <SectionTitle padding>Wszystkie oferty: </SectionTitle>
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
    products: allGraphCmsProduct {
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

export default OffersPage
