import playdl from 'play-dl'
import { voice } from './types/voice'

export async function playQueue(voice : voice, list : Array<string>){
    let queue = [...list];
    let link = queue.shift() as string;
    let stream = await playdl.stream(link);
    voice.play(stream, queue);
}
