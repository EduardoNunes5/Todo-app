describe('todo list', () => {

  beforeEach(() => {
    cy.intercept('GET','/api/todos**').as('loadTodos');
    cy.resetDb('data/savedTodos.json');
  })

  afterEach(() => {
    cy.resetDb('data/savedTodos.json');
  })
  it('shoulod list 5 todos', () => {
    cy.postTodos(5);


    cy.visit('/');
    cy.wait('@loadTodos');
  });

  it('should not allow to go to the previous page when on first page', () => {
    cy.postTodos(5);

    cy.visit('/');
    cy.wait('@loadTodos');

    cy.get('[data-cy="previous-btn"]').should('have.class', 'disabled');

  })

})