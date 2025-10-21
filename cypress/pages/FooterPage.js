class FooterPage {
  getFooter() {
    return cy.get('footer', { timeout: 10000 });
  }

  // повертає саме ті елементи, які ти надала — беремо перший, щоб не працювати з колекцією
  getLogoContainer() {
    return cy.get('footer .c-buvHyO.c-buvHyO-icQIAfV-css', { timeout: 10000 }).first();
  }

  // всередині контейнера знаходимо <a> з класом c-fZcwcz
  getLogoAnchor() {
    return this.getLogoContainer().find('a.c-fZcwcz').first();
  }

  scrollToLogo() {
    // робимо scroll до контейнера логотипу (один елемент)
    this.getLogoContainer().scrollIntoView().should('be.visible');
    // переконаємось, що анкор видимий
    this.getLogoAnchor().should('be.visible');
  }

  clickLogo() {
    // клік по самому <a> — force лише якщо потрібно
    this.getLogoAnchor().click({ force: true });
  }
}

export default new FooterPage();
