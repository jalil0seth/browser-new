import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Filters from './components/Filters';
import CommunityCard from './components/CommunityCard';
import CommunityDetails from './pages/CommunityDetails';
import type { Community } from './types';

// Sample data
export const sampleCommunity: Community = {
  id: '1',
  nameEn: 'Digital Marketing Masters',
  nameAr: 'أساتذة التسويق الرقمي',
  descriptionEn: 'A vibrant community of digital marketing professionals sharing insights and opportunities.',
  descriptionAr: 'مجتمع نابض بالحياة من محترفي التسويق الرقمي يتشاركون الرؤى والفرص.',
  specialty: ['social-media', 'content-marketing'],
  language: 'both',
  memberCount: 15000,
  activityLevel: 'very-active',
  country: 'International',
  region: 'global',
  rulesEn: ['Be respectful', 'No spam', 'Share value'],
  rulesAr: ['كن محترما', 'ممنوع البريد المزعج', 'شارك القيمة'],
  inviteLink: 'https://discord.gg/example',
  weeklyActiveUsers: 7500,
  weeklyMessages: 30000,
  rating: 4.8,
  reviews: [],
  upcomingEvents: [
    {
      id: '1',
      titleEn: 'Advanced Social Media Strategies',
      titleAr: 'استراتيجيات وسائل التواصل الاجتماعي المتقدمة',
      descriptionEn: 'Learn cutting-edge social media marketing techniques',
      descriptionAr: 'تعلم تقنيات تسويق وسائل التواصل الاجتماعي المتطورة',
      date: '2024-03-20',
      type: 'workshop'
    }
  ],
  verified: true,
  lastVerified: '2024-03-14',
  pricing: {
    type: 'hybrid',
    monthlyFee: 29,
    currency: 'USD',
    features: ['Premium content', 'Direct mentoring', 'Workshop access', 'Private networking']
  },
  admins: [
    {
      id: '1',
      nameEn: 'Alex Chen',
      nameAr: 'أليكس تشن',
      role: 'Community Lead',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face',
      specialties: ['social-media', 'content-marketing']
    },
    {
      id: '2',
      nameEn: 'Sarah Miller',
      nameAr: 'سارة ميلر',
      role: 'Content Manager',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face',
      specialties: ['content-marketing']
    }
  ],
  recentPosts: [
    {
      id: '1',
      authorId: '1',
      titleEn: 'Digital Marketing Trends 2024',
      titleAr: 'اتجاهات التسويق الرقمي 2024',
      contentEn: 'Exploring the latest trends shaping the future of digital marketing...',
      contentAr: 'استكشاف أحدث الاتجاهات التي تشكل مستقبل التسويق الرقمي...',
      createdAt: '2024-03-14T10:00:00Z',
      likes: 450,
      replies: 120
    }
  ],
  coverImage: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=1600&h=400&q=80'
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-[#23272A]">
            <Header />
            <Filters />
            <main className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <CommunityCard key={i} community={{
                    ...sampleCommunity,
                    id: String(i + 1),
                    nameEn: `${sampleCommunity.nameEn} ${i + 1}`,
                    nameAr: `${sampleCommunity.nameAr} ${i + 1}`,
                    rating: 4.5 + (Math.random() * 0.5),
                    memberCount: Math.floor(5000 + Math.random() * 20000),
                    weeklyMessages: Math.floor(10000 + Math.random() * 40000),
                    pricing: {
                      ...sampleCommunity.pricing,
                      monthlyFee: i % 3 === 0 ? 0 : 15 + Math.floor(Math.random() * 35),
                      type: i % 3 === 0 ? 'free' : 'paid'
                    }
                  }} />
                ))}
              </div>
            </main>
            <Footer />
          </div>
        } />
        <Route path="/community/:id" element={<CommunityDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;