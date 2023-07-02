import { Client, VoiceBasedChannel } from "discord.js";
import { joinVoiceChannel, createAudioResource, StreamType, createAudioPlayer, VoiceConnection, AudioPlayerStatus } from "@discordjs/voice";
import ytdl from 'ytdl-core';

export class VoiceChannel {
    private voice : VoiceBasedChannel;
    private connection : VoiceConnection;
    constructor(private client: Client, private channel_id : string) {
        this.voice = this.client.channels.cache.get(this.channel_id) as VoiceBasedChannel;
        this.connection = joinVoiceChannel({
            channelId: this.voice.id,
            guildId: this.voice.guildId,
            adapterCreator: this.voice.guild.voiceAdapterCreator,
        });
    }
    async join(){
        this.connection.on('stateChange', (state) => {
            console.log(`Connection state changed: ${state.status}`);
        });
    }
    async leave(){
        this.connection.destroy();
    }
    async play(link : string) { 
        let stream = ytdl(link, { filter: 'audioonly' });
        const resource = createAudioResource(stream, {
            inputType: StreamType.Arbitrary,
        });
        const player = createAudioPlayer();
        player.play(resource);
        this.connection.subscribe(player);
        player.on(AudioPlayerStatus.Idle, () => this.connection.destroy());
    }
}
  