
import React, { useState, useEffect } from 'react';
import { Search, Download, BookOpen, Loader2, Filter, ExternalLink } from 'lucide-react';
import { geminiService } from './geminiService';
import { Book } from './types';

const CLASSES = ['৬ষ্ঠ', '৭ম', '৮ম', '৯ম', '১০ম'];

const Library: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState('৯ম');
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchBooks = async (className: string) => {
    setLoading(true);
    try {
      const result = await geminiService.getBooksByClass(className);
      const formattedBooks = result.map((b: any, index: number) => ({
        id: b.id || `book-${index}`,
        title: b.title,
        class: className,
        format: b.format || 'PDF',
        thumbnail: b.thumbnail || `https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400`
      }));
      setBooks(formattedBooks);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks(selectedClass);
  }, [selectedClass]);

  const handleDownload = (bookTitle: string) => {
    // Redirecting to nctbbook.com search for the specific book title
    const searchUrl = `https://nctbbook.com/?s=${encodeURIComponent(bookTitle)}`;
    window.open(searchUrl, '_blank');
  };

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="animate-in fade-in duration-700 space-y-12">
      {/* Header & Filter Section */}
      <div className="bg-white p-8 md:p-14 rounded-[3.5rem] shadow-2xl border border-slate-100">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 flex flex-col md:flex-row items-center justify-center lg:justify-start gap-5">
              <div className="p-4 bg-indigo-600 text-white rounded-[1.5rem] shadow-xl">
                <BookOpen size={32} />
              </div>
              স্মার্ট ডিজিটাল লাইব্রেরি
            </h2>
            <p className="text-xl text-slate-500 font-bold max-w-xl">
              NCTB শিক্ষাক্রম অনুযায়ী সকল পাঠ্যপুস্তক এখন আপনার ডিজিটাল ডিভাইসে।
            </p>
          </div>

          <div className="w-full lg:w-auto space-y-6">
            <div className="flex flex-wrap justify-center lg:justify-end gap-3">
              {CLASSES.map(cls => (
                <button
                  key={cls}
                  onClick={() => setSelectedClass(cls)}
                  className={`px-6 py-3 md:px-8 md:py-4 rounded-2xl font-black text-lg transition-all border-2 ${
                    selectedClass === cls 
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xl shadow-indigo-200 scale-105' 
                    : 'bg-white text-slate-500 border-slate-100 hover:border-indigo-200'
                  }`}
                >
                  {cls} শ্রেণি
                </button>
              ))}
            </div>
            
            <div className="relative group">
              <Search className="absolute left-6 top-6 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={24} />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="বইয়ের নাম দিয়ে খুঁজুন..." 
                className="w-full lg:w-96 pl-16 pr-8 py-6 rounded-[2rem] bg-slate-50 border-2 border-transparent focus:border-indigo-600 focus:bg-white outline-none transition-all font-bold text-lg shadow-inner"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Books Grid */}
      {loading ? (
        <div className="h-96 flex flex-col items-center justify-center space-y-6">
          <div className="relative">
            <Loader2 className="w-20 h-20 text-indigo-600 animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-indigo-100 rounded-full animate-pulse"></div>
            </div>
          </div>
          <p className="text-2xl font-black text-slate-400 animate-pulse">NCTB ডেটাবেস থেকে বই খোঁজা হচ্ছে...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {filteredBooks.length > 0 ? (
            filteredBooks.map(book => (
              <div 
                key={book.id} 
                className="bg-white p-6 rounded-[3rem] shadow-lg hover:shadow-[0_30px_60px_-15px_rgba(124,58,237,0.25)] transition-all duration-500 border border-slate-50 group hover:-translate-y-4"
              >
                <div className="h-80 bg-slate-100 rounded-[2.5rem] mb-8 overflow-hidden relative shadow-inner">
                  <img 
                    src={book.thumbnail} 
                    alt={book.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 via-indigo-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-4 p-6">
                    <button 
                      onClick={() => handleDownload(book.title)}
                      className="bg-white text-indigo-700 px-8 py-4 rounded-[1.5rem] font-black text-lg flex items-center gap-3 shadow-2xl hover:scale-105 active:scale-95 transition-all transform translate-y-8 group-hover:translate-y-0 duration-500"
                    >
                      <Download size={24} /> সংগ্রহ করুন
                    </button>
                    <p className="text-white text-sm font-bold text-center opacity-90">nctbbook.com থেকে সরাসরি</p>
                  </div>
                </div>
                <div className="px-4 space-y-4">
                  <h3 className="font-black text-2xl text-slate-800 line-clamp-1 group-hover:text-indigo-600 transition-colors">
                    {book.title}
                  </h3>
                  <div className="flex justify-between items-center pt-2">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <span className="text-sm font-black text-slate-400 uppercase tracking-widest">{book.format}</span>
                    </div>
                    <span className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-xl text-sm font-black border border-indigo-100">
                      {book.class} শ্রেণি
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="w-32 h-32 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Filter size={48} className="text-slate-300" />
              </div>
              <p className="text-2xl font-black text-slate-400">এই নামে কোনো বই পাওয়া যায়নি</p>
            </div>
          )}
        </div>
      )}

      {/* Smart Link Footer */}
      <div className="bg-slate-900 p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden group">
        <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-600/20 rounded-full -mr-32 -mt-32 blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8">
            <div className="p-6 bg-white/10 rounded-[2rem] backdrop-blur-md">
              <ExternalLink size={48} className="text-indigo-400" />
            </div>
            <div>
              <h4 className="text-3xl font-black mb-2 tracking-tight">অফিসিয়াল রিসোর্স</h4>
              <p className="text-xl font-medium opacity-70 max-w-2xl">
                সকল পাঠ্যপুস্তক এবং সাপ্লিমেন্টারি মেটেরিয়ালের জন্য আপনি সরাসরি NCTB এর মূল ওয়েবসাইট বা nctbbook.com ভিজিট করতে পারেন।
              </p>
            </div>
          </div>
          <a 
            href="https://nctbbook.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-indigo-600 hover:bg-indigo-500 px-12 py-5 rounded-2xl font-black text-xl transition-all shadow-xl active:scale-95 whitespace-nowrap"
          >
            মূল সাইটে যান
          </a>
        </div>
      </div>
    </div>
  );
};

export default Library;
