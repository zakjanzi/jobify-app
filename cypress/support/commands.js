// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('login', (email, password) => { 

    cy.visit('https://zak-jobify.netlify.app/')

    cy.get('a.btn-hero').click()
    cy.get('input[name="email"]').type(email)
    cy.get('input[name="password"]').type(password)
    cy.get('button[type="submit"]').click()
    cy.wait(6000)
  })

Cypress.Commands.add('createJob', (positon, company, jobLocation, jobType) => { 

        // Click the "Add Job" button from the dashboard
        cy.get('.sc-gswNZR > .sidebar-container > .content > .nav-links > [href="/add-job"]').click()
    
        // Fill in the "position", "company", and "jobLocation" fields
        cy.get('input[name="position"]').type('a random position')
        cy.get('input[name="company"]').type('a random company')
        cy.get('input[name="jobLocation"]').clear().type('a random city')
    
        // select the 'remote' option from the dropdown
        cy.get(':nth-child(5) > .form-select').select('remote')
    
        // create the job (submit)
        cy.get('.submit-btn').click()
    
        // Assert that the job was created
        cy.wait(4000)
        cy.get('.sc-gswNZR > .sidebar-container > .content > .nav-links > [href="/all-jobs"]').click()
        // cy.url().should('eq', 'https://zak-jobify.netlify.app/all-jobs')

})


Cypress.Commands.add('deleteJob', () => { 

    cy.get('button.delete-btn').click({ multiple: true })
    cy.wait(1500)
    cy.get('h2').should('have.text', 'No jobs to display...')
    cy.get('.sc-gswNZR > .sidebar-container > .content > .nav-links > [href="/all-jobs"]').click()
    
  })


  Cypress.Commands.add('editJob', () => { 

    // click edit button
    cy.get('.edit-btn').click()
    
    // Make edits
    cy.get('input[name="jobLocation"]').clear().type('an edited random city')
    cy.get('input[name="company"]').clear().type('an edited company ')
    cy.get('input[name="position"]').clear().type('an edited position ')
    cy.get(':nth-child(5) > .form-select').select('internship')

    // Save the edits (click submit button)
    cy.get('.submit-btn').click()
    
  })