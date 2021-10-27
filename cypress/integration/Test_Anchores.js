it('Enter Naturativ website', () => {
    cy.visit('https://www.naturativ.pl/')
    cy.wait(2000)
})
it('Select cosmetic for body', () => {
    cy.get('.submenu__link').eq(2).contains('ciało')
    .click()
})
it('Select product and click on composition, inci, ow to use and opinions', () =>{
    cy.wait(2000)
    cy.contains('Rewitalizujący Żel Myjący').should("not.have.attr", "href", "#undefined")
    .click()
    cy.get('[type = button]').contains('kompozycja')
    .click()
    cy.get('[type = button]').contains('inci')
    .click()
    cy.get('[type = button]').contains('jak używać')
    .click()
    cy.get('[type = button]').contains('opinie')
    .click()
    cy.get('.btn').contains('wczytaj więcej')
    .click()
})
it('Add to cart and see product in cart', () => {
    cy.get('[type = button]').contains('do koszyka')
    .click()
    cy.get('[type = button]').contains('zobacz koszyk')
    .click()
})
it('Remove product from cart and click the appear button', () => {
    cy.get('[title = "zmniejsz ilość produktów"]')
    .click()
    cy.contains('Twój koszyk jest pusty.')   
})
it('Check all anchore links', () => {
    cy.get('a').each($a => {
        const message = $a.text();
        expect($a, message).to.have.attr("href").not.contain("undefined");
      })
})
it('Go back to homepage by anchore in text "Przejdź do sklepu"', () => {
    cy.get('a').contains('sklepu')
    .click()
})