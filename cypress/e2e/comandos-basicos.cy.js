/// <reference types="cypress"/>

describe('Comandos Básicos', () => {

    beforeEach('Acessar uma URL', () => {
        cy.visit('/login')
    });

    it('Encontrando elementos', () => {
        // get() - selecionar/encontrar um elemento
        cy.get('#user')

        //find() - ele vai selecionar um elemento que esteja dentro de outro elemento
            // diminuimos o escopo com um get() antes
        cy.get('.mc-form').find('.form-control')
        cy.get('.mc-form > .form-control')


        // contais() - ele vai buscar um elemento pelo texto
            // diminuimos o escopo com um get() antes
        cy.contains('Send Mail')
        cy.get('.mc-form').contains('Send')
    });

    it('Preencher um campo', () => {
        cy.get('#user').type('teste@teste.com')
        cy.get('#btnLogin').click()
        cy.get('#btnLogin').dblclick()
        cy.get('#btnLogin').rightclick()
        cy.get('.mc-form').find('.form-control').type('teste@teste.com{enter}')
    });
    
    it('Select', () => {
        cy.visit('/checkout-one')
        cy.get('#country').select('usa')
        cy.get('#country').select(2)
    });

    it('Checkbox/Radio', () => {
        cy.visit('/checkout-one')
        cy.get('#materialUnchecked').check()
        cy.get('#materialUnchecked').uncheck()
        cy.get('#css').check()
    });

    it.only ('Validar um texto', () => {
        cy.visit('/login')
        cy.get('#createAccount')
            .should('be.visible')
            .should('exist')
            .should('have.text', 'Ainda não tem conta?')
            .should('contain', 'Ainda não tem conta?')
    })

})