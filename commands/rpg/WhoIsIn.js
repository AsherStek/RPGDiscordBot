const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;

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