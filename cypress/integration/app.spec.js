/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  // https://on.cypress.io/interacting-with-elements

  it('click all links', () => {
  
    // recipe detail page
    cy.contains('White Cheddar Grilled Cheese with Cherry Preserves & Basil').click()
    cy.location('pathname').should('eq', '/recipe/4dT8tcb6ukGSIg2YyuGEOm')
    cy.go('back')
  
    // recipe detail page
    cy.contains('Tofu Saag Paneer with Buttery Toasted Pita').click()
    cy.location('pathname').should('eq', '/recipe/5jy9hcMeEgQ4maKGqIOYW6')
    cy.go('back')
  
    // recipe detail page
    cy.contains('Grilled Steak & Vegetables with Cilantro-Jalapeño Dressing').click()
    cy.location('pathname').should('eq', '/recipe/2E8bc3VcJmA8OgmQsageas')
    cy.go('back')

    // recipe detail page
    cy.contains('Crispy Chicken and Rice with Peas & Arugula Salad').click()
    cy.location('pathname').should('eq', '/recipe/437eO3ORCME46i02SeCW46')
    cy.go('back')
  
  });
})