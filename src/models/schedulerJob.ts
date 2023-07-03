import mongoose, { Schema } from "mongoose";
import { Job } from "./types/schema";

const jobSchema = new Schema<Job>({
    title: String,
    timezone: String,
    time: String,
    channel_id: String,
    playlist: String,
    status: Boolean,
});

export const SchedulerJobModel = mongoose.model<Job>('Job', jobSchema);