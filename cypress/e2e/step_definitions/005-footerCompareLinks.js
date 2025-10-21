import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Footer from "../../pages/FooterPage";

Given("User opens the {string} page 005", (url) => {
  cy.visit(url);
  cy.wait(2000);
});

When('User scrolls to the footer section and the "Compare" links', () => {
  Footer.getFooter().scrollIntoView().should("be.visible");
  Footer.scrollToCompareSection();
});

When('User clicks on the {string} link in the "Compare" section', (linkText) => {
  Footer.getCompareLink(linkText).should("be.visible").click({ force: true });
});

Then('User should be redirected to the correct {string}', (expectedUrl) => {
  cy.url({ timeout: 15000 }).should("eq", expectedUrl);
  cy.wait(1000);
  cy.go("back");
  cy.wait(1000);
});
