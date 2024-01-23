const { Command } = require("eris");
const { config, client } = require("../../src/main");
const Color = require("color");
module.exports = new Command('botinfo',
    async function (message, args) {
        const embed = {
            color: new Color(config.defaultEmbedSettings.color).rgbNumber(),
            title: `${config.defaultEmbedSettings.title} Bot's information.`,
            description: "Here are bot's detailed information:",
            fields: [
                {
                    name: 'User',
                    value: `**Username**: \`${client.user.username}\`\n**Tag**: \`${client.user.username}#${client.user.discriminator}\`\n**ID**:\`${client.user.id}\``
                },
                {
                    name: 'Ping',
                    value: `**Message latency**: \`${message.timestamp - Date.now()}ms\``
                },
                {
                    name: 'Data',
                    value: `**Guilds are in**: \`${client.guilds.size}\`\n`
                },
                {
                    name: 'Creation',
                    value: `**Created at**: \`${new Date(client.user.createdAt)}\``
                },
                {
                    name: 'Owner',
                    value: `\`${config.owner.name} - ${config.owner.username}\``
                },
            ],
            image: {
                url: client.user.avatarURL,
            },
            timestamp: new Date(),
            footer: {
                text: client.user.username,
                icon_url: client.user.avatarURL,
            },
        };
        return await message.channel.createMessage({embed})
    },
    {
        aliases: [],
        argsRequired: false,
        description: "DESCRIPTION HERE.",
        fullDescription: "DESCRIPTION HERE.",
        cooldown: 5000,
        cooldownExclusions: { userIDs: [], guildIDs: [], channelIDs: [] },
        cooldownMessage: 'Command failed, please try again later.',
        cooldownReturns: 1,
        errorMessage: undefined,
        invalidUsageMessage: 'Invalid usage! Use help command for more.'
    }
)