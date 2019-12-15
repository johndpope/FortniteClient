# Fortnite Bot 2.0
Uses JavaScript to emulate a Fortnite client and can join parties through HTTP and change skins / emotes visually.


# Problem
Currenly there is a issue with partys with the bot.

# Skidders

- scum Lawin


# Example
```js
    const Fortnite = require('epicgames-fortnite-client');
     const { email, password, netcl } = require("./config.json");
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

                  const fortnite = await eg.runGame(Fortnite, {
                    netCL: netcl,
                    partyBuildId: '1:1:'
                  });
                  
                  const br = await fortnite.runSubGame(ESubGame.BattleRoyale);   
                  
                                      fortnite.communicator.on('party:invitation', async (invitation) => {
                      await invitation.accept()
                            current_party = invitation.party;
                            console.log(`[PARTY INVITED] ${invitation.meta["urn:epic:member:dn_s"]} has invited, the client will join shortly.`);
                      console.log(`[PARTY INFO] There is currently ${fortnite.party.members.length} members in the party.`);
                    });
                    
                    fortnite.communicator.on('friend:message', async (data) => {

                    var prefix = '!'
                    var args = data.message.split(" ");
                    var cargs = data.message.slice(prefix.length).split(/ +/);
                    var command = cargs.shift().toLowerCase();
                    var User = await eg.getProfile(data.friend.id);
                    
                          if(data.message.startsWith('CID_')) {
                              if(data.message === 'CID_') return fortnite.communicator.sendMessage(data.friend.id, "Please mention a cid.");
                            try {
                              cid = args[0];
                                this.fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + args[0] + "." + args[0]);
                                communicator.sendMessage(data.friend.id, "Skin set to " + args[0]);
                                  }
                                  catch(er) {
                                  fortnite.communicator.sendMessage(data.friend.id, er);
                                  }
                                }
                    
                                if(data.message.startsWith('EID_')) {
                                  if(data.message === 'EID_') return fortnite.communicator.sendMessage(data.friend.id, "Please mention a eid.");
                                  try {
                                  eid = args[0];
                                fortnite.party.me.clearEmote()
                                fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + args[0] + "." + args[0]);
                                fortnite.communicator.sendMessage(data.friend.id, "Emote set to " + args[0]);
                              }
                              catch(er) {
                              fortnite.communicator.sendMessage(data.friend.id, er);
                              }
                            }
                    
                            if(data.message.startsWith('Pickaxe_ID_')) {
                              if(data.message === 'Pickaxe_ID_') return fortnite.communicator.sendMessage(data.friend.id, "Please mention a pickaxe id.");
                              try {
                              pickaxe_id = args[0];
                                fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + args[0] + "." + args[0]);
                                fortnite.communicator.sendMessage(data.friend.id, "Pickaxe set to " + args[0]);
                                }
                              catch(err) {
                              fortnite.communicator.sendMessage(data.friend.id, err);
                            }
                          }
                          
                                                    if(data.message.startsWith('BID_')) {
                            if(data.message === 'BID_') return fortnite.communicator.sendMessage(data.friend.id, "Please mention a bid id.");
                            try {
                            bid = args[0];
                              fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + args[0] + "." + args[0]);
                              fortnite.communicator.sendMessage(data.friend.id, "Backbling set to " + args[0]);
                            }
                            catch(err) {
                            fortnite.communicator.sendMessage(data.friend.id, err);
                          }
                        }
                          
                    });
                  
                  fortnite.communicator.updateStatus("Example.");
                  });
  
```
  

# Requirements
- Node.JS
- Common Sense

# Code
- Syfe
- Aqua Plays
- Alot By Kekistanz.. (I mean alot)
- Terbau (for netcl thingy)
- MagmaReef
- SzymonLisowiec (For lib)

# Basic steps
1) open command prompt in your folder and do 'npm i Kekisatan/FortniteClient' (if you haven't installed this.)
2) Then run Install Packages.bat
6) Edit 'config.json' and put in your Fortnite bot details
7) Run 'Start Bot.bat' to start the bot

Report issues, this is still in beta.
