Feature: Verify that the footer logo link redirects to the Home Page
  Verify that clicking on the logo in the footer redirects the user to the Telnyx homepage.

  Scenario Outline: Verify footer logo redirection
    Given User opens the "<page>" page 001
    When User scrolls to the footer section and the Telnyx logo
    And User clicks on the Telnyx logo in the footer
    Then User should be redirected to the homepage

    Examples:
      | page                                         |
      | https://telnyx.com/pricing                  |
      | https://telnyx.com/our-network              |
      | https://telnyx.com/the-best-elevenlabs-alternative |
