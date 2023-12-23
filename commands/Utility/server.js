const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Provides information about the server.'),
	async execute(interaction) {
		// interaction.guild is the object representing the Guild in which the command was run
		await interaction.reply(`You are in this server named ${interaction.guild.name} and has ${interaction.guild.memberCount} members. The admin of this server is named ${interaction.guild.owner}.`);
	},
};
