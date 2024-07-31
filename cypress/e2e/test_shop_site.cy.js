describe('My First Test', () => {

    it('Visits the shopsite and buy item', () => {

        cy.visit('https://www.saucedemo.com/');

        // Enter the extracted text into the authentication form
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');

        // Submit the form
        cy.get('#login-button').click();

        // Assert that the login was successful
        cy.url().should('include', '/inventory.html');

        cy.get('#add-to-cart-sauce-labs-backpack').click();

        cy.get('[data-test="shopping-cart-link"]').click();

        cy.get('#checkout').click();

        cy.get('[data-test="firstName"]').type('testname');
        cy.get('[data-test="lastName"]').type('testlname');
        cy.get('[data-test="postalCode"]').type('1234');
        cy.get('#continue').click();
        cy.url().should('include', '/checkout-step-two.html');
        cy.get('[data-test="finish"]').click();
        cy.get('[data-test="back-to-products"]').click();
            
        });
    
    
    it('Visits the shopsite and buy item', () => {

        cy.visit('https://www.saucedemo.com/');

        // Enter text into the authentication form
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');

        // Submit the form
        cy.get('#login-button').click();

        // Assert that the login was successful
        cy.url().should('include', '/inventory.html');

        cy.get('[data-test="item-0-title-link"]').click();

        //Add item to the chart
        cy.get('#add-to-cart').click();

        cy.get('[data-test="shopping-cart-link"]').click();

        cy.get('#checkout').click();

        //Fill the form
        cy.get('[data-test="firstName"]').type('testname');
        cy.get('[data-test="lastName"]').type('testlname');
        cy.get('[data-test="postalCode"]').type('1234');
        cy.get('#continue').click();
        cy.url().should('include', '/checkout-step-two.html');
        cy.get('[data-test="finish"]').click();
        cy.get('[data-test="back-to-products"]').click();

        //Logout
        cy.get('#react-burger-menu-btn').click();
        cy.get('[data-test="logout-sidebar-link"]').click();
            
        });
})



















    //Start command => npx cypress open
