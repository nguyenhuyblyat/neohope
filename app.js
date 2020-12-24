// Author: nguyenhuyblyat
// License: GNU General Public License v3

// REQUIRING discod.js modules AND dotenv
const Discord = require('discord.js');
require('dotenv').config();

//
const client = new Discord.Client();

client.once('ready', () => {
  console.log("NeoHope is now up!")
});


// reply != send !!!
// reply = reply and mention, send = send a message

client.on('message', (msg) => {
  console.log(msg)
  if (msg.content === 'test echo') {
    msg.channel.reply("Exit code: 0; test OK.")
  }
});


client.login(process.env.bot_token);
