import React from 'react'
import {
    Link
} from "react-router-dom";

import styled from "styled-components";

import StyledRecipeCard from "./styled/StyledRecipeCard"

function Card({ recipe }) {
    const id = recipe.sys.id

    return <Link to={`/recipe/${id}`} style={{ textDecoration: 'none' }}>
        <StyledRecipeCard>
            <img src={recipe && recipe.fields && recipe.fields.photo.fields.file.url}></img>
            <div className="container-detail_content">
                <h1>{recipe && recipe.fields && recipe.fields.title}</h1>
            </div>
        </StyledRecipeCard>
    </Link>
}

export default function Recipe({ allRecipes }) {
    return (
        <Cards>
            { allRecipes.map(recipe => <Card recipe={recipe}></Card>)}
        </Cards>
    )
}

const Cards = styled.div`
    margin: 0.5rem 0;
    @media (min-width: 992px) {
        display: flex;
    }
`
