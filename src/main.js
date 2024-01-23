require('dotenv').config()
const { CommandClient } = require('eris')
const config = require('./config.json')
const { readdirSync } = require('fs')
const { join } = require('path')
const client = new CommandClient(process.env.TOKEN, {
    intents: ['all']
}, {
    defaultHelpCommand: true,
    description: `RPG Discord bot.`,
    ignoreBots: true,
    ignoreSelf: true,
    name: `# ${process.cwd().split('\\').pop()}`,
    owner: config.owner.name,
    defaultCommandOptions: {
        guildOnly: true,
        ignoreBots: true,
        ignoreSelf: true
    }
})
module.exports = { client, config }
readdirSync('handlers').forEach(handlerFile => require(join(process.cwd(), 'handlers', handlerFile)))
client.connect();