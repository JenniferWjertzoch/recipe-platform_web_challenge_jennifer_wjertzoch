import './App.css';
import client from './client'
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Recipes from './components/Recipes'
import RecipeDetail from './components/RecipeDetail'

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
    <Router>
      <div className="app">
        <Switch>
          <Route path="/recipe/:id">
            <RecipeDetail />
          </Route>
          <Route path="/">
              <h1>Marley Spoon Recipes</h1>
              <div className="container">
                <Recipes allRecipes={allRecipes} />
              </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
