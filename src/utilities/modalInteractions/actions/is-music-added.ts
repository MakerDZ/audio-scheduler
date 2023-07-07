import { Interaction, ModalSubmitInteraction } from 'discord.js'
import { IsValidLink } from '../../../libraries/yt/checker';
import { aboutAction } from '../../../components/general/aboutAction';
import { PlayListModel } from '../../../models/playList';
import { getTitle } from '../../../libraries/yt/getTitle';


export async function isMusicAdded(Interaction : Interaction){
    const interaction = Interaction as ModalSubmitInteraction;
    const customId = interaction.customId;

    if(!customId.startsWith("add-music")) return;

    const playlist_id = customId.split("-")[2];
    const link = interaction.fields.getTextInputValue('add-this-music');
    if(!IsValidLink(link)){
        interaction.reply(aboutAction('error', 'Invalid youtube link.'));
        return;
    }
    const title = await getTitle(link) as string;
    const Playlist = await PlayListModel.findById(playlist_id);
    const playListName = Playlist?.name;
    let queue = Playlist?.queue!
    queue.push({
        name : title,
        url : link
    })

    // update the playlist queue in db.
    PlayListModel.updateOne({_id : playlist_id}, {
        queue : queue
    }).then(async updated => {
        if(updated.acknowledged){
            await interaction.reply(aboutAction('success',`${title} was successfully added to ${playListName}.`))
        }
    });
}