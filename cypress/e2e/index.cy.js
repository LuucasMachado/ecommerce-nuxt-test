/// <reference types="cypress" />


context('Listam de produtos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  describe('Quando a pagina e carregada', () => {
    it('Listagem carregada na ordem default', () => {
      cy.get('.contents')
      .find('.card-title')
      .first()
      .should('have.text', 'Super Mario Odyssey')
    });

    it('Usando a ordenacao alfabetica', () => {
      cy.get('.select-order').select('alphabetical');
      cy.get('.contents')
      .find('.card-title')
      .first()
      .should('have.text', 'Call Of Duty Infinite Warfare')
    });

  })
})


context('Carrinho de compra', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  describe('Quando a pagina for carregada', () => {
    it('Carrinho vazio ao carregar a pagina', () => {
      cy.get('.shopping-cart')
      .should('have.class', 'empty-products')
    });
  });

  describe('Adicionando item no carrinho', () => {
    it('A div deve apresentar uma class infomando que tem produtos', () => {
      cy.get('.contents')
      .find('.card-title')
      .first()
      .click()

      cy.get('.shopping-cart')
      .should('have.class', 'with-products')
    });

    it('Deve existir um contado mostrando a quantidade de produtos (1)', () => {
      cy.get('.contents')
      .find('.card-title')
      .first()
      .click()

      cy.get('.shopping-cart-body')
      .find('.d-flex')
      .find('p')
      .should('have.text', '(1 itens)')
    });


    it('Deve existir um contado mostrando a quantidade de produtos caso mais um produto seja adicionado (2)', () => {
      cy.get('.contents')
      .find('.card-title')
      .first()
      .click()

      cy.get('.contents')
      .find('.card-title')
      .first()
      .click()
      
  
      cy.get('.shopping-cart-body')
      .find('.d-flex')
      .find('p')
      .should('have.text', '(2 itens)')
    });

    it('Removendo item no carrinho', () => {
      cy.get('.contents')
      .find('.card-title')
      .first()
      .click()


      cy.get('.shopping-cart')
      .find('.btn-delete')
      .first()
      .click({force: true})

      
      cy.get('.shopping-cart')
      .should('have.class', 'empty-products')
      
    })
  })
})