module.exports = {}

export default{
  category: 'testing',
  description: 'Replies with ping',

  callback: ({ message }) => {
    message.reply('Ping')
  }
}
