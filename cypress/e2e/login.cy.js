/// <reference types="cypress"/>

const loginData = require('../fixtures/login.json')

describe('Login', () => {

    beforeEach('', () => {
        cy.acessarLogin()
    })

    it('Login com sucesso', () => {
        cy.preencherEmailLogin(loginData.email)
        cy.preencherSenha(loginData.senha)
        cy.clicarLogin()
        cy.url().should('include', '/my-account')
        cy.get('#swal2-title').should('be.visible').should('contain', 'Login realizado')
    });

    it('Campos obrigatórios vazios', () => {
        cy.clicarLogin()
        cy.validarErro('E-mail inválido.')
    });

    it('E-mail vazio', () => {
        cy.preencherSenha(loginData.senha)
        cy.clicarLogin()
        cy.validarErro('E-mail inválido.')
    });

    it('Senha vazia', () => {
        cy.preencherEmailLogin(loginData.email)
        cy.clicarLogin()
        cy.validarErro('Senha inválida.')
    });

    it('E-mail inválido', () => {
        cy.preencherEmailLogin(loginData.email_invalido)
        cy.preencherSenha(loginData.senha)
        cy.clicarLogin()
        cy.validarErro('E-mail inválido.')
    });

    it('Senha inválida', () => {
        cy.preencherEmailLogin(loginData.email)
        cy.preencherSenha(loginData.senha_invalida)
        cy.clicarLogin()
        cy.validarErro('Senha inválida.')
    });
})