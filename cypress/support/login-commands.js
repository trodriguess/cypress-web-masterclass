//Acessar tela de login

Cypress.Commands.add('acessarLogin', () => {
    cy.visit('/login')
});

Cypress.Commands.add('preencherEmailLogin', () => {
    cy.get('#user')
        .type(Credential.user)
});

Cypress.Commands.add('preencherSenha', () => {
    cy.get('#password')
        .type(Credential.password)
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