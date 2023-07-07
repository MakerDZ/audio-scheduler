import { Client, Interaction } from "discord.js";
import { isPlayListSelected } from "./actions/is-add-music";

export default async function handleSelectMenuInteractions(client : Client , interaction : Interaction){
    await isPlayListSelected(interaction);
}