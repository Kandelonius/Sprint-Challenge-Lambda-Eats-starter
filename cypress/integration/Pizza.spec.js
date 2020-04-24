import { v4 as uuid } from 'uuid'

const username = uuid().slice(0, 5)

describe('User Tests', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000/order')
        cy.url().should('include', 'localhost')
    })
    it('can enter a valid name into the username field', () => {
        cy.get('input[name="username"]')
            .type(username)
            .should('have.value', `${username}`)
    })
    it('can check a button that starts out unchecked', () => {
        cy.get('input[name="sausage"]')
            .should('not.be.checked')

        cy.get('input[name="sausage"]')
            .click()
            .should('be.checked')
    })
    it('can check a button that starts out unchecked', () => {
        cy.get('input[name="jalopeno"]')
            .should('not.be.checked')

        cy.get('input[name="jalopeno"]')
            .click()
            .should('be.checked')
    })
    it('can now submit the completed form', () => {
        cy.contains('Add to Order')
            .click()
    })

})