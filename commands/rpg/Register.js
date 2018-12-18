const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;

var obj = {
    usr: []
};

class Register extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'register',
            group: 'rpg',
            memberName: 'register',
            description: 'Registers the user to the database'
        });
    }
    async run(message) {
        var fs = require('fs');
        fs.readFile('UserDatabase.json', 'utf8', function readFileCallback(err, data) {
            if (err) {
                console.log(err);
            } else {
                obj = JSON.parse(data)
                if (obj.hasOwnProperty(message.member.user.tag)) {
                    message.reply(" is already registered")
                } else {
                    obj.usr.push({id: message.member.user.tag})
                    var json = JSON.stringify(obj);
                    fs.writeFile('UserDatabase.json', json, 'utf8', function writeFileCallback(err) {
                        if (err) throw err;
                    })
                }
            }
        });
    }
}

module.exports = Register;