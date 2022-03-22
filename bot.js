console.log('Beep beep!');

const Discord = require('discord.js');
const client = new Discord.Client();
// Hardcoding bot token here just to test it. Regenerating it later
// client.login('BOT TOKEN')

client.login('OTU1OTEyMTM4NzEzNjEyMzE4.YjokjQ.pVuN9ckbXMxD8QWQV-l_O-RFICU');

client.on('ready', readyDiscord);

function readyDiscord() {
  console.log('Bot is online');
}
