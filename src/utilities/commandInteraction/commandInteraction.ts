import { Client, Interaction } from "discord.js";
import is_ping_pong from "./actions/ping-pong";
import { isPlaylist } from "./actions/is-playlist-interaction";

export default async function handleCommandInteractions(client : Client , interaction : Interaction){
    await is_ping_pong(client,interaction);
    await isPlaylist(interaction);
}