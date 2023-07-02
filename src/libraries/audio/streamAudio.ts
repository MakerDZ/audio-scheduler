import { Client } from 'discord.js';
import { VoiceChannel } from './voiceChannel';
import ytdl from 'ytdl-core';

export async function streamAudio(client : Client,list : Array<string> , channel : string){
    const voice = new VoiceChannel(client,channel);
    if(list.length == 0) return;
    playQueue(voice, list);
}

async function playQueue(voice : voice, list : Array<string>){
    let queue = [...list];
    if(queue.length == 0){
        voice.leave();
        return;
    }
    let link = queue.shift() as string;
    
    voice.play(link);
}

interface voice {
    join(): void;
    leave(): void;
    play(link : string) : void;
}