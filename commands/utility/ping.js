const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder().setName("ping").setDescription("O bot responde 'Pong!'"),
	async execute(interaction) {
		await interaction.reply("Pong!");
	},
};
