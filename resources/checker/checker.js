const crash = require('../modes/crash.js');
module.exports = {
  check: function() {
                  const { Modes, YourAccountName } = require('../../config.json');
    if(YourAccountName === 'YT XXSniper Clan') {
      return Throw new Error ('Fuck you kid.')
    }
                  if(Modes.Crash == true) {
                    crash.run();
                  }
                      }
                    }
