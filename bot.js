const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`bot is ready ${client.user.tag}!`);
});
client.on('message', (msg) => {
        console.log(msg.content);
        if(msg == '/topo'){
            msg.reply('na na na clave el Mati ndeeaaa');
        }

});
client.login('NTc1MTQ0NjI1MDQ4NzgwODIw.XNDrPw.4cqLbRw58pv9IxaZfFgpBF3AttE');