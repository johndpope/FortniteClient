module.exports = {
  run: function() {
const EGClient = require('epicgames-client').Client;
                  const Fortnite = require('epicgames-fortnite-client');
                  const { EPlatform, EInputType, EPartyPrivacy } = require('epicgames-client');
                  const config = require('../../../config.json');
                  const { email, password, YourAccountName, Cosmetics, ApiDown } = require("../../../config.json");
                  const request = require("request-promise");
                  const { ESubGame } = Fortnite;

                console.log('Fake player mode turned on.');

                var netclurl = "https://fnapi.terax235.com/api/v1.2/build"
                var cid = Cosmetics.cid
                // var Console = config.Console

                request({
                  url: netclurl,
                  json: true
                }).then(results => {
                  var netcl = results.fortnite.netCL  
                  
                if(ApiDown.netcl == false) {
                  
                var fs = require('fs');
                var fileName = '../backup/netcl.json';
                var file = require('../backup/netcl.json');

                file.netcl = netcl;

                fs.writeFile(fileName, JSON.stringify(file, null, 5), function (err) {
                  if (err) return console.log(err);
                });
                
                  console.log('[Fortnite] Newest Netcl: ' + netcl);
                }
                else{
                  netcl = ApiDown.netcl
                  console.log('[Fortnite] The netcl has been set to ' + netcl + ', because you put it as that in config.')
                }

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
                      netCL: netcl,
                      partyBuildId: '1:1:' + netcl,
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
             // https://jsonstorage.net/api/items/47c6b54c-b978-4122-ad66-e0f8071cf5d9 for playlists
  
                              if(!netcl) return console.log(`For some reason the netcl isn't working, check the github maybe.`);
  
                              const br = await fortnite.runSubGame(ESubGame.BattleRoyale);   
  
                            async function setOutfit(member, asset, key, variants) {
                              await member.meta.setCosmeticLoadout({
                                  characterDef: asset,
                                  characterEKey: key || '',
                                  variants: variants || []
                              });
                        }
  
                        async function setPickaxe(member, asset, key, variants) {
                          await member.meta.setCosmeticLoadout({
                            pickaxeDef: asset,
                            pickaxeEKey: key || '',
                            variants: variants || []
                          })
                      }
  
                      async function setBackpack(member, asset, key, variants) {
                        await member.meta.setCosmeticLoadout({
                          backpackDef: asset,
                          backpackEKey: key || '',
                          variants: variants || []
                        })
                    }
                    
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
                        var profile = await eg.getProfile(member.id);
                        var EmoteProfile = JSON.parse(member.meta.schema.FrontendEmote_j);
                        if(Features.copy.emote == true) {
                          if(profile.id != eg.account.id) {
                            if(profile.id == Player.id){
                          fortnite.party.me.clearEmote();
                        fortnite.party.me.setEmote(EmoteProfile.FrontendEmote.emoteItemDef);
                        eid = EmoteProfile.FrontendEmote.emoteItemDef
                            }
                          }
                        }
                      });
  
  
                    fortnite.communicator.on('party:invitation', async (invitation) => {
                      await invitation.accept()
                            current_party = invitation.party;
                            var partyleader = await eg.getProfile(current_party.leader.id);
                            console.log('[PARTY INVITED] A player has invited the bot, the bot will join shortly.');
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
                  if(fortnite.party.members.length == 1) return {
                  }
                  });
  
                  fortnite.communicator.on('party:member:promoted', async (member) => {
                    var profile = await eg.getProfile(member.id)
                    var partyleader = await eg.getProfile(current_party.leader.id);
                    if(profile.name === 'Kekistanz') {
                      return console.log('[THE CURSE HAS BEEN PROMOTED] The person that posted this on github has been promoted! ');
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

                  const arrofskins = skins[Math.floor(Math.random() * skins.length)];
  
                  fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + arrofskins + '.' + arrofskins);
  
                  fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + bid + "." + bid);
           
                  fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + pickaxe_id + "." + pickaxe_id); // ALL OF THE THINGS ARE PULLED FROM ABOVE!
  
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
                  console.log('[PARTY MEMBER] ' + profile.name + ', Has joined!');
                  var memberprofile = JSON.parse(member.meta.schema.AthenaCosmeticLoadout_j);
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
  
          function crash() {
            if (fortnite.party.members.length < 1) {
           return fortnite.communicator.sendMessage(data.friend.id, `Theres no point when the the bot is alone :(.`);
           }
           fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters//./");
           fortnite.communicator.sendMessage(data.friend.id, `Crashed everyone in the party!`);
           console.log('[BOT UNUSEDABLE] The bot now crashes you if you invite it, restart the bot to fix this.');
           console.log('[BOT UNUSEABLE] This was caused by the crash command.');
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
          
                                  if (command === 'variant') {
                          let skinid = args.slice(2).join(" ");
                          if (!skinid) return fortnite.communicator.sendMessage(data.friend.id, 'Mention a skin name or a cid!');
                          if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, 'Mention a query! Examples: Mat1, Stage1');
                          if (!skinid == 'CID_') return fortnite.communicator.sendMessage(data.friend.id, 'Yeahhh, well thats not a cid.');
                          request({
                            url: 'https://fnserver.terax235.com/api/v1.2/variants/search',
                            json: true,
                            headers: {
                              'type': "skin",
                              'item': skinid,
                              'query': args[1]
                          }
                          }).then(query => {
                          const variants = [{"item":"AthenaCharacter","channel":query.data.channel,"variant":query.data.tag}];
              
                          setOutfit(fortnite.party.me, "/Game/Athena/Items/Cosmetics/Characters/" + query.data.parent + '.' + query.data.parent, undefined, variants)
                          fortnite.communicator.sendMessage(data.friend.id, 'Found style, ' + query.data.name.en)
                       }).catch(query => {
                        if(query.statusCode === 404){
                        return fortnite.communicator.sendMessage(data.friend.id, `Rejection: It might be that your skin you put in doesn't have styles or ` + skinid + `, is wrong.`);
                        }  
                      });
                      }
  
                        if(command === 'help') {
                          fortnite.communicator.sendMessage(data.friend.id, 'Thanks for using this bot ' + User.displayName + ', heres the commands, !skin !backling !leave !emote !banner !status !ready !platform !id !playlist !promote !kick !friend !unfriend !invite');
                        }
  
                        if(command === 'style') {
                          if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Pick one of the styles the bot has currently: skull ghoul renegade");
                          if(args[1].toLowerCase() == "skull") {
                            try{
                              fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/cid_030_athena_commando_m_halloween.cid_030_athena_commando_m_halloween");
  
                              const variants = [{"item":"AthenaCharacter","channel":"Progressive","variant":"Stage3"},
                              {"item":"AthenaCharacter","channel":"ClothingColor","variant":"Mat1"}];
  
                            setOutfit(fortnite.party.me, "/Game/Athena/Items/Cosmetics/Characters/cid_030_athena_commando_m_halloween.cid_030_athena_commando_m_halloween", undefined, variants);
                            fortnite.communicator.sendMessage(data.friend.id, 'Skin set to skull trooper, the variant is set to PURPLE.');
                            } catch(err){
                      console.log(err);
                    }
                          }
                          if(args[1].toLowerCase() == "ghoul") {
                            try {
                              fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/cid_029_athena_commando_f_halloween.cid_029_athena_commando_f_halloween");  
                              const variants = [{"item":"AthenaCharacter","channel":"Material","variant":"Mat3"}];
                                setOutfit(fortnite.party.me, "/Game/Athena/Items/Cosmetics/Characters/cid_029_athena_commando_f_halloween.cid_029_athena_commando_f_halloween", undefined, variants);
                                fortnite.communicator.sendMessage(data.friend.id, 'Skin set to ghoul trooper, variant set to PINK.');
                                }
                        catch(err){
                          console.log(err);
                        }
                          }
                          if(args[1].toLowerCase() == "renegade") {
                            const variants = [{"item":"AthenaCharacter","channel":"Material","variant":"Mat2"}];
                                  
                            setOutfit(fortnite.party.me, "/Game/Athena/Items/Cosmetics/Characters/CID_028_Athena_Commando_F.CID_028_Athena_Commando_F", undefined, variants);
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
          
                              if(data.message.startsWith('CID_')) {
                                if(data.message === 'CID_') return fortnite.communicator.sendMessage(data.friend.id, "Please mention a cid.");
                              try {
                                cid = args[0];
                                  fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + args[0] + "." + args[0]);
                                  eg.communicator.sendMessage(data.friend.id, "Skin set to " + args[0]);
                                    }
                                    catch(er) {
                                    eg.communicator.sendMessage(data.friend.id, er);
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
  
                            if(command === 'crash') {
                              try {
                                crash(); // Will make the bot unuseable
                                }
                              catch(err) {
                              fortnite.communicator.sendMessage(data.friend.id, err);
                            }
                          }
  
                          // Unused _
  
                        //   if(command === 'stats') {
                        //     if(!args[1]) return fortnite.communicator.sendMessage(data.friend.id, 'Mention a username.');
                        //     try {
                        //       let stats = await br.getStatsForPlayer(args[1]);
                        //     fortnite.communicator.sendMessage(data.friend.id, stats);
                        //     }
                        //     catch(err){
                        //       fortnite.communicator.sendMessage(data.friend.id, stats);
                        //     }
                        // }
                         //   Currently trying to find a way to show wins.
  
                        // Not working currently.
  
      
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

                          
                      if(command === 'ltm') { // Idea by !minein4#0001
                        var partyleader = await eg.getProfile(current_party.leader.id);
                        if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a playlist name.");
                        if(partyleader.displayName == eg.account.displayName) {
                        if(args[1].toLowerCase() == "50v50") {
                              fortnite.party.setPlaylist("50v50", 'Playlist_50v50').catch(err => console.log(err));
                              eg.communicator.sendMessage(data.friend.id, "Set playlist to 50v50");
                            }
                            if(args[1].toLowerCase() == "chameleon") {
                              fortnite.party.setPlaylist("Chameleon", 'Playlist_ChaCha').catch(err => console.log(err));
                              eg.communicator.sendMessage(data.friend.id, "Set playlist to Chameleon");
                            }
                            if(args[1].toLowerCase() == "arsenal") {
                              fortnite.party.setPlaylist("Arsenal", 'Playlist_Gungame_Reverse').catch(err => console.log(err));
                              eg.communicator.sendMessage(data.friend.id, "Set playlist to Arsenal");
                            }
                            if(args[1].toLowerCase() == "playground") {
                              fortnite.party.setPlaylist("Playground", 'Playlist_Playground').catch(err => console.log(err));
                              eg.communicator.sendMessage(data.friend.id, "Set playlist to Playground");
                            }
                            if(args[1].toLowerCase() == "arena") {
                              fortnite.party.setPlaylist("Arena", 'Playlist_ShowdownAlt_Trios').catch(err => console.log(err));
                              eg.communicator.sendMessage(data.friend.id, "Set playlist to Arena");
                            }
                            if(args[1].toLowerCase() == "tournament") {
                              fortnite.party.setPlaylist("Tournament", 'Playlist_ShowdownTesting_Duos').catch(err => console.log(err));
                              eg.communicator.sendMessage(data.friend.id, "Set playlist to Tournament");
                            }
                            if(args[1].toLowerCase() == "slide") {
                              fortnite.party.setPlaylist("Slide", 'Playlist_Slide_Squads').catch(err => console.log(err));
                              eg.communicator.sendMessage(data.friend.id, "Set playlist to Slide");
                            }
                            if(args[1].toLowerCase() == "tutorial") {
                              fortnite.party.setPlaylist("Tutorial", 'Playlist_Tutorial_1').catch(err => console.log(err));
                              eg.communicator.sendMessage(data.friend.id, "Set playlist to Tutorial");
                            }
                            if(args[1].toLowerCase() == "unvaulted") {
                              fortnite.party.setPlaylist("Unvaulted", 'Playlist_Tutorial_1').catch(err => console.log(err));
                              eg.communicator.sendMessage(data.friend.id, "Set playlist to Unvaulted");
                            }
                            if(args[1].toLowerCase() == "siphon") {
                              fortnite.party.setPlaylist("Siphon", 'Playlist_Vamp_Squad').catch(err => console.log(err));
                              eg.communicator.sendMessage(data.friend.id, "Set playlist to Siphon");
                            }
                            if(args[1].toLowerCase() == "bounty") {
                              fortnite.party.setPlaylist("Bounty", 'Playlist_Bounty_Squads').catch(err => console.log(err));
                              eg.communicator.sendMessage(data.friend.id, "Set playlist to Bounty");
                            }
                            if(args[1].toLowerCase() == "automatics") {
                              fortnite.party.setPlaylist("Automatics", 'Playlist_Auto_Duos').catch(err => console.log(err));
                              eg.communicator.sendMessage(data.friend.id, "Set playlist to Automatics");
                            }
                            if(args[1].toLowerCase() == "duos") {
                              fortnite.party.setPlaylist("Duos", 'Playlist_DefaultDuo').catch(err => console.log(err));
                              eg.communicator.sendMessage(data.friend.id, "Set playlist to Duos");
                            }
                            if(args[1].toLowerCase() == "solo") {
                              fortnite.party.setPlaylist("Solo", 'Playlist_DefaultSolo').catch(err => console.log(err));
                              eg.communicator.sendMessage(data.friend.id, "Set playlist to Solo");
                            }
                            if(args[1].toLowerCase() == "sqauds") {
                              fortnite.party.setPlaylist("Squads", 'Playlist_DefaultSquad').catch(err => console.log(err));
                              eg.communicator.sendMessage(data.friend.id, "Set playlist to Squads");
                            }
                        }
                      else {
                        eg.communicator.sendMessage(data.friend.id, `The party leader is ${partyleader.displayName}, not ${eg.account.displayName}`);
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
  
                                if(command === 'emoteall') {
                                  let emoteid = args.slice(5).join(" ");
                                  request({
                                    url: 'http://benbotfn.tk:8080/api/cosmetics/search/multiple?displayName=' + emoteid,
                                    json: true
                                }).then(query => {
                                  Object.keys(query).forEach(function(key) {
                                    if(query[key].type == "Emote") {
                                    fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + query[key].id + "." + query[key].id);
                                    }
                                  });
                                });
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
                                            fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + query[key].id + "." + query[key].id);
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
                                            fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + query[key].id + "." + query[key].id);
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
                                      fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + query[key].id + "." + query[key].id);
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
                                  fortnite.party.me.clearEmote()
                                fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + query[key].id + "." + query[key].id);
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
                                var partyleader = await eg.getProfile(current_party.leader.id);
                            if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a playlistName.");
                            if (!args[2]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a regionId.");
                              if(partyleader.displayName == eg.account.displayName) {
                                let lookup = args.slice(2).join(" ");
                                fortnite.party.setPlaylist(lookup, args[1]).catch(err => console.log(err));
                                eg.communicator.sendMessage(data.friend.id, "Set playlist to " + args[1] + " " + args[2]);
                                console.log(`[PARTY PLAYLIST] Set the playlist to "` + args[1] + `"`);
                              }
                                else {
                                  eg.communicator.sendMessage(data.friend.id, `The party leader is ${partyleader.displayName}, not ${eg.account.displayName}`);
                                }
                              }
  
                              if(command === "ready") {
                              if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention true/false.");
                              if(args[1].toLowerCase() == "true") {
                                fortnite.party.me.setReady(true);
                                fortnite.communicator.sendMessage(data.friend.id, "Ready!");
                              }
                              if(args[1].toLowerCase() == "false") {
                                fortnite.party.me.setReady(false);
                                fortnite.communicator.sendMessage(data.friend.id, "Unready!");
                              }
                            }
  
                            if(command === "platform") {
                              if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a platform.");
                              try {
                                fortnite.party.me.setPlatform("EPlatform." + args[1]);
                                eg.communicator.sendMessage(data.friend.id, "Set Platform to " + args[1] + " !");
                                  } catch {
                                    eg.communicator.sendMessage(data.friend.id, "Please use !platform PLATFORM");
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
                                var partyleader = await eg.getProfile(current_party.leader.id);
                              if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a party member's name.");
                              if(partyleader.displayName == eg.account.displayName) {  
                              let lookup = args.slice(1).join(" ");
                                if(lookup === eg.account.name) return fortnite.communicator.sendMessage(data.friend.id, "You can't promote yourself!");
                              const account = await eg.getProfile(lookup);
                              if(!account) return fortnite.communicator.sendMessage(data.friend.id, "That epic name must of been wrong.");
                              const member = fortnite.party.findMember(account.id);
                              if(!member) return fortnite.communicator.sendMessage(data.friend.id, `${account.name} Wasn't found in the party.`);
                              fortnite.party.promote(account.id);
                              fortnite.communicator.sendMessage(data.friend.id, "Promoted " + account.name + '!');
                              }
                              else {
                                eg.communicator.sendMessage(data.friend.id, `The party leader is ${partyleader.displayName}, not ${eg.account.displayName}`);
                              }
                            }
  
                                if(command === "kick") {
                                  var partyleader = await eg.getProfile(current_party.leader.id);
                              if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a party member's name.");
                              if(partyleader.displayName == eg.account.displayName) {   
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
                            else {
                              eg.communicator.sendMessage(data.friend.id, `The party leader is ${partyleader.displayName}, not ${eg.account.displayName}`);
                            }
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
                                  fortnite.party.setPrivacy(args[1])
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
                            eg.removeFriend(account.id);
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
  
                          if(command === "removerequest") {
                            if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a epic name to unfriend.");
                            try {
                              let lookup = args.slice(1).join(" ");
                              if(lookup === eg.account.name) return fortnite.communicator.sendMessage(data.friend.id, "You can't unfriend yourself!");
                            const account = await eg.getProfile(lookup);
                            if(!account) return fortnite.communicator.sendMessage(data.friend.id, "That epic name must of been wrong.");
                            eg.declineFriendRequest(account.id)
                              }
                            catch(err) {
                              fortnite.communicator.sendMessage(data.friend.id, "There was a error: " + err);
                            }
                          }
  
                            if(command === "invite") {
                              if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a epic name to invite.");
                              try {
                                let lookup = args.slice(1).join(" ");                                
                              const account = await eg.getProfile(lookup);
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

                            fortnite.communicator.updateStatus(config.Client.status);
                          });
                        }).catch(api => {
                          console.log('[Api Down] Currently the api for the netcl is down, Restarting and using backup netcl in, a few seconds'); 
                          const iferror = require('./netcl.js');
                          let run = iferror.run();
                          console.clear()
                        });
                      }
                    }
