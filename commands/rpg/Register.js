const commando = require('discord.js-commando');

var obj = {
    usr: []
};

class Register extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'register',
            group: 'rpg',
            memberName: 'register',
            description: 'Registers the user to the database',
        });
    }
    async run(message) {
        message.channel.send("This fails due to obj.usr.push() not a function. Working on fixing the issue")
        // var fs = require('fs');
        // fs.readFile('UserDatabase.json', function readFileCallback(err, data) {
        //     if (err) throw err;
        //     obj = JSON.parse(data);
        //     console.log(obj);
        //     if (obj.hasOwnProperty(message.member.user.tag)) {
        //         message.reply(" is already registered")
        //     } else {
        //         obj.usr.push({ "usr": message.member.user.tag })
        //         var json = JSON.stringify(obj);
        //         fs.writeFile('UserDatabase.json', json, 'utf8', function writeFileCallback(err) {
        //             if (err) throw err;
        //         })
        //     }
        // }
        //);
    }
}

module.exports = Register;