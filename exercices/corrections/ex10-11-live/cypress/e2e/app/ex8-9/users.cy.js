describe('Testing /users', () => {
    it('Should have list of users', () => {
        cy.visit('/users')
        cy.get('ul').should('exist')
        cy.get('li').should('have.length', 30)
    })

     it('Should go to users/mojombo after click to details', () => {
        // Arrange -> Act -> Assert
        cy.visit('/users')
        cy.get('a[href="/users/mojombo"]').click()
        cy.get('h1').should('contain.text', 'mojombo')
    })

    it('Should go to users/mojombo after click to details', () => {
        // Arrange -> Act -> Assert
        cy.visit('/users')
        cy.get('a[href="/users/defunkt"]').click()
        cy.get('h1').should('contain.text', 'erreur')
    })
})