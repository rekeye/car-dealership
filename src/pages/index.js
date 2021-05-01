import * as React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const TestDiv = styled.div`
  height: 300vh;
  width: 100%;
`

const ALL_PUBLISHED_CARS = graphql`
  {
    gcms {
        products(orderBy: id_ASC) {
            id
            title
            slug
            price
            mileage
            bodyType
            fuelType
            transmissionType
          }
    }
  }
`


const IndexPage = () => {
  const { gcms: { products } } = useStaticQuery(ALL_PUBLISHED_CARS)

  console.log(products)

  return (
    <Layout>
      <Seo title="Strona główna" />
      <TestDiv />
    </Layout>
  )
}

export default IndexPage
