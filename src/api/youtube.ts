const API_KEY = 'AIzaSyBU4PD2kWZEKvy5dOYUDpTvjACWvBq4hPo';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export async function searchVideos(keywords: string[]) {
  const query = keywords.join('|');
  const response = await fetch(
    `${BASE_URL}/search?part=snippet&q=${encodeURIComponent(
      query
    )}&type=video&maxResults=24&key=${API_KEY}`
  );
  const data = await response.json();
  
  return data.items.map((item: any) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.medium.url,
    publishedAt: item.snippet.publishedAt,
    channelTitle: item.snippet.channelTitle,
    description: item.snippet.description,
    isViewed: false,
    isFavorite: false,
  }));
}