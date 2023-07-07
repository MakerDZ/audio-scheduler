import { AnySelectMenuInteraction, Interaction } from "discord.js";
import addMusicModel from "../../../components/playlist/addMusicModel";

export async function isPlayListSelected(Interaction : Interaction){
    const interaction = Interaction as AnySelectMenuInteraction;
    if(interaction.customId != 'select-playlist') return;
    const selectedPlaylist = interaction.values[0];
    await interaction.showModal(addMusicModel(selectedPlaylist));
}