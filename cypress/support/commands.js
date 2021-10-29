import { HEROKUAPP_SELECTORS } from "../fixtures/herokuapp_selectors";

Cypress.Commands.add('CheckAllImages', () => {
cy.get(HEROKUAPP_SELECTORS.IMG_ONE).should('be.visible');
cy.get(HEROKUAPP_SELECTORS.IMG_TWO).should('be.visible');
cy.get(HEROKUAPP_SELECTORS.IMG_THREE).should('be.visible');
});

Cypress.Commands.add('DisappearingEle', () => {
    cy.get('a').contains('Home')
        .should('be.visible')
    cy.get('a').contains('About')
        .should('be.visible')
    cy.get('a').contains('Contact Us')
        .should('be.visible')
    cy.get('a').contains('Portfolio')
        .should('be.visible')
    cy.get('body').then($body => {
        if ($body.find("a[href = '/gallery/']").length > 0) {   
            cy.get("a[href = '/gallery/']").then($button => {
                if ($button.is(':visible')){  
                cy.get("a[href = '/gallery/']").click()
                cy.contains('Not Found')
        } else {
            assert.isOk('everything','everything is OK');
            };
        });
        };
    });
});

Cypress.Commands.add('dropAtoB', () => {
    const dataTransfer = new DataTransfer()
    cy.get(HEROKUAPP_SELECTORS.COLUMN_A).trigger('dragstart', {
        dataTransfer
      });
      cy.get(HEROKUAPP_SELECTORS.COLUMN_B).trigger('drop', {
        dataTransfer
      });
});
Cypress.Commands.add('dropBtoA', () => {
    const dataTransfer = new DataTransfer()
    cy.get(HEROKUAPP_SELECTORS.COLUMN_A).trigger('dragstart', {
        dataTransfer
      });
      cy.get(HEROKUAPP_SELECTORS.COLUMN_B).trigger('drop',{
        dataTransfer
      });
});

Cypress.Commands.add('checkText', () => {
    cy.get(HEROKUAPP_SELECTORS.FINISH_TEXT, { timeout: 10000})
        .should('exist')
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage
    cy.get('input[placeholder = E-address]').clear().type(username)
    cy.get('input[type = password]').clear().type(password)
    cy.contains('Login').click
});

Cypress.Commands.add('clicking1', (username) => {
    cy.get('input[name = email]').click()
        .type(username)
        .should('have.value', username)
        .clear()
    cy.get('input[name = email]').click('topLeft')
        .type(username)
        .should('have.value', username)
        .clear()
    cy.get('input[name = email]').click('top')
        .type(username)
        .should('have.value', username)
        .clear()
    cy.get('input[name = email]').click('topRight')
        .type(username)
        .should('have.value', username)
        .clear()
    cy.get('input[name = email]').click('left')
        .type(username)
        .should('have.value', username)
        .clear()
    cy.get('input[name = email]').click('right')
        .type(username)
        .should('have.value', username)
        .clear()
    cy.get('input[name = email]').click('bottomLeft')
        .type(username)
        .should('have.value', username)
        .clear()
    cy.get('input[name = email]').click('bottom')
        .type(username)
        .should('have.value', username)
        .clear()
    cy.get('input[name = email]').click('bottomRight')
        .type(username)
        .should('have.value', username)
        .clear()
    cy.get('div[class = column]').click('topLeft')
        .type(username)
        .should('not.have.value', username)

});

Cypress.Commands.add('clicking2', (password) => {
    cy.get('input[type = password]').click()
        .type(password)
        .should('have.value', password)
        .clear()
    cy.get('input[type = password]').click('top')
        .type(password)
        .should('have.value', password)
        .clear()
    cy.get('input[type = password]').click('left')
        .type(password)
        .should('have.value', password)
        .clear()
    cy.get('input[type = password]').click('right')
        .type(password)
        .should('have.value', password)
        .clear()
    cy.get('input[type = password]').click('bottomLeft')
        .type(password)
        .should('have.value', password)
        .clear()
    cy.get('input[type = password]').click('bottom')
        .type(password)
        .should('have.value', password)
        .clear()
    cy.get('input[type = password]').click('bottomRight')
        .type(password)
        .should('have.value', password)
        .clear()
    cy.get('div[class = column]').click('left')
        .type(password)
        .should('not.have.value', password)
});