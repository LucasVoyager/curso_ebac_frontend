/// <reference types="cypress" />

describe('inclusao de contatos', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('testando renderizacao', () => {
    cy.get('input').should('have.length', 3)
  })

  it('Incluindo contato', () => {
    cy.get('input[type="text"]').type('Lucas Barros')
    cy.get('input[type="email"]').type('testeemail@gmail.com')
    cy.get('input[type="tel"]').type('11 945708475')
    cy.get('.adicionar').click()
  })
})