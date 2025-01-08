import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Users, Play } from 'lucide-react';

function CommunityPage() {
  const { id } = useParams();

  // Mock data - in a real app, you'd fetch this based on the ID
  const communityData = {
    title: "Mr Addie POD Academy",
    members: "1.2k",
    online: "66",
    admins: "8",
    price: "$49/month",
    description: "الأكاديمية رقم 1 في توسيع نطاق في مجال التغذية عبر الطلب. مع نمو تعزيز وتحديد نستهدف أكثر من 1200 طالب",
    videoUrl: "https://example.com/video",
    coverImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Navigation */}
      <nav className="border-b bg-white px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div className="flex items-center gap-2">
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="Community"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="font-semibold text-gray-900">Mr Addie POD Academy</span>
          </div>
        </div>
        <button className="px-6 py-2 text-gray-500 hover:text-gray-700">
          LOG IN
        </button>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Community Header */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="relative h-[400px]">
            <img 
              src={communityData.coverImage} 
              alt={communityData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Play className="w-8 h-8 text-white" fill="white" />
            </button>
            <div className="absolute bottom-4 left-4 text-white text-sm">
              <span className="mr-2">1x</span>
              <span>15 min</span>
            </div>
          </div>
        </div>

        {/* Community Info */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Community"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h1 className="text-xl font-bold">{communityData.title}</h1>
                <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{communityData.members}</span>
                  </div>
                  <span className="text-green-500">{communityData.online} Online</span>
                  <span>{communityData.admins} Admins</span>
                </div>
              </div>
            </div>
            <button className="bg-[#4F46E5] text-white px-8 py-2 rounded-lg hover:bg-[#4338CA] transition-colors">
              JOIN {communityData.price}
            </button>
          </div>

          <div className="space-y-6 text-gray-600">
            <p className="text-right" dir="rtl">{communityData.description}</p>
            
            <div className="space-y-4">
              <Feature emoji="🎯" text="دورة متقدمة في 8 في مجال العمل عبر الانترنت" />
              <Feature emoji="👨‍💻" text="الوصول الى البث المباشر مع عشرين ربح" />
              <Feature emoji="😎" text="شبكة من الأشخاص ذوي الأفكار المشابهة" />
              <Feature emoji="🕐" text="دعم مستمر 24/7" />
              <Feature emoji="🎯" text="بث مباشر كل اسبوع" />
              <Feature emoji="✨" text="شبكة يمكنك التسويق بصفحتك" />
              <Feature emoji="🔧" text="أدوات الذكاء الاصطناعي لتبسيط عملك" />
              <Feature emoji="📈" text="تقنيات مربحة يوميا" />
              <Feature emoji="🚀" text="تجربة مجانية لأسبوع مع بوستر" />
            </div>
          </div>
        </div>

        {/* Powered by Skool */}
        <div className="text-center text-sm text-gray-500">
          powered by <span className="font-bold">skool</span>
        </div>
      </div>
    </div>
  );
}

function Feature({ emoji, text }) {
  return (
    <div className="flex items-center gap-3" dir="rtl">
      <span className="text-xl">{emoji}</span>
      <span className="text-gray-700">{text}</span>
    </div>
  );
}

export default CommunityPage;