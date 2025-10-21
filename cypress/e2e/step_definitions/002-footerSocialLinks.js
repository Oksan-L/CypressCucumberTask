import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Footer from "../../pages/FooterPage";

Given("User opens the {string} page 002", (url) => {
  cy.visit(url);
});

When("User scrolls to the footer section and the social media icons", () => {
  Footer.scrollToSocialIcons();
});

Then("User verifies that all social media links redirect correctly", () => {
  Footer.verifySocialLink("linkedin");
  Footer.verifySocialLink("twitter");
  Footer.verifySocialLink("facebook");
});
