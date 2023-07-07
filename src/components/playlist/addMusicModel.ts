import { ModalBuilder, TextInputStyle, ModalActionRowComponentBuilder, ActionRowBuilder, TextInputBuilder } from "discord.js";

export default function addMusicModel(playListId : String){
    const modal = new ModalBuilder()
    .setCustomId(`add-music-${playListId}`)
    .setTitle('Add Music')

    const AboutTextInput = new TextInputBuilder()
        .setCustomId('add-this-music')
        .setLabel('Youtube link of music')
        .setStyle(TextInputStyle.Paragraph);
    const AboutRow = new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(AboutTextInput);
    modal.addComponents(AboutRow);
    return modal;
}