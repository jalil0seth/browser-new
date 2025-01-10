import { Grid, Card, Text, Button } from '@mantine/core';
import { Eye, Star, ExternalLink, Calendar } from 'lucide-react';
import { useStore } from '../store/useStore';

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  if (diffInYears > 0) return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
  if (diffInMonths > 0) return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
  if (diffInDays > 0) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  if (diffInHours > 0) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  if (diffInMinutes > 0) return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
  return 'Just now';
}

export function FavoritesPage() {
  const { videos, toggleVideoStatus } = useStore();

  const favoriteVideos = Object.entries(videos).flatMap(([nicheId, nicheVideos]) =>
    nicheVideos
      .filter((video) => video.isFavorite)
      .map((video) => ({ ...video, nicheId }))
  );

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <Text size="xl" weight={700} className="text-gray-900">
          Favorite Videos
        </Text>
        <div className="flex items-center gap-2 text-gray-500">
          <Calendar className="w-4 h-4" />
          <Text size="sm">Last updated: {new Date().toLocaleDateString()}</Text>
        </div>
      </div>

      <Grid>
        {favoriteVideos.map((video) => (
          <Grid.Col key={video.id} span={{ base: 12, sm: 6, md: 4 }}>
            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow" radius="md">
              <div className="relative group cursor-pointer">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full aspect-video object-cover rounded-md mb-2 transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 px-2 py-1 rounded text-xs text-white">
                  {formatDate(video.publishedAt)}
                </div>
                {video.isViewed && (
                  <div className="absolute top-2 left-2 bg-blue-500 bg-opacity-90 px-2 py-1 rounded text-xs text-white flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    Viewed
                  </div>
                )}
              </div>
              <div className="p-3">
                <Text size="lg" weight={500} className="mb-1 line-clamp-2 text-gray-900 hover:text-blue-600 cursor-pointer">
                  {video.title}
                </Text>
                <Text size="sm" className="mb-2 text-gray-600 hover:text-gray-900 cursor-pointer">
                  {video.channelTitle}
                </Text>
                <Text size="xs" className="text-gray-500 mb-4">
                  {video.description.slice(0, 100)}...
                </Text>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Button
                      variant={video.isViewed ? 'filled' : 'light'}
                      onClick={() => toggleVideoStatus(video.nicheId, video.id, 'viewed')}
                      className={`${video.isViewed ? 'bg-gray-100' : ''} px-2 py-1 h-8 min-h-0`}
                      size="xs"
                    >
                      <Eye className="w-3 h-3 mr-1" />
                      {video.isViewed ? 'Viewed' : 'Watch'}
                    </Button>
                    <Button
                      variant="filled"
                      onClick={() => toggleVideoStatus(video.nicheId, video.id, 'favorite')}
                      className="bg-gray-100 px-2 py-1 h-8 min-h-0"
                      size="xs"
                    >
                      <Star className="w-3 h-3" />
                    </Button>
                  </div>
                  <Button
                    component="a"
                    href={`https://youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    variant="subtle"
                    className="text-gray-600 hover:text-gray-900 px-2 h-8 min-h-0"
                    size="xs"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
}