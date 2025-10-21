const { defineConfig } = require("cypress");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://telnyx.com",
    viewportWidth: 375,
    viewportHeight: 667,
    defaultCommandTimeout: 10000,
    video: false,
    screenshotOnRunFailure: true,
    specPattern: "cypress/e2e/features/**/*.feature",
    browser: "chrome",
    setupNodeEvents(on, config) {
      const cucumber = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
      cucumber(on, config);
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));
      allureWriter(on, config);
      return config;
    },
  },
});
