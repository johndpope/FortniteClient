# Fortnite Bot 2.0
Uses JavaScript to emulate a Fortnite client and can join parties through HTTP and change skins / emotes visually.

# Skidder

- scum Lawin


# Example
```js
    const Fortnite = require('epicgames-fortnite-client');
     const { email, password } = require("./config.json");
    const request = require("request-promise");
    const { ESubGame } = Fortnite;
    const { EPlatform, EInputType, EPartyPrivacy } = require('epicgames-client');
    const EGClient = require('epicgames-client').Client;

          let eg = new this.EGClient({ // For this make a new account that has nothing and put the details in here.
            email: config.email, // Remember to add your bot account email in here or it won't work!
            password: password,  // Remember to add your bot account password in here or it won't work!
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
            
              eg.init().then(async (success) => {

                var current_party;

                if(!success)
                  throw new Error('Cannot initialize EpicGames launcher.');

                if(!await eg.login())
                  throw new Error('Cannot login on EpicGames account.');

                  const fortnite = await eg.runGame(Fortnite);
                  
                  const br = await fortnite.runSubGame(ESubGame.BattleRoyale);   
                  
                  
                  fortnite.communicator.updateStatus("Example.");
                  });
  
```
  

# Requirements
- Node.JS
- Common Sense

      **Updates**
      
      - Removed copy everything feature
      - No more netcls lol
      

# Code
- Syfe
- Aqua Plays
- Alot By Kekistanz..

# Basic steps
1) open command prompt in your folder and do 'npm i Kekisatan/FortniteClient' (if you haven't installed this.)
2) Then run Install Packages.bat
6) Edit 'config.json' and put in your Fortnite bot details
7) Run 'Start Bot.bat' to start the bot

Report issues, this is still in beta.
