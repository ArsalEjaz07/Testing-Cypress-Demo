/// <reference types="cypress"/>



it('Jet Order login to settings',() => {

    cy. visit('https://adminstg.jetorder.eu/auth/login/')
    cy.get('.css-i3pbo > img').should('be.visible')

    cy.get(':nth-child(1) > .MuiInputBase-root')
    .click()
    .type('albert.sam@hotmail.se')

    cy.get(':nth-child(2) > .MuiInputBase-root')
    .click()
    .type('bypass_zenkoders')

    cy.get('.MuiButtonBase-root')
    .should('be.visible')
    .click({ multiple: true })

    cy.wait(3000)

    cy.get('.css-1xc8z85 > .MuiTypography-root')
    .should('be.visible')
     

    cy.get('.css-1xc8z85 > .MuiButtonBase-root') // add new restuaruant
    .click()

    cy.get(':nth-child(1) > .MuiStepLabel-root > .MuiStepLabel-labelContainer > .MuiStepLabel-label').should('be.visible')  //label visible assertion

 
    // Add new restaurant Positive Run

    

    cy.get(':nth-child(1) > .MuiInputBase-root')  //restuarant name
    .click()
    .type('Automated Restaurant')

    cy.get(':nth-child(2) > .MuiInputBase-root') //company name
    .click()
    .type('Automated Zenkoders')

    cy.get(':nth-child(3) > .MuiInputBase-root')//slug
    .click()
    .type('Automated-restaurant')

    cy.get(':nth-child(4) > .MuiInputBase-root')//registration number 
    .click()
    .type('123456789012')

    cy.get(':nth-child(5) > .MuiInputBase-root') //Street address
    .click()
    .type('Street 22')

    cy.get(':nth-child(6) > .MuiInputBase-root') // Postal code 
    .click()
    .type('14563')

    cy.get(':nth-child(7) > .MuiInputBase-root')// City
    .click()
    .type('Karachi')

    cy.get(':nth-child(8) > .MuiInputBase-root') //Country
    .click()
    .type('Pakistan')

    cy.get(':nth-child(9) > .MuiInputBase-root') // Email User
    .click()
    .type('Automated@gmail.com')

    cy.get(':nth-child(10) > .MuiInputBase-root') // Password
    .click()
    .type('1234567890')

    cy.get(':nth-child(11) > .MuiInputBase-root') //Phone number
    .click()
    .type('0323211333')

   // cy.get(':nth-child(12) > .MuiInputBase-root')
  //.parent()
  //.click()
  //.get('Hotel')
  //.click();

  // cy.get(`:nth-child(12) > .MuiInputBase-root`).contains("value",'Hotel').click()

  cy.get('.MuiNativeSelect-select').select('Hotel').should('have.value', 'Hotel') //drop down selection for type

  cy.get(':nth-child(13) > .MuiInputBase-root') //Short about
  .click()
  .type('Hello \nTesting\n Short About')

  cy.get(':nth-child(14) > .MuiInputBase-root') //xrapport email
  .click()
  .type('automationtesting@gmail.com')

 //Image upload using drag and drop
 //cy.get('.MuiButtonBase-root').contains('Browse').click({force:true})

 const filepath = 'GTR.jpg'

cy.contains('button', 'Browse')

 .click()

 .wait(2000)
 .attachFile(filepath);

 cy.contains('Next')
 .click()



  // cy.get('input[type=file]').selectFile('file.json', {
  //   action: 'drag-drop'
  // })


  
    
    

 //Setting Code

 /* 
 cy.get('.css-1xk5apd')
    .click()

    cy.wait(3000)
    
    cy.get('[href="/settings/"] > .MuiButtonBase-root')
    .click()
    
    cy.wait(3000)

    cy.get('.css-1mir670 > :nth-child(1) > .MuiPaper-root')
    .click()
    
    cy.wait(3000)

    cy.get(':nth-child(1) > .css-vddi9u')
    .should('be.visible')

    cy.wait(2000)
    
    cy.get('.css-1rtk34v') //back to setting page
    .click()

    cy.wait(3000)
    
    cy.get(':nth-child(4) > .MuiPaper-root')
    .click()
    
    cy.wait(3000)

    cy.get('.css-1rtk34v')//back to setting page
    .click()
    cy.wait(3000)

    cy.get('.css-1xk5apd > .MuiBox-root')  //side menu select
    .click()
    cy.wait(2000)

    cy.get('[href="/restaurant/"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root') //restaurants button click
    .click()
    cy.wait(2000)
 */

    
})

 