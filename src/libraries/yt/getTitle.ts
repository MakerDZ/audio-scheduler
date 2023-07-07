import playdl from 'play-dl'

export async function getTitle(url : string){
    const videoTitle = (await playdl.video_basic_info(url)).video_details.title
    return videoTitle;
}