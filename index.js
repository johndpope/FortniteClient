                   const { email, password, YourAccountName, Features, Cosmetics, Client, ApiDown, Modes } = require("./config.json");
                   this.email = email
                   this.password = password
                   this.Name = YourAccountName
                   this.Modes = Modes

                   if(!this.Name) console.log(`[CONFIG MISSING PART] You didn't have your epic name in config.`);
                  if(!this.email && !this.password) throw new Error (`[CONFIG MISSING PART] You didn't have your email or password.`);
                  if(!this.email) throw new Error (`[CONFIG MISSING PART] You didn't have your email in config!`);
                  if(!this.password) throw new Error (`[CONFIG MISSING PART] You didn't have your password in config!`);

                  console.log('Used syfes or aquas code.');
                  console.log('Github: https://github.com/Kekisatan/FortniteBot2/');

                   if(this.Modes.Crash || this.Modes.fakeplayer) {
                    this.checker = require('./resources/checker/checker.js');
                    console.clear();
                    this.checker.check();
                      return;
                    }
                    else{
                      this.main = require('./resources/main/main.js');
                      console.log('Main Bot on!');
                      this.main.run();
                    }
