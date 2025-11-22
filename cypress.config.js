const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = {
  e2e: {
    defaultCommandTimeout: 10000, // 10s: Tempo padrão de espera para comandos
    baseURL: "https://phptravels.net/", // URL base do site a ser testado
    specPattern: "cypress/e2e/**/*.feature", // Padrão para localizar arquivos de feature
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
  },
};
