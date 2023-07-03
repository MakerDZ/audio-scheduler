import { Client } from 'discord.js';
import { VoiceChannel } from './voiceChannel';
import { playQueue } from './playQueue';
;

export async function streamAudio(client : Client,list : Array<string> , channel : string){
    const voice = new VoiceChannel(client,channel);
    if(list.length == 0) return;
    playQueue(voice, list);
}


