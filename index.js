const Discord = require('discord.js');
const Token = ''; //You Bot Token here
const Client = new Discord.Client();
 
const prefix = "!"; //You Custom Prefix here
 
 
Client.on("ready", () =>{
    console.log(`Bot is Online`)
    Client.user.setPresence({
        status: "dnd",  // online, idle, dnd : it is only updated when the bot restarts full
        game: {
            name: "!help",  // The message shown
            type: "LISTENING" // PLAYING, WATCHING, LISTENING, STREAMING,
        }
    });
 }); 
 
Client.login(Token)
