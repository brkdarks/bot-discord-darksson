const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder().setName("server").setDescription("Disponibiliza informações sobre o servidor."),
	async execute(interaction) {
		// interaction.guild is the object representing the Guild in which the command was run
		await interaction.reply(
			`O nome do servidor é ${interaction.guild.name} e tem ${interaction.guild.memberCount} membros.`
		);
	},
};
