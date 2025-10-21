import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Footer from "../../pages/FooterPage";

let initialUrl = "";

Cypress.on("uncaught:exception", (err) => {
  // Ігноруємо React-помилки та нестабільні евенти з сайту
  if (
    err.message.includes("Minified React error #") ||
    err.message.includes("startsWith is not a function")
  ) {
    return false;
  }
});

Given("User opens the {string} page 004", (url) => {
  cy.visit(url);
  cy.url().then((url) => {
    initialUrl = url;
  });
});

When("User scrolls to the Legal section in the footer", () => {
  Footer.scrollToLegalSection();
});

When("User clicks on the {string} link in the Legal section 004", (linkText) => {
  cy.url().then((currentUrl) => {
    Footer.clickLegalLink(linkText);
    cy.wait(1000); // коротка пауза, щоб React устиг перемалювати
    cy.url({ timeout: 15000 }).should("not.eq", currentUrl);
  });
});

Then("User should be redirected to the correct {string} 004", (expectedUrl) => {
  cy.url({ timeout: 10000 }).should("eq", expectedUrl);
});

Then("User returns to the initial page 004", () => {
  cy.visit(initialUrl);
});
