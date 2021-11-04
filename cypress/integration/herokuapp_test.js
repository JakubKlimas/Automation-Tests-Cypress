import { HEROKUAPP_SELECTORS } from '../fixtures/herokuapp_selectors';

describe('Go to herokuapp', () => {
  beforeEach(() => {
    cy.visit('http://the-internet.herokuapp.com/');
  });

  it('Test Broken Images', () => {
    cy.visit('http://the-internet.herokuapp.com/broken_images', {
      onBeforeLoad(win) {
        cy.stub(win.console, 'log').as('consoleLog');
      },
    });
    cy.CheckAllImages();
  });

  it('Checking checkboxes', () => {
    cy.get('a').contains('Checkboxes').click();
    cy.get(HEROKUAPP_SELECTORS.CHECKBOX_1).as('checkboxes').check();
    cy.get('@checkboxes').each(checkbox => {
      expect(checkbox[0].checked).to.equal(true);
    });
  });

  it('Checking Context Menu', () => {
    cy.get('a').contains('Context Menu').click();
    cy.get(HEROKUAPP_SELECTORS.CONTEXT_MENU).rightclick();
    cy.on('window:alert', text => {
      expect(text).to.contains('You selected a context menu');
    });
  });

  it('Checking Disappering Elements', () => {
    cy.get('a').contains('Disappearing Elements').click();
    cy.DisappearingEle();
  });

  it('Checking drag and drop', () => {
    cy.get('a').contains('Drag and Drop').click();
    cy.dropAtoB();
    cy.dropBtoA();
  });

  it('Checking Dropdown List', () => {
    cy.get('a').contains('Dropdown').click();
    cy.get(HEROKUAPP_SELECTORS.DROPDOWN_LIST).select('1');
    cy.get(HEROKUAPP_SELECTORS.DROPDOWN_LIST).select('2');
    cy.get('option[value = "2"]').should('have.selected', 'selected');
  });

  it('Checking Dynamic Content', () => {
    cy.get('a').contains('Dynamic Content').click();
    cy.get('img').should('be.visible');
    cy.get(HEROKUAPP_SELECTORS.TEXT_COLUMNS).then($randomText => {
      const randomText = $randomText.text();
      expect(randomText).to.match(/.*/);
    });
  });

  it('Checking Dynamic Controls', () => {
    cy.get('a').contains('Dynamic Controls').click();
    cy.get(HEROKUAPP_SELECTORS.CHECKBOX_2).check();
    cy.get('button').contains('Remove').click();
    cy.intercept('GET', 'http://the-internet.herokuapp.com/img/ajax-loader.gif');
    cy.get('[id = message]').contains(`It's gone!`).should('be.visible');
    cy.get('button').contains('Add').click();
    cy.get('button').contains('Enable').click();
    cy.get('[type = text]').type('test');
  });

  it('Checking Dynamic Loading', () => {
    cy.get('a').contains('Dynamic Loading').click();
    cy.get(HEROKUAPP_SELECTORS.DYNAMIC_LOADING_1).click();
    cy.get('button').contains('Start').click();
    cy.checkText().should('be.visible');
    cy.visit('http://the-internet.herokuapp.com/dynamic_loading');
    cy.get(HEROKUAPP_SELECTORS.DYNAMIC_LOADING_2).click();
    cy.get('button').contains('Start').click();
    cy.checkText();
  });
});
