import React from "react"
import styled from "styled-components"
import { SectionTitle, StyledLink } from "./styledComponents"
import ContactMail from "../assets/contact-mail.svg"

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1.8rem;
  margin-top: 1.5em;
`

const CTAContact = () => (
  <Container>
    <SectionTitle>Skontaktuj się z nami już teraz!</SectionTitle>
    <div>
      <StyledLink to="/kontakt" $solidcta $button>
        Kontakt
        <ContactMail />
      </StyledLink>
    </div>
  </Container>
)

export default CTAContact
