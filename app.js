// Author: nguyenhuyblyat
// License: GNU General Public License v3

// REQUIRING discod.js modules AND dotenv
const Discord = require('discord.js');
require('dotenv').config();

//
const client = new Discord.Client();

client.once('ready', () => {
  console.log("NeoHope is now up!");
});

p = process.env.prefix;

insults =['Keep talking, someday you will say something intelligent.', 'YOUR LIFE IS SO PATHETIC I RAN A 15K TO RAISE AWARENESS FOR IT', 'The smartest thing thats ever come from your mouth was my dick']
// reply != send !!!
// reply = reply and mention, send = send a message
client.on('message', (msg) => {
  // debug echo test
  if (msg.content.startsWith(`${p}ping`)) {
    msg.channel.send(`lmao ok boi`);
  } else if (msg.content.startsWith(`${p}help`)) {
    msg.channel.send(`List of commands: https://github.com/nguyenhuyblyat/blob/main/README.md`);
  } else if (msg.content.startsWith(`${p}insult`)) {
      msg.channel.send(insults[(Math.floor(Math.random() * insults.length))]);
  }
});

client.login(process.env.bot_token);
