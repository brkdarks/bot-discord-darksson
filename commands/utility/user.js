const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("userinfo")
		.setDescription("Veja informações sobre algum usuário!")
		.addUserOption((option) => option.setName("target").setDescription("O usuário selecionado").setRequired(true)),
	async execute(interaction) {
		const target = interaction.options.getUser("target");
		const member = interaction.guild.members.cache.get(target.id);

		const joinedAt = new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short" }).format(
			member.joinedAt
		);

		await interaction.reply(`O usuário selecionado é ${member}: entrou nesse servidor em ${joinedAt}.`);
	},
};
