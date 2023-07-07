import { SlashCommandBuilder } from "discord.js";

const playlist = new SlashCommandBuilder()
    .setName('playlist')
    .setDescription('Interact with playlist system.')
    .addSubcommand(sub => sub
        .setName('create')
        .setDescription('Create a new playlist.')
        .addStringOption(option => option
            .setName('name')
            .setDescription('The name of the playlist.')
            .setRequired(true)
        )
        .addStringOption(option => option
            .setName('link')
            .setDescription('The link of youtube video.')
            .setRequired(true)
        )
    )
    .addSubcommand(sub => sub
        .setName('add-music')
        .setDescription('Add a song to a playlist.')
    )
    .addSubcommand(sub => sub
        .setName('delete')
        .setDescription('Delete a playlist.')
    )
    .addSubcommand(sub => sub
        .setName('remove-music')
        .setDescription('Remove songs from a playlist.')
    )

export default playlist;