export function getYoutubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/shorts\/)([\w-]{11})/,
    /(?:youtube\.com\/watch\?v=)([\w-]{11})/,
    /(?:youtu\.be\/)([\w-]{11})/,
    /(?:youtube\.com\/embed\/)([\w-]{11})/,
  ];

  for (const pattern of patterns) {
    const match: RegExpMatchArray | null = url.match(pattern);
    if (match) {
      return match[1];
    }
  }

  return null;
}

export function isYoutubeShort(url: string): boolean {
  return /youtube\.com\/shorts\//.test(url);
}

export function buildYoutubeEmbedUrl(
  videoId: string,
  options: { autoplay?: boolean; loop?: boolean } = {},
): string {
  const params: URLSearchParams = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
    playsinline: '1',
  });

  if (options.autoplay) {
    params.set('autoplay', '1');
    params.set('mute', '1');
  }

  if (options.loop) {
    params.set('loop', '1');
    params.set('playlist', videoId);
  }

  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}
