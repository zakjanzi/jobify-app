/// <reference types="Cypress" />

describe('Login and Registration Test', () => {
  it('should log in successfully', () => {
    // Visit the URL
    cy.visit('https://zak-jobify.netlify.app/')

    // Click the "Login/Register" button
    cy.get('a.btn-hero').click()

    // Verify that the URL is "https://zak-jobify.netlify.app/register"
    cy.url().should('eq', 'https://zak-jobify.netlify.app/register')

    // Fill in the email and password fields
    cy.get('input[name="email"]').type('test@tests.com')
    cy.get('input[name="password"]').type('test123')

    // Click the "submit" button to log in
    cy.get('button[type="submit"]').click()

    // Wait for the dashboard to load
    cy.wait(7000)

    // Click the "Add Job" button
    cy.get('.sc-gswNZR > .sidebar-container > .content > .nav-links > [href="/add-job"]').click()

    // Fill in the "position", "company", and "jobLocation" fields
    cy.get('input[name="position"]').type('a random position')
    cy.get('input[name="company"]').type('a random company')
    cy.get('input[name="jobLocation"]').clear().type('a random city')
    // select the 'remote' option from the dropdown
    cy.get(':nth-child(5) > .form-select').select('remote')
    // create the job (submit)
    cy.get('.submit-btn').click()

    //view all jobs
    cy.wait(4000)
    cy.get('.sc-gswNZR > .sidebar-container > .content > .nav-links > [href="/all-jobs"]').click()
    cy.url().should('eq', 'https://zak-jobify.netlify.app/all-jobs')

    //delete created job
    cy.get('button.delete-btn').click()
    cy.wait(1500)
    cy.get('h2').should('have.text', 'No jobs to display...')


  })
})
