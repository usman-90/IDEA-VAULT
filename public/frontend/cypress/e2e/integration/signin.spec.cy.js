const baseUrl = "http://localhost:5173"
// http://localhost:5173/

describe('page should have required elements', () => {

    beforeEach(() => {
        cy.visit(baseUrl + "/signin")
    })
    it("should have an input field for email ", () => {
        cy.get("form").get('[data-cypress="email"]').should("exist")
    })
    it("should have an input field for password ", () => {
        cy.get("form").get('[data-cypress="password"]').should("exist")
    })
    it("should have a form with Log in button ", () => {
        cy.get("form").get('[data-cypress="loginBtn"]').contains("Log in").should("exist")
    })

})
describe('sign in using correct credentials', () => {

    beforeEach(() => {
        cy.visit(baseUrl + "/signin")
    })

    it("should login with correct credentials and navigate to home ", () => {
        cy.get('[data-cypress="email"]').type("usman-40", {force: true})
        cy.get('[data-cypress="password"]').type("bigetron", {force: true})
        cy.get('[data-cypress="loginBtn"]').click()
        cy.location("pathname").should("contain", "/")
    })


})
describe('sign in using invalid credentials', () => {

    beforeEach(() => {
        cy.visit(baseUrl + "/signin")
    })

    it("should not login with incorrect email ", () => {
        cy.get('[data-cypress="email"]').type("usman-30", {force: true})
        cy.get('[data-cypress="password"]').type("bigetron", {force: true})
        cy.get('[data-cypress="loginBtn"]').click()
        cy.location("pathname").should("contain", "/signin")
    })
    it("should not login with incorrect password", () => {
        cy.get('[data-cypress="email"]').type("usman-40", {force: true})
        cy.get('[data-cypress="password"]').type("bigtron", {force: true})
        cy.get('[data-cypress="loginBtn"]').click()
        cy.location("pathname").should("contain", "/signin")
    })
    it("should not login with empty email ", () => {
        cy.get('[data-cypress="email"]').clear( {force: true})
        cy.get('[data-cypress="password"]').type("bigetron", {force: true})
        cy.get('[data-cypress="loginBtn"]').click()
        cy.location("pathname").should("contain", "/signin")
    })
    it("should not login with empty password ", () => {
        cy.get('[data-cypress="email"]').type("usman-40", {force: true})
        cy.get('[data-cypress="password"]').clear( {force: true})
        cy.get('[data-cypress="loginBtn"]').click()
        cy.location("pathname").should("contain", "/signin")
    })
    it("should not login with empty credentials", () => {
        cy.get('[data-cypress="email"]').clear( {force: true}) // Clear both email and password input fields
        cy.get('[data-cypress="password"]').clear( {force: true})
        cy.get('[data-cypress="loginBtn"]').click()
        cy.location("pathname").should("contain", "/signin")
    })


})
