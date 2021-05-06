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
        gap: 4em;
    }
`
const StyledSearchBox = styled(SearchBox)`
    margin-bottom: 1.5em;
    form {
        background: gainsboro;
        display: flex;
        align-items: center;
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
    svg {
        font-size: 0.8rem;
    }
`
const StyledRefinementList = styled(RefinementList)`
    ul {
        padding: 1em 0 0 0;
    }
    li {
        list-style: none;
        padding: 0.2em;
    }
    label {
        display: flex;
        align-items: center;
    }
    input[type='checkbox'] {
        margin-right: 0.4rem;
        width: 1.6em;
        height: 1.6em;
    }
    span{
        font-size: 1.1rem;
        &:nth-child(3) {
            font-size: 0.8rem;
            margin-left: auto;
        }
    }
    @media (min-width: 768px) {
        ul {
            padding-left: 1em;
        }
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
                <StyledRefinementList attribute="typ_nadwozia.name"/>
            </div>
            <div>
                <h3>Kolor nadwozia</h3>
                <StyledRefinementList attribute="kolor_nadwozia.name"/>
            </div>
            <div>
                <h3>Typ paliwa</h3>
                <StyledRefinementList attribute="typ_paliwa.name"/>
            </div>
            <div>
                <h3>Skrzynia biegów</h3>
                <StyledRefinementList attribute="skrzynia_biegow.name"/>
            </div>
        </SearchCategoriesGrid>
    </Container>
)

export default SearchFilter