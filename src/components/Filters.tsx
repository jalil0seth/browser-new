import React from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';

export default function Filters() {
  return (
    <div className="bg-[#2C2F33] border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-4 overflow-x-auto">
          <div className="flex items-center space-x-2 text-gray-400">
            <SlidersHorizontal className="h-4 w-4" />
            <span className="text-sm font-medium">Filters:</span>
          </div>
          
          <select className="text-sm bg-[#23272A] text-gray-200 border border-gray-800 rounded-md px-3 py-1.5 focus:border-[#5865F2] focus:outline-none">
            <option>All Specialties</option>
            <option>Social Media</option>
            <option>Content Marketing</option>
            <option>SEO</option>
            <option>Email Marketing</option>
            <option>PPC</option>
            <option>Analytics</option>
          </select>
          
          <select className="text-sm bg-[#23272A] text-gray-200 border border-gray-800 rounded-md px-3 py-1.5 focus:border-[#5865F2] focus:outline-none">
            <option>All Languages</option>
            <option>Arabic</option>
            <option>English</option>
            <option>Both</option>
          </select>
          
          <select className="text-sm bg-[#23272A] text-gray-200 border border-gray-800 rounded-md px-3 py-1.5 focus:border-[#5865F2] focus:outline-none">
            <option>Member Count</option>
            <option>10000+</option>
            <option>5000-10000</option>
            <option>1000-5000</option>
            <option>500-1000</option>
          </select>
          
          <select className="text-sm bg-[#23272A] text-gray-200 border border-gray-800 rounded-md px-3 py-1.5 focus:border-[#5865F2] focus:outline-none">
            <option>Activity Level</option>
            <option>Very Active</option>
            <option>Active</option>
            <option>Moderate</option>
          </select>
          
          <select className="text-sm bg-[#23272A] text-gray-200 border border-gray-800 rounded-md px-3 py-1.5 focus:border-[#5865F2] focus:outline-none">
            <option>Price Range</option>
            <option>Free</option>
            <option>Under $10</option>
            <option>$10-$25</option>
            <option>$25-$50</option>
            <option>$50+</option>
          </select>
        </div>
      </div>
    </div>
  );
}