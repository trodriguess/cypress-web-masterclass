
Cypress.Commands.add('acessarCadastroUsuario', () => {
    cy.visit('/register')
});

Cypress.Commands.add('clicarRegistrar', () => {
    cy.get('#btnRegister')
        .click()
});

Cypress.Commands.add('mensagemErro', (mensagem) => {
    cy.get('#errorMessageFirstName')
        .should('be.visible')
        .should('contain', mensagem)
});

Cypress.Commands.add('preencherEmailCadastro', (email) => {
    cy.get('#email')
        .type(email)
});

Cypress.Commands.add('preencherNomeCadastro', (nome) => {
    cy.get('#user')
        .type(nome)
});

Cypress.Commands.add('validaMensagemSucesso', (selector, mensagem) => {
    cy.get(selector)
        .should('be.visible')
            .should('contain', mensagem)
});