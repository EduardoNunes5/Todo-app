const { defineConfig } = require("cypress");

const fs = require('fs')


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        readFileMaybe(filename){
          if(fs.existsSync(filename)){
            return fs.readFileSync(filename, 'utf-8');
          }
           return [];
        }
      })
    },
    baseUrl: 'http://localhost:4200'
  },
});
