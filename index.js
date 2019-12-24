                   const { email, password, YourAccountName, Modes } = require("./config.json");
                   this.email = email
                   this.password = password
                   this.Name = YourAccountName
                   this.Modes = Modes

                   if(!this.Name) console.log(`[CONFIG MISSING PART] You didn't have your epic name in config.`);
                  if(!this.email && !this.password) throw new Error (`[CONFIG MISSING PART] You didn't have your email or password.`);
                  if(!this.email) throw new Error (`[CONFIG MISSING PART] You didn't have your email in config!`);
                  if(!this.password) throw new Error (`[CONFIG MISSING PART] You didn't have your password in config!`);

                  console.log(`Used syfes or aquas code, lmao added a ton of things tho.\nGithub: https://github.com/Kekisatan/FortniteBot2/\n Please don't fork this and claim it as yours.`);

                   if(this.Modes.Crash || this.Modes.fakeplayer || this.Modes.annoying) {
                    this.checker = require('./resources/checker/checker.js');
                    this.checker.check();
                      return;
                    }
                    else{
                      this.main = require('./resources/main/index.js');
                      this.main.run();
                      console.log('Main Bot on!');
                    }
