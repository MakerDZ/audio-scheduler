import { Client, VoiceBasedChannel } from "discord.js";
import { joinVoiceChannel, createAudioResource, StreamType, createAudioPlayer, VoiceConnection, AudioPlayerStatus, AudioPlayer } from "@discordjs/voice";
import playdl from 'play-dl';
export class VoiceChannel {
    private voice : VoiceBasedChannel;
    private connection : VoiceConnection;
    private player : AudioPlayer;
    constructor(private client: Client, private channel_id : string) {
        this.voice = this.client.channels.cache.get(this.channel_id) as VoiceBasedChannel;
        this.connection = joinVoiceChannel({
            channelId: this.voice.id,
            guildId: this.voice.guildId,
            adapterCreator: this.voice.guild.voiceAdapterCreator,
        });
        this.player = createAudioPlayer();
    }
    async join(){
        this.connection.on('stateChange', (state) => {
            console.log(`Connection state changed: ${state.status}`);
        });
    }
    async leave(){
        this.connection.destroy();
    }
    async play(stream : any, queue : Array<string>) { 
        const resource = createAudioResource(stream.stream, {
            inputType: stream.type,
        });
        this.player.play(resource);
        this.connection.subscribe(this.player);
        this.player.on(AudioPlayerStatus.Idle, () => {
            this.playNextSong(queue);
        });
    }
    private async playNextSong(queue : Array<string>) {
        if (queue.length > 0) {
          const link = queue.shift() as string;
          let stream = await playdl.stream(link);
          const resource = createAudioResource(stream.stream, {
            inputType: stream.type,
          });
          this.player.play(resource);
        } else {
          this.leave();
        }
      }
}
  