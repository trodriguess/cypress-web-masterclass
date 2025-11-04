/// <reference types="cypress"/>

const checkoutData = require('../fixtures/checkout.json')
const messages = require('../fixtures/checkoutMessages.json')

describe('Checkout', () => {

    beforeEach('Entrando no site', () => {
        cy.visit('/checkout-one')
    });

    it('Campos obrigatórios em branco', () => {
        cy.clicarSalvar()
        cy.validaMensagem(messages.nameError)
        cy.validaMensagem(messages.lastNameError)
        cy.validaMensagem(messages.companyError)
        cy.validaMensagem(messages.emailError)
        cy.validaMensagem(messages.contryError)
        cy.validaMensagem(messages.cityError)
        cy.validaMensagem(messages.zipCodeError)
        cy.validaMensagem(messages.addressError)
        cy.validaMensagem(messages.notesError)
    });


    it('Nome em branco', () => {
        cy.preencheSobrenome(checkoutData.sobrenome)
        cy.preencheEmpresa(checkoutData.empresa)
        cy.preencheEmailCheckout(checkoutData.email)
        cy.preenchePais(checkoutData.pais)
        cy.preencheCidade(checkoutData.cidade)
        cy.preencheCep(checkoutData.cep)
        cy.preencheEndereco(checkoutData.endereco)
        cy.preencheNotas(checkoutData.notas)
        cy.clicarSalvar()
        cy.validaMensagem(messages.nameError)
    });

    it('Sobrenome em branco', () => {
        cy.preencheNome(checkoutData.nome)
        cy.preencheEmpresa(checkoutData.empresa)
        cy.preencheEmailCheckout(checkoutData.email)
        cy.preenchePais(checkoutData.pais)
        cy.preencheCidade(checkoutData.cidade)
        cy.preencheCep(checkoutData.cep)
        cy.preencheEndereco(checkoutData.endereco)
        cy.preencheNotas(checkoutData.notas)
        cy.clicarSalvar()
        cy.validaMensagem(messages.lastNameError)
    });

    it('Empresa em branco', () => {
        cy.preencheNome(checkoutData.nome)
        cy.preencheSobrenome(checkoutData.sobrenome)
        cy.preencheEmailCheckout(checkoutData.email)
        cy.preenchePais(checkoutData.pais)
        cy.preencheCidade(checkoutData.cidade)
        cy.preencheCep(checkoutData.cep)
        cy.preencheEndereco(checkoutData.endereco)
        cy.preencheNotas(checkoutData.notas)
        cy.clicarSalvar()
        cy.validaMensagem(messages.companyError)
    });

    it('E-mail em branco', () => {
        cy.preencheNome(checkoutData.nome)
        cy.preencheSobrenome(checkoutData.sobrenome)
        cy.preencheEmpresa(checkoutData.empresa)
        cy.preenchePais(checkoutData.pais)
        cy.preencheCidade(checkoutData.cidade)
        cy.preencheCep(checkoutData.cep)
        cy.preencheEndereco(checkoutData.endereco)
        cy.preencheNotas(checkoutData.notas)
        cy.clicarSalvar()
        cy.validaMensagem(messages.emailError)
    });

    it('País em branco', () => {
        cy.preencheNome(checkoutData.nome)
        cy.preencheSobrenome(checkoutData.sobrenome)
        cy.preencheEmpresa(checkoutData.empresa)
        cy.preencheEmailCheckout(checkoutData.email)
        cy.preencheCidade(checkoutData.cidade)
        cy.preencheCep(checkoutData.cep)
        cy.preencheEndereco(checkoutData.endereco)
        cy.preencheNotas(checkoutData.notas)
        cy.clicarSalvar()
        cy.validaMensagem(messages.contryError)
    });

    it('Cidade em branco', () => {
        cy.preencheNome(checkoutData.nome)
        cy.preencheSobrenome(checkoutData.sobrenome)
        cy.preencheEmpresa(checkoutData.empresa)
        cy.preencheEmailCheckout(checkoutData.email)
        cy.preenchePais(checkoutData.pais)
        cy.preencheCep(checkoutData.cep)
        cy.preencheEndereco(checkoutData.endereco)
        cy.preencheNotas(checkoutData.notas)
        cy.clicarSalvar()
        cy.validaMensagem(messages.cityError)
    });

    it('CEP em branco', () => {
        cy.preencheNome(checkoutData.nome)
        cy.preencheSobrenome(checkoutData.sobrenome)
        cy.preencheEmpresa(checkoutData.empresa)
        cy.preencheEmailCheckout(checkoutData.email)
        cy.preenchePais(checkoutData.pais)
        cy.preencheCidade(checkoutData.cidade)
        cy.preencheEndereco(checkoutData.endereco)
        cy.preencheNotas(checkoutData.notas)
        cy.clicarSalvar()
        cy.validaMensagem(messages.zipCodeError)
    });

    it('Endereço em branco', () => {
        cy.preencheNome(checkoutData.nome)
        cy.preencheSobrenome(checkoutData.sobrenome)
        cy.preencheEmpresa(checkoutData.empresa)
        cy.preencheEmailCheckout(checkoutData.email)
        cy.preenchePais(checkoutData.pais)
        cy.preencheCidade(checkoutData.cidade)
        cy.preencheCep(checkoutData.cep)
        cy.preencheNotas(checkoutData.notas)
        cy.clicarSalvar()
        cy.validaMensagem(messages.addressError)
    });

    it('Nota em branco', () => {
        cy.preencheNome(checkoutData.nome)
        cy.preencheSobrenome(checkoutData.sobrenome)
        cy.preencheEmpresa(checkoutData.empresa)
        cy.preencheEmailCheckout(checkoutData.email)
        cy.preenchePais(checkoutData.pais)
        cy.preencheCidade(checkoutData.cidade)
        cy.preencheCep(checkoutData.cep)
        cy.preencheEndereco(checkoutData.endereco)
        cy.clicarSalvar()
        cy.validaMensagem(messages.notesError)
    });

    it('Cadastro Billings preenchidos corretamente', () => {
        cy.preencheNome(checkoutData.nome)
        cy.preencheSobrenome(checkoutData.sobrenome)
        cy.preencheEmpresa(checkoutData.empresa)
        cy.preencheEmailCheckout(checkoutData.email)
        cy.preenchePais(checkoutData.pais)
        cy.preencheCidade(checkoutData.cidade)
        cy.preencheCep(checkoutData.cep)
        cy.preencheEndereco(checkoutData.endereco)
        cy.preencheNotas(checkoutData.notas)
        cy.checkbox()
        cy.clicarSalvar()
        cy.validaMensagem(messages.successRegister)
    });

    it('Finalizar compra com sucesso', () => {
        cy.preencheNome(checkoutData.nome)
        cy.preencheSobrenome(checkoutData.sobrenome)
        cy.preencheEmpresa(checkoutData.empresa)
        cy.preencheEmailCheckout(checkoutData.email)
        cy.preenchePais(checkoutData.pais)
        cy.preencheCidade(checkoutData.cidade)
        cy.preencheCep(checkoutData.cep)
        cy.preencheEndereco(checkoutData.endereco)
        cy.preencheNotas(checkoutData.notas)
        cy.checkbox()
        cy.clicarSalvar()
        cy.validaMensagem(messages.successRegister)
        cy.clicarFinalizarCompra()
        cy.validaMensagem(messages.successOrder)
    });

})

