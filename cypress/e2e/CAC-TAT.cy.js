describe('template spec', () => {
  it('passes', () => {
    cy.visit('./src/index.html')
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })
})