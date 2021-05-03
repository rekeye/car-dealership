import React from "react"
import styled from "styled-components"
import { SectionTitle, StyledLink } from './styledComponents'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.8rem;
  div {
    padding: 1em;
  }
`

const CTAContact = () => (
  <Container>
    <div>
      <SectionTitle>Skontaktuj się z nami już teraz!</SectionTitle>
    </div>
    <div>
      <StyledLink to="/kontakt" $cta>
        Kontakt
      </StyledLink>
    </div>
  </Container>
)

export default CTAContact
