Feature: Verify that all links in the “Company” section of the footer work correctly
  Verify that each link in the “Company” section of the footer leads to the correct page.

  Scenario Outline: Verify links in the Company section
    Given User opens the "<page>" page 003
    When User scrolls to the Company section in the footer
    And User clicks on the "<linkText>" link in the Company section 003
    Then User should be redirected to the correct "<expectedUrl>" 003
    And User returns to the initial page 003

    Examples:
      | page                                         | linkText        | expectedUrl                                |
      | https://telnyx.com/pricing                  | Our Network     | https://telnyx.com/our-network             |
      | https://telnyx.com/pricing                  | Global Coverage | https://telnyx.com/global-coverage         |
      | https://telnyx.com/pricing                  | Release Notes   | https://telnyx.com/release-notes           |
      | https://telnyx.com/pricing                  | Careers         | https://telnyx.com/careers                 |
      | https://telnyx.com/pricing                  | Voice AI        | https://telnyx.com/products/voice-ai-agents|
      | https://telnyx.com/pricing                  | AI Glossary     | https://telnyx.com/learn-ai                |
      | https://telnyx.com/pricing                  | Shop            | https://shop.telnyx.com/                   |
