 
 
// <reference types="cypress"/>

it('Cofinans Flow check',() => {

    cy. visit('https://www.cofinans.se/activities')

    cy.get('.h-32')
    .click()

    cy.wait(2000)
 /*
    cy.get('.mt-5 > .text-xl')
    .click()
   
    cy.get('#name')
    .type('Automated Testing3')   //customer name

    cy.get('#org')
    .type('123456789')

    cy.get('#reference')
    .type('None')

    cy.get('#phone')
    .type('033412311')

    cy.get('#email')
    .type('arsal@zenkoders.com')
    .should('contain.value','@')

    cy.get('#zipcode')
    .type('12345')
    .should('not.have.value','abcd')

    cy.get('#place')
    .type('Karachi')

    cy.get('#country')
    .select('Pakistan')

    cy.get('#paymentTerms')
    .select('Autogiro')

    cy.get('.bg-blue-500')
    .click()
*/
  //  cy.get('#\31 ')
  //  .should('be.visible')

    cy.get('#CustomerNumber')
    .select('Automated Testing3')  //select customer 

    cy.get('.react-calendar__month-view__days > :nth-child(10)')
    .click()

    cy.get('.react-calendar__month-view__days > :nth-child(11)')
    .click()

    cy.wait(2000)

    cy.contains('tid/timmar:')  
    .next() 
    .type('9')

    cy.contains('Betala :') 
    .next()
    .clear()
    .type('10')
    
 
    cy.get('#Comments')
    .type('testing description Automated')


  cy.contains('VALUTA')
  .next()
  .select('USD')

  .wait(2000)

  cy.get('.bg-sky-200 > :nth-child(3) > .z-50 > .justify-center > .inline-block > .bg-white > .flex > .cursor-pointer > path') //modal close
  .click()
 
  cy.wait(2000)

    cy.get('.ml-1 > .ml-2')
    .select('12%')

    .wait(1000)

    cy.get('.bg > :nth-child(1) > :nth-child(4) > :nth-child(2)')
    .next()
    .click()
    .type('arsal@zenkoders.com')

    cy.get('#TermsnConditionsCheck')
    .check()


  .wait(2000)

  cy.scrollTo(1000, 0)

  .wait(2000)

  cy.get('.ml-4 > .cursor-pointer') //menu open 
   .click();

   cy.xpath('//*[@id="__next"]/div/div[1]/div/div/div[2]/div[2]/div[2]/h2[2]')
   .should('have.text', 'mina fakturor')
   .click()

   .wait(3000)

   cy.get('.ml-4 > .cursor-pointer') //menu close
   .click();

   cy.get(':nth-child(1) > .react-datepicker-wrapper > .react-datepicker__input-container > .border')  //calaendar selection
   .click()

   cy.get('.react-datepicker__day--017')  //selecting date
   .click()

   cy.get('tr > :nth-child(1) > .flex > svg') //sorting
   .click()

   .wait(4000)

   cy.get('tr > :nth-child(2) > .flex > svg') //sorting
   .click()

   .wait(4000)

   cy.get('tr > :nth-child(3) > .flex > svg') //sorting
   .click()

   .wait(4000)

   cy.get('tr > :nth-child(4) > .flex > svg') //sorting
   .click()

   .wait(4000)

   cy.get('.ml-4 > .cursor-pointer') //menu open 
   .click();


   cy.xpath('//*[@id="__next"]/div/div[1]/div/div/div[2]/div[2]/div[2]/h2[4]')
   .should('have.text', 'mina kunder')
   .click()

   .wait(3000)

   cy.get('.ml-4 > .cursor-pointer') //menu close
   .click();

   cy.get('tr > :nth-child(1) > .flex > svg') //sorting customer
   .click()

   .wait(3000)

   cy.get('tr > :nth-child(3) > .flex > svg') //sorting customer
   .click()

   .wait(3000)

   cy.get(':nth-child(3) > .block > .w-5') // pagination 
   .click()
   .wait(3000)

   cy.get(':nth-child(3) > .block > .w-5') // pagination
   .click()
   .wait(3000)


   cy.get(':nth-child(3) > .py-9 > .flex > .hover\\:cursor-pointer > path') // edit open 
   .click({ force: true })


   cy.get('.mt-3 > :nth-child(1) > .block')
   .next()
   .click()
   .clear()
   .type('Updated testing customer')   //customer name updated

   cy.get('.mt-8 > .justify-end > .ml-4') // update button for customer
   .click()

   cy.xpath('//*[@id="__next"]/div/div[1]/div/div/div[1]/a/p')
   .click()


})
