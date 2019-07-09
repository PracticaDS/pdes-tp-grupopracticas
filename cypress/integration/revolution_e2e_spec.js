
describe('Revolution test', function() {

    it('Visit the revolution game', function() {

        // visit de app
        cy.visit('http://localhost:3000')

        // enter a username
        cy.get('input').type('cypress')

        // submit
        cy.get('form').submit()

        cy.url().should('include', '/home')

        // click on Entrar button
        cy.get('button').first().click()

        // enter a factory name
        cy.get('input').first().type('factory'+(Math.random() + 1).toString(36).substring(7))

        // click on Crear button
        cy.get('button').last().click()

        cy.url().should('include', '/factory')

        // select a machine
        cy.get('.ButtonToolbox').first().click()

        // add a machine to de board
        cy.get('.Cell').first().click()

        // test if the machine was correctly added to de cell
        cy.get('.Cell').first().find("img").should('be.visible')

        // select the cell
        cy.get('.Cell').first().click()

        // delete the machine
        cy.get('.EditionButton').first().click()

        // test if the machine was correctly deleted
        cy.get('.Cell').first().find("img").should('not.be.visible')
        
    })

})