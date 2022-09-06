const { Client, GatewayIntentBits, Collection, ActivityType } = require("discord.js");
const { token } = require("./config.json");
const client = new Client({
    allowedMentions: { parse: [ "users", "roles" ]},
    intents: [ GatewayIntentBits.Guilds ]
});

client.on("ready", (client) => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        activities: [{ name: `Your Activity here`, type: ActivityType.Listening }],
        status: 'idle',
      });
});

client.login(token);
