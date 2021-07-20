## Marley Spoon Recipes

Show a list of Marley Spoon's recipes Contentful API to fetch the data. 

Solution by [Jennifer Wjertzoch](mailto:wjertzochjennifer@gmail.com)

## Proposed Solution

- Breaking the UI into components
    * Recipes
    * RecipesPage

- Creating the root component App.js
    * Create a basic setup for rendering recipes (cards for each recipe that links to a recipe detail page)
    * Fetching Recipes from given contentful API
    * Adding Routes by implementing react-router-dom to navigate between the different URLs

- Create Recipes component
    * This component will map through the recipes from the Contentful API

- Create RecipePage component
    * This component will take care of the recipes detail page

- Add styling by using styled components

- Implement testing (cypress and react testing library)


## Libraries / Tools Used

- React.js
- React Router Dom
- Styled-components
- Cypress
- React Testing Library
- Contentful

## Setup

To install the dependencies run:

`npm install`

And to run the app:

`npm start`


### Running the tests

#### Unit Tests

You can run the unit tests using:

`npm test`

#### Integration Tests

To run Cypress in interactive mode run:

`npm run cy:run`