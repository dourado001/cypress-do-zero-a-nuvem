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
    cy.get('#open-text-area').type('nope')
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')
  })
  it('digitando instantaneamente campo "Como podemos ajudar?"', () => {
    cy.get('#open-text-area')
      .type('Texto longo,texto longo,texto longo,texto longo,texto longo,texto longo,texto longo,', { delay: 0 })
  })
  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#firstName').type('Creuzo')
    cy.get('#lastName').type('Ronaldo')
    cy.get('#email').type('creuzo.ronaldo')
    cy.get('#open-text-area').type('nope')
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })
  it('se um valor não-numérico for digitado, seu valor continuará vazio.', () => {
    cy.get('#phone').type('testeSemNumero***')
    cy.get('#phone').should('have.value', '')
  })
  it.only('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#phone-checkbox').click()
    cy.get('#firstName').type('Creuzo')
    cy.get('#lastName').type('Ronaldo')
    cy.get('#email').type('creuzo.ronaldo@email.com')
    cy.get('#open-text-area').type('nope')
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })
})