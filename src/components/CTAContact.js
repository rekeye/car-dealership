import React from "react"
import styled from "styled-components"
import { SectionTitle, StyledLink } from "./styledComponents"
import ContactMail from "../assets/contact-mail.svg"

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 1.8rem;
  background: var(--white);
  @media (min-width: 768px) {
    flex-direction: row;
    div {
      &:nth-child(2) {
        width: 10em;
      }
    }
  }
`

const CTAContact = () => (
  <Container>
    <div>
      <SectionTitle $cta>Skontaktuj się z nami już teraz!</SectionTitle>
    </div>
    <div>
      <StyledLink to="/kontakt" $solidcta $button>
        Kontakt
        <ContactMail />
      </StyledLink>
    </div>
  </Container>
)

export default CTAContact
