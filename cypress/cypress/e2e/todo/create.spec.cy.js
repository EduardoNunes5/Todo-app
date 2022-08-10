///<reference types="cypress" />

describe('Todo creation', () => {
    beforeEach(() => {
        cy.resetDb();
        cy.visit('');
    })

    it('should create one todo successfully', () => {
        cy.intercept('POST', '/api/todos').as('postTodo');
        cy.get('[data-cy="create-todo"]').click();
        cy.get('[data-cy-testId="title-input"]').type('teste');
        cy.get('[data-cy-testId="description-input"]').type('olá');
        cy.get('[data-cy-testId="confirm-button"]').click();
        cy.wait('@postTodo').then(({response}) => {
            cy.writeFile('data/savedTodos.json', [{id: response.body.id}]);
        });
        cy.get(`[data-cy="todo-title-0"]`)
        .should('be.visible')
        .and('have.text', 'teste');
    });
})