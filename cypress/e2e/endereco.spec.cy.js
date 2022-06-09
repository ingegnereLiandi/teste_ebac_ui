/// <reference types="cypress"/>
import EnderecoPage from '../support/page-objects/endereco.page.cy'

describe('Funcionaidade endereços- Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
        cy.fixture('perfil').then (dados =>{
            cy.login(dados.usuario, dados.senha)
        })
       
    });

    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
      EnderecoPage.editarEnderecoFaturamento('Eduardo', 'Silva', 'Google','Bósnia','Al: Rio Negro', '201','Osasco' ,'São Paulo', '1111111', '(021) 94942-2153','eduardo.lima@hotmail.com')
      //cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});