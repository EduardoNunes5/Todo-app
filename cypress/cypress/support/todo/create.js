///<reference types="cypress"/>

Cypress.Commands.add('postTodo', (title, description) => {
    return cy.request('POST','/api/todos',{
        title,
        description      
    })
})

Cypress.Commands.add('postTodos', (amount) => {
    const todos = []
    for(let i = 0; i < amount; i++) {
        cy.postTodo('todo teste ' + (1 + i), 'descrição teste ' + (1 + i))
          .then(response => {
            todos.push({id: response.body.id});
          })
      }

    cy.writeFile('data/savedTodos.json', todos)
})



