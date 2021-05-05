import React from 'react'
import styled from 'styled-components'
import { SearchBox, RefinementList, } from 'react-instantsearch-dom'

const Container = styled.div`
    width:100%;
    padding: 2em;
    @media(min-width:768px) {
        width: 75%;
    }
`
const SearchCategoriesGrid = styled.div`
    display: grid;
    gap: 1em;
    grid-template-columns: repeat(2, 1fr);
    div {
        width: 100%;
    }
`

const SearchFilter = () => (
    <Container>
        <SearchBox/>
        <SearchCategoriesGrid>
            <div>
                <h3>Typ nadwozia</h3>
                <RefinementList attribute="typ_nadwozia.name"/>
            </div>
            <div>
                <h3>Kolor nadwozia</h3>
                <RefinementList attribute="kolor_nadwozia.name"/>
            </div>
            <div>
                <h3>Typ paliwa</h3>
                <RefinementList attribute="typ_paliwa.name"/>
            </div>
            <div>
                <h3>Skrzynia biegów</h3>
                <RefinementList attribute="skrzynia_biegow.name"/>
            </div>
        </SearchCategoriesGrid>
    </Container>
)

export default SearchFilter