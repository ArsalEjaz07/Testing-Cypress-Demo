/// <reference types="cypress"/>


it('Google Search',() => {

   cy. visit('https://admin.getshifterr.com/auth/sign-in')
   cy.contains('username').click()
   //cy.get('@id=":r14:') 
  // cy.contains('email').should('be.visible')
  
   //cy.contains('email').click()
   //cy.contains('login').click()
   //*["]
})