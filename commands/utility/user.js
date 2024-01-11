const { SlashCommandBuilder } = require("discord.js");
const { EmbedBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("userinfo")
		.setDescription("Veja informações sobre algum usuário!")
		.addUserOption((option) => option.setName("alvo").setDescription("O usuário selecionado")),
	async execute(interaction) {
		const targetOption = interaction.options.getUser("alvo");
		let target;
		if (targetOption) {
			target = targetOption;
		} else {
			target = interaction.user;
		}

		const member = interaction.guild.members.cache.get(target.id);
		const memberIcon = member.user.displayAvatarURL();
		const defaultIcon = "https://i.imgur.com/XuQaPpP.jpg";

		let role;
		member.roles.cache.size === 0 ? (role = "Não possui cargos no servidor.") : (role = member.roles.highest.name);

		const joinedAt = new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short" }).format(
			member.joinedAt
		);

		const myEmbed = {
			color: 0x49cfad,
			title: member.displayName,
			author: {
				name: "Darksson",
				icon_url: "https://i.imgur.com/UOX7Czr.png",
			},
			description: `Informações acerca do usuário ${member}`,
			thumbnail: {
				url: memberIcon || defaultIcon,
			},
			fields: [
				{
					name: "Entrou em:",
					value: `${joinedAt}`,
					inline: true,
				},
				{
					name: "Maior cargo:",
					value: role,
					inline: true,
				},
			],
			timestamp: new Date().toISOString(),
			footer: {
				text: "",
				icon_url: "",
			},
		};

		await interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [myEmbed] });
	},
};
