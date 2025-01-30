/// <reference types="Cypress" />

describe('Central de atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })
  it('testa que titulo da pagina esta correto', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })
  it('preenche os campos obrigatórios e envia o formulário', () => {
    cy.get('#firstName').type('Creuzo')
    cy.get('#lastName').type('Ronaldo')
    cy.get('#email').type('creuzo.ronaldo@email.com')
    cy.get('#phone').type('11998766655')
    cy.get('#open-text-area').type('nope')
    cy.get('#white-background > form > button').click()
    cy.get('.success > strong').should('be.visible')
  })
})