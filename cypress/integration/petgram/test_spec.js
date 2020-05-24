/* global describe, it, cy */

describe('Petgram', function () {
  it('para ver si la app funciona', function () {

    cy.visit('/')

    // expect(true).to.equal(true)
  })

  it('navegamos a un categoria y vemos fotos', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('si podemos navegar con la navbar a la home', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })

  it('los usuarios no registrados ven el formulario de registro e inicio de sesion', function () {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})