/// <reference types="cypress" />
describe("Todoc E2E Test", () => {
    it("Should add a todo item to todo list container", () => {
        cy.visit("/");
        cy.get("div[aria-label=todo-item]").then(($items) => {
            const intialCount = $items.length;
            // Add a new todo
            cy.get('input[data-testid=input]').type("Testing Todo");
            cy.get('button[data-testid=button]').click();
            // Verify the todo was added
            cy.get('div[aria-label=todo-item]').should("have.length", intialCount + 1);
            cy.get('div[aria-label=todo-item]').last().find('.todo-title').should("contain", "Testing Todo");
            // Toggle the status
            cy.get('div[aria-label=todo-item]').last().find("p[data-testid=toggle-status-p]").click();
            // Verify the status was toggled
            cy.get('div[aria-label=todo-item]').last().find("p[data-testid=toggle-status-p]").should('have.class', "todo-status Complete");
            // Remove the todo
            cy.get('div[aria-label=todo-item]').last().find('div[class=todo-header]').find("span[data-testid=remove-btn]").click();
            // Verify the todo was removed
            cy.get('div[aria-label=todo-item]').should("have.length", intialCount);
        });
    });
});