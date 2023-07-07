import { EmbedBuilder } from "discord.js";

export function aboutAction(action : string, description : string){
    const actionInfo : actionInfo = actionChecker(action);
    const reply = new EmbedBuilder()
        .setColor(actionInfo.color)
        .setTitle(actionInfo.title)
        .setDescription(`${description}`)
    return {embeds: [reply] , ephemeral: true};
}

function actionChecker(action : string) : actionInfo{
    if(action == Actions.success){
        return {
            color : 0x00C851,
            title : "✅ Action Succeeded!!",
        }
    } else {
        return {
            color : 0xFF0000,
            title : "❌ Action Failed!!",
        }
    }
}

interface actionInfo {
    color : number,
    title : string
}

enum Actions {
    success = "success",
    error = "error",
}

