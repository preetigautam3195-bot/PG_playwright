
 // ### playwight -> playwright is a automation tool, UI testing, API testing, db testing
 // Selenium - slow and used our machine browser to work on, only UI automation tool
 // playwright - playwright has its own browser, UI + API + Mobile testing tool
 1 - install playwright -> library

   - command is always -> npm intall playwright
   - after that the command is -> npm init playwright 

 what all structure created 
 a - tests(its a folder) -> all testcase will be there.
 b - playwright.config.js(file) - all configuration of playwright project will be in this file.

 2 - record 1 script in playwright
     Record a script - codegen
     command - npx playwright codegen

 3 - run that in playwright
     to run the project the command is ->
     command - npx playwright test
     //  sometime by defult our testcase will execute into headless mode 
      in headless mode browser and nothing will be available, it will not visible to us, it will be keep executing in backend.
      
      // in headed mode - browser and all will be open
     for that we need the command -> npx playwright test --headed

 4 - use json to run data in our playwright

