import React, { useState } from 'react';
import { 
  Home as HomeIcon, 
  BookOpen, 
  Users, 
  Info, 
  MessageSquare, 
  Bell, 
  BrainCircuit, 
  Sparkles,
  MapPin,
  Send,
  Globe
} from 'lucide-react';

import Home from './Home';
import SchoolInfo from './SchoolInfo';
import Teachers from './Teachers';
import Library from './Library';
import Quiz from './Quiz';
import NoticeBoard from './NoticeBoard';
import Assistant from './Assistant';

type Tab = 'home' | 'school' | 'teachers' | 'library' | 'quiz' | 'notice' | 'assistant';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Home />;
      case 'school': return <SchoolInfo />;
      case 'teachers': return <Teachers />;
      case 'library': return <Library />;
      case 'quiz': return <Quiz />;
      case 'notice': return <NoticeBoard />;
      case 'assistant': return <Assistant />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Hero Header Section */}
      <header className="gradient-animate text-white py-24 px-4 relative overflow-hidden text-center shadow-2xl">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-sm font-bold mb-8 border border-white/30 tracking-widest uppercase">
            🚀 উপজেলা বিজ্ঞান মেলা ২০২৬ ডেমো প্রজেক্ট
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight drop-shadow-2xl">
            বলইবুনিয়া <span className="text-indigo-200">মাধ্যমিক বিদ্যালয়</span>
          </h1>
          <p className="text-xl md:text-3xl opacity-90 max-w-3xl mx-auto font-medium leading-relaxed mb-10">
            শিক্ষা, একতা ও নৈতিকতার সমন্বয়ে একটি আদর্শ ডিজিটাল বিদ্যাপীঠ।
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => setActiveTab('assistant')}
              className="bg-white text-indigo-700 px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition shadow-2xl flex items-center gap-3 active:scale-95"
            >
              <Sparkles className="w-6 h-6" />
              AI অ্যাসিস্ট্যান্ট
            </button>
            <button 
              onClick={() => setActiveTab('school')}
              className="bg-indigo-900/40 backdrop-blur-md border border-white/30 px-10 py-5 rounded-2xl font-black text-xl hover:bg-white/10 transition active:scale-95"
            >
              বিস্তারিত তথ্য দেখুন
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="sticky top-0 bg-slate-900/95 backdrop-blur-xl border-b border-slate-700 z-50 text-white shadow-xl overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
          <div className="hidden lg:block font-black text-2xl py-5 pr-8 border-r border-slate-700 text-indigo-400">
            বলইবুনিয়া স্কুল
          </div>
          <div className="flex gap-2 py-3 overflow-x-auto">
            {[
              { id: 'home', icon: <HomeIcon />, label: 'হোম' },
              { id: 'school', icon: <Info />, label: 'বিদ্যালয় তথ্য' },
              { id: 'teachers', icon: <Users />, label: 'শিক্ষকবৃন্দ' },
              { id: 'library', icon: <BookOpen />, label: 'লাইব্রেরি' },
              { id: 'quiz', icon: <BrainCircuit />, label: 'কুইজ' },
              { id: 'notice', icon: <Bell />, label: 'নোটিশ' },
              { id: 'assistant', icon: <MessageSquare />, label: 'AI সাহায্য' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Tab)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all whitespace-nowrap font-bold ${
                  activeTab === tab.id 
                    ? 'bg-indigo-600 text-white shadow-lg' 
                    : 'hover:bg-white/10 text-slate-300'
                }`}
              >
                {/* Fix: Added explicit props type to cloneElement to allow the size property */}
                {React.cloneElement(tab.icon as React.ReactElement<{ size?: number }>, { size: 18 })}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="flex-grow max-w-7xl mx-auto w-full p-4 md:p-8">
        {renderContent()}
      </main>

      {/* Modern Footer Section */}
      <footer className="bg-slate-900 text-white py-24 px-4 mt-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600 rounded-full -ml-64 -mb-64 blur-[150px] opacity-10"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 relative z-10 text-center md:text-left">
          <div className="space-y-8">
            <h4 className="text-4xl font-black text-indigo-400 tracking-tighter uppercase">বলইবুনিয়া বিদ্যালয়</h4>
            <p className="text-slate-400 text-xl leading-relaxed font-medium">বাগেরহাট জেলার একটি স্বনামধন্য ও ঐতিহ্যবাহী শিক্ষা প্রতিষ্ঠান। আমরা আগামী প্রজন্মের দক্ষ ও সুনাগরিক গড়ে তুলতে বদ্ধপরিকর।</p>
          </div>
          <div className="space-y-10">
            <h4 className="text-2xl font-black border-b border-slate-800 pb-4 inline-block">দ্রুত যোগাযোগ</h4>
            <div className="text-slate-400 space-y-6 text-xl font-bold">
              <div className="flex items-center justify-center md:justify-start gap-5">
                <MapPin className="text-indigo-400" size={24}/>
                <span>মোরলগঞ্জ, বাগেরহাট, খুলনা</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-5">
                <Send className="text-indigo-400" size={24}/>
                <span>info@boloibunia-high.edu.bd</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-5">
                <Bell className="text-indigo-400" size={24}/>
                <span>+৮৮০ ১৭০০-০০০০০০</span>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <h4 className="text-2xl font-black border-b border-slate-800 pb-4 inline-block">বিজ্ঞান মেলা ২০২৬</h4>
            <p className="text-slate-400 text-lg font-medium">এই প্রজেক্টটি উপজেলা বিজ্ঞান মেলা ২০২৬-এর জন্য একটি আধুনিক ডিজিটাল প্ল্যাটফর্মের ডেমো হিসেবে তৈরি করা হয়েছে।</p>
            <div className="flex justify-center md:justify-start gap-6">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-indigo-600 transition-all cursor-pointer border border-white/10 hover:border-indigo-400 group">
                <Globe size={28} className="group-hover:scale-110 transition-transform"/>
              </div>
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-indigo-600 transition-all cursor-pointer border border-white/10 hover:border-indigo-400 group">
                <Users size={28} className="group-hover:scale-110 transition-transform"/>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-slate-800 mt-24 pt-12 text-center">
           <p className="text-slate-500 font-black text-lg mb-2">© ২০২৬ বলইবুনিয়া মাধ্যমিক বিদ্যালয় • সর্বস্বত্ব সংরক্ষিত</p>
           <p className="text-slate-600 font-bold">প্রজেক্ট ডেভেলপমেন্ট: <span className="text-indigo-400 font-black">তালহা</span></p>
        </div>
      </footer>
    </div>
  );
};

export default App;