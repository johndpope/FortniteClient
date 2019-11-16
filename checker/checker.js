const crash = require('../modes/crash.js');
module.exports = {
  check: function() {
                  const config = require('../config.json');
                  if(config.Modes.Crash == true) {
                    crash.run();
                  }
                      }
                    }