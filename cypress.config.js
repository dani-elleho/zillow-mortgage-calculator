const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Base URL for the tests
    baseUrl: 'https://www.zillow.com',
    specPattern: 'cypress/e2e/**/*.spec.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
