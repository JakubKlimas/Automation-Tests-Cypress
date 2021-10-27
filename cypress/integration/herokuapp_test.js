import { HEROKUAPP_SELECTORS } from "../fixtures/herokuapp_selectors";

describe('Go to herokuapp', () => {
  beforeEach(() => {
    cy.visit('http://the-internet.herokuapp.com/');
  });

  it('Test Broken Images', () => {
    cy.visit('http://the-internet.herokuapp.com/broken_images', {
    onBeforeLoad(win) {
    cy.stub(win.console, 'log').as('consoleLog')
    },
    });
    cy.CheckAllImages();
  });

  it('Checking checkboxes', () => { 
    cy.get('a').contains('Checkboxes')
        .click()
    cy.get(HEROKUAPP_SELECTORS.CHECKBOX)
        .as('checkboxes')
        .check()
    cy.get('@checkboxes')
        .each(checkbox => {
        expect(checkbox[0].checked).to.equal(true)
  });
  });

  it('Checking Context Menu', () => {
    cy.get('a').contains('Context Menu')
        .click()
    cy.get(HEROKUAPP_SELECTORS.CONTEXT_MENU)
        .rightclick()
    cy.on('window:alert', (text) => {
        expect(text).to.contains('You selected a context menu');
    });
  });

  it('Checking Disappering Elements', () => {
    cy.get('a').contains('Disappearing Elements')
      .click()
    cy.DisappearingEle();
  });

  it('Checking drag and drop', () => {
    cy.get('a').contains('Drag and Drop')
      .click()
    cy.dropAtoB();
    cy.dropBtoA();
  });

  it('Checking Dropdown List', () => {
    cy.get('a').contains('Dropdown')
      .click()
    cy.get(HEROKUAPP_SELECTORS.DROPDOWN_LIST)
      .select('1')
    cy.get(HEROKUAPP_SELECTORS.DROPDOWN_LIST)
      .select('2')
    cy.get('option[value = "2"]').should('have.selected', 'selected')
  });

  it('Checking Dynamic Content', () => {
    cy.get('a').contains('Dynamic Content')
      .click()
    cy.get('img').should('be.visible')
    cy.get(HEROKUAPP_SELECTORS.TEXT_COLUMNS).then($randomText => {
      const randomText = $randomText.text()
      expect(randomText).to.match(/.*/)
      });
  });
});