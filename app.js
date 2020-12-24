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

// reply != send !!!
// reply = reply and mention, send = send a message
client.on('message', (msg) => {
  // debug echo test
  if (msg.content.startsWith(`${p}ping`)) {
    msg.channel.send(`lmao ok boi`);
  } else if (msg.content.startsWith(`${p}help`)) {
    msg.channel.send(`List of commands: https://github.com/nguyenhuyblyat/blob/main/README.md`);
  }
});

client.login(process.env.bot_token);
