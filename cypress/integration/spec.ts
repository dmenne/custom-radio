describe('When Formio Radio Buttons starting page is loaded', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  xit ('Has Title and menu', () => {
    cy.contains('Formio Custom Buttons Test')
    cy.contains('Drag and Drop a form component')
    cy.contains('Submit')
  })
  xit ('Has Buttons', () => {
    cy.get('[data-key="textfield"]').should('have.class', 'formcomponent')
    cy.get('[data-key="multicheckbuttons"]').should('have.class', 'formcomponent')
    cy.get('[data-key="checkbox"]').should('have.class', 'formcomponent')
    cy.get('[data-key="radiobuttons"]').should('have.class', 'formcomponent')
    cy.get('[data-key="yesnobuttons"]').should('have.class', 'formcomponent')
    cy.contains('Drag and Drop').should('have.class', 'drag-and-drop-alert')
  })

  it('Can use Drag-Drop', () => {
    cy.get('[data-type="textfield"]')
      .trigger('mousedown', {which: 1})
      .trigger('mousemove', {which: 1, clientX: 400, clientY: 60})
      .trigger('mouseup', {force: true})
      })

  xit('Can select panel', () => {
    cy.contains('My Basics')
      .trigger('click', { button: 0 })
    cy.get('[data-key="textfield"]').should('be.visible')
    cy.get('[data-key="multicheckbox"]').should('not.be.visible')
    cy.contains('Big Checks')
      .trigger('click', { button: 0 })
    cy.get('[data-key="textfield"]').should('not.be.visible')
  }
  )
})
