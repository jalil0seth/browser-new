import React from 'react';
import { Search, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Menu className="h-6 w-6 md:hidden" />
            <h1 className="text-2xl font-bold">
              <span className="block text-sm">المجتمعات المغربية للتسويق الرقمي</span>
              <span className="block">Moroccan Digital Marketing Communities</span>
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#featured" className="hover:text-indigo-200 transition">Featured</a>
            <a href="#communities" className="hover:text-indigo-200 transition">Communities</a>
            <a href="#events" className="hover:text-indigo-200 transition">Events</a>
          </div>
        </div>
        
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search communities..."
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 backdrop-blur-sm text-white placeholder-white placeholder-opacity-70 border border-white border-opacity-30 focus:outline-none focus:border-white"
            />
            <Search className="absolute right-3 top-3 h-5 w-5 text-white opacity-70" />
          </div>
        </div>
      </div>
    </header>
  );
}