const commando = require('discord.js-commando');

class Repo extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'repo',
            group: 'helpers',
            memberName: 'repo',
            description: 'Gives GIT repository'
        });
    }
    async run(message) {
        message.channel.send("https://github.com/AsherStek/RPGDiscordBot")
    }
}

module.exports = Repo;