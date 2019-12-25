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

                var cid = Cosmetics.cid
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

                const eg = require('../../checker/eg.js').eg;

                eg.init().then(async (success) => {

                  var current_party;

                  if(!success)
                    throw new Error('Cannot initialize EpicGames launcher.');

                  if(!await eg.login())
                    throw new Error('Cannot login on EpicGames account.');

                    const fortnite = await eg.runGame(Fortnite, {
                      netCL: 69699696,
                      });

                      var Player = await eg.getProfile(YourAccountName);
                      var Kekistanz = await eg.getProfile('Kekistanz');
                      var friendrequest = await eg.getRawFriends(true);
  
                        friendrequest.forEach(async friendrequest => {
                          switch(friendrequest.status.toLowerCase()) {
      
                            case 'pending':
      
                            switch(friendrequest.accountId) {
      
                              case Kekistanz.id:
                                await eg.acceptFriendRequest(friendrequest.accountId);
                                console.log(`[Owner] Kekistanz had a friend request on this bot, accepted!`);
                              break;
      
                              case Player.id:
                                await eg.acceptFriendRequest(friendrequest.accountId);
                                console.log('[FRIEND PENDING] You had a request pending to the bot, the bot accepted it.')
                                break;
      
                                default:
                                  const UnkownUser = await eg.getProfile(friendrequest.accountId);
      
                                  console.log(`[FRIEND PENDING] ${UnkownUser.displayName} had a request pending, but the bot doesn't know who he is.`);
                                  
                                  await eg.declineFriendRequest(friendrequest.accountId);
                                  break;
                            }
      
                                break;
                          }
                        });
                                        //Name of playlist  Playlist ID
             await fortnite.party.setPlaylist('The End', 'Playlist_Music_High');
             // https://jsonstorage.net/api/items/47c6b54c-b978-4122-ad66-e0f8071cf5d9 for playlists
  
                              const br = await fortnite.runSubGame(ESubGame.BattleRoyale);   
                    
              console.log('[CLIENT] In the account ' + eg.account.displayName + ', there is only ' + fortnite.vbucks + ' vbucks on that account.');
  
              // console.log(fortnite.inventory.findItemsByClass('AthenaCharacter'));
              // Tells you everything that is a fortnite character in the bots locker, which there isn't one.
  
              fortnite.communicator.on('friend:request', async data => {
                var UnkownPlayer = await eg.getProfile(data.friend.id);
                switch(data.friend.id) {
                  
                    case Kekistanz.id:
                      eg.acceptFriendRequest(data.friend.id).then(async (ac_result) => {
                        console.log('[FRIEND REQUEST] Owner sent a friend request, accepting.');
                    });
                      break;
    
                      case Player.id:
                        eg.acceptFriendRequest(data.friend.id).then(async (ac_result) => {
                          console.log('[FRIEND REQUEST] You sent a friend request! Added!');
                      });
                        break;
                        
                        default:
                          eg.declineFriendRequest(data.friend.id).then(async (ac_result) => {
                            console.log(`[FRIEND REQUEST] ${UnkownPlayer.displayName} sent a friend request! The bot declined the friend request!`);
                            console.log('[INFO] If it was you, change your name in config!');
                        });
                          break;
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
              switch(profile.displayName) {

                case eg.account.displayName:
                  switch(fortnite.party.members.length) {

                    case 1:
                      console.log(`[BOT] The bot has been kicked!`);
                    break;

                  }
                break;

                default:
                  console.log(`[PARTY MEMBER] ${profile.displayName} has left the party.`);
                break;

              }
            });

            fortnite.communicator.on('party:member:promoted', async (member) => {
              var profile = await eg.getProfile(member.id);

              switch(fortnite.party.members.length) {


                case 1:
                  console.log('[PARTY UNEXPECTED] The bot was either kicked or the party was abandoned.');
                break;


                default:

              switch(profile.displayName) {

                case 'Kekistanz':
                  console.log("[Owner] Kekistanz got promoted!");
                break;

                case eg.account.displayName:

                  console.log('[PARTY PROMOTE] The bot has been promoted!');
                  fortnite.party.setPlaylist('The End', 'Playlist_Music_High');
                 console.log(`[PARTY PLAYLIST] Set the playlist to "The End"`);

                 break;

                 default:
                  console.log('[PARTY PROMOTED] ' + profile.displayName + ', Has been promoted!');
                  break;

              }

            }
          });

            fortnite.communicator.on('party:member:joined', async (member) => {
              var profile = await eg.getProfile(member.id);
  
              switch(profile.name) {
  
                case 'Kekistanz':
                  console.log('The person that posted this on github joined!');
                break;
  
                case eg.account.name:
  
                  const arrofskins = skins[Math.floor(Math.random() * skins.length)];
  
                  switch(Features.randomize.skin) {
  
                    case true: 
                    fortnite.party.me.setOutfit(arrofskins);
                    break;
  
                    default:
                      switch(cid) {
                        case "CID_051_Athena_Commando_M_HolidayElf":
                          fortnite.party.me.setVariant(cid, Cosmetics.variants);
                        break;
  
                        default:
                          fortnite.party.me.setOutfit(cid);
                        break;
                      }
                    break;
  
                  }
    
                  fortnite.party.me.setBackpack(bid);
           
                  fortnite.party.me.setPickaxe(pickaxe_id); // ALL OF THE THINGS ARE PULLED FROM ABOVE!
      
                  fortnite.party.me.setBattlePass(true, battlepasslevel, battlepasslevel, battlepasslevel);
  
                  switch(Features.randomize.banner) {
  
                    case true:
  
                      const arrofbanners = banners[Math.floor(Math.random() * banners.length)];
  
                      switch(arrofbanners) {
                        case "StandardBanner":
                          randombanner = arrofbanners + Math.floor(Math.random() * 31) + 1
                          break;
  
                          case "InfluencerBanner":
                            randombanner = arrofbanners + Math.floor(Math.random() * 58) + 1
                          break;
  
                          default:
                            randombanner = arrofbanners
                          break;
                      }
        
                      randombannercolor = 'defaultcolor' + Math.floor(Math.random() * 8) + 1
        
                      randombannerlevel = Math.floor(Math.random() * 100) + 1
               
                      await fortnite.party.me.setBanner(randombannerlevel, randombanner, randombannercolor);
                      
                      fortnite.party.me.setBattlePass(true, randombannerlevel, randombannerlevel, 100, 100);
        
                    break;
                    
                      default:
                        fortnite.party.me.setBattlePass(true, battlepasslevel, battlepasslevel, battlepasslevel);
                      break;
  
                  }
  
                  fortnite.party.me.setEmote(eid);
  
                break;
  
  
                default:
                  console.log('[PARTY MEMBER] ' + profile.name + ', Has joined!');
                  // var memberprofile = JSON.parse(member.meta.schema.AthenaCosmeticLoadout_j);
                  console.log('[PARTY MEMBER ID] ' + profile.name + ', id is ' + profile.id);
                  console.log(`[PARTY COUNT] Members count: ${fortnite.party.members.length}`);
                break;
  
                  }
              });
              
  
                fortnite.communicator.on('friend:message', async (data) => {

                  var prefix = '!'
                  var args = data.message.split(" ");
                  var cargs = data.message.slice(prefix.length).split(/ +/);
                  var command = cargs.shift().toLowerCase();
                  var User = await eg.getProfile(data.friend.id);
            
                
                  // Fortnite commands start here
            
                  if(data.message.startsWith("CID_")) {
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
            
                  switch(command) {
            
                    case 'help':
                      fortnite.communicator.sendMessage(data.friend.id, 'Thanks for using this bot ' + User.displayName + ', heres the commands, !skin !backling !leave !emote !banner !status !ready !platform !id !playlist !promote !kick !friend !unfriend !invite');
                    break;
            
                    case 'style':
                      if(!args[1]) return fortnite.communicator.sendMessage(data.friend.id, 'Please mention a style.')
                      switch(args[1].toLowerCase()) {
            
                        case 'skull':
            
                          try{
                            fortnite.party.me.setVariant("cid_030_athena_commando_m_halloween", [{"item":"AthenaCharacter","channel":"Progressive","variant":"Stage3"},{"item":"AthenaCharacter","channel":"ClothingColor","variant":"Mat1"}]);
            
                            fortnite.communicator.sendMessage(data.friend.id, 'Skin set to skull trooper, the variant is set to PURPLE.');
                                } catch(err){
                                 console.log(err);
                              }
                        break;
            
                        case 'ghoul':
                          try {
                            fortnite.party.me.setVariant("cid_029_athena_commando_f_halloween", [{"item":"AthenaCharacter","channel":"Material","variant":"Mat3"}]);
            
                              fortnite.communicator.sendMessage(data.friend.id, 'Skin set to ghoul trooper, variant set to PINK.');
                              }
                            catch(err){
                              console.log(err);
                            }
                        break;
            
                        case 'renegade':
                          fortnite.party.me.setVariant("CID_028_Athena_Commando_F", [{"item":"AthenaCharacter","channel":"Material","variant":"Mat2"}]);
                          fortnite.communicator.sendMessage(data.friend.id, "Skin set to Renegade Raider, the variant is on CHECKERED.");
                        break;
            
                        default:
                          fortnite.communicator.sendMessage(data.friend.id, "Thats not a correct value!");
                        break;
            
                      }
                    break;
            
                    case 'ltm':
            
                    var playlistname = args.slice(1).join(" ");
            
                      if(fortnite.party.me.role != 'CAPTAIN')
                      return fortnite.communicator.sendMessage(data.friend.id, `The bot isn't party leader!`);
              
                      request({
                        url: 'https://jsonstorage.net/api/items/47c6b54c-b978-4122-ad66-e0f8071cf5d9',
                        json: true
                    }).then(query => {
                      Object.keys(query).forEach(function(key) {
                        switch(query[key].displayName) {
            
                          case playlistname:
                            if(JSON.parse(fortnite.party.meta.schema.PlaylistData_j).PlaylistData.playlistName == query[key].id)
                            return fortnite.communicator.sendMessage(data.friend.id, `The playlist is already on that!`);
                
                            fortnite.party.setPlaylist(query[key].displayName, query[key].id);
                            fortnite.communicator.sendMessage(data.friend.id, `Set playlist to ${query[key].displayName}`); 
                          break;
            
                          default:
                          fortnite.communicator.sendMessage(data.friend.id, "Not Found.")
                          break;
            
                        }
                      });
                    });
              
                    break;
            
                    case 'join':
                      if(!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please include a party id, when doing this command.");
                        switch(args[1]) {
            
                          case 'sameparty':
                            fortnite.communicator.sendMessage(data.friend.id, "No point but why not.");
                            fortnite.party.joinparty(fortnite.party.id);
                          break;
            
                          default:
                            fortnite.party.joinparty(args[1]);
                            fortnite.communicator.sendMessage(data.friend.id, "Joined, erros might occur.");
                          break;
            
                        }
            
                    break;
            
                    case 'blockfriends':
                      switch(args[1]) {
                        case '--force':
                          await eg.blockFriends(User);
                          fortnite.communicator.sendMessage(data.friend.id, "Blocked all, execpt you..");
                        break;
            
                          default:
                            fortnite.communicator.sendMessage(data.friend.id, "Are you sure? Reply with 'no' or 'yes', also this won't block you.");
                            fortnite.communicator.once(`friend#${User.id}:message`, async (data) => {
                               var message = data.message
                               switch(message) {
                                 case 'yes':
                                  await eg.blockFriends(User);
                                  fortnite.communicator.sendMessage(data.friend.id, "Blocked all, execpt you..");
                                   break;
                                  
                                  case 'no':
                                    fortnite.communicator.sendMessage(data.friend.id, "Alright, didn't.");
                                    break;
            
                                  default:
                                    fortnite.communicator.sendMessage(data.friend.id, "Invaild.");
                                    break;
                               }
                            });
                            break;
                      }
                    break;
            
                      case 'unblockfriends':
                        await eg.unblockFriends();
                        fortnite.communicator.sendMessage(data.friend.id, "Unblocked them.");
                      break;
            
                      case 'crash':
                        fortnite.party.me.setOutfit("/./");
                        fortnite.communicator.sendMessage(data.friend.id, `Crashed everyone in the party!`);
                      break;
            
                      case 'party':
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
                      break;
            
                      case 'skin':
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
                      break;
            
                      case 'pickaxe':
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
                      break;
            
                      case 'backbling':
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
                      break;
            
                      case 'emote':
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
                      break;
            
                      case 'banner':
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
                      break;
            
                      case 'status':
                        if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a status.");
                        try {
                        var mess = data.message.replace("!status", "");
                        fortnite.communicator.updateStatus(mess);
                        fortnite.communicator.sendMessage(data.friend.id, 'Status set to ' + mess + "!");
                      }
                      catch(err) {
                        fortnite.communicator.sendMessage(data.friend.id, "There was a error: " + err);
                      }
                      break;
            
                      case 'playlist':
                        if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a playlistName.");
            
                        if (!args[2]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a tournamentid.");
            
                        if(fortnite.party.me.role != 'CAPTAIN')
                        return fortnite.communicator.sendMessage(data.friend.id, `The partyleader isn't ${eg.account.displayName}.`);
            
                            let lookup = args.slice(2).join(" ");
            
                            fortnite.party.setPlaylist(lookup, args[1]);
            
                            fortnite.communicator.sendMessage(data.friend.id, "Set playlist to " + args[1] + " " + args[2]);
            
                            console.log(`[PARTY PLAYLIST] Set the playlist to "` + args[1] + `"`);
            
                      break;
            
                      case 'state':
                        if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a state.");
                        fortnite.party.me.setState(args[1]);
                        fortnite.communicator.sendMessage(data.friend.id, "Set state to " + args[1]);
                      break;
            
                      case 'platform':
                        if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a platform.");
                        try {
                          fortnite.party.me.setPlatform("EPlatform." + args[1]);
                          fortnite.communicator.sendMessage(data.friend.id, "Set Platform to " + args[1] + " !");
                            } catch {
                              fortnite.communicator.sendMessage(data.friend.id, "Please use !platform PLATFORM");
                            }
                      break;
            
                      case 'lookup':
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
                      break;
            
                      case 'promote':
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
                      break;
            
                      case 'kick':
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
                      break;
            
                      case 'leave':
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
                      break;
            
                      case 'friend':
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
                      break;
            
                      case 'privacy':
                        if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a vaild privacy name.");
                        try {
                          if(fortnite.party.me.role != 'CAPTAIN')
                          return fortnite.communicator.sendMessage(data.friend.id, `The partyleader isn't ${eg.account.displayName}.`);
                          fortnite.party.setPrivacy(args[1]);
                          fortnite.communicator.sendMessage(data.friend.id, "Privacy set to " + args[1] + '.');
                        } catch(err) {
                            fortnite.communicator.sendMessage(data.friend.id, "There was a error: " + err);
                          }
                      break;
            
                      case 'unfriend':
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
                      break;
            
                      case 'block':
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
                      break;
            
                      case 'partyhubicon':
                        if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a cid to set.");
                        try {
                          await eg.setUserIcon(args[1]);
                          fortnite.communicator.sendMessage(data.friend.id, "Set!")
                          }
                        catch(err) {
                          fortnite.communicator.sendMessage(data.friend.id, "There was a error: " + err);
                        }
                      break;
            
                      case 'unblock':
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
                      break;
            
                      case 'invite':
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
                      break;
  
                  }
            
                                  });

                            fortnite.communicator.updateStatus(config.Client.status);
                          });
                      }
                    }
