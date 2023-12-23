const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rickroll')
		.setDescription('Send people Rickrolls!'),
	async execute(interaction) {
		await interaction.reply('Never gonna give you up! Never gonna let you down! Never gonna run around and desert you!');
	},
};
