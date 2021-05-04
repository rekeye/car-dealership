import React from "react"
import styled from "styled-components"
import { SectionTitle, StyledLink } from "./styledComponents"
import ContactSVG from "../assets/contact.svg"

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.8rem;
  background: var(--white);
  div {
    padding: 1em;
  }
`

const CTAContact = () => (
  <Container>
    <div>
      <SectionTitle $cta>Skontaktuj się z nami już teraz!</SectionTitle>
    </div>
    <div>
      <StyledLink to="/kontakt" $cta $button>
        Kontakt
        <ContactSVG />
      </StyledLink>
    </div>
  </Container>
)

export default CTAContact
