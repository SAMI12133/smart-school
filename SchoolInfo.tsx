
import React from 'react';
import { History, Target, CheckCircle, Monitor, Building2, Trophy, Users, BookMarked, Star, Lightbulb } from 'lucide-react';

const SchoolInfo: React.FC = () => {
  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="bg-white p-12 md:p-24 rounded-[4rem] shadow-2xl border border-slate-100 relative overflow-hidden">
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
        
        <div className="relative z-10 text-center mb-20">
          <h2 className="text-4xl md:text-8xl font-black mb-8 text-slate-900 leading-tight">
            বলইবুনিয়া <span className="text-indigo-600">মাধ্যমিক বিদ্যালয়</span>
          </h2>
          <p className="text-2xl text-slate-500 max-w-4xl mx-auto font-bold leading-relaxed">
            বাগেরহাট জেলার মোরলগঞ্জ উপজেলার একটি ঐতিহ্যের ধারক বিদ্যাপীঠ, যা ১৯৭৩ সাল থেকে জ্ঞানের আলো ছড়িয়ে যাচ্ছে।
          </p>
          <div className="w-32 h-2 bg-indigo-600 mx-auto mt-10 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8 space-y-16">
            <div className="space-y-8">
              <div className="flex items-center gap-5 text-indigo-600">
                <History size={40} className="stroke-[2.5]"/>
                <h3 className="text-4xl font-black">আমাদের সমৃদ্ধ ইতিহাস</h3>
              </div>
              <p className="text-xl text-slate-700 leading-[2] text-justify font-medium">
                বলইবুনিয়া মাধ্যমিক বিদ্যালয় অত্র অঞ্চলের শিক্ষা বিস্তারে এক উজ্জ্বল নক্ষত্র। ১৯৭৩ সালে স্থানীয় সমাজসেবক ও শিক্ষানুরাগী ব্যক্তিবর্গের ঐকান্তিক প্রচেষ্টায় এই প্রতিষ্ঠানটি যাত্রা শুরু করে। প্রতিষ্ঠার সময় থেকেই বিদ্যালয়টি মানসম্মত শিক্ষা প্রদানের মাধ্যমে অসংখ্য মেধাবী শিক্ষার্থী তৈরি করেছে যারা আজ দেশ ও বিদেশের গুরুত্বপূর্ণ বিভিন্ন স্তরে কর্মরত আছেন। মোরলগঞ্জের সামাজিক ও শিক্ষাগত উন্নয়নে বলইবুনিয়া স্কুলের অবদান অনস্বীকার্য।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-pink-600">
                  <Target size={32} className="stroke-[2.5]"/>
                  <h4 className="text-3xl font-black">লক্ষ্য ও ভিশন</h4>
                </div>
                <ul className="space-y-5 text-lg text-slate-600 font-bold">
                  <li className="flex gap-4 items-start">
                    <CheckCircle className="text-indigo-600 shrink-0 mt-1" size={24}/>
                    <span>আধুনিক ও প্রযুক্তি নির্ভর মানসম্মত শিক্ষা নিশ্চিত করা।</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <CheckCircle className="text-indigo-600 shrink-0 mt-1" size={24}/>
                    <span>সুশৃঙ্খল ও দেশপ্রেমিক সুনাগরিক হিসেবে শিক্ষার্থীদের গড়ে তোলা।</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <CheckCircle className="text-indigo-600 shrink-0 mt-1" size={24}/>
                    <span>বিজ্ঞান মনস্কতা ও সৃজনশীল মেধা বিকাশে পরিবেশ সৃষ্টি করা।</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-emerald-600">
                  <Lightbulb size={32} className="stroke-[2.5]"/>
                  <h4 className="text-3xl font-black">আমাদের দর্শন</h4>
                </div>
                <p className="text-xl text-slate-600 leading-relaxed font-medium">
                  আমরা মনে করি প্রতিটি শিক্ষার্থীই অনন্য। আমাদের শিক্ষাদানের মূল দর্শন হলো শিক্ষার্থীদের ভীতিমুক্ত পরিবেশে পাঠদান করা যাতে তারা তাদের সর্বোচ্চ প্রতিভা প্রকাশ করতে পারে। গতানুগতিক মুখস্থ বিদ্যার বদলে ব্যবহারিক ও জীবনমুখী শিক্ষায় আমরা অধিক গুরুত্ব প্রদান করি।
                </p>
              </div>
            </div>

            <div className="bg-indigo-50 p-12 rounded-[3.5rem] border border-indigo-100 shadow-sm">
              <div className="flex items-center gap-5 mb-8">
                <Monitor size={40} className="text-indigo-600"/>
                <h4 className="text-3xl font-black text-slate-900">আধুনিক সুযোগ-সুবিধা</h4>
              </div>
              <p className="text-xl text-slate-700 leading-relaxed font-medium">
                বলইবুনিয়া মাধ্যমিক বিদ্যালয়ে রয়েছে খোলামেলা ক্যাম্পাস ও মনোরম পরিবেশ। আমরা শ্রেণিকক্ষে মাল্টিমিডিয়া পদ্ধতিতে পাঠদান পরিচালনা করি যাতে শিক্ষার্থীরা জটিল বিষয়গুলো সহজে বুঝতে পারে। আমাদের রয়েছে পর্যাপ্ত খেলার মাঠ, সুসজ্জিত লাইব্রেরি এবং বিজ্ঞান ও কম্পিউটার ল্যাব। শিক্ষার্থীদের খেলাধুলা ও সাংস্কৃতিক কর্মকাণ্ডের মাধ্যমে আমরা একটি পূর্ণাঙ্গ মানুষ হিসেবে গড়ে তোলার চেষ্টা করি।
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-10">
            <div className="bg-slate-900 text-white p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 -mr-16 -mb-16">
                <Building2 size={240}/>
              </div>
              <h4 className="text-3xl font-black mb-10 border-b border-white/20 pb-5">বিদ্যালয় প্রোফাইল</h4>
              <div className="space-y-8 relative z-10">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-2">EIIN নম্বর</p>
                  <p className="text-2xl font-black">১২৩৪৫৬৭৮৯০</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-2">স্থাপিত</p>
                  <p className="text-2xl font-black">১৯৭৩ সাল</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-2">অবস্থান</p>
                  <p className="text-2xl font-black">মোরলগঞ্জ, বাগেরহাট</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-2">বিভাগ</p>
                  <p className="text-2xl font-black">খুলনা</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 text-center">
              <div className="w-20 h-20 bg-pink-100 text-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                <Trophy size={40}/>
              </div>
              <h5 className="text-2xl font-black text-slate-900 mb-3">সাফল্যের জয়গান</h5>
              <p className="text-slate-500 font-bold">উপজেলা পর্যায়ের বিভিন্ন ক্রীড়া ও মেধা অন্বেষণ প্রতিযোগিতায় আমাদের শিক্ষার্থীরা নিয়মিত শ্রেষ্ঠত্ব প্রমাণ করছে।</p>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-20 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-indigo-600 text-white rounded-[2rem] flex items-center justify-center mx-auto shadow-xl"><Users size={36}/></div>
            <h4 className="text-2xl font-black text-slate-900">দক্ষ শিক্ষকবৃন্দ</h4>
            <p className="text-slate-500 font-medium">একদল নিবেদিতপ্রাণ ও অভিজ্ঞ শিক্ষকমণ্ডলীর তত্ত্বাবধানে প্রতিটি ছাত্র-ছাত্রীর পাঠদান পরিচালিত হয়।</p>
          </div>
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-emerald-600 text-white rounded-[2rem] flex items-center justify-center mx-auto shadow-xl"><Monitor size={36}/></div>
            <h4 className="text-2xl font-black text-slate-900">স্মার্ট ক্লাসরুম</h4>
            <p className="text-slate-500 font-medium">শিক্ষাকে আকর্ষণীয় করতে আমরা প্রজেক্টর ও তথ্যপ্রযুক্তি ব্যবহার করে আধুনিক পদ্ধতিতে পাঠদান করি।</p>
          </div>
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-pink-600 text-white rounded-[2rem] flex items-center justify-center mx-auto shadow-xl"><Star size={36}/></div>
            <h4 className="text-2xl font-black text-slate-900">সৃজনশীল চর্চা</h4>
            <p className="text-slate-500 font-medium">পড়ালেখার পাশাপাশি বিতর্ক, গান ও আবৃত্তিসহ সহ-শিক্ষা কার্যক্রমে শিক্ষার্থীদের উৎসাহিত করা হয়।</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolInfo;
