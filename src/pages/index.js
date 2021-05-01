import * as React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Post from "../components/post"

const PostsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`

const IndexPage = () => {
  const { gcms: { productsConnection: { edges } } } = useStaticQuery(pageQuery)

  console.log(edges)

  return (
    <Layout>
      <Seo title="Strona główna" />
      <PostsContainer>
        { edges.map(({ node }) => (
          <Post key={ node.slug } data={ node }/>
        )) }
      </PostsContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    gcms {
      productsConnection(first: 6) {
        edges {
          node {
            title
            slug
            price
            mileage
            bodyType
            transmissionType
            fuelType
            images {
              id
              handle
              fileName
              mimeType
              url
            }
          }
        }
      }
    }
  }
`

export default IndexPage
