it('Scroll to the rabat formula', () => {
  cy.visit('https://www.naturativ.pl/');
  cy.scrollTo('bottom', { duration: 1500 });
});

it('Fill the formula', () => {
  cy.get('.newsletter__field').eq(0).click().type('valid@mail.com');
  cy.get('.btn--main').eq(1).click();
});

it('Agree to the terms of the use', () => {
  cy.wait(2000);
  cy.get('.contact-box__group').eq(2).click();
  cy.get('.contact-box__btn').eq(0).click();
});

it('Return to Homepage', () => {
  cy.visit('https://www.naturativ.pl/');
});

it('Send idea for new cosmetic', () => {
  cy.visit('https://www.naturativ.pl/');
  cy.get('#Launcher').click(5, 60);
  cy.get('.mi-input').eq(0).click().type('Test');
  cy.get('.mi-input').eq(1).click().type('Test');
  cy.get('.mi-input').eq(2).click().type('valid@mail.com');
  cy.contains('Zgłoś pomysł').click();
  cy.get('.floating-panel__content').should('be.visible').contains('Dziękujemy!');
});
