module.exports = {
  run: function() {
    const Fortnite = require('epicgames-fortnite-client');
    const EpicGames = require('epicgames-client');
    const config = require('../../config.json')
     const { YourAccountName, Features, Cosmetics, Client } = require("../../config.json");
    const request = require("request-promise");
    const { ESubGame } = Fortnite;
    const skins = require('../features/skins.js').arr;
    const eg = require('../checker/eg.js').eg;
    const banners = require('../features/banners.js').arr;

    console.log('Main Bot on!');

              var benbot = 'http://benbotfn.tk:8080/api/cosmetics/search/multiple?displayName='
              var cid = Cosmetics.cid
              var bid = Cosmetics.bid
              var eid = Cosmetics.eid
              var pickaxe_id = Cosmetics.pickaxe_id
              var randombanner;
              var battlepasslevel = Cosmetics.battlepass
              // var Console = config.Console

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

              eg.init().then(async (success) => {

                var current_party;

                if(!success)
                  throw new Error('Cannot initialize EpicGames launcher.');

                if(!await eg.login())
                  throw new Error('Cannot login on EpicGames account.');

                  const fortnite = await eg.runGame(Fortnite, {
                    netcl: 69699696
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

                  var time = 0
                                    //Name of playlist  Playlist ID
         await fortnite.party.setPlaylist('The End', 'Playlist_Music_High');
         // https://jsonstorage.net/api/items/47c6b54c-b978-4122-ad66-e0f8071cf5d9 for playlists

                          const br = await fortnite.runSubGame(ESubGame.BattleRoyale);   
                
          console.log('[CLIENT] In the account ' + eg.account.displayName + ', there is only ' + fortnite.vbucks + ' vbucks on that account.');

          if(Client.joinparty == true) {
            try {

              if(!Player) return console.log(`[Player] Seems like the object for your account is missing.`);
  
            const PlayerStatus = await eg.getFriendStatus(Player.id);
  
              if(!PlayerStatus.status.includes("Battle Royale Lobby")) return;
  
              const party = await fortnite.Party.lookup(fortnite, PlayerStatus.properties["party.joininfodata.286331153_j"].partyId);
  
              fortnite.party.joinparty(PlayerStatus.properties["party.joininfodata.286331153_j"].partyId);
  
              console.log(`[JOINED] Joined ${Player.displayName}'s Party!`);
  
              fortnite.party = party
  
              current_party = party
  
            }
  
            catch(err) {
  
              if(err == 'Could not retrieve status, error: Error: Waiting for communicator event timeout exceeded: 5000 ms') {
                console.log(`[Party] Cannot join party because status wasn't found.`);
              }
  
              else {
                console.log(err)
              }
  
            }    

          }

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
          var profile = await eg.getProfile(member.id);
          if(time == 1) {

            if(member.id == eg.account.id) return;

          var frotend = JSON.parse(member.meta.schema.FrontendEmote_j)

          var frotendDef = frotend.FrontendEmote.emoteItemDef.slice(`'`);

          var frotendDefEID = frotendDef.substring(frotendDef.lastIndexOf(".") + 1)

          var EmoteProfile = frotendDefEID.replace(`'`, ``);
          
          if(Features.copy.emote == true && profile.id != eg.account.id && profile.id == Player.id && EmoteProfile != 'None') {
            fortnite.party.me.setEmote(EmoteProfile);
          eid = EmoteProfile
        }

      }
        });



                fortnite.communicator.on('party:invitation', async (invitation) => {
                  await invitation.accept()
                        current_party = invitation.party;
                        var partyleader = await eg.getProfile(current_party.leader.id);
                        console.log(`[PARTY INVITED] ${invitation.meta['urn:epic:member:dn_s']} has invited the bot, the bot will join shortly and they are on ${invitation.meta['urn:epic:conn:platform_s']}.`);
                  console.log('[PARTY INFO] The party leader of the party is ' + partyleader.displayName + `, there is currently ${fortnite.party.members.length} members in the party.`);
                });

                fortnite.communicator.on('party:member:kicked', async (member) => {
                  var profile = await eg.getProfile(member.id);
                  var partyleader = await eg.getProfile(current_party.leader.id);
                  console.log(`[PARTY ACTIVITY] ${profile.displayName} has been kicked by ${partyleader.displayName} from the party!`);
                });

              fortnite.communicator.on('party:member:left', async (member) => {
                var profile = await eg.getProfile(member.id)
                var partyleader = await eg.getProfile(current_party.leader.id);
              console.log(`[PARTY MEMBER] ${profile.displayName} has left the party.`);
              if (profile.displayName === eg.account.displayName) return console.log(`[BOT] The bot has been kicked!`);
              });

              fortnite.communicator.on('party:member:promoted', async (member) => {
                var profile = await eg.getProfile(member.id)
                var partyleader = await eg.getProfile(current_party.leader.id);
                if(profile.name === 'Kekistanz') {
                  console.log('[Owner] The person that posted this on github has been promoted! ');
                 }
                if(fortnite.party.members.length == 1) {
                  return console.log('[PARTY UNEXPECTED] The bot was either kicked or the party was abandoned.');
                }
                if (profile.displayName === eg.account.displayName) {
                  console.log('[PARTY PROMOTE] The bot has been promoted!');
                  fortnite.party.setPlaylist('The End', 'Playlist_Music_High')
                 return console.log(`[PARTY PLAYLIST] Set the playlist to "The End"`);
                }
                else {
                console.log('[PARTY PROMOTED] ' + profile.displayName + ', Has been promoted!');
                }
            });


            fortnite.communicator.on('party:member:joined', async (member) => {
            var profile = await eg.getProfile(member.id);
            var partyleader = await eg.getProfile(current_party.leader.id);
            if (member.role === 'CAPTAIN') {
              fortnite.party.meta.refreshSquadAssignments();
              fortnite.party.patch();
            }
            if(profile.name === 'Kekistanz') {
             console.log('The person that posted this on github joined!');
            }
            if (profile.displayName === eg.account.name) {
              time = 0

              const arrofskins = skins[Math.floor(Math.random() * skins.length)];

              if(Features.randomize.skin == true){
              fortnite.party.me.setOutfit(arrofskins);
              }
              else{
                if(cid == "CID_051_Athena_Commando_M_HolidayElf" && bid == "BID_445_Elf"){
                  fortnite.party.me.setVariant(cid, Cosmetics.variants);
                  }
                  else{
                    fortnite.party.me.setOutfit(cid);
                  }
              }

              fortnite.party.me.setBackpack(bid);
       
              fortnite.party.me.setPickaxe(pickaxe_id); // ALL OF THE THINGS ARE PULLED FROM ABOVE!
  
              if(Features.randomize.banner == true) {

              const arrofbanners = banners[Math.floor(Math.random() * banners.length)];

              if(arrofbanners == "StandardBanner") {
                randombanner = arrofbanners + Math.floor(Math.random() * 31) + 1
              }
              if(arrofbanners == "InfluencerBanner") {
                randombanner = arrofbanners + Math.floor(Math.random() * 58) + 1
              }
              else{
                if(arrofbanners == "StandardBanner") {
                  return;
                }
                randombanner = arrofbanners
              }

              randombannercolor = 'defaultcolor' + Math.floor(Math.random() * 8) + 1

              randombannerlevel = Math.floor(Math.random() * 100) + 1
       
              await fortnite.party.me.setBanner(randombannerlevel, randombanner, randombannercolor);
              
              fortnite.party.me.setBattlePass(true, randombannerlevel, randombannerlevel, 100, 100);

            }
              else{
              fortnite.party.me.setBattlePass(true, battlepasslevel, battlepasslevel, battlepasslevel);
            }

          
            
            fortnite.party.me.setEmote(eid);

            time = 1

            }
            else{
              console.log('[PARTY MEMBER] ' + profile.name + ', Has joined!');
              // var memberprofile = JSON.parse(member.meta.schema.AthenaCosmeticLoadout_j);
              console.log('[PARTY MEMBER ID] ' + profile.name + ', id is ' + profile.id);
              console.log(`[PARTY COUNT] Members count: ${fortnite.party.members.length}`);
            }
            });

    fortnite.communicator.on('friend:message', async (data) => {

      var prefix = '!'
      var args = data.message.split(" ");
      var cargs = data.message.slice(prefix.length).split(/ +/);
      var command = cargs.shift().toLowerCase();
      var User = await eg.getProfile(data.friend.id);

      async function findPlaylist(playlistName) {

        if(fortnite.party.me.role != 'CAPTAIN')
        return fortnite.communicator.sendMessage(data.friend.id, `The bot isn't party leader!`);

        request({
          url: 'https://jsonstorage.net/api/items/47c6b54c-b978-4122-ad66-e0f8071cf5d9',
          json: true
      }).then(query => {
        Object.keys(query).forEach(function(key) {
          if(query[key].displayName == playlistName) {
            if(JSON.parse(fortnite.party.meta.schema.PlaylistData_j).PlaylistData.playlistName == query[key].id)
            return fortnite.communicator.sendMessage(data.friend.id, `The playlist is already on that!`);

            fortnite.party.setPlaylist(query[key].displayName, query[key].id);
            return fortnite.communicator.sendMessage(data.friend.id, `Set playlist to ${query[key].displayName}`); 
          }
        });
      });

      }

      function crash() {
        if (fortnite.party.members.length < 1) {
       return fortnite.communicator.sendMessage(data.friend.id, `Theres no point when the the bot is alone :(.`);
       }
       fortnite.party.me.setOutfit("/./");
       fortnite.communicator.sendMessage(data.friend.id, `Crashed everyone in the party!`);
      }

      function members() {
        fortnite.communicator.sendMessage(data.friend.id, "Party Info");
        if (fortnite.party.members.length > 1) {
        fortnite.communicator.sendMessage(data.friend.id, `There is ${fortnite.party.members.length} members in the party!`);
        if(partyleader.displayName === eg.account.displayName) {
          fortnite.communicator.sendMessage(data.friend.id, `The bot is currently party leader.`)
        }
        else {
        fortnite.communicator.sendMessage(data.friend.id, `The party leader is ${partyleader.displayName}`);
        }
      }
      else {
        fortnite.communicator.sendMessage(data.friend.id, `The bot is alone :(`);
       }
      }

    
      // Fortnite commands start here

                    if(command === 'help') {
                      fortnite.communicator.sendMessage(data.friend.id, '\nThanks for using this bot ' + User.displayName + ', heres the commands, \n!skin %skinName% - Sets the skin name you provide \n !backling %backlingName% - Sets the backbling you provide \n !leave - Leaves the party that its currently in \n !emote - Does the emote you provide \n !banner %banner% %ect..% !status !ready !platform !id !playlist !promote !kick !friend !unfriend !invite');
                    }

                    if(command === 'style') {
                      if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Pick one of the styles the bot has currently: skull ghoul renegade");
                      if(args[1].toLowerCase() == "skull") {
                        try{
                          fortnite.party.me.setVariant("cid_030_athena_commando_m_halloween", [{"item":"AthenaCharacter","channel":"Progressive","variant":"Stage3"},{"item":"AthenaCharacter","channel":"ClothingColor","variant":"Mat1"}]);

                        fortnite.communicator.sendMessage(data.friend.id, 'Skin set to skull trooper, the variant is set to PURPLE.');
                        } catch(err){
                  console.log(err);
                }
                      }
                      if(args[1].toLowerCase() == "ghoul") {
                        try {
                          fortnite.party.me.setVariant("cid_029_athena_commando_f_halloween", [{"item":"AthenaCharacter","channel":"Material","variant":"Mat3"}]);

                            fortnite.communicator.sendMessage(data.friend.id, 'Skin set to ghoul trooper, variant set to PINK.');
                            }
                    catch(err){
                      console.log(err);
                    }
                      }
                      if(args[1].toLowerCase() == "renegade") {
                              
                        fortnite.party.me.setVariant("CID_028_Athena_Commando_F", [{"item":"AthenaCharacter","channel":"Material","variant":"Mat2"}]);
                        fortnite.communicator.sendMessage(data.friend.id, "Skin set to Renegade Raider, the variant is on CHECKERED.");
                      }
                      else{
                        if(args[1].toLowerCase() == "renegade") {
                          return;
                        }
                        if(args[1].toLowerCase() == "ghoul") {
                          return;
                        }
                        if(args[1].toLowerCase() == "skull") {
                          return;
                        }
                        return fortnite.communicator.sendMessage(data.friend.id, "Thats not a correct value!");
                      }
                    } // Merged commands into one command.
      

                    if(command === 'ltm') findPlaylist(args.slice(1).join(" ")); 

                    if(command == 'join') {
                      if(!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please include a party id, when doing this command.");
                      if(args[1] == 'sameparty') {
                        fortnite.communicator.sendMessage(data.friend.id, "No point but why not.");
                        fortnite.party.joinparty(fortnite.party.id);
                        return;
                      }
                      fortnite.party.joinparty(args[1]);
                      fortnite.communicator.sendMessage(data.friend.id, "Joined, erros might occur.");
                    }
      
                          if(data.message.startsWith('CID_')) {
                            if(data.message === 'CID_') return fortnite.communicator.sendMessage(data.friend.id, "Please mention a cid.");
                          try {
                            cid = args[0];
                              fortnite.party.me.setOutfit(args[0]);
                              fortnite.communicator.sendMessage(data.friend.id, "Skin set to " + args[0]);
                                }
                                catch(er) {
                                fortnite.communicator.sendMessage(data.friend.id, er);
                                }
                              }
                  
                              if(data.message.startsWith('EID_')) {
                                if(data.message === 'EID_') return fortnite.communicator.sendMessage(data.friend.id, "Please mention a eid.");
                                try {
                                eid = args[0];
                              fortnite.party.me.setEmote(args[0]);
                              fortnite.communicator.sendMessage(data.friend.id, "Emote set to " + args[0]);
                            }
                            catch(er) {
                            fortnite.communicator.sendMessage(data.friend.id, er);
                            }
                          }

                          if(data.message.startsWith('Emoji_')) {
                            if(data.message === 'Emoji_') return fortnite.communicator.sendMessage(data.friend.id, "Please mention a Emoji id.");
                            try {
                            eid = args[0];  
                            fortnite.party.me.setEmoji(args[0]); 
                            fortnite.communicator.sendMessage(data.friend.id, "Emoji set to " + args[0]);
                            }
                              catch(err) {
                              fortnite.communicator.sendMessage(data.friend.id, err);
                              }
                          }
                          
                          if(command == 'blockfriends') {
                            if(args[1] == '--force') {
                                await eg.blockFriends(User);
                                fortnite.communicator.sendMessage(data.friend.id, "Blocked all, execpt you..");
                            }

                            else {
                                  fortnite.communicator.sendMessage(data.friend.id, "Are you sure? Reply with 'no' or 'yes', also this won't block you.");
                                  fortnite.communicator.once(`friend#${User.id}:message`, async (data) => {
                                     var message = data.message
                                        if(message == 'yes') {
                                        await eg.blockFriends(User);
                                        fortnite.communicator.sendMessage(data.friend.id, "Blocked all, execpt you..");
                                        }
                                        
                                        if(message == 'no') {
                                          fortnite.communicator.sendMessage(data.friend.id, "Alright, didn't.");
                                          }

                                          else{
                                          fortnite.communicator.sendMessage(data.friend.id, "Invaild.");
                                          }
                                  });
                            }
                          }

                          if(command == 'unblockfriends') {
                            await eg.unblockFriends();
                            fortnite.communicator.sendMessage(data.friend.id, "Unblocked them.");
                          }
                  
                          if(data.message.startsWith('Pickaxe_ID_')) {
                            if(data.message === 'Pickaxe_ID_') return fortnite.communicator.sendMessage(data.friend.id, "Please mention a pickaxe id.");
                            try {
                            pickaxe_id = args[0];
                              fortnite.party.me.setPickaxe(args[0]);
                              fortnite.communicator.sendMessage(data.friend.id, "Pickaxe set to " + args[0]);
                              }
                            catch(err) {
                            fortnite.communicator.sendMessage(data.friend.id, err);
                          }
                        }

                        if(command === 'joinfriend') {
                          var name = args.slice(1).join(" ");
                          if(!name) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a friend.")
                          try {

                            var Friend = await eg.getProfile(name);

                          const FriendStatus = await eg.getFriendStatus(Friend.id);
                
                            if(!FriendStatus.status.includes("Battle Royale Lobby")) return;
                
                            const party = await fortnite.Party.lookup(fortnite, FriendStatus.properties["party.joininfodata.286331153_j"].partyId);
                
                            fortnite.party.joinparty(FriendStatus.properties["party.joininfodata.286331153_j"].partyId);
                
                            console.log(`[JOINED] Joined ${Friend.displayName}'s Party!`);

                            fortnite.communicator.sendMessage(data.friend.id, `Joined ${Friend.displayName}'s party.`)
                
                            fortnite.party = party
                
                            current_party = party
                
                          }
                
                          catch(err) {
                
                            if(err == 'Could not retrieve status, error: Error: Waiting for communicator event timeout exceeded: 5000 ms') {
                              console.log(`[Party] Cannot join party because status wasn't found.`);
                              fortnite.communicator.sendMessage(data.friend.id, "Cannot join party because status wasn't found.")
                            }
                
                            else {
                              console.log(err)
                            }
                
                          }    
              
                        }

                        if(command === 'crash') {
                          try {
                            crash(); // Will make the bot unuseable
                            }
                          catch(err) {
                          fortnite.communicator.sendMessage(data.friend.id, err);
                        }
                      }
  
                        if(data.message.startsWith('BID_')) {
                          if(data.message === 'BID_') return fortnite.communicator.sendMessage(data.friend.id, "Please mention a bid id.");
                          try {
                          bid = args[0];
                            fortnite.party.me.setBackpack(args[0]);
                            fortnite.communicator.sendMessage(data.friend.id, "Backbling set to " + args[0]);
                          }
                          catch(err) {
                          fortnite.communicator.sendMessage(data.friend.id, err);
                        }
                      }

                          if(command === 'party') {
                            try {
                              members();
                                }
                                catch(err) {
                                fortnite.communicator.sendMessage(data.friend.id, err);
                              }
                            }

                                if(command === "skin") {
                                  let skinname = args.slice(1).join(" ");
                                  if (!skinname) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a skin name.");
                                  request({
                                    url: benbot + skinname,
                                    json: true
                                }).then(query => {
                                    try {
                                      Object.keys(query).forEach(function(key) {
                                        if(query[key].type == "Outfit") {
                                        cid = query[key].id;
                                        fortnite.party.me.setOutfit(query[key].id);
                                        fortnite.communicator.sendMessage(data.friend.id, "Found " + query[key].displayName + ', the id is ' + query[key].id);
                                        }
                                      });
                                    }
                                    catch(err) {
                                      console.log(err);
                                    }
                                  });
                                }

                                if(command === "pickaxe") {
                                  let pickaxe = args.slice(1).join(" ");
                                  if (!pickaxe) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a pickaxe name.");
                                  request({
                                    url: benbot + pickaxe,
                                    json: true
                                }).then(query => {
                                    try {
                                      Object.keys(query).forEach(function(key) {
                                        if(query[key].type == "Harvesting Tool") {
                                          pickaxe_id = query[key].id;
                                        fortnite.party.me.setPickaxe(query[key].id);
                                        fortnite.communicator.sendMessage(data.friend.id, "Found " + query[key].displayName + ', the id is ' + query[key].id);
                                        }
                                      });
                                    }
                                    catch(err) {
                                      console.log(err);
                                    }
                                  });
                                }
              
                            if(command === "backbling") {
                              let backlingname = args.slice(1).join(" ");
                              if (!backlingname) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a backling name.");
                              request({
                                url: benbot + backlingname,
                                json: true
                            }).then(query => {
                              try {
                                Object.keys(query).forEach(function(key) {
                                  if(query[key].type == "Back Bling") {
                                  bid = query[key].id;
                                  fortnite.party.me.setBackpack(query[key].id);
                                  fortnite.communicator.sendMessage(data.friend.id, "Found " + query[key].displayName + ', the id is ' + query[key].id);
                                  }
                                });
                              }
                              catch(err) {
                                console.log(err);
                              }
                            });
                          }
      
                          if(command === "emote") {
                          let emotename = args.slice(1).join(" ");
                          if (!emotename) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a emote name.");
                          request({
                            url: benbot + emotename,
                            json: true
                        }).then(query => {
                          Object.keys(query).forEach(function(key) {
                            if(query[key].type == "Emote") {
                              eid = query[key].id;
                            fortnite.party.me.setEmote(query[key].id);
                            fortnite.communicator.sendMessage(data.friend.id, "Found " + query[key].displayName + ', the id is ' + query[key].id);
                            }
                          });
                        });
                      }

                      if(command === "banner") {
                      if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a banner name.");
                      if(args[1].toLowerCase() == "pewdiepie") {
                        fortnite.party.me.setBanner(Cosmetics.bannerlevel, Cosmetics.banner, Cosmetics.bannercolor);
                      }
                      try {
                      fortnite.party.me.setBanner(100, args[1], args[2]);
                      fortnite.communicator.sendMessage(data.friend.id, "Banner set to " + args[1] + " " + args[2]);
                      }
                      catch(err) {
                      fortnite.communicator.sendMessage(data.friend.id, "There was a error: " + err);
                      }
                    }

                        if(command === "status") {
                        if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a status.");
                        try {
                        var mess = data.message.replace("!status", "");
                        fortnite.communicator.updateStatus(mess);
                        fortnite.communicator.sendMessage(data.friend.id, 'Status set to ' + mess + "!");
                      }
                      catch(err) {
                        fortnite.communicator.sendMessage(data.friend.id, "There was a error: " + err);
                      }
                    }

                          if(command === "playlist") {

                        if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a playlistName.");

                        if (!args[2]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a tournamentid.");

                        if(fortnite.party.me.role != 'CAPTAIN')
                        return fortnite.communicator.sendMessage(data.friend.id, `The partyleader isn't ${eg.account.displayName}.`);

                            let lookup = args.slice(2).join(" ");

                            fortnite.party.setPlaylist(lookup, args[1]);

                            fortnite.communicator.sendMessage(data.friend.id, "Set playlist to " + args[1] + " " + args[2]);

                            console.log(`[PARTY PLAYLIST] Set the playlist to "` + args[1] + `"`);
                          }

                          if(command === "state") {
                            if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a state.");
                            fortnite.party.me.setState(args[1]);
                            fortnite.communicator.sendMessage(data.friend.id, "Set state to " + args[1]);
                          }

                        if(command === "platform") {
                          if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a platform.");
                          try {
                            fortnite.party.me.setPlatform("EPlatform." + args[1]);
                            fortnite.communicator.sendMessage(data.friend.id, "Set Platform to " + args[1] + " !");
                              } catch {
                                fortnite.communicator.sendMessage(data.friend.id, "Please use !platform PLATFORM");
                              }
                            }

                              if(command === "lookup") {
                            if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a epic display name.");
                            try {
                              let lookup = args.slice(1).join(" ");
                            const account = await eg.getProfile(lookup);
                            if(!account) return fortnite.communicator.sendMessage(data.friend.id, "That epic name must of been wrong.");
                              fortnite.communicator.sendMessage(data.friend.id, `${account.name}'s id is: ${account.id}.`);
                            }
                            catch(err) {
                              fortnite.communicator.sendMessage(data.friend.id, "There was a error: " + err);
                            }
                          }

                          if(command === "promote") {
                          if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a party member's name.");

                        if(fortnite.party.me.role != 'CAPTAIN')
                        return fortnite.communicator.sendMessage(data.friend.id, `The partyleader isn't ${eg.account.displayName}.`);

                          let lookup = args.slice(1).join(" ");

                            if(lookup === eg.account.name) return fortnite.communicator.sendMessage(data.friend.id, "You can't promote yourself!");

                          const account = await eg.getProfile(lookup);

                          if(!account) return fortnite.communicator.sendMessage(data.friend.id, "That epic name must of been wrong.");

                          const member = fortnite.party.findMember(account.id);

                          if(!member) return fortnite.communicator.sendMessage(data.friend.id, `${account.name} Wasn't found in the party.`);

                          fortnite.party.promote(account.id);

                          fortnite.communicator.sendMessage(data.friend.id, "Promoted " + account.name + '!');
                        }

                            if(command === "kick") {
                          if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a party member's name.");

                          if(fortnite.party.me.role != 'CAPTAIN')
                          return fortnite.communicator.sendMessage(data.friend.id, `The partyleader isn't ${eg.account.displayName}.`);
  
                          let lookup = args.slice(1).join(" ");

                            if(lookup === eg.account.name) return fortnite.communicator.sendMessage(data.friend.id, "You can't kick yourself!");

                          const account = await eg.getProfile(lookup);

                          if(!account) return fortnite.communicator.sendMessage(data.friend.id, "That epic name must of been wrong.");

                          const partymember = fortnite.party.findMember(account.id);

                          if(!partymember) return fortnite.communicator.sendMessage(data.friend.id, `${account.name} Wasn't found in the party.`);

                          fortnite.party.kick(account.id);

                          fortnite.communicator.sendMessage(data.friend.id, "Kicked " + account.name + '!');

                          console.log(`[PARTY ACTIVITY] ${User.displayName} has been request to kick ${account.displayName} from the party.`);
                      }

                              if(command === "leave") {
                                try {
                                  if (fortnite.party.members.length < 1) {
                                    fortnite.communicator.sendMessage(data.friend.id, `The bot can't leave the party when theres nobody in it!`);
                                  }
                                  else {
                                    fortnite.party.leave();
                                    fortnite.communicator.sendMessage(data.friend.id, "The bot has left.");
                                    }
                                    }
                                  catch(err) {
                                    fortnite.communicator.sendMessage(data.friend.id, "There was a error: " + err);
                                  }
                                }

                            if(command === "friend") {
                          if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a epic name to add.");
                          try {
                            let lookup = args.slice(1).join(" ");
                            if(lookup === eg.account.name) return fortnite.communicator.sendMessage(data.friend.id, "You can't friend yourself!");
                          const account = await eg.getProfile(lookup);
                          if(!account) return fortnite.communicator.sendMessage(data.friend.id, "That epic name must of been wrong.");
                          const isFriended = await eg.hasFriend(account.id);
                          if(isFriended) {
                         return fortnite.communicator.sendMessage(data.friend.id, `${account.name} is already friended.`);
                          }
                          eg.inviteFriend(account.id);
                          fortnite.communicator.sendMessage(data.friend.id, "Friended! " + account.name + '!');
                              }
                            catch(err) {
                              fortnite.communicator.sendMessage(data.friend.id, "There was a error: " + err);
                            }
                          }

                          if(command === "privacy") {
                            if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a vaild privacy name.");
                            try {
                              if(fortnite.party.me.role != 'CAPTAIN')
                              return fortnite.communicator.sendMessage(data.friend.id, `The partyleader isn't ${eg.account.displayName}.`);
                              fortnite.party.setPrivacy(args[1]);
                              fortnite.communicator.sendMessage(data.friend.id, "Privacy set to " + args[1] + '.');
                            } catch(err) {
                                fortnite.communicator.sendMessage(data.friend.id, "There was a error: " + err);
                              }
                            }

                      if(command === "unfriend") {
                        if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a epic name to unfriend.");
                        try {
                          let lookup = args.slice(1).join(" ");
                          if(lookup === eg.account.name) return fortnite.communicator.sendMessage(data.friend.id, "You can't unfriend yourself!");
                        const account = await eg.getProfile(lookup);
                        if(!account) return fortnite.communicator.sendMessage(data.friend.id, "That epic name must of been wrong.");
                        const isFriended = await eg.hasFriend(account.id);
                        if(isFriended) {
                        await eg.removeFriend(account.id);
                        fortnite.communicator.sendMessage(data.friend.id, "Unfriended! " + account.name + '!');
                        }
                        else{
                          fortnite.communicator.sendMessage(data.friend.id, `${account.name} wasn't even friended.`);
                            }
                          }
                        catch(err) {
                          fortnite.communicator.sendMessage(data.friend.id, "There was a error: " + err);
                        }
                      }

                      if(command === "block") {
                        if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a epic name to block.");
                        try {
                          let user = args.slice(1).join(" ");
                          if(user === eg.account.name) return fortnite.communicator.sendMessage(data.friend.id, "You can't block yourself!");
                        const account = await eg.getProfile(user);
                        if(!account) return fortnite.communicator.sendMessage(data.friend.id, "That epic name must of been wrong.");
                        await eg.blockFriend(account.id);
                        fortnite.communicator.sendMessage(data.friend.id, "Blocked" + account.name + '!');
                          }
                        catch(err) {
                          fortnite.communicator.sendMessage(data.friend.id, "There was a error: " + err);
                        }
                      }

                      if(command === "graphql") {
                        if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a action to do."); 
                        if(args[1] == 'icon') {
                          try {
                            const d = await eg.graphql('icon', args.slice(2).join(" "));
                            var dataU = JSON.parse(d);
                            if(dataU.data.UserSettings.updateSetting.success == true) {
                            fortnite.communicator.sendMessage(data.friend.id, `\nSuccessfully set the icon to ${args.slice(2).join(" ")}, also would you like a color, there are three colors,\n green, blue, pink, purple, gray, yellow, ect..\n If no respond no.`);
                            fortnite.communicator.once(`friend#${User.id}:message`, async (data) => {
                              const Colors = require('epicgames-client/enums/Kairos Profile Colors');
                                var Color = Colors[data.message] || Colors["gray"];
                                if(data.message == 'stop') return;
                                const Data = await eg.graphql('icon', args.slice(2).join(" "), Color);
                                if(Data.data.UserSettings.updateSetting.success == true) {
                                  fortnite.communicator.sendMessage(data.friend.id, `Successfully set the color to ${Color}.`);
                                }
                                else {
                                  fortnite.communicator.sendMessage(data.friend.id, `That was werid, success was false...`); 
                                }
                            });
                            }
                            if(dataU.data.UserSettings.updateSetting.success == false) {
                              fortnite.communicator.sendMessage(data.friend.id, `Either the bot doesn't own it or ${args.slice(1).join(" ")} isn't vaild.`); 
                            }
                            }
                          catch(err) {
                            fortnite.communicator.sendMessage(data.friend.id, "There was a error: " + err);
                            console.log(err)
                          }
                        }
                        if(args[1] == 'currentprofile') {
                          const a = await eg.graphql('currenticon');
                          return fortnite.communicator.send(data.friend.id, `${a}`);
                        }
                      }

                      if(command === "unblock") {
                        if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a epic name to unblocked.");
                        try {
                          let user = args.slice(1).join(" ");
                          if(user === eg.account.name) return fortnite.communicator.sendMessage(data.friend.id, "You can't unblocked yourself!");
                        const account = await eg.getProfile(user);
                        if(!account) return fortnite.communicator.sendMessage(data.friend.id, "That epic name must of been wrong.");
                        await eg.unblock(account.id);
                        fortnite.communicator.sendMessage(data.friend.id, "Unblocked" + account.name + '!');
                          }
                        catch(err) {
                          fortnite.communicator.sendMessage(data.friend.id, "There was a error: " + err);
                        }
                      }

                        if(command === "invite") {
                          if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a epic name to invite.");
                          try {
                            let user = args.slice(1).join(" ");                                
                          const account = await eg.getProfile(user);
                          if(!account) return fortnite.communicator.sendMessage(data.friend.id, "That epic name must of been wrong.");
                          const isFriended = await eg.hasFriend(account.id);
                          if(isFriended) {
                            const partymember = fortnite.party.findMember(account.id);
                          if(partymember) return fortnite.communicator.sendMessage(data.friend.id, `${account.name} Is in the party wahts da damn point.`);
                          if(lookup === eg.account.name) return fortnite.communicator.sendMessage(data.friend.id, "You can't invite yourself!");
                          fortnite.party.invite(account.id);
                          fortnite.communicator.sendMessage(data.friend.id, "Invited " + account.name + '!');
                          }
                          else{
                            fortnite.communicator.sendMessage(data.friend.id, `${account.name} wasn't even friended.`);
                              }
                            }
                          catch(err) {
                            fortnite.communicator.sendMessage(data.friend.id, "There was a error: " + err);
                          }
                        }

                      });

                        fortnite.communicator.updateStatus(Client.status);
                      });
                    }
                  }