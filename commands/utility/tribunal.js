const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("tribunal")
		.setDescription("Tornar o usuário réu.")
		.addUserOption((option) => option.setName("target").setDescription("O usuário selecionado").setRequired(true)),
	async execute(interaction) {
		const target = interaction.options.getUser("target");
		const member = interaction.guild.members.cache.get(target.id);
		const roleName = "Réu";
		const role = interaction.guild.roles.cache.find((role) => role.name === roleName);

		await member.roles.set([role]);

		await interaction.reply(`${member} foi declarado réu!`);
	},
};
