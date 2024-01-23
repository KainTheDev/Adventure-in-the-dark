const { readdirSync } = require("fs");
const { join } = require("path");
const { client } = require("../src/main");
client.on('ready', () => {
    const commandFolders = readdirSync('commands')
    for (const folder of commandFolders) {
        const commandFiles = readdirSync(join(process.cwd(), 'commands', folder))
        for (const commandFile of commandFiles) {
            const commandData = require(join(process.cwd(), 'commands', folder, commandFile))
            if (commandData) client.registerCommand(commandData.label, commandData.execute, commandData);
        }
    }
})