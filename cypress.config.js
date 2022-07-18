const { defineConfig } = require("cypress");

module.exports = defineConfig({
  fixturesFolder: "cypress/fixtures",
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",

  e2e: {
    setupNodeEvents(on, config) {
      const _ = require('cypress/plugins/index')
    },
  },
});
