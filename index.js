/* eslint-disable indent */
// Require the necessary discord.js classes
const { Client, Intents, Guild } = require('discord.js');
const { token } = require('./config.json');

// Defining my Intents, here I want to use guilds and messages.
const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES);

// Create a new client instance, here we are creating our client object.
const client = new Client({ intents: myIntents });
// When the client is ready, run this code (only once).

const prefix = '!';
client.on('ready', () => {
	console.log(`Bot is running, baby 😎. And is logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
	if (message.content === `${prefix}Hi`) {
		message.reply(`Hello ma fucking brother ${message.author} 😎🤑`);
	}
    else if (message.content === `${prefix}how are you brotha?`) {
        message.reply(`Everything is right ma big brotha ${message.member.user}`);
    }
});
// Login to Discord with your client's token
client.login(token);
