import React from 'react';
import { Users, MessageCircle, Star, ExternalLink, DollarSign, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Community } from '../types';

interface Props {
  community: Community;
}

export default function CommunityCard({ community }: Props) {
  // Convert price to USD (assuming a simple conversion for demo)
  const priceInUSD = community.pricing.monthlyFee ? Math.round(community.pricing.monthlyFee * 0.32) : 0;

  return (
    <Link 
      to={`/community/${community.id}`}
      className="block group hover-card-scale"
    >
      <div className="bg-[#2C2F33] rounded-xl overflow-hidden border border-gray-800 hover:border-[#5865F2] transition-all duration-300">
        {community.coverImage && (
          <div className="h-40 w-full overflow-hidden">
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
              <div className="flex items-center space-x-2">
                <h3 className="text-xl font-semibold text-gray-200 group-hover:text-[#5865F2] transition-colors">
                  {community.nameEn}
                </h3>
                {community.verified && (
                  <Sparkles className="h-5 w-5 text-[#5865F2]" />
                )}
              </div>
              <h4 className="text-lg text-gray-400 mt-1">{community.nameAr}</h4>
              
              <div className="flex items-center space-x-2 mt-2">
                {community.specialty.map((spec, index) => (
                  <span key={index} className="px-2.5 py-1 text-xs font-medium bg-[#5865F2] bg-opacity-20 text-[#5865F2] rounded-full">
                    {spec.replace('-', ' ')}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col items-end space-y-2">
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-medium text-gray-200">{community.rating.toFixed(1)}</span>
              </div>
              
              {community.pricing.type === 'free' ? (
                <span className="px-2.5 py-1 text-xs font-medium bg-[#57F287] bg-opacity-20 text-[#57F287] rounded-full">
                  Free
                </span>
              ) : (
                <div className="flex items-center space-x-1 px-2.5 py-1 bg-[#5865F2] bg-opacity-20 text-[#5865F2] rounded-full">
                  <DollarSign className="h-3.5 w-3.5" />
                  <span className="text-xs font-medium">
                    {priceInUSD} USD
                  </span>
                </div>
              )}
            </div>
          </div>
          
          <p className="text-gray-400 line-clamp-2 mb-4">
            {community.descriptionEn}
          </p>
          
          <div className="flex items-center justify-between text-sm text-gray-400">
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
                  className="w-6 h-6 rounded-full border-2 border-[#2C2F33]"
                />
              ))}
              {community.admins.length > 3 && (
                <div className="w-6 h-6 rounded-full bg-[#5865F2] border-2 border-[#2C2F33] flex items-center justify-center">
                  <span className="text-xs text-gray-200">+{community.admins.length - 3}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}