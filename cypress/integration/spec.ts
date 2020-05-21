describe('When Formio Radio Buttons starting page is loaded', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it ('Has Title and menu', () => {
    cy.contains('Formio Custom Buttons Test')
    cy.contains('Drag and Drop a form component')
    cy.contains('Submit')
  })
  it ('Has Buttons', () => {
    cy.get('[data-key="textfield"]').should('have.class', 'formcomponent')
    cy.get('[data-key="multicheckbuttons"]').should('have.class', 'formcomponent')
    cy.get('[data-key="checkbox"]').should('have.class', 'formcomponent')
    cy.get('[data-key="radiobuttons"]').should('have.class', 'formcomponent')
    cy.get('[data-key="yesnobuttons"]').should('have.class', 'formcomponent')
    cy.contains('Drag and Drop').should('have.class', 'drag-and-drop-alert')
  })
  it('Can use Drag-Drop', () => {
  })
})
