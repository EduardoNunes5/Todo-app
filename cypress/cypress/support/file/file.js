Cypress.Commands.add('resetDb', (fileName) => {
    cy.task('readFileMaybe', fileName).then(todos => {
        const json = JSON.parse(todos);
        const elements = [...json];
        elements.forEach(element => {
            cy.request('DELETE', `api/todos/${element.id}`);
        });

        if(elements.length > 0){
            cy.writeFile(fileName, '[]');
        }
    })
})