                   const { email, password, YourAccountName, Features, Cosmetics, Client, ApiDown, Modes } = require("./config.json");
                  if(!YourAccountName){
                    console.log(`[CONFIG MISSING PART] You didn't have your epic name in config.`);
                  }
                  if(!email && !password){
                    throw new Error (`[CONFIG MISSING PART] You didn't have your email or password.`);
                  }
                  if(!email){
                    throw new Error (`[CONFIG MISSING PART] You didn't have your email in config!`);
                   }
                   if(!password){
                    throw new Error (`[CONFIG MISSING PART] You didn't have your password in config!`);
                   }

                   if(Modes.Crash || Modes.fakeplayer) {
                    const checker = require('./resources/checker/checker.js');
                    let run = checker.check();
      return;
    }
    else{
      const main = require('./resources/main/main.js');
      let run = main.run();
    }
