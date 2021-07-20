import './App.css';
import client from './client'
import { useState, useEffect } from "react";

import Recipes from './components/Recipes'

function App() {

  const [allRecipes, setAllRecipes] = useState([]);

  // get recipe function
  const getAllRecipes = async () => {
 
    const response = await client.getEntries({
      content_type: 'recipe'
    })
    console.log(response.items)

    // add the recipes to our list
    setAllRecipes(response.items)

  };

  // component did mount --> component first shows
  useEffect(() => {
    getAllRecipes()
  }, []);

  return (
    <div className="App">
      <h1>Marley Spoon Recipes</h1>
      <div className="container">
        <Recipes allRecipes={allRecipes} />
      </div>
    </div>
  );
}

export default App;
