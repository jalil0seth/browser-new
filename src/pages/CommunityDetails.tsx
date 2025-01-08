import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Users, MessageCircle, Star, ExternalLink, DollarSign, MapPin, Globe, Shield, ArrowLeft } from 'lucide-react';
import type { Community } from '../types';

// In a real app, this would be fetched from an API
import { sampleCommunity } from '../App';

export default function CommunityDetails() {
  const { id } = useParams();
  // For demo purposes, we'll use the sample data
  // In a real app, you would fetch the community data based on the id
  const community = sampleCommunity;

  if (!community) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Community Not Found</h2>
          <p className="mt-2 text-gray-600">The community you're looking for doesn't exist or has been removed.</p>
          <Link to="/" className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Communities
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative">
        {community.coverImage ? (
          <div className="h-64 w-full">
            <img 
              src={community.coverImage} 
              alt={community.nameEn}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        ) : (
          <div className="h-64 w-full bg-gradient-to-r from-indigo-600 to-purple-600" />
        )}
        
        <div className="container mx-auto px-4">
          <div className="relative -mt-32 bg-white rounded-xl shadow-lg p-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{community.nameEn}</h1>
                <h2 className="text-2xl text-gray-800 mt-2">{community.nameAr}</h2>
                
                <div className="flex items-center space-x-4 mt-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-gray-500" />
                    <span>{community.country}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-gray-500" />
                    <span>{community.region}</span>
                  </div>
                  {community.verified && (
                    <div className="flex items-center space-x-2">
                      <Shield className="h-5 w-5 text-green-500" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="flex items-center space-x-1">
                    <Star className="h-6 w-6 text-yellow-400 fill-current" />
                    <span className="text-2xl font-bold">{community.rating?.toFixed(1) || 'N/A'}</span>
                  </div>
                  <p className="text-sm text-gray-500">Community Rating</p>
                </div>
                
                {community.inviteLink && (
                  <a
                    href={community.inviteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                  >
                    <span>Join Community</span>
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="col-span-2 space-y-8">
                <section>
                  <h3 className="text-xl font-semibold mb-4">About</h3>
                  <p className="text-gray-600 mb-4">{community.descriptionEn}</p>
                  <p className="text-gray-600" dir="rtl">{community.descriptionAr}</p>
                </section>

                {community.recentPosts?.length > 0 && (
                  <section>
                    <h3 className="text-xl font-semibold mb-4">Recent Discussions</h3>
                    <div className="space-y-4">
                      {community.recentPosts.map(post => (
                        <div key={post.id} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-start space-x-3">
                            <img
                              src={community.admins.find(a => a.id === post.authorId)?.avatar}
                              alt=""
                              className="w-10 h-10 rounded-full"
                            />
                            <div className="flex-1">
                              <h4 className="font-medium">{post.titleEn}</h4>
                              <p className="text-gray-600 mt-1">{post.contentEn}</p>
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
                  </section>
                )}

                {community.upcomingEvents?.length > 0 && (
                  <section>
                    <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {community.upcomingEvents.map(event => (
                        <div key={event.id} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-start space-x-3">
                            <Calendar className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium">{event.titleEn}</h4>
                              <p className="text-sm text-gray-600 mt-1">{event.descriptionEn}</p>
                              <p className="text-sm font-medium text-indigo-600 mt-2">
                                {new Date(event.date).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Community Stats</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Users className="h-5 w-5 text-gray-500" />
                        <span>Members</span>
                      </div>
                      <span className="font-medium">{community.memberCount?.toLocaleString() || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <MessageCircle className="h-5 w-5 text-gray-500" />
                        <span>Weekly Messages</span>
                      </div>
                      <span className="font-medium">{community.weeklyMessages?.toLocaleString() || 'N/A'}</span>
                    </div>
                  </div>
                </div>

                {community.admins?.length > 0 && (
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Community Admins</h3>
                    <div className="space-y-4">
                      {community.admins.map(admin => (
                        <div key={admin.id} className="flex items-center space-x-3">
                          <img src={admin.avatar} alt={admin.nameEn} className="w-10 h-10 rounded-full" />
                          <div>
                            <p className="font-medium">{admin.nameEn}</p>
                            <p className="text-sm text-gray-500">{admin.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {community.pricing?.type !== 'free' && (
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Pricing</h3>
                    <div className="flex items-center space-x-2 mb-4">
                      <DollarSign className="h-5 w-5 text-purple-600" />
                      <span className="text-xl font-bold">
                        {community.pricing.monthlyFee} {community.pricing.currency}/month
                      </span>
                    </div>
                    {community.pricing.features && (
                      <ul className="space-y-2">
                        {community.pricing.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}