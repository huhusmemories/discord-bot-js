// console.log('Beep beep!');

// Import required files
import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ]
})

// Bot online
client.on('ready', () => {
  console.log('Bot is online')
});


// Message
client.on('messageCreate', (message) => {
  if (message.content === 'ping') {
    message.reply({
      content: 'pong',
    })
  }
})

client.on('messageCreate', (message) => {
  if (message.content === 'shoot') {
    message.delete()
    message.reply({
      content: 'this message was deleted'
    })
  }
})

client.login(process.env.TOKEN)
