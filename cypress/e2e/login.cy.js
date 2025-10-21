/// <reference types="cypress"/>

const loginData = require('../fixtures/login.json')

describe('Login', () => {

    beforeEach('', () => {
        cy.visit('/login')
    })

    it('Login com sucesso', () => {
        cy.get('#user').type(loginData.email)
        cy.get('#password').type(loginData.senha)
        cy.get('#btnLogin').click()
        cy.url().should('include', '/my-account')
        cy.get('#swal2-title').should('be.visible').should('contain', 'Login realizado')
    });

    it('Campos obrigatórios vazios', () => {
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('be.visible').should('contain', 'E-mail inválido.')
    });

    it('E-mail vazio', () => {
        cy.get('#password').type(loginData.senha)
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('be.visible').should('contain', 'E-mail inválido.')
    });

    it('Senha vazia', () => {
        cy.get('#user').type(loginData.email)
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('be.visible').should('contain', 'Senha inválida.')
    });
})