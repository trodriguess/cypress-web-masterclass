//Acessar tela de login

Cypress.Commands.add('acessarLogin', () => {
    cy.visit('/login')
});

Cypress.Commands.add('preencherEmail', (email) => {
    cy.get('#user')
        .type(email)
});

Cypress.Commands.add('preencherSenha', (senha) => {
    cy.get('#password')
        .type(senha)
});

Cypress.Commands.add('clicarLogin', () => {
    cy.get('#btnLogin')
        .click()
});

Cypress.Commands.add('validarErro', (mensagem) => {
    cy.get('.invalid_input')
        .should('be.visible')
            .should('contain', mensagem)
});