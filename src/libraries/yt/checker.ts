export function IsValidLink(url: string): boolean {
    const youtubeLinks = ["youtube.com/watch?v=", "youtu.be/"];
    const linkCount = youtubeLinks.reduce((count, link) => count + url.toLowerCase().split(link).length - 1, 0);
    if (linkCount !== 1) {
      return false;
    }
    return youtubeLinks.some(link => url.toLowerCase().includes(link));
  }
  