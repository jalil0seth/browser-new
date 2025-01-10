export interface Niche {
  id: string;
  name: string;
  keywords: string[];
}

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  isViewed: boolean;
  isFavorite: boolean;
  publishedAt: string;
  channelTitle: string;
  description: string;
}