class FooterPage {
  getFooter() {
    return cy.get('footer', { timeout: 10000 });
  }

  //001-footerLogoRedirect.js
  getLogoContainer() {
    return cy.get('footer .c-buvHyO.c-buvHyO-icQIAfV-css', { timeout: 10000 }).first();
  }

  getLogoAnchor() {
    return this.getLogoContainer().find('a.c-fZcwcz').first();
  }

  scrollToLogo() {
    this.getLogoContainer().scrollIntoView().should('be.visible');
    this.getLogoAnchor().should('be.visible');
  }

  clickLogo() {
    this.getLogoAnchor().click({ force: true });
  }

  getSocialIcon(platform) {
    const selectors = {
      linkedin: 'a[href*="linkedin.com"]',
      twitter: 'a[href*="twitter.com"], a[href*="x.com"]',
      facebook: 'a[href*="facebook.com"]'
    };
    return this.getFooter().find(selectors[platform]).first();
  }

  scrollToSocialIcons() {
    this.getFooter().scrollIntoView().should('be.visible');
  }

  //002-footerSocialLinks.js
  verifySocialLink(platform) {
    const urls = {
      linkedin: /linkedin\.com\/company\/telnyx/i,
      twitter: /(twitter\.com|x\.com)\/telnyx/i,
      facebook: /facebook\.com\/telnyx/i
    };

    this.getSocialIcon(platform)
      .should('have.attr', 'href')
      .then((href) => {
        cy.log(`🔗 Checking ${platform} link: ${href}`);
        expect(href).to.match(urls[platform]);
      });
  }
  
  //003-footerCompanyLinks.js

  getCompanySection() {
    return this.getFooter().find('p.c-mkazC:contains("Company")').parent();
  }

  getCompanyLink(linkText) {
    return this.getCompanySection().contains("a", linkText);
  }

  scrollToCompanySection() {
    this.getCompanySection().scrollIntoView().should("be.visible");
  }

  clickCompanyLink(linkText) {
    this.getCompanyLink(linkText).should("be.visible").click({ force: true });
  }

  //004-footerLegalLinks.js

  getLegalSection() {
    return this.getFooter().find('p.c-mkazC:contains("Legal")').parent();
  }

  getLegalLink(linkText) {
    return this.getLegalSection().contains("a", linkText);
  }

  scrollToLegalSection() {
    this.getLegalSection().scrollIntoView().should("be.visible");
  }

  clickLegalLink(linkText) {
    this.getLegalLink(linkText).should("be.visible").click({ force: true });
  }

  //005-footerCompareLinks.js

  getCompareSection() {
    return cy.contains('footer ul p', 'Compare').parents('ul');
  }

  getCompareLink(linkText) {
    return this.getCompareSection().find('a').contains(linkText);
  }

  scrollToCompareSection() {
    this.getCompareSection().scrollIntoView().should('be.visible');
  }

}

export default new FooterPage();
