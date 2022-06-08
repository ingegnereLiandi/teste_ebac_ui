/// <reference types="cypress"/>

context ('Funcionalidade login', ()=> {

    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/produtos/')
    });
    
    afterEach(() => {
       // cy.screenshot ()
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]').eq("2").click()
        cy.get('.button-variable-item-34').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.single_add_to_cart_button').click()

    });



    it('Deve adicionar produto no carrinho', () => {
        var quantidade = 90

        cy.get('[class="product-block grid"]').eq("2").click()
        cy.get('.button-variable-item-34').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + " × “Aether Gym Pant” ")


    });

  


    });
