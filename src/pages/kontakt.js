import * as React from "react"
import { SectionTitle } from "../components/styledComponents"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout>
    <Seo title="Kontakt" />
    <SectionTitle style={{marginBottom: `1em`}}>Masz auto na sprzedaż? Skontaktuj się z naszym komisem!</SectionTitle>

    <h3>Mail: lorem@ipsum.com</h3>
    <h3>Numer telefonu: +48 123456789</h3>
    <h3>Adres: Fugiat amet irure et incididunt veniam consectetur occaecat eu eu cillum excepteur labore elit quis.</h3>
  </Layout>
)

export default ContactPage
