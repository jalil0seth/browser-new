import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Niche, Video } from '../types';

interface Store {
  niches: Niche[];
  videos: Record<string, Video[]>;
  addNiche: (niche: Omit<Niche, 'id'>) => void;
  updateNiche: (niche: Niche) => void;
  deleteNiche: (id: string) => void;
  toggleVideoStatus: (nicheId: string, videoId: string, type: 'viewed' | 'favorite') => void;
}

export const useStore = create<Store>()(
  persist(
    (set) => ({
      niches: [],
      videos: {},
      addNiche: (niche) =>
        set((state) => ({
          niches: [...state.niches, { ...niche, id: crypto.randomUUID() }],
        })),
      updateNiche: (niche) =>
        set((state) => ({
          niches: state.niches.map((n) => (n.id === niche.id ? niche : n)),
        })),
      deleteNiche: (id) =>
        set((state) => ({
          niches: state.niches.filter((n) => n.id !== id),
          videos: Object.fromEntries(
            Object.entries(state.videos).filter(([nicheId]) => nicheId !== id)
          ),
        })),
      toggleVideoStatus: (nicheId, videoId, type) =>
        set((state) => ({
          videos: {
            ...state.videos,
            [nicheId]: state.videos[nicheId].map((video) =>
              video.id === videoId
                ? {
                    ...video,
                    [type === 'viewed' ? 'isViewed' : 'isFavorite']:
                      !video[type === 'viewed' ? 'isViewed' : 'isFavorite'],
                  }
                : video
            ),
          },
        })),
    }),
    {
      name: 'youtube-tracker',
    }
  )
);