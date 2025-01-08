import React from 'react';
import { Users, MessageCircle, Star, ExternalLink, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Community } from '../types';

interface Props {
  community: Community;
}

export default function CommunityCard({ community }: Props) {
  return (
    <Link 
      to={`/community/${community.id}`}
      className="block group"
    >
      <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 relative">
        {community.coverImage && (
          <div className="h-32 w-full overflow-hidden">
            <img 
              src={community.coverImage} 
              alt={community.nameEn}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                {community.nameEn}
              </h3>
              <h4 className="text-lg text-gray-800 mt-1">{community.nameAr}</h4>
              
              <div className="flex items-center space-x-2 mt-2">
                <span className="px-2.5 py-1 text-xs font-medium bg-indigo-50 text-indigo-700 rounded-full">
                  {community.region}
                </span>
                <span className="px-2.5 py-1 text-xs font-medium bg-purple-50 text-purple-700 rounded-full">
                  {community.country}
                </span>
              </div>
            </div>
            
            <div className="flex flex-col items-end space-y-2">
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-medium">{community.rating.toFixed(1)}</span>
              </div>
              
              {community.pricing.type === 'free' ? (
                <span className="px-2.5 py-1 text-xs font-medium bg-green-50 text-green-700 rounded-full">
                  Free
                </span>
              ) : (
                <div className="flex items-center space-x-1 px-2.5 py-1 bg-purple-50 text-purple-700 rounded-full">
                  <DollarSign className="h-3.5 w-3.5" />
                  <span className="text-xs font-medium">
                    {community.pricing.monthlyFee} {community.pricing.currency}
                  </span>
                </div>
              )}
            </div>
          </div>
          
          <p className="text-gray-600 line-clamp-2 mb-4">
            {community.descriptionEn}
          </p>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{community.memberCount.toLocaleString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="h-4 w-4" />
                <span>{community.weeklyMessages.toLocaleString()}/week</span>
              </div>
            </div>
            
            <div className="flex -space-x-2">
              {community.admins.slice(0, 3).map(admin => (
                <img
                  key={admin.id}
                  src={admin.avatar}
                  alt={admin.nameEn}
                  className="w-6 h-6 rounded-full border-2 border-white"
                />
              ))}
              {community.admins.length > 3 && (
                <div className="w-6 h-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center">
                  <span className="text-xs text-gray-600">+{community.admins.length - 3}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}