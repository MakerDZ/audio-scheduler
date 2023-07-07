import { Interaction, Client } from "discord.js"
import handleCommandInteractions from "../utilities/commandInteraction/commandInteraction";
import handleSelectMenuInteractions from "../utilities/selectMenuInteraction/selectMenuInteraction";
import { aboutAction } from "../components/general/aboutAction";
import handelModalInteractions from "../utilities/modalInteractions/modalInteractions";

export default {
    name : "interactionCreate",
    once : false,
    async execute (interaction : Interaction, client : Client , BOT_TOKEN : string, CLIENT_ID : string , GUILD_ID : string) {

        if(!interaction.isChatInputCommand() && !interaction.isStringSelectMenu() && !interaction.isModalSubmit) return;

        if(interaction.isChatInputCommand()){
            try {
                await handleCommandInteractions(client, interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply(aboutAction('error', 'An internal error occurred while executing. Please try again or contact the developer.'));
            }
        }

        if(interaction.isStringSelectMenu()){
            try {
                await handleSelectMenuInteractions(client , interaction);

            } catch (error){
                console.log(error);
                await interaction.reply(aboutAction('error', 'An internal error occurred while executing. Please try again or contact the developer.'));
            }
        }

        if(interaction.isModalSubmit()){
            try {
                await handelModalInteractions(client , interaction);
            } catch (error) {
                console.log(error);
                await interaction.reply(aboutAction('error', 'An internal error occurred while executing. Please try again or contact the developer.'));
            }
        }
    }
}