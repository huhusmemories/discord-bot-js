console.log('Beep beep!');

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Bot online
client.on('ready', readyDiscord);

function readyDiscord() {
  console.log('Bot is online');
}


// Message
client.on('message', gotMessage);

function gotMessage(msg) {
  console.log(msg);
}


// Hardcoding bot token here just to test it. Regenerating it later
// client.login('BOT TOKEN')
