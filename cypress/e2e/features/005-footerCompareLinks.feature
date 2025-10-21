Feature: Verify that all links in the “Compare” section of the footer work correctly
  Verify that clicking each link in the "Compare" section of the footer redirects the user to the correct page.

  Scenario Outline: Verify footer "Compare" links redirect correctly
    Given User opens the "<page>" page 005
    When User scrolls to the footer section and the "Compare" links
    And User clicks on the "<linkText>" link in the "Compare" section
    Then User should be redirected to the correct "<expectedUrl>"

    Examples:
      | page                                         | linkText       | expectedUrl                                                                     |
      | https://telnyx.com/pricing                  | ElevenLabs     | https://telnyx.com/the-best-elevenlabs-alternative                             |
      | https://telnyx.com/pricing                  | Vapi           | https://telnyx.com/the-best-vapi-alternative                                   |
      | https://telnyx.com/pricing                  | Twilio         | https://telnyx.com/the-better-twilio-alternative                               |
      | https://telnyx.com/pricing                  | Bandwidth      | https://telnyx.com/the-better-bandwidth-alternative                            |
      | https://telnyx.com/pricing                  | Kore Wireless  | https://telnyx.com/the-better-kore-wireless-alternative                        |
      | https://telnyx.com/pricing                  | Hologram       | https://telnyx.com/the-better-hologram-alternative                             |
      | https://telnyx.com/pricing                  | Vonage         | https://telnyx.com/the-better-vonage-voice-api-alternative                     |
      | https://telnyx.com/pricing                  | Amazon S3      | https://telnyx.com/the-better-amazon-s3-alternative                            |
      | https://telnyx.com/pricing                  | Amazon Connect | https://telnyx.com/amazon-connect-alternative-why-telnyx-is-a-smarter-choice   |
