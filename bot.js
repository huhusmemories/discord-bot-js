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

  const guildId = "820804738114912267"
  const guild = client.guilds.cache.get(guildId)
  let commands

  if (guild) {
    commands = guild.commands
  } else {
    commands = client.application?.commands
  }

  commands?.create({
    name: 'ping',
    description: 'Replies with pong',
  })
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) {
    return
  }

  const { commandName, options  } = interaction
  // Checking the commands name
  if (commandName === 'ping') {
     interaction.reply({
       content: 'pong',
      //  Only the sender can see this message
       ephemeral: true,
     })
  }
})


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
