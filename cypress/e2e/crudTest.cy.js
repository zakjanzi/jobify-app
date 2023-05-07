/// <reference types="Cypress" />

// import { beforeEach } from "cypress"


describe('Jobify App', () => {

    it('should login, create and delete a job successfully', () => {
      // Login
      cy.visit('https://zak-jobify.netlify.app/')
      cy.login('test@tests.com', 'test123')
      
      // Create job
      cy.createJob('a random position', 'a random company', 'a random city', 'remote' )

      cy.wait(2000)

      // Edit the created job
      cy.get('.sc-gswNZR > .sidebar-container > .content > .nav-links > [href="/all-jobs"]')
      cy.url().should('eq', 'https://zak-jobify.netlify.app/all-jobs')
      
      //Edit the job
      cy.editJob()
      
      // Go to /all-jobs
      cy.get('.sc-gswNZR > .sidebar-container > .content > .nav-links > [href="/all-jobs"]').click()

      // Delete created job
      cy.deleteJob()

      // Assert that the job was deleted
      cy.get('h2').should('have.text', 'No jobs to display...')
      cy.get('.sc-gswNZR > .sidebar-container > .content > .nav-links > [href="/all-jobs"]').click()

    })
    
  })
  