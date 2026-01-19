
import React, { useState } from 'react';
import { Sparkles, MessageSquare, Send } from 'lucide-react';
import { geminiService } from './geminiService';

const Assistant: React.FC = () => {
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'bot', text: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput;
    setChatHistory(prev => [...prev, { role: 'user', text: userMsg }]);
    setChatInput('');
    setIsTyping(true);

    const response = await geminiService.askQuestion(userMsg);
    setChatHistory(prev => [...prev, { role: 'bot', text: response }]);
    setIsTyping(false);
  };

  return (
    <div className="max-w-4xl mx-auto h-[750px] bg-white rounded-[4rem] shadow-2xl flex flex-col border border-indigo-50 overflow-hidden animate-in zoom-in-95">
      <div className="bg-indigo-600 text-white p-10 flex items-center justify-between shadow-xl relative z-10">
        <div className="flex items-center gap-5">
          <div className="bg-white/20 p-4 rounded-[1.5rem] backdrop-blur-md">
            <Sparkles size={32}/>
          </div>
          <div>
            <h3 className="font-black text-3xl leading-none mb-1 tracking-tight">Smart Assistant</h3>
            <span className="text-sm font-bold opacity-80 uppercase tracking-[0.2em] flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
              Online AI Helper
            </span>
          </div>
        </div>
      </div>

      <div className="flex-grow p-10 overflow-y-auto space-y-8 bg-slate-50/50 no-scrollbar">
        {chatHistory.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-slate-400 text-center px-16 space-y-8">
            <div className="w-32 h-32 bg-white rounded-[2.5rem] flex items-center justify-center border-2 border-indigo-50 shadow-inner">
              <MessageSquare size={64} className="text-indigo-200" />
            </div>
            <div>
              <p className="text-3xl font-black text-slate-800 mb-3">আমি কিভাবে সাহায্য করতে পারি?</p>
              <p className="text-xl text-slate-500 max-w-md font-medium">বলইবুনিয়া বিদ্যালয় বা পড়ালেখা নিয়ে যেকোনো প্রশ্ন জিজ্ঞাসা করুন।</p>
            </div>
          </div>
        )}
        {chatHistory.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-4`}>
            <div className={`max-w-[85%] px-8 py-5 rounded-[2.5rem] shadow-sm text-xl font-medium leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-indigo-600 text-white rounded-tr-none shadow-indigo-200' 
                : 'bg-white text-slate-800 rounded-tl-none border border-slate-100 shadow-slate-100'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white px-8 py-5 rounded-[2.5rem] rounded-tl-none border border-slate-100 shadow-sm flex gap-2 items-center">
              <div className="w-2.5 h-2.5 bg-indigo-400 rounded-full animate-bounce"></div>
              <div className="w-2.5 h-2.5 bg-indigo-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-2.5 h-2.5 bg-indigo-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleChat} className="p-8 bg-white border-t border-slate-100 flex gap-4">
        <input 
          type="text" 
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          placeholder="আপনার প্রশ্নটি এখানে লিখুন..." 
          className="flex-grow px-10 py-6 bg-slate-50 rounded-[2rem] outline-none focus:ring-4 focus:ring-indigo-100 transition-all font-bold text-xl border-2 border-transparent focus:border-indigo-100"
        />
        <button 
          type="submit"
          disabled={isTyping}
          className="bg-indigo-600 text-white w-20 h-20 rounded-[2rem] hover:bg-indigo-700 disabled:opacity-50 transition-all flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95"
        >
          <Send size={32} />
        </button>
      </form>
    </div>
  );
};

export default Assistant;
