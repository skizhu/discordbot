/*const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Hi Guys, I am online');
});
*/

const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('ready', () =>{
    bot.user.setUsername("PingBot");
    bot.user.setAvatar('./gjake.png');
    const channel = bot.channels.cache.get('499692314352943116').send(`😈 Hello, Please Type !ping 😈`);
});

bot.on('message', msg => {
  if (msg.content.startsWith('!ping')) {
    msg.channel.send(` 😂 <@!431492429921648640> 😂`);
    msg.channel.send(` 😂 <@!431492429921648640> 😂`);
    msg.channel.send(` 😂 <@!431492429921648640> 😂`);
    msg.channel.send(` 😂 <@!431492429921648640> 😂`);
    msg.channel.send(` 😂 <@!431492429921648640> 😂`);
  }
});

//Keep at the end of the file
bot.login('NzU4NDg1MTAzMDI5NjQ5NDM4.X2voTA.N-3JyzCaMrpT_aXqyM5ELk6nwJA');