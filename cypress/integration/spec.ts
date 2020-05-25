function setComponentLabel(dataType: string, txt: string) {
  cy.get('[data-type="' + dataType + '"]')
    .trigger('mousedown', {which: 1})
    // Ugly, must use mouse position. drag-drop on element does not work
    .trigger('mousemove', {which: 1, clientX: 400, clientY: 60})
    .trigger('mouseup', {force: false})
  cy.get('[placeholder="Field Label"]')
    .clear()
    .type(txt)
}

function checkSetLabel(dataType: string, txt = 'abcd') {
  setComponentLabel(dataType, txt)
  cy.get('.btn-success').click()
  cy.get('.formio-component-' + dataType + ' > .col-form-label')
    .contains(txt)
}

function setBoxValue(index: number, label: string, icon: string = '') {
  if ( index > 0 ) {
    cy.get('[ref="datagrid-values-addRow"]').click()
  }
  cy.get('[name="data[values][' + index + '][label]"]').type(label)
  cy.get('[name="data[values][' + index + '][icon]"]').type(icon)
}


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
    cy.get('[data-key="multicheckbuttons"]').should('have.class', 'formcomponent')
    cy.get('[data-key="radiobuttons"]').should('have.class', 'formcomponent')
    cy.get('[data-key="yesnobuttons"]').should('have.class', 'formcomponent')
    cy.contains('Drag and Drop').should('have.class', 'drag-and-drop-alert')
  })

  it('Can select panel', () => {
    cy.contains('My Basics')
      .trigger('click', { button: 0 })
    cy.get('[data-key="textfield"]').should('be.visible')
    cy.get('[data-key="multicheckbox"]').should('not.be.visible')
    cy.contains('Big Checks')
      .trigger('click', { button: 0 })
    cy.get('[data-key="textfield"]').should('not.be.visible')
  })

  it('Can set label on Text Field Drag-Drop', () => {
    checkSetLabel('textfield')
  })

  it('Can set label on Yes/no Buttons Drag-Drop', () => {
    checkSetLabel('yesnobuttons')
  })

  it('Can set label on Checkbox Button Drag-Drop', () => {
    checkSetLabel('checkboxbutton')
  })

  it('Can set Multiple Drag-Drop labels', () => {
    checkSetLabel('textfield', 'textfield')
    checkSetLabel('checkboxbutton', 'checkboxbutton')
    checkSetLabel('yesnobuttons', 'checkboxbutton')
  })

  // This test creates an infinite loop
  it('Can create Multi-Checkbox with and without values', () => {
    checkSetLabel('multicheckbuttons')
    cy.get('[data-component-key="values[0].value"]')
      .contains('Value is required')
    cy.get('[name="data[inline]"]').click()
    cy.get(':nth-child(2) > .nav-link')
      .click()
    setBoxValue(0, 'first', 'car')
    // The next line generates the infinite loop
    // Remove it (and the test in the last line),
    // and the infinite loop is gone
    setBoxValue(1, 'second', 'arrows')
    cy.get('.btn-success').click()
    cy.get('.btn-group > :nth-child(1) > .fa')
      .should('have.class', 'fa-car')
    cy.get('.btn-group > :nth-child(2) > .fa')
      .should('have.class', 'fa-arrows')

  })


})
