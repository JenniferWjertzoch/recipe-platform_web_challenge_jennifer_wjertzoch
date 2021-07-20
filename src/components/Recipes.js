import React from 'react'

function Card({ recipe }) {
    return (
        <div className="container-detail">
            <img src={recipe && recipe.fields && recipe.fields.photo.fields.file.url}></img>
            <div className="container-detail-content">
                <h1>{recipe && recipe.fields && recipe.fields.title}</h1>
            </div>
        </div>
    )
}

export default function Recipe({ allRecipes }) {
    return (
        <div className="cards">
            { allRecipes.map(recipe => <Card recipe={recipe}></Card>)}
        </div>
    )
}
