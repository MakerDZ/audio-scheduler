import mongoose, { Schema } from "mongoose";
import { Playlist } from "./types/schema";

const playListSchema = new Schema<Playlist>({
    name : String,
    queue : Array<String>
});

export const PlayListModel = mongoose.model<Playlist>('playlist', playListSchema);