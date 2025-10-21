/// <reference types="cypress" />

const cadastroData = require('../fixtures/cadastro.json')

describe('Cadastro de usuário', () => {

    beforeEach('Entrando no site', () => {
        cy.visit('/register')
    })

    it('Campos obrigatórios em branco', () => {
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('be.visible').should('contain', 'O campo nome deve ser prenchido')
    });

    it('E-mail e Senha em branco', () => {
        cy.get('#user').type(cadastroData.nome)
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('be.visible').should('contain', 'O campo e-mail deve ser prenchido corretamente')
    });

    it('Senha em branco', () => {
        cy.get('#user').type(cadastroData.nome)
        cy.get('#email').type(cadastroData.email)
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('be.visible').should('contain', 'O campo senha deve ter pelo menos 6 dígitos')
    });

    it('Senha inválida', () => {
        cy.get('#user').type(cadastroData.nome)
        cy.get('#email').type(cadastroData.email)
        cy.get('#password').type(cadastroData.senha_invalida)
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('be.visible').should('contain', 'O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Nome em branco', () => {
        cy.get('#email').type(cadastroData.email)
        cy.get('#password').type(cadastroData.senha)
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('be.visible').should('contain', 'O campo nome deve ser prenchido')
    });

    it('Email em branco', () => {
        cy.get('#user').type(cadastroData.nome)
        cy.get('#password').type(cadastroData.senha)
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('be.visible').should('contain', 'O campo e-mail deve ser prenchido corretamente')
    });

    it('Email inválido', () => {
        cy.get('#user').type(cadastroData.nome)
        cy.get('#email').type(cadastroData.email_invalido)
        cy.get('#password').type(cadastroData.senha)
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('be.visible').should('contain', 'O campo e-mail deve ser prenchido corretamente')
    });

    it('Cadastro realizado com sucesso', () => {
        cy.get('#user').type(cadastroData.nome)
        cy.get('#email').type(cadastroData.email)
        cy.get('#password').type(cadastroData.senha)
        cy.get('#btnRegister').click()
        cy.url().should('contain', '/my-account')
        cy.get('#swal2-title').should('be.visible').should('contain', 'Cadastro realizado!')
    });
})