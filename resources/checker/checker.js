const crash = require('../modes/crash/index.js');
const fakeplayer = require('../modes/fakeplayer/index.js');
const fakeplayer = require('../modes/annyoingmode/index.js');
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
                  if(Modes.annyoing) {

                  }
                      }
                    }
