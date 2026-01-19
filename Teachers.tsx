
import React from 'react';
import { GraduationCap, Award, MapPin, User, BookOpen } from 'lucide-react';
import { TEACHERS } from './constants';

const Teachers: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-5xl font-black text-slate-900 tracking-tight">আমাদের দক্ষ <span className="text-indigo-600">শিক্ষকমণ্ডলী</span></h2>
        <p className="text-xl text-slate-500 font-bold max-w-2xl mx-auto">অভিজ্ঞ ও নিবেদিতপ্রাণ শিক্ষকদের তত্ত্বাবধানে আমাদের শিক্ষার্থীরা অর্জন করছে মানসম্মত শিক্ষা।</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {TEACHERS.map(teacher => (
          <div 
            key={teacher.id} 
            className="bg-white rounded-[3.5rem] p-10 md:p-14 shadow-xl hover:shadow-2xl transition-all border border-slate-100 group relative overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-50 rounded-full -mr-24 -mt-24 blur-3xl group-hover:bg-indigo-100 transition-colors"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-10">
              {/* Profile Icon Placeholder */}
              <div className="w-40 h-40 bg-indigo-50 rounded-[2.5rem] flex items-center justify-center border-4 border-white shadow-lg shrink-0 group-hover:scale-105 transition-transform duration-500">
                <User size={64} className="text-indigo-300" />
              </div>

              <div className="flex-grow space-y-6 text-center md:text-left">
                <div>
                  <h3 className="text-3xl font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{teacher.name}</h3>
                  <div className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-600 text-white rounded-full font-black text-sm uppercase tracking-wider shadow-lg shadow-indigo-100">
                    <BookOpen size={16} />
                    {teacher.subject}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-50">
                  <div className="flex items-center gap-4 text-slate-600">
                    <div className="p-3 bg-slate-50 rounded-2xl text-indigo-400 group-hover:bg-indigo-50 transition-colors">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest">শিক্ষাগত যোগ্যতা</p>
                      <p className="font-bold text-lg">{teacher.education}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-slate-600">
                    <div className="p-3 bg-slate-50 rounded-2xl text-emerald-400 group-hover:bg-emerald-50 transition-colors">
                      <Award size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest">অভিজ্ঞতা</p>
                      <p className="font-bold text-lg">{teacher.experience}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-slate-600 col-span-full">
                    <div className="p-3 bg-slate-50 rounded-2xl text-pink-400 group-hover:bg-pink-50 transition-colors">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest">ঠিকানা</p>
                      <p className="font-bold text-lg">{teacher.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modern Invitation Card */}
      <div className="bg-slate-900 p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden text-center">
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-indigo-600/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        <div className="relative z-10 space-y-6">
          <h4 className="text-3xl font-black italic">"শিক্ষক হচ্ছেন মানুষ গড়ার কারিগর"</h4>
          <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">আমাদের শিক্ষকরা শুধুমাত্র পাঠ্যবই পড়ান না, বরং প্রতিটি ছাত্র-ছাত্রীকে একজন আদর্শ মানুষ হিসেবে গড়ে তোলার স্বপ্ন দেখেন।</p>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
