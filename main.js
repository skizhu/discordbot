/*const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Hi Guys, I am online');
});
*/

const Discord = require('discord.js');
const bot = new Discord.Client();

const symbol = '!'
bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('ready', () =>{
    bot.user.setUsername("PingBot");
    bot.user.setAvatar('./gjake.png');
    const channel = bot.channels.cache.get('499692314352943116').send(`😈 Hello, Please Type !ping, !gn 😈`);
});

bot.on('message', msg => {
  if (msg.content.startsWith(symbol + 'ping')) {
    msg.channel.send(` 😂 <@!431492429921648640> 😂`);
  }
});

bot.on('message', msg => {
  if (msg.content.startsWith(symbol + 'gn')) {
    msg.reply(`gn`);
  }
});

//Keep at the end of the file
bot.login('NzU4NDg1MTAzMDI5NjQ5NDM4.X2voTA.ttJ-w-cpNZYWGCzNGWk5FpnAfi4');