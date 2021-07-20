import { useState, useEffect } from "react";
import {
    useParams,
    Link
  } from "react-router-dom";
import client from '../client'

import styled from "styled-components";

import StyledRecipeDetailCard from "./styled/StyledRecipeDetailCard"

function RecipeDetail (){
    const [recipe, setRecipe] = useState({});
    const { id } = useParams();

    async function getRecipe(){
       const recipeData = await client.getEntry(id)

        setRecipe(recipeData)
        console.log(recipeData)
    }

    useEffect(() => {
        getRecipe()
      }, []);

    return (
        <Container>
            <Link to="/"><Button>Go Back</Button></Link>
            <StyledRecipeDetailCard>
                <img src={recipe && recipe.fields && recipe.fields.photo.fields.file.url}></img>
                <div className="recipe-detail-card_content">
                    <h1>{recipe && recipe.fields && recipe.fields.title}</h1>
                    <p>{recipe && recipe.fields && recipe.fields.description}</p>
                    <p className="recipe-detail-card_content-chef">{recipe && recipe.fields && recipe.fields.chef && recipe.fields.chef.fields && recipe.fields.chef.fields.name }</p>
                    <p className="recipe-detail-card_content-tags">{recipe && recipe.fields && recipe.fields.tags && recipe.fields.tags[0] && recipe.fields.tags[0].fields.name }</p>
                </div>
            </StyledRecipeDetailCard>
        </Container>
    )
}

export default RecipeDetail;

const Button = styled.button`
    border: none;
    border-radius: 8px;
    color: #686e74;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    margin: 1rem;
    padding: 0.625rem 1.563rem;
    text-align: center;
    text-decoration: none;
    :hover {
        background-color: #b9c2c8;
        transition: 0.3s;
    }
    @media (min-width: 992px) {
        margin: 0;
    }
`;

const Container = styled.div`
    margin: 0.5rem;
    @media (min-width: 992px) {
        display: flex;
        justify-content: center;
        margin: 3.74rem;
    }
`
