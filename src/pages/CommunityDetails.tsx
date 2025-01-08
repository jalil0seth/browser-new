import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, Users, MessageCircle, Star, ExternalLink, DollarSign, 
  MapPin, Globe, Shield, ArrowLeft, BookOpen, Play, Users2, 
  BarChart2, Award, CheckCircle, Clock, Video
} from 'lucide-react';
import type { Community } from '../types';
import { sampleCommunity } from '../App';

export default function CommunityDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const community = sampleCommunity;

  if (!community) {
    return (
      <div className="min-h-screen bg-[#23272A] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-200">Community Not Found</h2>
          <p className="mt-2 text-gray-400">The community you're looking for doesn't exist or has been removed.</p>
          <Link to="/" className="mt-4 inline-flex items-center text-[#5865F2] hover:text-[#4752C4]">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Communities
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'curriculum', label: 'Curriculum', icon: Play },
    { id: 'community', label: 'Community', icon: Users2 },
    { id: 'analytics', label: 'Analytics', icon: BarChart2 },
  ];

  const features = [
    { icon: Video, title: 'Live Sessions', description: 'Weekly live workshops and Q&A sessions' },
    { icon: Users, title: 'Expert Network', description: 'Connect with industry professionals' },
    { icon: Award, title: 'Certifications', description: 'Earn recognized certificates' },
    { icon: MessageCircle, title: '24/7 Support', description: 'Get help whenever you need it' },
  ];

  const stats = [
    { label: 'Active Members', value: community.memberCount.toLocaleString(), icon: Users },
    { label: 'Weekly Messages', value: community.weeklyMessages.toLocaleString(), icon: MessageCircle },
    { label: 'Success Rate', value: '94%', icon: CheckCircle },
    { label: 'Hours of Content', value: '120+', icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-[#23272A]">
      {/* Hero Section */}
      <div className="relative">
        <div className="h-80 w-full relative overflow-hidden">
          <img 
            src={community.coverImage} 
            alt={community.nameEn}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#23272A] to-transparent" />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="relative -mt-32">
            <div className="bg-[#2C2F33] rounded-xl shadow-lg p-8 border border-gray-800">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <h1 className="text-3xl font-bold text-white">{community.nameEn}</h1>
                    {community.verified && (
                      <Shield className="h-6 w-6 text-[#5865F2]" />
                    )}
                  </div>
                  <h2 className="text-2xl text-gray-400">{community.nameAr}</h2>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="font-medium">{community.rating.toFixed(1)} Rating</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Users className="h-5 w-5" />
                      <span>{community.memberCount.toLocaleString()} Members</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 lg:mt-0 flex flex-col sm:flex-row gap-4">
                  {community.pricing.type !== 'free' && (
                    <div className="text-center px-6 py-3 bg-[#2C2F33] border border-gray-700 rounded-lg">
                      <div className="text-2xl font-bold text-white">${community.pricing.monthlyFee}/mo</div>
                      <div className="text-sm text-gray-400">Professional Plan</div>
                    </div>
                  )}
                  <a
                    href={community.inviteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#5865F2] text-white rounded-lg hover:bg-[#4752C4] transition"
                  >
                    Join Community
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-10 bg-[#2C2F33] border-b border-gray-800 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center space-x-2 py-4 border-b-2 px-1 ${
                  activeTab === id
                    ? 'border-[#5865F2] text-[#5865F2]'
                    : 'border-transparent text-gray-400 hover:text-gray-200'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map(({ icon: Icon, title, description }) => (
                <div key={title} className="bg-[#2C2F33] p-6 rounded-lg border border-gray-800">
                  <Icon className="h-8 w-8 text-[#5865F2] mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                  <p className="text-gray-400">{description}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="bg-[#2C2F33] p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">About This Community</h3>
              <p className="text-gray-400 mb-4">{community.descriptionEn}</p>
              <p className="text-gray-400" dir="rtl">{community.descriptionAr}</p>
            </div>

            {/* Recent Posts */}
            {community.recentPosts?.length > 0 && (
              <div className="bg-[#2C2F33] p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-4">Recent Discussions</h3>
                <div className="space-y-4">
                  {community.recentPosts.map(post => (
                    <div key={post.id} className="bg-[#23272A] rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <img
                          src={community.admins.find(a => a.id === post.authorId)?.avatar}
                          alt=""
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <h4 className="font-medium text-white">{post.titleEn}</h4>
                          <p className="text-gray-400 mt-1">{post.contentEn}</p>
                          <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                            <span>{post.likes} likes</span>
                            <span>{post.replies} replies</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ label, value, icon: Icon }) => (
                <div key={label} className="bg-[#2C2F33] p-4 rounded-lg border border-gray-800 text-center">
                  <Icon className="h-6 w-6 text-[#5865F2] mx-auto mb-2" />
                  <div className="text-xl font-bold text-white">{value}</div>
                  <div className="text-sm text-gray-400">{label}</div>
                </div>
              ))}
            </div>

            {/* Instructors */}
            <div className="bg-[#2C2F33] rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-4">Community Leaders</h3>
              <div className="space-y-4">
                {community.admins.map(admin => (
                  <div key={admin.id} className="flex items-center space-x-3">
                    <img src={admin.avatar} alt={admin.nameEn} className="w-12 h-12 rounded-full" />
                    <div>
                      <p className="font-medium text-white">{admin.nameEn}</p>
                      <p className="text-sm text-gray-400">{admin.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            {community.upcomingEvents?.length > 0 && (
              <div className="bg-[#2C2F33] rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  {community.upcomingEvents.map(event => (
                    <div key={event.id} className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-[#5865F2] flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-white">{event.titleEn}</h4>
                        <p className="text-sm text-gray-400 mt-1">{event.descriptionEn}</p>
                        <p className="text-sm font-medium text-[#5865F2] mt-2">
                          {new Date(event.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}