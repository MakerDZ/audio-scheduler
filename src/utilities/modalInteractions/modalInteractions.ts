import { Client, Interaction } from "discord.js";
import { isMusicAdded } from "./actions/is-music-added";

export default async function handelModalInteractions(client : Client , interaction : Interaction){
    await isMusicAdded(interaction);
}