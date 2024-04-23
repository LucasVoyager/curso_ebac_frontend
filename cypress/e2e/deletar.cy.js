/// <reference types="cypress" />

describe('deletar contatos', () => {
    beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    
    it('testando renderizacao', () => {
    cy.get('input').should('have.length', 3)
    })

    it('deletar contatos', () => {
        cy.get('.delete').last().click()
    })
})