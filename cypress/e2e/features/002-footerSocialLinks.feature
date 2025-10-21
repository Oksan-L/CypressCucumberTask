Feature: Verify that social media links in the footer redirect to the correct pages
  Verify that all social media links (LinkedIn, X/Twitter, and Facebook) in the footer
  lead to the correct external pages.

  Scenario Outline: Verify footer social media links
    Given User opens the "<page>" page 002
    When User scrolls to the footer section and the social media icons
    Then User verifies that all social media links redirect correctly

    Examples:
      | page                                           |
      | https://telnyx.com/pricing                    |
      | https://telnyx.com/our-network                |
      | https://telnyx.com/the-best-elevenlabs-alternative |
