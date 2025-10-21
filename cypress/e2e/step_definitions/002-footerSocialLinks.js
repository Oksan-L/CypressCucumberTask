import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Footer from "../../pages/FooterPage";

// Відкриваємо потрібну сторінку
Given("User opens the {string} page 002", (url) => {
  cy.visit(url);
});

// Скролимо до футера, щоб були видимі іконки соцмереж
When("User scrolls to the footer section and the social media icons", () => {
  Footer.scrollToSocialIcons();
});

// Перевіряємо, що всі соцпосилання мають правильні href
Then("User verifies that all social media links redirect correctly", () => {
  Footer.verifySocialLink("linkedin");
  Footer.verifySocialLink("twitter");
  Footer.verifySocialLink("facebook");
});
