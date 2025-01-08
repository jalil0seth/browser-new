export type MarketingSpecialty = 'seo' | 'social-media' | 'content-marketing' | 'email-marketing' | 'ppc' | 'analytics';

export type Language = 'ar' | 'en' | 'both';

export type ActivityLevel = 'very-active' | 'active' | 'moderate' | 'low';

export type PricingType = 'free' | 'paid' | 'hybrid';

export type Region = 'north-africa' | 'levant' | 'gcc' | 'other';

export interface Admin {
  id: string;
  nameEn: string;
  nameAr: string;
  role: string;
  avatar: string;
  specialties: MarketingSpecialty[];
  linkedIn?: string;
  twitter?: string;
}

export interface Post {
  id: string;
  authorId: string;
  titleEn: string;
  titleAr: string;
  contentEn: string;
  contentAr: string;
  createdAt: string;
  likes: number;
  replies: number;
}

export interface Community {
  id: string;
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  specialty: MarketingSpecialty[];
  language: Language;
  memberCount: number;
  activityLevel: ActivityLevel;
  country: string;
  region: Region;
  rulesEn: string[];
  rulesAr: string[];
  inviteLink: string;
  weeklyActiveUsers: number;
  weeklyMessages: number;
  rating: number;
  reviews: Review[];
  upcomingEvents: Event[];
  verified: boolean;
  lastVerified: string;
  pricing: {
    type: PricingType;
    monthlyFee?: number;
    currency?: string;
    features?: string[];
  };
  admins: Admin[];
  recentPosts: Post[];
  coverImage?: string;
}