/// <reference types="cypress"/>

const perfil = require('../fixtures/perfil.json')


context('Funcionalidade login', () => {

    beforeEach(() => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
    });

    afterEach(() => {
        // cy.screenshot ()
    });

    it('Deve fazer login com sucesso', () => {

        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')


    })

   // it('Deve fazer login com sucesso- Usando arquivo de dados', () => {

      //  cy.get('#username').type(perfil.usuario)
        //cy.get('#password').type(perfil.senha)
       // cy.get('.woocommerce-form > .button').click()
        //cy.get('.page-title').should('contain', 'Minha conta')

  //  });

   // cy.get('#username').type(perfil.usuario)
   // cy.get('#password').type(perfil.senha)
   // cy.get('.woocommerce-form > .button').click()
   // cy.get('.page-title').should('contain', 'Minha conta')

})

it('Deve fazer login com sucesso- Usando fixtures', () => {

    cy.fixture('perfil').then(dados => {
        cy.get('#username').type(dados.usuario)
        cy.get('#password').type(dados.senha,) ;{ log: false }
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')

    });

    it('Deve exibir um mensagem de erro ao inserir usuario invalido', () => {
        cy.get('#username').type('aluno_teste1@ebac.com')
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error>li').should('contain', 'Endereço de e-mail desconhecido')





    })

    it('Deve exibir um mensagem de erro ao inserir senha invalida', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type('teste@teste1')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error>li').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')




    })
})