Feature: Verify that all links in the “Legal” section of the footer work correctly
  Verify that each link in the “Legal” section of the footer leads to the correct page.

  Scenario Outline: Verify links in the Legal section
    Given User opens the "<page>" page 004
    When User scrolls to the Legal section in the footer
    And User clicks on the "<linkText>" link in the Legal section 004
    Then User should be redirected to the correct "<expectedUrl>" 004
    And User returns to the initial page 004

    Examples:
      | page                                         | linkText                         | expectedUrl                                                         |
      | https://telnyx.com/pricing                  | Data and Privacy                 | https://telnyx.com/data-privacy                                |
      | https://telnyx.com/pricing                  | Report Abuse                     | https://telnyx.com/report-abuse                                   |
      | https://telnyx.com/pricing                  | Privacy Policy                   | https://telnyx.com/privacy-policy                                  |
      | https://telnyx.com/pricing                  | Cookie Policy                    | https://telnyx.com/cookie-policy                                   |
      | https://telnyx.com/pricing                  | Law Enforcement                  | https://telnyx.com/law-enforcement-request                                 |
      | https://telnyx.com/pricing                  | Acceptable Use                   | https://telnyx.com/acceptable-use-policy                                  |
      | https://telnyx.com/pricing                  | Trust Center                     | https://trust.telnyx.com/                                    |
      | https://telnyx.com/pricing                  | Country Specific Requirements    | https://telnyx.com/country-specific-requirements                    |
      | https://telnyx.com/pricing                  | Website Terms and Conditions     | https://telnyx.com/terms-and-conditions                     |
      | https://telnyx.com/pricing                  | Terms and Conditions of Service  | https://telnyx.com/terms-and-conditions-of-service                |
