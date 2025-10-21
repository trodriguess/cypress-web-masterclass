/// <reference types="cypress"/>

const checkoutData = require('../fixtures/checkout.json')

describe('Checkout', () => {

    beforeEach('Entrando no site', () => {
        cy.visit('/checkout-one')
    });

    it('Campos obrigatórios em branco', () => {
        cy.get('#checkout_one').contains('button', 'Save').click()
        cy.get('.errorLabel').eq(0).should('have.text', 'O campo First Name deve ser prenchido')
        cy.get('.errorLabel').eq(1).should('have.text', 'O campo Last Name deve ser prenchido')
        cy.get('.errorLabel').eq(2).should('have.text', 'O campo Company deve ser prenchido')
        cy.get('.errorLabel').eq(3).should('have.text', 'O campo E-mail deve ser prenchido ou é inválido')
        cy.get('.errorLabel').eq(4).should('have.text', 'O campo Country deve ser prenchido')
        cy.get('.errorLabel').eq(5).should('have.text', 'O campo City deve ser prenchido')
        cy.get('.errorLabel').eq(6).should('have.text', 'O campo Zip Code deve ser prenchido')
        cy.get('.errorLabel').eq(7).should('have.text', 'O campo Address deve ser prenchido')
        cy.get('.errorLabel').eq(8).should('have.text', 'O campo Additional Notes deve ser prenchido')
    });

    it.only('Nome em branco', () => {
        cy.get('#lname').type(checkoutData.sobrenome)
        cy.get('#cname').type(checkoutData.empresa)
        cy.get('#email').type(checkoutData.email)
        cy.get('#country').select(checkoutData.pais)
        cy.get('#city').select(checkoutData.cidade)
        cy.get('#zip').type(checkoutData.cep)
        cy.get('#faddress').type(checkoutData.endereco)
        cy.get('#messages').type(checkoutData.notas)
        cy.get('#checkout_one').contains('button', 'Save').click()
        cy.get('#errorMessageFirstName').should('contain', 'O campo First Name deve ser prenchido')
    });

    it('Sobrenome em branco', () => { });

    it('Empresa em branco', () => { });

    it('E - mail em branco', () => { });

    it('País em branco', () => { });

    it('Cidade em branco', () => { });

    it('CEP em branco', () => { });

    it('Endereço em branco', () => { });

    it('Nota em branco', () => { });

    it('Campos preenchidos corretamente', () => { });

    it('Finalizar compra com sucesso', () => { });

})
