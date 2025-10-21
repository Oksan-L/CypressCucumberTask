import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Footer from "../../pages/FooterPage";

Given("User opens the {string} page 001", (url) => {
  cy.visit(url);
});

When("User scrolls to the footer section and the Telnyx logo", () => {
  Footer.getFooter().scrollIntoView().should("be.visible");
  Footer.scrollToLogo();
});

When("User clicks on the Telnyx logo in the footer", () => {
  // скролимо до конкретного контейнера логотипу і клікаємо по <a>
  Footer.clickLogo();
});

Then("User should be redirected to the homepage", () => {
  // робимо перевірку URL за регуляркою, щоб уникнути проблем з / або www
  cy.url({ timeout: 10000 }).should("match", /^https?:\/\/(www\.)?telnyx\.com\/?$/);
});
