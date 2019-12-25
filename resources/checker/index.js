const crash = require('../modes/crash/crash.js');
const fakeplayer = require('../modes/fakeplayer/player.js');
module.exports = {
  check: function() {
                  const { Modes, YourAccountName } = require('../../config.json');
    if(YourAccountName === 'YT XXSniper Clan') {
    throw new Error ('Fuck you kid.');
    }
                  if(Modes.Crash == true) {
                    crash.run();
                  }
                      if(Modes.fakeplayer == true) {
                    fakeplayer.run();
                  }
                      }
                    }
