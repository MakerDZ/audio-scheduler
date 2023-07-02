import { Client, CommandInteraction, Interaction } from "discord.js"
import reply_with_pong from "../../../components/reply-with-pong";
import { streamAudio } from "../../../libraries/audio/streamAudio";

export default async function is_ping_pong(Client : Client,Interaction : Interaction){
    const interaction = Interaction as CommandInteraction;
    if(interaction.commandName === 'ping'){
        //await interaction.reply(reply_with_pong());
        streamAudio(Client, ['https://www.youtube.com/watch?v=jNQXAC9IVRw'], '1125077044661866649');
    }
}