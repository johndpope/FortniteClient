const EGClient = require('epicgames-client').Client;
const Fortnite = require('epicgames-fortnite-client');
const config = require("./config.json");
const request = require("request-promise");
const { ESubGame } = Fortnite;
const { EInputType, EPartyPrivacy, EPlatform, } = require('epicgames-client');

function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds) {
			break;
		}
	}
}

            console.log(`( Updates )`)
            console.log(`- Added !pickaxe %pickaxename%`)
            console.log(`- Added Fortnite Info.`)
            console.log(`- Added !emoteall`)

        console.log('Most commands Made by kekistan')
        console.log('Used syfes or aquas code.')
        console.log('Github: https://github.com/Kekisatan/FortniteBot2/')

        var CID = config.cid
        var BID = config.bid // All of this is managed in the config file
        var EID = config.eid
        var PICKAXE_ID = config.pickaxe_id
        var netclurl = "https://fnapi.terax235.com/api/v1.2/build"
        var benbot = 'http://benbotfn.tk:8080/api/cosmetics/search/multiple?displayName='

        request({
          url: 'http://benbotfn.tk:8080/api/status',
          json: true
        }).then(results => {
          var version = results.currentFortniteVersionNumber
          var paks = results.totalPakCount
          console.log('( Fortnite Info )')
          console.log('[Fortnite] Pak Ammount: ' + paks)
          console.log('[Fortnite] Version: ' + version)
        });

          request({
            url: netclurl,
            json: true
          }).then(results => {
            var netcl = results.fortnite.netCL
            console.log('[Fortnite] Newest Netcl: ' + netcl)

        let eg = new EGClient({ // For this make a new account that has nothing and put the details in here.
          email: config.email, // Remember to add your bot account email in here or it won't work!
          password: config.password,  // Remember to add your bot account password in here or it won't work!
          debug: console.log,
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

                                        //Name of playlist  Playlist ID
             await fortnite.party.setPlaylist('The End', 'Playlist_Music_High')
             // https://jsonstorage.net/api/items/47c6b54c-b978-4122-ad66-e0f8071cf5d9 for playlists

              if(!netcl) return console.log(`For some reason the netcl isn't working, check the github maybe.`)

              const br = await fortnite.runSubGame(ESubGame.BattleRoyale);
              console.log('[CLIENT] In the account ' + eg.account.displayName + ', there is only ' + fortnite.vbucks + ' vbucks on that account.')

                    fortnite.communicator.on('party:invitation', async (invitation) => {
                      await invitation.accept()
                      current_party = invitation.party;
                      console.log('[PARTY INVITED] A player has invited the bot, the bot will join shortly.')
                      var partym = await eg.getProfile(current_party.leader.id);
                      console.log('[PARTY INFO] The party leader of the party is ' + partym.displayName + `, there is currently ${fortnite.party.members.length} members in the party.`)
                    });

                  fortnite.communicator.on('party:member:left', async (member) => {
                    var profile = await eg.getProfile(member.id)
                    if (profile.displayName === eg.account.displayName) return console.log(`[BOT] The bot has been kicked!`)
                  if(fortnite.party.members.length == 1) return {
                  }
                  return console.log(`[PARTY MEMBER] ${profile.displayName} has left the party.`)
                  });

                  fortnite.communicator.on('party:member:promoted', async (member) => {
                    var profile = await eg.getProfile(member.id)
                    if(fortnite.party.members.length == 1) {
                      return console.log('[PARTY UNEXPECTED] The bot was either kicked or the party was abandoned.')
                    }
                    if (profile.displayName === eg.account.displayName) {
                      return console.log('[PARTY PROMOTE] The bot has been promoted!'),
                      fortnite.party.setPlaylist('The End', 'Playlist_Music_High'),
                      console.log(`[PARTY PLAYLIST] Set the playlist to "The End"`)
                    }
                    else {
                    console.log('[PARTY PROMOTED] ' + profile.displayName + ', Has been promoted!')
                    }
                });

                fortnite.communicator.on('party:member:joined', async (member) => {
                var profile = await eg.getProfile(member.id)
                if (profile.displayName === eg.account.name) {
                  fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + CID  + "." + CID);

                  fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + BID + "." + BID);
           
                  fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + PICKAXE_ID + "." + PICKAXE_ID); // ALL OF THE THINGS ARE PULLED FROM ABOVE!
           
                  fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + EID + "." + EID);
           
                  fortnite.party.me.setBattlePass(true, 1000, 1000, 100, 100);
           
                  fortnite.party.me.setBanner(config.level, config.banner, config.banner_color);
                }
                else{
                  console.log('[PARTY MEMBER] ' + profile.displayName + ', Has joined!')
                  console.log(`[PARTY COUNT] Members count: ${fortnite.party.members.length}`);
                  fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + CID  + "." + CID);

                  fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + BID + "." + BID);
           
                  fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + PICKAXE_ID + "." + PICKAXE_ID); // ALL OF THE THINGS ARE PULLED FROM ABOVE!
           
                  fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + EID + "." + EID);
           
                  fortnite.party.me.setBattlePass(true, 1000, 1000, 100, 100);
           
                  fortnite.party.me.setBanner(config.level, config.banner, config.banner_color);
                }
                });

        fortnite.communicator.on('friend:message', async (data) => {

          var prefix = '!'
          var args = data.message.split(" ");
          var cargs = data.message.slice(prefix.length).split(/ +/);
          var command = cargs.shift().toLowerCase()

          function crash() {
            if (fortnite.party.members.length < 1) {
           return fortnite.communicator.sendMessage(data.friend.id, `Theres no point when the the bot is alone :(.`);
           }
           fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters//./");
           fortnite.communicator.sendMessage(data.friend.id, `Crashed everyone in the party!`);
           console.log('[BOT UNUSEDABLE] The bot now crashes you if you invite it, restart the bot to fix this.')
           console.log('[BOT UNUSEABLE] This was caused by the crash command.')
          }

          var partyleader;

          if (fortnite.party.members.length == 1) {
          }
        else {
          var partyleader = await eg.getProfile(current_party.leader.id)
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
                          fortnite.communicator.sendMessage(data.friend.id, 'Thanks for using this bot, heres the commands, !skin !backling !leave !emote !banner !status !ready !platform !id !playlist !promote !kick !friend !unfriend !invite');
                        }

                              if(data.message.startsWith('CID_')) {
                                if(data.message === 'CID_') return fortnite.communicator.sendMessage(data.friend.id, "Please mention a cid.");
                              try {
                                CID = args[0];
                                  fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + args[0] + "." + args[0]);
                                  fortnite.communicator.sendMessage(data.friend.id, "Skin set to " + args[0]);
                                    }
                                    catch(er) {
                                    fortnite.communicator.sendMessage(data.friend.id, er);
                                    }
                                  }
                      
                                  if(data.message.startsWith('EID_')) {
                                    if(data.message === 'EID_') return fortnite.communicator.sendMessage(data.friend.id, "Please mention a eid.");
                                    try {
                                    EID = args[0];
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
                                PICKAXE_ID = args[0];
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

                       //        if(command === 'code') {
                        //        let code = args.slice(1).join(" ");
                        //        var codeurl = 'https://epicgames.com/fortnite/ajax/redemption/validate-redemption-code?redeem-code=' + code
                        //         request({
                        //          url: codeurl,
                        //          json: true
                        //          }).then(query => {
                        //        fortnite.communicator.sendMessage(data.friend.id, "The code is found! The title is " + query.data.title);
                        //      });
                        //    }
                        // Not working currently.

      
                            if(data.message.startsWith('BID_')) {
                              if(data.message === 'BID_') return fortnite.communicator.sendMessage(data.friend.id, "Please mention a bid id.");
                              try {
                              BID = args[0];
                                fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + args[0] + "." + args[0]);
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
                                  fortnite.party.me.clearEmote()
                                fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + query[key].id + "." + query[key].id);
                                fortnite.communicator.sendMessage(data.friend.id, "Found " + query[key].displayName + ', the id is ' + query[key].id);
                                }
                              });
                            });
                          }

                          if(command === "banner") {
                          if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a banner name.");
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
                            if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a regionId and a playlistName.");
                              try {
                                fortnite.party.setPlaylist(args[1], args[2]);
                                eg.communicator.sendMessage(data.friend.id, "Set playlist to " + args[1] + " " + args[2]);
                                  } catch {
                                    eg.communicator.sendMessage(data.friend.id, "Usage !playlist regionId playlistName");
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

                                  if(command === "id") {
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
                              try {
                                let lookup = args.slice(1).join(" ");
                                if(lookup === eg.account.name) return fortnite.communicator.sendMessage(data.friend.id, "You can't promote yourself!");
                              const account = await eg.getProfile(lookup);
                              if(!account) return fortnite.communicator.sendMessage(data.friend.id, "That epic name must of been wrong.");
                              const partymember = fortnite.party.findMember(account.id)
                              if(!partymember) return fortnite.communicator.sendMessage(data.friend.id, `${account.name} Wasn't found in the party.`);
                              fortnite.party.promote(account.id)
                              fortnite.communicator.sendMessage(data.friend.id, "Promoted " + account.name + '!');
                                  }
                                catch(err) {
                                  fortnite.communicator.sendMessage(data.friend.id, "There was a error: " + err);
                                }
                              }

                                if(command === "kick") {
                              if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a party member's name.");
                              try {
                                let lookup = args.slice(1).join(" ");
                                if(lookup === eg.account.name) return fortnite.communicator.sendMessage(data.friend.id, "You can't kick yourself!");
                              const account = await eg.getProfile(lookup);
                              if(!account) return fortnite.communicator.sendMessage(data.friend.id, "That epic name must of been wrong.");
                              const partymember = fortnite.party.findMember(account.id)
                              if(!partymember) return fortnite.communicator.sendMessage(data.friend.id, `${account.name} Wasn't found in the party.`);
                              fortnite.party.kick(account.id)
                              fortnite.communicator.sendMessage(data.friend.id, "Kicked " + account.name + '!');
                                  }
                                catch(err) {
                                  fortnite.communicator.sendMessage(data.friend.id, "There was a error: " + err);
                                }
                              }

                          if(command === "leave") {
                            try {

                              if (fortnite.party.members.length > 1) {
                                fortnite.communicator.sendMessage(data.friend.id, `The bot can't leave the party when theres nobody in it!`);
                              }
                              else {
                                fortnite.party.leave()
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
                      const isFriended = await eg.hasFriend(account.id)
                      if(isFriended) {
                      fortnite.communicator.sendMessage(data.friend.id, `${account.name} is already friended.`);
                      }
                      eg.inviteFriend(account.id)
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
                    const isFriended = await eg.hasFriend(account.id)
                    if(isFriended) {
                    eg.removeFriend(account.id)
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

                    if(command === "invite") {
                      if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a epic name to invite.");
                      try {
                        let lookup = args.slice(1).join(" ");
                        if(lookup === eg.account.name) return fortnite.communicator.sendMessage(data.friend.id, "You can't invite yourself!");
                      const account = await eg.getProfile(lookup);
                      if(!account) return fortnite.communicator.sendMessage(data.friend.id, "That epic name must of been wrong.");
                      const isFriended = await eg.hasFriend(account.id)
                      if(isFriended) {
                      fortnite.party.invite(account.id)
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

                    fortnite.communicator.updateStatus(config.status);

                  });
                });
