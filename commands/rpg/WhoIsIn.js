const commando = require('discord.js-commando');

class WhoIsIn extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'whoisin',
            group: 'rpg',
            memberName: 'whoisin',
            description: 'Returns every user registered'
        });
    }
    async run() {
        
    }
}

module.exports = WhoIsIn;