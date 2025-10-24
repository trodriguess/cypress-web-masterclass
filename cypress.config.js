const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    projectId: "i5hbsy",
    defaultCommandTimeout: 10000,
    baseUrl: "http://automationpratice.com.br",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
