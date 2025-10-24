
Cypress.Commands.add('acessarCadastroUsuario', () => {
    cy.visit('/register')
});

Cypress.Commands.add('clicarRegistrar', () => {
    cy.get('#btnRegister')
        .click()
});