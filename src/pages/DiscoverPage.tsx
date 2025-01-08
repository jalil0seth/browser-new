import React from 'react';
import { Search, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function DiscoverPage() {
  const navigate = useNavigate();

  const handleCommunityClick = (id: number) => {
    navigate(`/community/${id}`);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Navigation */}
      <nav className="border-b bg-white px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">
            <span className="text-[#1E40AF]">s</span>
            <span className="text-[#EF4444]">k</span>
            <span className="text-[#F59E0B]">o</span>
            <span className="text-[#10B981]">o</span>
            <span className="text-[#6366F1]">l</span>
          </span>
        </div>
        <button className="px-6 py-2 text-gray-500 hover:text-gray-700">
          LOG IN
        </button>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Discover communities</h1>
          <p className="text-lg">
            or <span className="text-blue-600 hover:underline cursor-pointer">create your own</span>
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for anything"
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          <button className="px-4 py-2 rounded-full bg-white hover:bg-gray-50 text-gray-700">
            All
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-700 text-white">
            <span className="flex items-center gap-2">
              💰 Business
            </span>
          </button>
          <button className="px-4 py-2 rounded-full bg-white hover:bg-gray-50 text-gray-700">
            <span className="flex items-center gap-2">
              🍎 Health & fitness
            </span>
          </button>
          <button className="px-4 py-2 rounded-full bg-white hover:bg-gray-50 text-gray-700">
            <span className="flex items-center gap-2">
              📚 Personal development
            </span>
          </button>
          <button className="px-4 py-2 rounded-full bg-white hover:bg-gray-50 text-gray-700">
            <span className="flex items-center gap-2">
              🎨 Arts & crafts
            </span>
          </button>
          <button className="px-4 py-2 rounded-full bg-white hover:bg-gray-50 text-gray-700">
            <span className="flex items-center gap-2">
              🎸 Music
            </span>
          </button>
        </div>

        {/* Community Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CommunityCard
            number={1}
            title="Digital Growth Community"
            description="Welcome to Digital Growth Community! Our Mission: To Help You Build a Daily Pay Customer Base Digitally!"
            members="48.1k"
            status="Private"
            price="Paid"
            image="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            onClick={() => handleCommunityClick(1)}
          />
          <CommunityCard
            number={2}
            title="Mr Addie POD Academy"
            description="الأكاديمية رقم 1 في توسيع نطاق في مجال التغذية عبر الطلب. مع نمو تعزيز وتحديد نستهدف أكثر من 1200 طالب"
            members="1.2k"
            status="Private"
            price="$49/month"
            image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            onClick={() => handleCommunityClick(2)}
          />
          <CommunityCard
            number={3}
            title="Digital Wealth Academy"
            description="Welcome to the Digital Wealth Academy! The one stop shop when it comes to monetizing online with digital marketing."
            members="90.1k"
            status="Private"
            price="Paid"
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            onClick={() => handleCommunityClick(3)}
          />
        </div>
      </div>
    </div>
  );
}

function CommunityCard({ number, title, description, members, status, price, image, onClick }) {
  return (
    <div 
      className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" 
      onClick={onClick}
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
          #{number}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <Users className="w-6 h-6 text-gray-600" />
          </div>
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span>{status}</span>
          <span>•</span>
          <span>{members} Members</span>
          <span>•</span>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
}

export default DiscoverPage;