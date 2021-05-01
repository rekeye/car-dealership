import * as React from "react"
import { useStaticQuery } from "gatsby"
import styled from "styled-components"
import { ALL_PUBLISHED_CARS } from "../queries/allPublishedCars"
import Layout from "../components/layout"
import Seo from "../components/seo"

const TestDiv = styled.div`
  height: 300vh;
  width: 100%;
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
