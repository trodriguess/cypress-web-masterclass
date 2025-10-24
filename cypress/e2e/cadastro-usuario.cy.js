/// <reference types="cypress" />

const cadastroData = require('../fixtures/cadastro.json')

describe('Cadastro de usuário', () => {

    beforeEach('Entrando no site', () => {
        cy.acessarCadastroUsuario()
    })

    it('Formulário vazio', () => {
        cy.clicarRegistrar()
        cy.mensagemErro('O campo nome deve ser prenchido')
    });

    it('E-mail e Senha vazios', () => {
        cy.preencherNomeCadastro(cadastroData.nome)
        cy.clicarRegistrar()
        cy.mensagemErro('O campo e-mail deve ser prenchido corretamente')
    });

    it('Senha vazia', () => {
        cy.preencherNomeCadastro(cadastroData.nome)
        cy.preencherEmailCadastro(cadastroData.email)
        cy.clicarRegistrar()
        cy.mensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    });

    it('Senha inválida', () => {
        cy.preencherNomeCadastro(cadastroData.nome)
        cy.preencherEmailCadastro(cadastroData.email)
        cy.preencherSenha(cadastroData.senha_invalida)
        cy.clicarRegistrar()
        cy.mensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Nome vazio', () => {
        cy.preencherEmailCadastro(cadastroData.email)
        cy.preencherSenha(cadastroData.senha)
        cy.clicarRegistrar()
        cy.mensagemErro('O campo nome deve ser prenchido')
    });

    it('Email vazio', () => {
        cy.preencherNomeCadastro(cadastroData.nome)
        cy.preencherSenha(cadastroData.senha)
        cy.clicarRegistrar()
        cy.mensagemErro('O campo e-mail deve ser prenchido corretamente')
    });

    it('Email inválido', () => {
        cy.preencherNomeCadastro(cadastroData.nome)
        cy.preencherEmailCadastro(cadastroData.email_invalido)
        cy.preencherSenha(cadastroData.senha)
        cy.clicarRegistrar()
        cy.mensagemErro('O campo e-mail deve ser prenchido corretamente')
    });

    it('Cadastro realizado com sucesso', () => {
        cy.preencherNomeCadastro(cadastroData.nome)
        cy.preencherEmailCadastro(cadastroData.email)
        cy.preencherSenha(cadastroData.senha)
        cy.clicarRegistrar()
        cy.url().should('contain', '/my-account')
        cy.validaMensagemSucesso('#swal2-title', 'Cadastro realizado!')
        cy.validaMensagemSucesso('#swal2-html-container', 'Bem-vindo Teste')
    });
})