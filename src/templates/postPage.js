import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"

const PostPage = ({
  data: {
    gcms: { product },
  },
}) => (
  <Layout>
    <Seo title={product.title} />
    <div>{product.title}</div>
  </Layout>
)

export const pageQuery = graphql`
  query postPageQuery($id: ID!) {
    gcms {
      product(where: { id: $id }) {
        title
        description
        slug
        price
        vin
        mileage
        model
        make
        bodyType
        bodyColor
        transmissionType
        fuelType
        damaged
        notCrashed
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
`

export default PostPage
