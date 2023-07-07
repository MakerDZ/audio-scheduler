import { ChatInputCommandInteraction, GuildMember , PermissionResolvable} from "discord.js";

export function isModerator(interaction : ChatInputCommandInteraction) : boolean{
    const member = interaction.member as GuildMember;
    const isMod = member.permissions.has("Administrator"); //Administrator
    if(isMod) return true;
    return false;
}