const EGClient = require('epicgames-client').Client;
const Fortnite = require('epicgames-fortnite-client');
const config = require("./config.json");
const { EPartyPrivacy } = require('epicgames-client');
const request = require("request-promise");
const { ESubGame } = Fortnite;
const { EPlatform } = require('epicgames-client');

function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds){
			break;
		}
	}
}

console.log(`
(_＼ヽ
  　 ＼＼ .Λ＿Λ.
  　　 ＼(　ˇωˇ)　
  　　　 >　⌒ヽ
  　　　/ 　 へ＼
  　　 /　　/　＼＼
  　　 ﾚ　ノ　　 ヽ_つ    Your welcome
  　　/　/          Lib by (i have no idea)
  　 /　/|            Most commands made by
  　(　(ヽ                 Kekistan
  　|　|、＼
  　| 丿 ＼ ⌒)
  　| |　　) /
  '+ノ )  Lﾉ
  (_／  
`)
sleep(1000)
console.clear()

console.log('Most commands Made by kekistan')
console.log('Used syfes or aquas code.')
console.log('Github: https://github.com/Kekisatan/FortniteBot2/')

var CID = config.cid
var BID = config.bid // All of this is managed in the config file
var EID = config.eid
var PICKAXE_ID = config.pickaxe_id
var url = "https://fnapi.terax235.com/api/v1.2/build"

