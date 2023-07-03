import { Document } from "mongoose";

export interface Job extends Document {
    title: string;
    timezone: string;
    time: string;
    channel_id: string;
    playlist: string;
    status: boolean;
}

export interface Playlist extends Document {
    name : string;
    queue : Array<string>;
}