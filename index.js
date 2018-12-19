const Commando = require('discord.js-commando');
const bot = new Commando.Client();

bot.registry.registerGroups([
    ['rpg', 'RPG'],
    ['helpers', 'Helper']
]);
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('NTI0NDAwMDg5NTQ1MDQ4MDY0.Dvnhtw.pxtuFVllwO79Sd8gaO8k-SAq_Ao');