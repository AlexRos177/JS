describe('Shop test/ log in and buy items', () => {

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
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').contains('Logout').click();

    });

    it('Visits the shopsite and buy item', () => {

        cy.visit('https://www.saucedemo.com/');

        // Enter the extracted text into the authentication form
        cy.get('#user-name').type('locked_out_user');
        cy.get('#password').type('secret_sauce');

        // Submit the form
        cy.get('#login-button').click();

        // Assert that the login was not successful
        cy.get('#login_button_container > div > form > div.error-message-container.error');

    });

    it('Visits the shopsite and buy item', () => {

        cy.visit('https://www.saucedemo.com/');

        // Enter the extracted text into the authentication form
        cy.get('#user-name').type('problem_user');
        cy.get('#password').type('secret_sauce');

        // Submit the form
        cy.get('#login-button').click();

        // Assert that the login was successful
        cy.url().should('include', '/inventory.html');

        cy.get('#add-to-cart-sauce-labs-backpack').click();

        cy.get('[data-test="shopping-cart-link"]').click();
        //cy.get('[data-test="shopping-cart-link"]').contains('Sauce_Labs_Backpack');
        cy.get('#item_4_title_link > div').contains('Sauce Labs Backpack').click();
        const itemName = 'Sauce Labs Backpack';
        const expectedPrice = '$29.99';

        // Check if the item with the specified name and price exists
        cy.contains('Swag Labs').then(item => {
            if (item.text == itemName) {
                cy.log('Item found!');
                // If the item is found, check the price
                cy.wrap(item).parents('.inventory_item_price').should('have.text', expectedPrice);
            } else {
                cy.log('Item not found, navigating back.');
                // If the item is not found, go back
                cy.go('back');
                //Remove the wrong item, and go back
                cy.get('[data-test="remove-sauce-labs-backpack"]').click();
                cy.get('[data-test="continue-shopping"]').click();
            }
        });

    });

    it('Visits the shopsite and buy item', () => {
        cy.visit('https://www.saucedemo.com/');
        // Enter the extracted text into the authentication form
        cy.get('#user-name').type('performance_glitch_user');
        cy.get('#password').type('secret_sauce');
        // Submit the form
        cy.get('#login-button').click();
        // Assert that the login was successful
        cy.url().should('include', '/inventory.html');
        //Add item to the cart
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="inventory-item-name"]').click();
        // Check if the item with the specified name and price exists
        cy.get('[data-test="inventory-item-name"]').contains('Sauce Labs Backpack');
        cy.get('[data-test="inventory-item-price"]').contains('$29.99');
        cy.log('Item = Sauce Labs Backpack, price = $29.99 ');
        cy.get('[data-test="shopping-cart-link"]').click();
        //Checkout
        cy.get('#checkout').click();
        cy.get('[data-test="firstName"]').type('testname');
        cy.get('[data-test="lastName"]').type('testlname');
        cy.get('[data-test="postalCode"]').type('1234');
        cy.get('#continue').click();
        cy.url().should('include', '/checkout-step-two.html');
        //Order successful done
        cy.get('[data-test="finish"]').click();
        cy.get('[data-test="back-to-products"]').click();
        cy.get('#react-burger-menu-btn').click();
        cy.log('Logout the site');
        cy.get('#logout_sidebar_link').contains('Logout').click();

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
