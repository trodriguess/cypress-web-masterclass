/// <reference types="cypress"/>

const checkoutData = require('../fixtures/checkout.json')

describe('Checkout', () => {

    beforeEach('Entrando no site', () => {
        cy.visit('/checkout-one')
    });

    it('Campos obrigatórios em branco', () => {
        cy.get('#checkout_one').contains('button', 'Save').click()
        cy.get('.errorLabel').eq(0).should('be.visible').should('have.text', 'O campo First Name deve ser prenchido')
        cy.get('.errorLabel').eq(1).should('be.visible').should('have.text', 'O campo Last Name deve ser prenchido')
        cy.get('.errorLabel').eq(2).should('be.visible').should('have.text', 'O campo Company deve ser prenchido')
        cy.get('.errorLabel').eq(3).should('be.visible').should('have.text', 'O campo E-mail deve ser prenchido ou é inválido')
        cy.get('.errorLabel').eq(4).should('be.visible').should('have.text', 'O campo Country deve ser prenchido')
        cy.get('.errorLabel').eq(5).should('be.visible').should('have.text', 'O campo City deve ser prenchido')
        cy.get('.errorLabel').eq(6).should('be.visible').should('have.text', 'O campo Zip Code deve ser prenchido')
        cy.get('.errorLabel').eq(7).should('be.visible').should('have.text', 'O campo Address deve ser prenchido')
        cy.get('.errorLabel').eq(8).should('be.visible').should('have.text', 'O campo Additional Notes deve ser prenchido')
    });

    it('Nome em branco', () => {
        cy.get('#lname').type(checkoutData.sobrenome)
        cy.get('#cname').type(checkoutData.empresa)
        cy.get('#email').type(checkoutData.email)
        cy.get('#country').select(checkoutData.pais)
        cy.get('#city').select(checkoutData.cidade)
        cy.get('#zip').type(checkoutData.cep)
        cy.get('#faddress').type(checkoutData.endereco)
        cy.get('#messages').type(checkoutData.notas)
        cy.get('#checkout_one').contains('button', 'Save').click()
        cy.get('#errorMessageFirstName').should('be.visible').should('contain', 'O campo First Name deve ser prenchido')
    });

    it('Sobrenome em branco', () => {
        cy.get('#fname').type(checkoutData.nome)
        cy.get('#cname').type(checkoutData.empresa)
        cy.get('#email').type(checkoutData.email)
        cy.get('#country').select(checkoutData.pais)
        cy.get('#city').select(checkoutData.cidade)
        cy.get('#zip').type(checkoutData.cep)
        cy.get('#faddress').type(checkoutData.endereco)
        cy.get('#messages').type(checkoutData.notas)
        cy.get('#checkout_one').contains('button', 'Save').click()
        cy.get('#errorMessageFirstName').should('be.visible').should('contain', 'O campo Last Name deve ser prenchido')
    });

    it('Empresa em branco', () => {
        cy.get('#fname').type(checkoutData.nome)
        cy.get('#lname').type(checkoutData.sobrenome)
        cy.get('#email').type(checkoutData.email)
        cy.get('#country').select(checkoutData.pais)
        cy.get('#city').select(checkoutData.cidade)
        cy.get('#zip').type(checkoutData.cep)
        cy.get('#faddress').type(checkoutData.endereco)
        cy.get('#messages').type(checkoutData.notas)
        cy.get('#checkout_one').contains('button', 'Save').click()
        cy.get('#errorMessageFirstName').should('be.visible').should('contain', 'O campo Company deve ser prenchido')
    });

    it('E-mail em branco', () => {
        cy.get('#fname').type(checkoutData.nome)
        cy.get('#lname').type(checkoutData.sobrenome)
        cy.get('#cname').type(checkoutData.empresa)
        cy.get('#country').select(checkoutData.pais)
        cy.get('#city').select(checkoutData.cidade)
        cy.get('#zip').type(checkoutData.cep)
        cy.get('#faddress').type(checkoutData.endereco)
        cy.get('#messages').type(checkoutData.notas)
        cy.get('#checkout_one').contains('button', 'Save').click()
        cy.get('#errorMessageFirstName').should('be.visible').should('contain', 'O campo E-mail deve ser prenchido ou é inválido')
    });

    it('País em branco', () => {
        cy.get('#fname').type(checkoutData.nome)
        cy.get('#lname').type(checkoutData.sobrenome)
        cy.get('#cname').type(checkoutData.empresa)
        cy.get('#email').type(checkoutData.email)
        cy.get('#city').select(checkoutData.cidade)
        cy.get('#zip').type(checkoutData.cep)
        cy.get('#faddress').type(checkoutData.endereco)
        cy.get('#messages').type(checkoutData.notas)
        cy.get('#checkout_one').contains('button', 'Save').click()
        cy.get('#errorMessageFirstName').should('be.visible').should('contain', 'O campo Country deve ser prenchido')
    });

    it('Cidade em branco', () => {
        cy.get('#fname').type(checkoutData.nome)
        cy.get('#lname').type(checkoutData.sobrenome)
        cy.get('#cname').type(checkoutData.empresa)
        cy.get('#email').type(checkoutData.email)
        cy.get('#country').select(checkoutData.pais)
        cy.get('#zip').type(checkoutData.cep)
        cy.get('#faddress').type(checkoutData.endereco)
        cy.get('#messages').type(checkoutData.notas)
        cy.get('#checkout_one').contains('button', 'Save').click()
        cy.get('#errorMessageFirstName').should('be.visible').should('contain', 'O campo City deve ser prenchido')
    });

    it('CEP em branco', () => {
        cy.get('#fname').type(checkoutData.nome)
        cy.get('#lname').type(checkoutData.sobrenome)
        cy.get('#cname').type(checkoutData.empresa)
        cy.get('#email').type(checkoutData.email)
        cy.get('#country').select(checkoutData.pais)
        cy.get('#city').select(checkoutData.cidade)
        cy.get('#faddress').type(checkoutData.endereco)
        cy.get('#messages').type(checkoutData.notas)
        cy.get('#checkout_one').contains('button', 'Save').click()
        cy.get('#errorMessageFirstName').should('be.visible').should('contain', 'O campo Zip Code deve ser prenchido')
    });

    it('Endereço em branco', () => {
        cy.get('#fname').type(checkoutData.nome)
        cy.get('#lname').type(checkoutData.sobrenome)
        cy.get('#cname').type(checkoutData.empresa)
        cy.get('#email').type(checkoutData.email)
        cy.get('#country').select(checkoutData.pais)
        cy.get('#city').select(checkoutData.cidade)
        cy.get('#zip').type(checkoutData.cep)
        cy.get('#messages').type(checkoutData.notas)
        cy.get('#checkout_one').contains('button', 'Save').click()
        cy.get('#errorMessageFirstName').should('be.visible').should('contain', 'O campo Address deve ser prenchido')
    });

    it('Nota em branco', () => {
        cy.get('#fname').type(checkoutData.nome)
        cy.get('#lname').type(checkoutData.sobrenome)
        cy.get('#cname').type(checkoutData.empresa)
        cy.get('#email').type(checkoutData.email)
        cy.get('#country').select(checkoutData.pais)
        cy.get('#city').select(checkoutData.cidade)
        cy.get('#zip').type(checkoutData.cep)
        cy.get('#faddress').type(checkoutData.endereco)
        cy.get('#checkout_one').contains('button', 'Save').click()
        cy.get('#errorMessageFirstName').should('be.visible').should('contain', 'O campo Additional Notes deve ser prenchido')
    });

    it('Cadastro Billings preenchidos corretamente', () => {
        cy.get('#fname').type(checkoutData.nome)
        cy.get('#lname').type(checkoutData.sobrenome)
        cy.get('#cname').type(checkoutData.empresa)
        cy.get('#email').type(checkoutData.email)
        cy.get('#country').select(checkoutData.pais)
        cy.get('#city').select(checkoutData.cidade)
        cy.get('#zip').type(checkoutData.cep)
        cy.get('#faddress').type(checkoutData.endereco)
        cy.get('#messages').type(checkoutData.notas)
        cy.get('#materialUnchecked').check()
        cy.get('#checkout_one').contains('button', 'Save').click()
        cy.get('.check-out-form h3').should('be.visible').should('contain', 'Billings Information registred with success!')
    });

    it('Finalizar compra com sucesso', () => {
        cy.get('#fname').type(checkoutData.nome)
        cy.get('#lname').type(checkoutData.sobrenome)
        cy.get('#cname').type(checkoutData.empresa)
        cy.get('#email').type(checkoutData.email)
        cy.get('#country').select(checkoutData.pais)
        cy.get('#city').select(checkoutData.cidade)
        cy.get('#zip').type(checkoutData.cep)
        cy.get('#faddress').type(checkoutData.endereco)
        cy.get('#messages').type(checkoutData.notas)
        cy.get('#materialUnchecked').check()
        cy.get('#checkout_one').contains('button', 'Save').click()
        cy.get('.check-out-form h3').should('be.visible').should('contain', 'Billings Information registred with success!')
        cy.get('#javascript').check()
        cy.get('#headingTwo  label').should('contain', 'Mobile Banking')
        cy.get('#checkout_one').contains('button', 'Place Order').click()
        cy.get('.offer_modal_left h2').should('be.visible').should('contain', 'Order success!')
    });

})
