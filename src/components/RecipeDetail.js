import { useState, useEffect } from "react";
import {
    useParams,
    Link
  } from "react-router-dom";
import client from '../client'

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
        <div className="container">
            <Link to="/"><button>Go Back</button></Link>
            <div className="recipe-detail-card">
                <img src={recipe && recipe.fields && recipe.fields.photo.fields.file.url}></img>
                <div className="recipe-detail-card_content">
                    <h1>{recipe && recipe.fields && recipe.fields.title}</h1>
                    <p>{recipe && recipe.fields && recipe.fields.description}</p>
                    <p className="recipe-detail-card_content-chef">{recipe && recipe.fields && recipe.fields.chef && recipe.fields.chef.fields && recipe.fields.chef.fields.name }</p>
                    <p className="recipe-detail-card_content-tags">{recipe && recipe.fields && recipe.fields.tags && recipe.fields.tags[0] && recipe.fields.tags[0].fields.name }</p>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetail;
