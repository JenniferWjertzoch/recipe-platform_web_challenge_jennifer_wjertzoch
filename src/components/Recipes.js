import React from 'react'
import {
    Link
} from "react-router-dom";

function Card({ recipe }) {
    const id = recipe.sys.id

    return <Link to={`/recipe/${id}`} style={{ textDecoration: 'none' }}>
        <div className="container-detail">
            <img src={recipe && recipe.fields && recipe.fields.photo.fields.file.url}></img>
            <div className="container-detail_content">
                <h1>{recipe && recipe.fields && recipe.fields.title}</h1>
            </div>
        </div>
    </Link>
}

export default function Recipe({ allRecipes }) {
    return (
        <div className="cards">
            { allRecipes.map(recipe => <Card recipe={recipe}></Card>)}
        </div>
    )
}
