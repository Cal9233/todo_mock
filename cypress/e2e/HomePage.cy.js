/// <reference types="cypress" />
describe('Visit Homepage', () => {
  it('Should successfully loads homepage', () => {
    cy.visit('/');
    cy.contains("h1", "Todo List");
  })

  it("Should load todos", () => {
    cy.visit('/');
    cy.get("div[data-testid=todo-list-results]", { timeout: 1000 }).should("be.visible");
    cy.get("div[data-testid=todo-list-results] div.todo-container").should("exist");
    cy.get("div[data-testid=todo-list-results] div.todo-container").then(($item) => {
      const amount = $item.length;
      cy.get("div[data-testid=todo-list-results] div.todo-container").should('have.length', amount);
    });
  });
})