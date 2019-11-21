this.EGClient = require('epicgames-client').Client;
this.config = require('../../config.json');
const { EPlatform, EInputType, EPartyPrivacy } = require('epicgames-client');

let eg = new this.EGClient({ // For this make a new account that has nothing and put the details in here.
  email: this.config.email, // Remember to add your bot account email in here or it won't work!
  password: this.config.password,  // Remember to add your bot account password in here or it won't work!
  debug: console.log,
  useWaitingRoom: false,
  autoPresenceUpdating: false,
  defaultPartyConfig: {
    privacy: EPartyPrivacy.PUBLIC,
    joinConfirmation: false,
    joinability: 'OPEN', // Opens the party and allows it to be joined
    maxSize: 16,
    subType: 'default',
    type: 'default',
    inviteTTL: 14400,
    chatEnabled: true,
}
  })

  exports.eg = eg