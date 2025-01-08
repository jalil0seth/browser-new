import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Filters from './components/Filters';
import CommunityCard from './components/CommunityCard';
import CommunityDetails from './pages/CommunityDetails';
import type { Community } from './types';

// Sample data - In a real app, this would come from an API
export const sampleCommunity: Community = {
  id: '1',
  nameEn: 'MENA Digital Marketers',
  nameAr: 'مسوقين الشرق الأوسط وشمال أفريقيا الرقميين',
  descriptionEn: 'A community of passionate digital marketers sharing knowledge and opportunities across the MENA region.',
  descriptionAr: 'مجتمع من المسوقين الرقميين المتحمسين يتشاركون المعرفة والفرص في منطقة الشرق الأوسط وشمال أفريقيا.',
  specialty: ['social-media', 'content-marketing'],
  language: 'both',
  memberCount: 1500,
  activityLevel: 'very-active',
  country: 'Tunisia',
  region: 'north-africa',
  rulesEn: ['Be respectful', 'No spam'],
  rulesAr: ['كن محترما', 'ممنوع البريد المزعج'],
  inviteLink: 'https://discord.gg/example',
  weeklyActiveUsers: 750,
  weeklyMessages: 3000,
  rating: 4.8,
  reviews: [],
  upcomingEvents: [
    {
      id: '1',
      titleEn: 'Social Media Marketing Workshop',
      titleAr: 'ورشة عمل التسويق عبر وسائل التواصل الاجتماعي',
      descriptionEn: 'Learn advanced social media strategies',
      descriptionAr: 'تعلم استراتيجيات وسائل التواصل الاجتماعي المتقدمة',
      date: '2024-03-20',
      type: 'workshop'
    }
  ],
  verified: true,
  lastVerified: '2024-03-14',
  pricing: {
    type: 'hybrid',
    monthlyFee: 99,
    currency: 'TND',
    features: ['Premium content', 'Direct mentoring', 'Workshop access']
  },
  admins: [
    {
      id: '1',
      nameEn: 'Karim Benali',
      nameAr: 'كريم بن علي',
      role: 'Community Lead',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face',
      specialties: ['social-media', 'content-marketing']
    },
    {
      id: '2',
      nameEn: 'Sara Amrani',
      nameAr: 'سارة عمراني',
      role: 'Content Manager',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face',
      specialties: ['content-marketing']
    }
  ],
  recentPosts: [
    {
      id: '1',
      authorId: '1',
      titleEn: 'Digital Marketing Trends in MENA 2024',
      titleAr: 'اتجاهات التسويق الرقمي في الشرق الأوسط وشمال أفريقيا 2024',
      contentEn: 'Here are the top strategies that are working well for digital marketing in the MENA region...',
      contentAr: 'إليك أفضل الاستراتيجيات التي تعمل بشكل جيد للتسويق الرقمي في منطقة الشرق الأوسط وشمال أفريقيا...',
      createdAt: '2024-03-14T10:00:00Z',
      likes: 45,
      replies: 12
    }
  ],
  coverImage: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=1600&h=400&q=80'
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-gray-50">
            <Header />
            <Filters />
            <main className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <CommunityCard key={i} community={sampleCommunity} />
                ))}
              </div>
            </main>
          </div>
        } />
        <Route path="/community/:id" element={<CommunityDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;