import React from "react"
import styled from "styled-components"

const SectionTwoColumns7030 = styled.section`
  display: flex;
  flex-wrap: wrap;
  div {
    padding: 2em;
  }
  &:nth-child(1) {
    width: 70%;
  }
  &:nth-child(2) {
    width: 30%;
  }
`

const CTAContact = () => (
  <SectionTwoColumns7030></SectionTwoColumns7030>
)

export default CTAContact
