import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Footer from "../../pages/FooterPage";

let initialUrl = "";

// Ignore specific errors of the site
// Sometimes it shows "The following error originated from your application code, not from Cypress. (...)"
Cypress.on("uncaught:exception", (err) => {
  if (
    err.message.includes("Minified React error #") ||
    err.message.includes("startsWith is not a function")
  ) {
    return false;
  }
});

Given("User opens the {string} page 003", (url) => {
  cy.visit(url);
  cy.url().then((url) => {
    initialUrl = url;
  });
});

When("User scrolls to the Company section in the footer", () => {
  Footer.scrollToCompanySection();
});

When("User clicks on the {string} link in the Company section 003", (linkText) => {
  Footer.clickCompanyLink(linkText);
  cy.wait(1500);
});

Then("User should be redirected to the correct {string} 003", (expectedUrl) => {
  cy.url({ timeout: 10000 }).should("eq", expectedUrl);
});

Then("User returns to the initial page 003", () => {
  cy.visit(initialUrl);
});
