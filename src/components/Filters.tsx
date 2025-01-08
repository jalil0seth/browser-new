import React from 'react';
import { Filter } from 'lucide-react';

export default function Filters() {
  return (
    <div className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-4 overflow-x-auto">
          <div className="flex items-center space-x-2 text-gray-600">
            <Filter className="h-4 w-4" />
            <span className="text-sm font-medium">Filters:</span>
          </div>
          
          <select className="text-sm border rounded-md px-3 py-1.5">
            <option>All Specialties</option>
            <option>SEO</option>
            <option>Social Media</option>
            <option>Content Marketing</option>
          </select>
          
          <select className="text-sm border rounded-md px-3 py-1.5">
            <option>All Languages</option>
            <option>Arabic</option>
            <option>English</option>
            <option>Both</option>
          </select>
          
          <select className="text-sm border rounded-md px-3 py-1.5">
            <option>Member Count</option>
            <option>1000+</option>
            <option>500-1000</option>
            <option>100-500</option>
          </select>
          
          <select className="text-sm border rounded-md px-3 py-1.5">
            <option>Activity Level</option>
            <option>Very Active</option>
            <option>Active</option>
            <option>Moderate</option>
          </select>
          
          <select className="text-sm border rounded-md px-3 py-1.5">
            <option>All Locations</option>
            <option>Casablanca</option>
            <option>Rabat</option>
            <option>Marrakech</option>
          </select>
        </div>
      </div>
    </div>
  );
}