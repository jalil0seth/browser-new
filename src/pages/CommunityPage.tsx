import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play } from 'lucide-react';

export default function CommunityPage() {
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
              alt="Mr Addie POD Academy"
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
        <h1 className="text-2xl font-bold mb-6">Mr Addie POD Academy</h1>

        {/* Video Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="relative h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="Cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Play className="w-8 h-8 text-white" fill="white" />
            </button>
            <div className="absolute bottom-4 left-4 text-white text-sm flex items-center gap-2">
              <span>1x</span>
              <span>•</span>
              <span>15 min</span>
            </div>
          </div>
        </div>

        {/* Community Info */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Community"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <span className="font-medium">1.2k</span>
                    <span className="text-gray-500">Members</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-green-500">66</span>
                    <span className="text-gray-500">Online</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">8</span>
                    <span className="text-gray-500">Admins</span>
                  </div>
                </div>
              </div>
            </div>
            <button className="bg-[#F6C549] text-black font-medium px-8 py-2 rounded-lg hover:bg-[#E5B438] transition-colors">
              JOIN $49/month
            </button>
          </div>

          <div className="space-y-6 text-gray-600">
            <p className="text-right" dir="rtl">
              الأكاديمية رقم 1 في توسيع نطاق في مجال التغذية عبر الطلب. مع نمو تعزيز وتحديد نستهدف أكثر من 1200 طالب
            </p>
            
            <div className="space-y-4" dir="rtl">
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
        <div className="text-center text-sm text-gray-500 mt-8">
          powered by <span className="font-semibold">skool</span>
        </div>
      </div>
    </div>
  );
}

interface FeatureProps {
  emoji: string;
  text: string;
}

function Feature({ emoji, text }: FeatureProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xl">{emoji}</span>
      <span className="text-gray-700">{text}</span>
    </div>
  );
}