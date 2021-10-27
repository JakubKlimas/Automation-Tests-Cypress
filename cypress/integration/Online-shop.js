context('Actions', () => {
    
    it('.click on phone number', () => {
       
    cy.visit('http://automationpractice.com/index.php')

    cy.get('.shop-phone').contains('0123-456-789')
        .click( { force:true })
    
    })
    
    it('Check scoll response', () => {

    cy.scrollTo('bottom', { duration: 2000 })
    
    cy.scrollTo('center', { duration: 2000 })
    
    cy.scrollTo('top', { duration: 2000 })
    
    })

    it('Select Dresses category and Casual Dresses subcategory', () => {

    cy.get('[title="Dresses"]').eq(1)
        .click()

    cy.get('.block_content > .tree > :nth-child(1) > a')
        .click()

    })

    it('Sort Price: Lowest First', () => {

    cy.get('#selectProductSort').select('price:asc').should('have.value', 'price:asc')
      
    })

    it('Select Printed Dress', () => {

    cy.get('.product_img_link')
        .click()

    })

    it('Select tree L dresses and two M dresses and add to cart', () => {

    cy.get('#group_1').select('3').should('have.value','3')

    cy.get('[name="qty"]')
        .click()
        .clear()
        .type(3)

    cy.contains('Add to cart')
        .click()
        .click()

    cy.wait(10000)

    cy.contains('Continue shopping')
        .click()

    cy.get('#group_1').select('2').should('have.value','2')   

    cy.get('[name="qty"]')
        .click()
        .clear()
        .type(2) 
        
    cy.contains('Add to cart')
        .click()
        

    cy.wait(10000)

    cy.contains('Continue shopping')
        .click()
    
    })

    it('Go to women category and add blouse to cart', () => {

    cy.get('[title="Women"]').eq(0)
        .click()

    cy.get('[title="Blouse"]').click('Add to cart')

    })

    it('View the product in cart', () => {

    cy.wait(5000)
    
    cy.contains('Proceed to checkout')
        .click()
 
    cy.wait(5000)

    })
  
    it('Proceed to checkout', () => {

    cy.get('.cart_navigation > .button > span')
        .click()

    })

    it('Add new adress and go to the "shipping" step', () => {

    cy.contains('Add a new address').should('have.value', 'Add a new address')
        .click()

    cy.wait(3000)

    cy.get('input[type="text"]').eq(0)
        .click()
        .clear()
        .type('Jakub')

    cy.get('input[type="text"]').eq(1)
        .click()
        .clear()
        .type('Klimas')

    cy.get('input[type="text"]').eq(3)
        .click()
        .clear()
        .type('Dluga 2')

    cy.get('input[type="text"]').eq(5)
        .click()
        .clear()
        .type('Poznan')

    cy.get('#id_state').select('46')

    cy.get('input[type="text"]').eq(6)
        .click()
        .clear()
        .type('57-540')

    cy.get('#id_country').select('21')

    cy.get('input[type="text"]').eq(7)
        .click()
        .clear()
        .type('660039181')

    cy.contains('Save')
        .click()
  
    })

    it('Write a comment and proceed to checkout', () => {

    cy.get('.form-control')
        .type('Test comment')

    cy.contains('Proceed to checkout')
        .click()

    })

    it('Agree to the terms and proceed', () => {

    cy.get('.checkbox').check()

    cy.contains('Proceed to checkout')
        .click()

    it('Select pay by bank wire', () => {

    cy.get('.bankwire')
        .click()

    })

    it('Confirm the order', () => {

    cy.contains('I confirm my order').should('have.value','I confirm my order')
        .click()

    })

    })
    
})