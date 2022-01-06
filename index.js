// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance, here we are creating our client object.
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once).
client.once('ready', () => {
	console.log('Ready!');
});

// Login to DIscord with your client's token
client.login(token);