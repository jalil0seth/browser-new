import React from 'react';
import { Search, Menu, MessageSquare } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-[#23272A] border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Menu className="h-6 w-6 md:hidden cursor-pointer hover:text-[#5865F2]" />
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-8 w-8 text-[#5865F2]" />
              <h1 className="text-2xl font-bold">
                <span className="block text-sm text-gray-400">المجتمعات المغربية للتسويق الرقمي</span>
                <span className="block text-white">Digital Marketing Hub</span>
              </h1>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 text-gray-300">
            <a href="#featured" className="hover:text-[#5865F2] transition">Featured</a>
            <a href="#communities" className="hover:text-[#5865F2] transition">Communities</a>
            <a href="#events" className="hover:text-[#5865F2] transition">Events</a>
            <button className="px-4 py-2 bg-[#5865F2] text-white rounded-full hover:bg-[#4752C4] transition">
              Sign In
            </button>
          </div>
        </div>
        
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search communities..."
              className="w-full px-4 py-3 rounded-lg bg-[#2C2F33] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-[#5865F2] focus:ring-1 focus:ring-[#5865F2]"
            />
            <Search className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
}