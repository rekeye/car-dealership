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
    grid-template-columns: 1fr;
    div {
        width: 100%;
    }
    @media(min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`
const StyledSearchBox = styled(SearchBox)`
    margin-bottom: 1.5em;
    form {
        background: gainsboro;
        display: flex;
    }
    input {
        background: transparent;
        border: 0;
        appearance: none;
        outline: none;
        width: 100%;
        padding: 0.6rem 1rem;
        font-size: 1rem;
    }
    button {
        background: transparent;
        border: 0;
    }
`

const SearchFilter = () => (
    <Container>
        <StyledSearchBox
            searchAsYouType={true}
            translations={{
                submitTitle: 'Wyszukaj',
                resetTitle: 'Zresetuj zapytanie',
                placeholder: 'Wyszukaj tutaj...',
              }}/>
        <SearchCategoriesGrid>
            <div>
                <h3>Typ nadwozia</h3>
                <RefinementList attribute="typ_nadwozia"/>
            </div>
            <div>
                <h3>Kolor nadwozia</h3>
                <RefinementList attribute="kolor_nadwozia"/>
            </div>
            <div>
                <h3>Typ paliwa</h3>
                <RefinementList attribute="typ_paliwa"/>
            </div>
            <div>
                <h3>Skrzynia biegów</h3>
                <RefinementList attribute="skrzynia_biegow"/>
            </div>
        </SearchCategoriesGrid>
    </Container>
)

export default SearchFilter