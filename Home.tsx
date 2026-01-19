
import React from 'react';
import { ShieldCheck, Globe, Quote, Award, Calendar, User } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Intro Section */}
      <section className="bg-white p-12 md:p-20 rounded-[3.5rem] shadow-2xl border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full -mr-48 -mt-48 blur-3xl opacity-60"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="bg-indigo-600 text-white px-5 py-2 rounded-full font-black text-xs uppercase tracking-widest inline-block shadow-lg shadow-indigo-200">স্থাপিত: ১৯৭৩</span>
              <span className="bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full font-black text-xs uppercase tracking-widest inline-block border border-emerald-200">গৌরবের ৫৩ বছর</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-[1.1]">
              আলোকিত <span className="text-indigo-600">ভবিষ্যতের</span> <br/>স্মার্ট বিদ্যাপীঠ
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed text-justify font-medium">
              বলইবুনিয়া মাধ্যমিক বিদ্যালয় বাগেরহাট জেলার মোরলগঞ্জ উপজেলার একটি স্বনামধন্য ও ঐতিহ্যবাহী শিক্ষা প্রতিষ্ঠান। ১৯৭৩ সালে প্রতিষ্ঠিত এই প্রতিষ্ঠানটি দীর্ঘ সময় ধরে অত্র অঞ্চলে শিক্ষার আলো ছড়িয়ে যাচ্ছে। আমরা বিশ্বাস করি প্রতিটি শিশুর মধ্যে লুকিয়ে আছে এক একজন বিজ্ঞানী ও দার্শনিক। আমাদের লক্ষ্য সেই সুপ্ত প্রতিভাকে আধুনিক প্রযুক্তি ও সঠিক শিক্ষার মাধ্যমে জাগ্রত করা।
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-center gap-4 bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <div className="p-4 bg-green-100 text-green-600 rounded-2xl"><ShieldCheck size={32}/></div>
                <div>
                  <h4 className="font-black text-slate-900 leading-none mb-1">সুশৃঙ্খল ক্যাম্পাস</h4>
                  <p className="text-sm text-slate-500 font-medium">নিরাপদ ও সুন্দর পরিবেশ</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <div className="p-4 bg-blue-100 text-blue-600 rounded-2xl"><Globe size={32}/></div>
                <div>
                  <h4 className="font-black text-slate-900 leading-none mb-1">ডিজিটাল স্মার্টনেস</h4>
                  <p className="text-sm text-slate-500 font-medium">প্রযুক্তিগত আধুনিক শিক্ষা</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 bg-slate-200 aspect-square">
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800" alt="Students in Classroom" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </section>

      {/* Headmaster Message Section (Text Focused) */}
      <section className="bg-white p-12 md:p-24 rounded-[4rem] shadow-2xl border border-indigo-50 relative overflow-hidden">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-40"></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 space-y-8 text-center lg:text-left">
            <div className="relative inline-block mx-auto lg:mx-0">
               <div className="w-48 h-48 bg-indigo-100 rounded-[2.5rem] flex items-center justify-center border-4 border-white shadow-xl">
                  <User size={80} className="text-indigo-400" />
               </div>
               <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white p-4 rounded-2xl shadow-xl">
                 <Quote size={24} />
               </div>
            </div>
            <div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">মোঃ আমির হোসেন শিকদার</h3>
              <p className="text-indigo-600 font-black text-lg uppercase tracking-[0.1em] mt-2">প্রধান শিক্ষক</p>
              <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                  <Award size={18} className="text-indigo-500"/>
                  <span className="font-bold text-sm text-slate-600">বিএসএস, বিএড</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                  <Calendar size={18} className="text-emerald-500"/>
                  <span className="font-bold text-sm text-slate-600">অভিজ্ঞ প্রধান শিক্ষক</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-10">
            <div className="inline-flex items-center gap-4 bg-indigo-50 px-6 py-3 rounded-2xl text-indigo-700">
              <span className="font-black text-lg">প্রধান শিক্ষকের বাণী</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              স্মার্ট বাংলাদেশ গড়তে <br/><span className="text-indigo-600">স্মার্ট শিক্ষার</span> বিকল্প নেই
            </h2>
            <div className="space-y-6 text-xl text-slate-600 leading-relaxed text-justify font-medium italic bg-slate-50/50 p-8 rounded-[2.5rem] border border-slate-100">
              <p>
                "সুপ্রিয় শিক্ষার্থীবৃন্দ, অভিভাবকমণ্ডলী এবং শুভানুধ্যায়ীগণ, আসসালামু আলাইকুম। বলইবুনিয়া মাধ্যমিক বিদ্যালয় একটি আদর্শ মানুষ গড়ার কারখানা। ১৯৭৩ সালে প্রতিষ্ঠার পর থেকে এই বিদ্যাপীঠ অত্র অঞ্চলে শিক্ষা ও সংস্কৃতির প্রসারে নিরলসভাবে কাজ করে যাচ্ছে।"
              </p>
              <p>
                "বর্তমান চতুর্থ শিল্প বিপ্লবের যুগে আমাদের শিক্ষার্থীদের প্রযুক্তিনির্ভর শিক্ষায় দক্ষ করে গড়ে তোলা অপরিহার্য। আমাদের এই 'Smart School' প্রজেক্টটি সেই আধুনিকায়নেরই একটি ক্ষুদ্র প্রয়াস। আমরা চাই আমাদের শিক্ষার্থীরা বিজ্ঞান মনস্ক ও সৃজনশীল মেধা বিকাশের মাধ্যমে আগামী দিনের চ্যালেঞ্জ মোকাবিলা করবে।"
              </p>
              <p>
                "আমি বিশ্বাস করি, শিক্ষক-শিক্ষার্থী ও অভিভাবকদের সম্মিলিত প্রচেষ্টায় আমাদের এই প্রিয় বিদ্যালয়টি ডিজিটাল শিক্ষা ব্যবস্থায় এক অনন্য দৃষ্টান্ত স্থাপন করবে। সকলের মঙ্গল কামনায়—ধন্যবাদ।"
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
