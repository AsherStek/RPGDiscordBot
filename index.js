const Commando = require('discord.js-commando');
const bot = new Commando.Client({
    unknownCommandResponse: false,
    disableEveryone: true
});

bot.registry.registerGroups([
    ['rpg', 'RPG'],
    ['helpers', 'Helper']
]);
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login();