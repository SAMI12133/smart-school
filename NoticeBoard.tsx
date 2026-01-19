
import React from 'react';
import { Bell, Calendar, Trophy, AlertTriangle, Info, ArrowRight } from 'lucide-react';
import { NOTICES } from './constants';

const NoticeBoard: React.FC = () => {
  const getIcon = (type: string) => {
    switch(type) {
      case 'urgent': return <AlertTriangle className="text-red-500" size={32} />;
      case 'event': return <Trophy className="text-indigo-500" size={32} />;
      default: return <Info className="text-emerald-500" size={32} />;
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-in slide-in-from-bottom-10 duration-700">
      <div className="text-center space-y-4 mb-16">
         <h2 className="text-5xl md:text-6xl font-black text-slate-900 flex items-center justify-center gap-6">
          <div className="p-5 bg-indigo-600 text-white rounded-[2rem] shadow-2xl shadow-indigo-200 animate-bounce">
            <Bell size={40} />
          </div>
          বিদ্যালয় <span className="text-indigo-600">নোটিশ বোর্ড</span>
        </h2>
        <p className="text-xl text-slate-500 font-bold max-w-2xl mx-auto">বিদ্যালয়ের সকল গুরুত্বপূর্ণ ঘোষণা, পরীক্ষার রুটিন এবং ইভেন্টের তথ্য এখানে আপডেট করা হয়।</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {NOTICES.map((notice, index) => (
          <div 
            key={notice.id} 
            className={`bg-white p-10 md:p-14 rounded-[3.5rem] shadow-xl border-l-[20px] hover:translate-x-4 transition-all duration-500 group relative overflow-hidden flex flex-col md:flex-row gap-10 items-start ${
              notice.type === 'urgent' ? 'border-red-500 shadow-red-50' : 
              notice.type === 'event' ? 'border-indigo-500 shadow-indigo-50' : 'border-emerald-500 shadow-emerald-50'
            }`}
          >
            {/* Background Accent */}
            <div className={`absolute top-0 right-0 w-64 h-64 opacity-5 rounded-full -mr-32 -mt-32 blur-3xl ${
              notice.type === 'urgent' ? 'bg-red-500' : 
              notice.type === 'event' ? 'bg-indigo-500' : 'bg-emerald-500'
            }`}></div>

            <div className={`shrink-0 p-6 rounded-[2rem] ${
              notice.type === 'urgent' ? 'bg-red-50' : 
              notice.type === 'event' ? 'bg-indigo-50' : 'bg-emerald-50'
            }`}>
              {getIcon(notice.type)}
            </div>

            <div className="flex-grow space-y-6 relative z-10">
              <div className="flex flex-wrap justify-between items-center gap-4">
                <span className={`px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest shadow-sm ${
                  notice.type === 'urgent' ? 'bg-red-600 text-white' : 
                  notice.type === 'event' ? 'bg-indigo-600 text-white' : 'bg-emerald-600 text-white'
                }`}>
                  {notice.type === 'urgent' ? 'অত্যন্ত জরুরি' : notice.type === 'event' ? 'ইভেন্ট / ক্রীড়া' : 'সাধারণ নোটিশ'}
                </span>
                <span className="text-slate-400 text-lg font-black flex items-center gap-3">
                  <Calendar size={20} className="text-slate-300"/>
                  {notice.date}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-slate-800 group-hover:text-indigo-600 transition-colors leading-tight">
                {notice.title}
              </h3>
              <p className="text-slate-600 text-xl md:text-2xl leading-relaxed font-medium text-justify">
                {notice.content}
              </p>
              
              <div className="pt-6 flex items-center gap-3 text-indigo-600 font-black text-lg cursor-pointer hover:gap-5 transition-all">
                বিস্তারিত পড়ুন <ArrowRight size={24}/>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Subscription/Alert Card */}
      <div className="bg-slate-900 p-12 md:p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-indigo-600/20 rounded-full -mr-48 -mb-48 blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
          <div className="space-y-4">
            <h4 className="text-3xl md:text-4xl font-black">সবসময় আপডেটেড থাকুন</h4>
            <p className="text-xl text-slate-400 font-bold max-w-xl">নতুন নোটিশ আসার সাথে সাথে আপনার ফোনে নোটিফিকেশন পেতে আমাদের স্মার্ট অ্যাপে লগইন করুন।</p>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-12 py-5 rounded-[2rem] font-black text-xl transition-all shadow-xl active:scale-95 whitespace-nowrap border-b-4 border-indigo-800">
            নোটিফিকেশন চালু করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
