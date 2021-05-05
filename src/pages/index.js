import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { SectionTitle, SectionTwoColumns, PostsContainer, StyledLink } from "../components/styledComponents"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Post from "../components/post"
import CTAContact from "../components/CTAContact"


const IndexPage = () => {
  const {
    products: { nodes },
  } = useStaticQuery(pageQuery)

  return (
    <Layout>
      <Seo title="Strona główna" />

      <SectionTitle $padding>Najnowsze oferty samochodów:</SectionTitle>
      <PostsContainer>
        {nodes.map(node => (
          <Post key={node.slug} hit={node} />
        ))}
      </PostsContainer>

      <StyledLink to="oferty" $button $solidcta>Zobacz wszystkie oferty</StyledLink>

      <SectionTwoColumns $margin>
        <div style={{padding: '0 1em'}}>
          <SectionTitle $padding>O naszym komisie</SectionTitle>
          <p>
            Nulla sit do laboris commodo. Ad est ad non sint fugiat ea
            exercitation enim deserunt veniam. Esse veniam tempor eiusmod culpa
            qui consectetur anim veniam fugiat. Cillum ullamco anim dolore
            proident sunt ad dolore. Velit veniam sunt culpa tempor anim ipsum.
            Veniam esse irure eiusmod voluptate.
          </p>
          <p>
            Et adipisicing cillum qui ex. Cupidatat consequat cillum veniam
            aliquip amet nostrud ea. Velit Lorem aliqua adipisicing consectetur
            duis aliqua quis dolor culpa Lorem. Deserunt sit labore occaecat
            cupidatat in sunt adipisicing. Sit quis exercitation incididunt
            dolor cillum dolor enim. Mollit dolor fugiat velit ea do irure do
            pariatur. Laborum eu velit et velit irure exercitation duis
            consequat.
          </p>
          <ul>
            <li>Dolor consectetur cupidatat id sit.</li>
            <li>Dolor consectetur cupidatat id sit.</li>
            <li>Dolor consectetur cupidatat id sit.</li>
            <li>Dolor consectetur cupidatat id sit.</li>
          </ul>
          <p>
            Occaecat dolore nostrud et velit voluptate commodo deserunt mollit
            qui Lorem. Aute ad duis aliqua eiusmod velit velit reprehenderit.
            Amet quis proident eiusmod ut consectetur ea. Minim irure incididunt
            est cupidatat fugiat ea nostrud aliquip ullamco mollit aute
            reprehenderit. Nostrud fugiat sunt cupidatat et ullamco.
          </p>
        </div>
        <StaticImage
          src="../images/hyundai-about.jpg"
          alt="zdjęcie samochodu jadącego na autostradzie, na drugim planie widać wzgórza"
        />
      </SectionTwoColumns>

      <CTAContact />
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
