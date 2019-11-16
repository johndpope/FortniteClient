const crash = require('../modes/crash.js');
module.exports = {
  check: function() {
                  const { Modes } = require('../../config.json');
                  if(Modes.Crash == true) {
                    crash.run();
                  }
                      }
                    }