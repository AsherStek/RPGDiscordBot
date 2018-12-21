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

bot.login('NTI0NDAwMDg5NTQ1MDQ4MDY0.Dv3Thw.eYXrPgm9RMcjmuWmzPxBOGtyV6o');