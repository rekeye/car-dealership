import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { SectionTitle, StyledGraphImg } from "../components/styledComponents"
import { getPriceFormat } from "../hooks/getPriceFormat"

const Price = styled.p`
  font-size: 2rem;
  color: var(--base-dark-red);
`

const PostPage = ({
  data: {
    product: {
      title,
      description,
      price,
      vin,
      mileage,
      model,
      make,
      bodyType,
      bodyColor,
      transmissionType,
      fuelType,
      damaged,
      notCrashed,
      images,
    },
  },
}) => (
  <Layout>
    <Seo title={title} />
    <StyledGraphImg image={images[0]} maxWidth={960} withWebp alt={title} />
    <SectionTitle padding>{title}</SectionTitle>
    <Price>{getPriceFormat(price)}</Price>
  </Layout>
)

export const pageQuery = graphql`
  query postPageQuery($id: String!) {
    product: graphCmsProduct(id: { eq: $id }) {
      title
      description
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
`

export default PostPage
