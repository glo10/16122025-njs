const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:',
    specPattern: 'cypress/e2e/app/*.cy.{js,mjs,jsx,ts,tsx}'
  },
});
