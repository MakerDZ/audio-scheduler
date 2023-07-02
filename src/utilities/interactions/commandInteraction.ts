import { Client, Interaction } from "discord.js";
import is_ping_pong from "./actions/ping-pong";

export default async function commandInteraction(client : Client , interaction : Interaction){
    await is_ping_pong(interaction);
}