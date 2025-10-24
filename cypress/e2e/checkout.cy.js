/// <reference types="cypress"/>

const checkoutData = require('../fixtures/checkout.json')

describe('Checkout', () => {

    beforeEach('Entrando no site', () => {
        cy.visit('/checkout-one')
    });

    it('Campos obrigatórios em branco', () => {
        cy.clicarSalvar()
        cy.validaVariasMensagensErro(0,'O campo First Name deve ser prenchido')
        cy.validaVariasMensagensErro(1, 'O campo Last Name deve ser prenchido')
        cy.validaVariasMensagensErro(2, 'O campo Company deve ser prenchido')
        cy.validaVariasMensagensErro(3, 'O campo E-mail deve ser prenchido ou é inválido')
        cy.validaVariasMensagensErro(4, 'O campo Country deve ser prenchido')
        cy.validaVariasMensagensErro(5, 'O campo City deve ser prenchido')
        cy.validaVariasMensagensErro(6, 'O campo Zip Code deve ser prenchido')
        cy.validaVariasMensagensErro(7, 'O campo Address deve ser prenchido')
        cy.validaVariasMensagensErro(8, 'O campo Additional Notes deve ser prenchido')
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
        cy.validaMensagemErro('O campo First Name deve ser prenchido')
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
        cy.validaMensagemErro('O campo Last Name deve ser prenchido')
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
        cy.validaMensagemErro('O campo Company deve ser prenchido')
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
        cy.validaMensagemErro('O campo E-mail deve ser prenchido ou é inválido')
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
        cy.validaMensagemErro('O campo Country deve ser prenchido')
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
        cy.validaMensagemErro('O campo City deve ser prenchido')
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
        cy.validaMensagemErro('O campo Zip Code deve ser prenchido')
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
        cy.validaMensagemErro('O campo Address deve ser prenchido')
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
        cy.validaMensagemErro('O campo Additional Notes deve ser prenchido')
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
        cy.validaMensagem('.check-out-form h3', 'Billings Information registred with success!')
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
        cy.validaMensagem('.check-out-form h3', 'Billings Information registred with success!')
        cy.checkbox()
        cy.validaMensagem('#headingTwo  label', 'Mobile Banking')
        cy.clicarFinalizarCompra()
        cy.validaMensagem('.offer_modal_left h2', 'Order success!')
    });

})

