/// <reference types="cypress"/>

import EnderecoPage from '../support/page-objects/endereco.page.cy'

const dadosEndereco= require ('../fixtures/endereco.json')

describe('Funcionaidade endereços- Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
        cy.fixture('perfil').then (dados =>{
            cy.login(dados.usuario, dados.senha)
        })
       
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
      EnderecoPage.editarEnderecoFaturamento('Eduardo', 'Silva', 'Google','Brasil','Al: Rio Negro', '201','Osasco' ,'São Paulo', '06268-050', '(011) 94942-2153','eduardo.lima@hotmail.com')
      cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
    
    it('Deve fazer cadastro de faturamento com sucesso- Usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email)

        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
});
});