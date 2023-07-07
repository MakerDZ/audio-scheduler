import { ActionRowBuilder , SelectMenuBuilder} from "@discordjs/builders";

export function selectPlaylistInterface(playlists : Array<{label : string, value : string}>){
    const row = new ActionRowBuilder<SelectMenuBuilder>().addComponents(
        new SelectMenuBuilder()
          .setCustomId('select-playlist') 
          .setPlaceholder('Please select a playlist to add music.')
          .setMinValues(0)
          .setMaxValues(1) 
          .addOptions(...playlists),
      );
    return { components: [row], ephemeral: true }
}