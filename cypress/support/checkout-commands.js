
Cypress.Commands.add('clicarSalvar', () => {
    cy.get('#checkout_one')
        .contains('button', 'Save')
            .click()
});

Cypress.Commands.add('clicarFinalizarCompra', () => {
    cy.get('#checkout_one')
        .contains('button', 'Place Order')
            .click()
});

Cypress.Commands.add('validaMensagem', (mensagem) => {
    cy.contains(mensagem)
        .should('be.visible')
            .should('exist')
    
});

Cypress.Commands.add('preencheNome', (nome) => {
    cy.get('#fname')
        .type(nome)
});

Cypress.Commands.add('preencheSobrenome', (sobrenome) => {
    cy.get('#lname')
        .type(sobrenome)
});

Cypress.Commands.add('preencheEmpresa', (empresa) => {
    cy.get('#cname')
        .type(empresa)
});

Cypress.Commands.add('preencheEmailCheckout', (email) => {
    cy.get('#email')
        .type(email)
});

Cypress.Commands.add('preenchePais', (pais) => {
    cy.get('#country')
        .select(pais)
});

Cypress.Commands.add('preencheCidade', (cidade) => {
    cy.get('#city')
        .select(cidade)
});

Cypress.Commands.add('preencheCep', (cep) => {
    cy.get('#zip')
        .type(cep)
});

Cypress.Commands.add('preencheEndereco', (endereco) => {
    cy.get('#faddress')
        .type(endereco)
});

Cypress.Commands.add('preencheNotas', (nota) => {
    cy.get('#messages')
        .type(nota)
});

Cypress.Commands.add('checkbox', () => {
    cy.get('#materialUnchecked')
        .check()
});