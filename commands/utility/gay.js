const { SlashCommandBuilder } = require("discord.js");

function gayTest() {
	const possibleAnswers = [true, false];
	let isGay = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
	let message;

	if (isGay) {
		message = `Sim você é homossexual, não há dúvidas.`;
	} else {
		message = `Não, você não é homossexual.`;
	}

	return message;
}

module.exports = {
	data: new SlashCommandBuilder().setName("gaytest").setDescription("O bot irá dizer se você é homossexual ou não."),
	async execute(interaction) {
		// interaction.guild is the object representing the Guild in which the command was run
		if (interaction.user.username == "the_darkss") {
			await interaction.reply(`Você é sigma, 100% hétero!`);
		} else {
			await interaction.reply(gayTest());
		}
	},
};
