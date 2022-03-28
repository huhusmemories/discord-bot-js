// console.log('Beep beep!');

// Import required files
import DiscordJS, { Intents } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
// import { InteractionResponseTypes } from 'discord.js/typings/enums';
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
  const __dirname = path.resolve()

  new WOKCommands(client, {
    commandsDir: path.join(__dirname, 'commands'),
    typeScript: false
  })

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

  commands?.create({
    name: 'add',
    description: 'Adds two numbers',
    options: [
      {
        name: 'num1',
        description: 'The first number',
        required: true,
        type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
      },
      {
        name: 'num2',
        description: 'The second number',
        required: true,
        type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
      }
    ]
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
  } else if (commandName === 'add') {
    const num1 = options.getNumber('num1') || 0
    const num2 = options.getNumber('num2') || 0

    await interaction.deferReply({
      ephemeral: true
    })

    await new Promise(resolve => setTimeout(resolve, 5000))

    await interaction.editReply({
      content: `The sum is ${num1 + num2}`,
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