request({
  url: url,
  json: true
}).then(results => {
  var netcl = results.fortnite.netCL
  console.log('Newest Netcl: ' + netcl)

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

    if(!success)
      throw new Error('Cannot initialize EpicGames launcher.');

    if(!await eg.login())
      throw new Error('Cannot login on EpicGames account.');

      const fortnite = await eg.runGame(Fortnite, { // 69 lol
         netCL: netcl,
         partyBuildId: '1:1:' + netcl,
        });

          const br = await fortnite.runSubGame(ESubGame.BattleRoyale);

        fortnite.communicator.on('party:invitation', async (invitation) => {
          await invitation.accept()
        });

        fortnite.communicator.on('party:member:joined', async (member) => {
         var profile = await eg.getProfile(member.id)
         if (profile.displayName === eg.account.name) {
           console.log('Joined a new party!');
          fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + CID  + "." + CID);

          fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + BID + "." + BID);
  
          fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + PICKAXE_ID + "." + PICKAXE_ID); // ALL OF THE THINGS ARE PULLED FROM ABOVE!
  
          fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + EID + "." + EID);
  
          fortnite.party.me.setBattlePass(true, 100, 999999999, 999999999);
  
          fortnite.party.me.setBanner(config.level, config.banner, config.banner_color);
         }
         else{
          console.log(profile.displayName + ', Has joined!')
          console.log(`Members count: ${fortnite.party.members.length}`);

            fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + CID  + "." + CID);

            fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + BID + "." + BID);
    
            fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + PICKAXE_ID + "." + PICKAXE_ID); // ALL OF THE THINGS ARE PULLED FROM ABOVE!
    
              fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + EID + "." + EID);
    
            fortnite.party.me.setBattlePass(true, 100, 999999999, 999999999);
    
            fortnite.party.me.setBanner(config.level, config.banner, config.banner_color);
         }
        });

        fortnite.communicator.on('party:member:promoted', async (member) => {
            var profile = await eg.getProfile(member.id)
            if (profile.displayName === eg.account.displayName) {
              return console.log('The bot has been promoted!')
            }
            else {
            console.log(profile.displayName + ', Has been promoted!')
            }
        });

        fortnite.communicator.on('friend:message', async (data) => {

          var args = data.message.split(" ");
          var command = args[0].toLowerCase()

          if(data.message == 'help'){
            fortnite.communicator.sendMessage(data.friend.id, 'Thanks for using this bot, heres the commands, !skin !backling !leave !emote !banner !status !ready !platform !id !playlist !promote !kick !friend !unfriend !invite');
        }

              if(data.message.includes == ('CID_')){
                if(data.message === 'CID_') return fortnite.communicator.sendMessage(data.friend.id, "Please mention a cid.");
                CID = args[0];
                  fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + args[0] + "." + args[0]);
                  fortnite.communicator.sendMessage(data.friend.id, "Skin set to " + args[0]);
              }
      
              if(data.message.includes('EID_')){
                if(data.message === 'EID_') return fortnite.communicator.sendMessage(data.friend.id, "Please mention a eid.");
              EID = args[0];
              fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + args[0] + "." + args[0]);
              fortnite.communicator.sendMessage(data.friend.id, "Emote set to " + args[0]);
              }
      
              if(data.message.includes('Pickaxe_ID_')){
                if(data.message === 'Pickaxe_ID_') return fortnite.communicator.sendMessage(data.friend.id, "Please mention a pickaxe id.");
                PICKAXE_ID = args[0];
                  fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + args[0] + "." + args[0]);
                  fortnite.communicator.sendMessage(data.friend.id, "Pickaxe set to " + args[0]);
          }
      
              if(data.message.includes('BID_')){
                if(data.message === 'BID_') return fortnite.communicator.sendMessage(data.friend.id, "Please mention a bid id.");
                BID = args[0];
                  fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + args[0] + "." + args[0]);
                  fortnite.communicator.sendMessage(data.friend.id, "Backbling set to " + args[0]);
              }

              if(command === '!party') {
                fortnite.communicator.sendMessage(data.friend.id, "Party Info");
                fortnite.communicator.sendMessage(data.friend.id, "There is " + fortnite.party.members.length + ', members in the party');
              }

                        if(command === "!skin") {
                          let skinname = args.slice(1).join(" ");
                          if (!skinname) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a skin name.");
                          request({
                            url: 'http://benbotfn.tk:8080/api/cosmetics/search/multiple?displayName=' + skinname,
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
                        };
      
                    if(command === "!backbling") {
                      let backlingname = args.slice(1).join(" ");
                      if (!backlingname) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a backling name.");
                      request({
                        url: 'http://benbotfn.tk:8080/api/cosmetics/search/multiple?displayName=' + backlingname,
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
      
                          if(command === "!emote") {
                          let emotename = args.slice(1).join(" ");
                          if (!emotename) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a emote name.");
                          request({
                            url: 'http://benbotfn.tk:8080/api/cosmetics/search/multiple?displayName=' + emotename,
                            json: true
                        }).then(query => {
                          Object.keys(query).forEach(function(key) {
                            if(query[key].type == "Emote") {
                            fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + query[key].id + "." + query[key].id);
                            fortnite.communicator.sendMessage(data.friend.id, "Found " + query[key].displayName + ', the id is ' + query[key].id);
                            }
                          });
                        });
                      }

                      if(command === "!banner"){
                      if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a banner name.");
                      try {
                      fortnite.party.me.setBanner(100, args[1], args[2]);
                      fortnite.communicator.sendMessage(data.friend.id, "Banner set to " + args[1] + " " + args[2]);
                      }
                      catch(erra){
                      fortnite.communicator.sendMessage(data.friend.id, "There was a error: " + erra);
                      }
                    }

                        if(command === "!status"){
                        if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a status.");
                        var mess = data.message.replace("!status", "");
                        fortnite.communicator.updateStatus(mess);
                        fortnite.communicator.sendMessage(data.friend.id, 'Status set to ' + mess + "!");
                      }

                          if(command === "!playlist"){
                        if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a regionId and a playlistName.");
                        try {
                          fortnite.party.setPlaylist(args[1], args[2]);
                          eg.communicator.sendMessage(data.friend.id, "Set playlist to " + args[1] + " " + args[2]);
                        } catch {
                          eg.communicator.sendMessage(data.friend.id, "Usage !playlist regionId playlistName");
                        }
                      }

                        if(command === "!ready"){
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

                      if(command === "!platform"){
                        if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a platform.");
                        try {
                          fortnite.party.me.setPlatform("EPlatform." + args[1]);
                          eg.communicator.sendMessage(data.friend.id, "Set Platform to " + args[1] + " !");
                        } catch {
                          eg.communicator.sendMessage(data.friend.id, "Please use !platform PLATFORM");
                        }
                      }

                            if(command === "!id"){
                          if (!args[1]) return fortnite.communicator.sendMessage(data.friend.id, "Please mention a epic display name.");
                          try {
                            let lookup = args.slice(1).join(" ");
                          const account = await eg.getProfile(lookup);
                          if(!account) return fortnite.communicator.sendMessage(data.friend.id, "That epic name must of been wrong.");
                        fortnite.communicator.sendMessage(data.friend.id, `${account.name}'s id is: ${account.id}.`);
                      }
                      catch(erra){
                        fortnite.communicator.sendMessage(data.friend.id, "There was a error: " + erra);
                      }
                    }

                         if(command === "!promote"){
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
                    catch(erra){
                      fortnite.communicator.sendMessage(data.friend.id, "There was a error: " + erra);
                    }
                  }

                          if(command === "!kick"){
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
                    catch(erra){
                      fortnite.communicator.sendMessage(data.friend.id, "There was a error: " + erra);
                    }
                  }

                          if(command === "!leave"){
                        try {
                          fortnite.party.leave()
                          fortnite.communicator.sendMessage(data.friend.id, "The bot has left.");
                            }
                    catch(erra){
                      fortnite.communicator.sendMessage(data.friend.id, "There was a error: " + erra);
                    }
                  }

                        if(command === "!friend"){
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
                  catch(erra){
                    fortnite.communicator.sendMessage(data.friend.id, "There was a error: " + erra);
                  }
                }

                  if(command === "!unfriend"){
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
                catch(erra){
                  fortnite.communicator.sendMessage(data.friend.id, "There was a error: " + erra);
                }
              }

                    if(command === "!invite"){
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
                  catch(erra){
                    fortnite.communicator.sendMessage(data.friend.id, "There was a error: " + erra);
                  }
                }


        });

        fortnite.communicator.updateStatus(config.status);

      });
    });
