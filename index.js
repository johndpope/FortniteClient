                   const { email, password, YourAccountName, Features, Cosmetics, Client, ApiDown, Modes } = require("./config.json");
                   this.email = email
                   this.password = password
                   this.Name = YourAccountName
                   this.Modes = Modes

                   if(!this.Name) console.log(`[CONFIG MISSING PART] You didn't have your epic name in config.`);
                  if(!this.email && !this.password) throw new Error (`[CONFIG MISSING PART] You didn't have your email or password.`);
                  if(!this.email) throw new Error (`[CONFIG MISSING PART] You didn't have your email in config!`);
                  if(!this.password) throw new Error (`[CONFIG MISSING PART] You didn't have your password in config!`);

                   if(this.Modes.Crash || this.Modes.fakeplayer) {
                    this.checker = require('./resources/checker/checker.js');
                    this.checker.check();
      return;
    }
    else{
      this.main = require('./resources/main/main.js');
      this.main.run();
    }
