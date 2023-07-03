import { Client } from "discord.js"
import loadCommands from "../libraries/commandHandling";
import connectDB from "../utilities/database/dbConnection";
import { PlayListModel } from "../models/playList";

export default {
    name : 'ready',
    once : true,
    async execute(client : Client , data : Client, BOT_TOKEN : string, CLIENT_ID : string , GUILD_ID : string){
        console.log(`${client.user?.tag} is logged in.`);
        await connectDB();
        await loadCommands(BOT_TOKEN, CLIENT_ID, GUILD_ID);
    }
}