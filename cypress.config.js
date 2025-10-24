const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "i5hbsy",
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: "http://automationpratice.com.br",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
