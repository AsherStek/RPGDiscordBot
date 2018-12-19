const commando = require('discord.js-commando');

var msgs = [
    "I'm not a chat bot, got talk to someone else.",
    "... oh were you talking to me?",
    "Sometimes you've just gotta praise the sun.",
    "I wish I knew more to say.",
    "Did you know it takes about 400 adult men to make a sword out of blood?",
    "I was a human like you once, then I was progammed into a bot"
    ];

class Chat extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'chat',
            group: 'helpers',
            memberName: 'chat',
            description: 'Chat with the bot'
        });
    }
    async run(message) {
        message.reply(msgs[Math.floor(Math.random() * msgs.length)])
    }
}

module.exports = Chat;