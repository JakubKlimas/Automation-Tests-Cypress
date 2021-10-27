< reference type='Cypress' />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://testyourlog.in/example/index.html')
    })
    it('Happypath', function () {

        cy.login('valid@user.com', ' 123456')

        cy.url().should('include', '/logged-in.html?email=valid%40user.com&password=123456')

        cy.contains('Log out').dblclick()

        cy.url().should('include', 'https://testyourlog.in/example/index.html')

    })

    it('Empty password', function () {

        cy.login('valid@user.com', '')

        cy.contains('Please enter your password')

        cy.contains('Your password must be at least 6 characters')

        cy.url().should('include', 'https://testyourlog.in/example/index.html')

    })

    it('Wrong email and password', function () {

        cy.login('12345', '1234')

        cy.contains('Please enter a valid e-mail')

        cy.contains('Your username or password is incorrect')

        cy.contains('Your password must be at least 6 characters')

        cy.url().should('include', 'https://testyourlog.in/example/index.html')

    })

    it('Empty email', function () {

        cy.login('', '123456')

        cy.contains('Please enter your e-mail')

        cy.contains('Please enter a valid e-mail')

        cy.contains('Your username or password is incorrect')

        cy.url().should('include', 'https://testyourlog.in/example/index.html')

    })

    it('Wrong password', function () {

        cy.login('valid@user.com', '1234')

        cy.contains('Your password must be at least 6 characters')

        cy.url().should('include', 'https://testyourlog.in/example/index.html')

    })

    it('Wrong email', function () {

        cy.login('1234', '123456')

        cy.contains('Please enter a valid e-mail')

        cy.contains('Your username or password is incorrect')

        cy.url().should('include', 'https://testyourlog.in/example/index.html')

    })

    it('Empty email and password', function () {

        cy.login('', '')

        cy.contains('Please enter your e-mail')

        cy.contains('Please enter a valid e-mail')

        cy.contains('Your username or password is incorrect')

        cy.contains('Please enter your password')

        cy.contains('Your password must be at least 6 characters')

        cy.url().should('include', 'https://testyourlog.in/example/index.html')

    })

    it('Clicking on Email window 9 specyfic positions', function () {

        cy.clicking1('@@@')

    })

    it('Clicking on Password window 9 specyfic positions', () => {

        cy.clicking2('@@@')

    })

})