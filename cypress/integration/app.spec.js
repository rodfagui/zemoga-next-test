describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3001/')

    // The new page should contain an h1 with "About page"
    cy.get('div').contains('Rule of thumb.')
  })
})