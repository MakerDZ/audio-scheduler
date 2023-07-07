import { Interaction, ChatInputCommandInteraction } from "discord.js";
import { isModerator } from "../../../libraries/permission/isMod";
import { aboutAction } from "../../../components/general/aboutAction";
import { PlayListModel } from "../../../models/playList";
import { IsValidLink } from "../../../libraries/yt/checker";
import { getTitle } from "../../../libraries/yt/getTitle";
import { selectPlaylistInterface } from "../../../components/playlist/selectPlaylist";


export async function isPlaylist(Interaction : Interaction){
    const interaction = Interaction as ChatInputCommandInteraction;
    if(interaction.commandName !== 'playlist') return;
    if(!isModerator(interaction)){
        await interaction.reply(aboutAction('error', `You don't have permission to use this command.`));
    }else{
        switch(interaction.options.getSubcommand()){
            case 'create':
                await createPlaylist(interaction);
                break;
            case 'add-music':
                await selectPlaylist(interaction);
                break;
            case 'delete':
                break;
            case 'remove-music':
                break;
        }
    }
}

async function createPlaylist(interaction : ChatInputCommandInteraction){
    const playListName = interaction.options.get('name')?.value;
    const link = interaction.options.get('link')?.value as string;
    if(!IsValidLink(link)){
        await interaction.reply(aboutAction('error', `Invalid youtube link.`));
        return;
    }
    const playList = new PlayListModel({
        name : playListName,
        queue : [{
            name : await getTitle(link),
            url : link
        }]
    })
    playList.save().then(async res => {
        if(res.name == playListName){
            await interaction.reply(aboutAction('success','Successfully created new playlist.'));
            return;
        }else{
            await interaction.reply(aboutAction('error','Something went wrong while creating new playlist.'));
            return;
        }
    })
    return ;
}

async function selectPlaylist(interaction : ChatInputCommandInteraction){
    const rawPlaylists = await PlayListModel.find();
    const playLists = rawPlaylists.map(playlist => {
        return {
            label : playlist.name,
            value : playlist.name 
        }
    })
    await interaction.reply(selectPlaylistInterface(playLists));
}