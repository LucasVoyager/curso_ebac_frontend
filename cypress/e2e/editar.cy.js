/// <reference types="cypress" />

describe('editar contatos', () => {
    beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    
    it('testando renderizacao', () => {
        cy.get('input').should('have.length', 3)
    })

    it('editar contatos', () => {
        cy.get('.edit').last().click()
        cy.get('input[type="text"]').clear()
        cy.get('input[type="email"]').clear()
        cy.get('input[type="tel"]').clear()
        cy.get('input[type="text"]').type('Lucas Santos')
        cy.get('input[type="email"]').type('testeedicao@gmail.com')
        cy.get('input[type="tel"]').type('11 9457083423')
        cy.get('.alterar').click()
    })
})