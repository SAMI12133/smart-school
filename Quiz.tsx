
import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  Gamepad2, 
  Brain, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  HelpCircle,
  Calculator,
  Type as TypeIcon,
  ChevronRight
} from 'lucide-react';
import { QUIZ_QUESTIONS, TRUE_FALSE_QUESTIONS, WORD_SCRAMBLE_DATA, MATH_PUZZLES } from './constants';

type GameMode = 'menu' | 'mcq' | 'true-false' | 'scramble' | 'math';

const Quiz: React.FC = () => {
  const [mode, setMode] = useState<GameMode>('menu');
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState<{ msg: string, type: 'success' | 'error' | null }>({ msg: '', type: null });

  const resetGame = () => {
    setStep(0);
    setScore(0);
    setShowResult(false);
    setUserInput('');
    setFeedback({ msg: '', type: null });
  };

  const handleMCQ = (index: number) => {
    if (index === QUIZ_QUESTIONS[step].correctAnswer) {
      setScore(s => s + 1);
    }
    nextStep(QUIZ_QUESTIONS.length);
  };

  const handleTrueFalse = (answer: boolean) => {
    if (answer === TRUE_FALSE_QUESTIONS[step].answer) {
      setScore(s => s + 1);
    }
    nextStep(TRUE_FALSE_QUESTIONS.length);
  };

  const handleInputSubmit = (correctAnswer: string, total: number) => {
    if (userInput.trim() === correctAnswer) {
      setScore(s => s + 1);
      setFeedback({ msg: 'অসাধারণ! সঠিক হয়েছে।', type: 'success' });
    } else {
      setFeedback({ msg: `ভুল হয়েছে! সঠিক উত্তর: ${correctAnswer}`, type: 'error' });
    }

    setTimeout(() => {
      setFeedback({ msg: '', type: null });
      setUserInput('');
      nextStep(total);
    }, 1500);
  };

  const nextStep = (total: number) => {
    if (step < total - 1) {
      setStep(s => s + 1);
    } else {
      setShowResult(true);
    }
  };

  const renderResult = (total: number) => (
    <div className="bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl text-center border border-slate-100 animate-in zoom-in-95 duration-500">
      <div className="w-40 h-40 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-inner relative">
        <Trophy size={80} className="relative z-10" />
        <div className="absolute inset-0 bg-indigo-200 rounded-full animate-ping opacity-20"></div>
      </div>
      <h2 className="text-4xl font-black mb-4 text-slate-900">গেম শেষ!</h2>
      <p className="text-slate-500 text-2xl mb-12 font-bold">আপনার মোট স্কোর: <span className="font-black text-indigo-600 text-6xl">{score}/{total}</span></p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          onClick={resetGame}
          className="bg-indigo-600 text-white px-12 py-5 rounded-[2rem] font-black text-xl hover:bg-indigo-700 transition flex items-center justify-center gap-3 active:scale-95 shadow-xl"
        >
          <RotateCcw size={24} /> আবার খেলুন
        </button>
        <button 
          onClick={() => setMode('menu')}
          className="bg-slate-900 text-white px-12 py-5 rounded-[2rem] font-black text-xl hover:bg-slate-800 transition active:scale-95 shadow-xl"
        >
          মেনুতে ফিরুন
        </button>
      </div>
    </div>
  );

  if (mode === 'menu') {
    return (
      <div className="max-w-6xl mx-auto space-y-12 py-10 animate-in fade-in duration-700">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl font-black text-slate-900 flex items-center justify-center gap-5">
            <div className="p-4 bg-indigo-600 text-white rounded-[1.5rem] shadow-xl"><Gamepad2 size={32} /></div>
            স্মার্ট পাজেল ও গেম হাব
          </h2>
          <p className="text-xl text-slate-500 font-bold max-w-2xl mx-auto">খেলার ছলে শিখি! আপনার প্রিয় গেমটি বেছে নিন এবং নিজেকে যাচাই করুন।</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { id: 'mcq', icon: <Brain size={48} />, title: 'সাধারণ জ্ঞান কুইজ', desc: '৪টি অপশন থেকে সঠিকটি বেছে নিন।', color: 'indigo' },
            { id: 'true-false', icon: <HelpCircle size={48} />, title: 'সত্য না কি মিথ্যা?', desc: 'দ্রুত বিচার করুন বিবৃতিটি সঠিক কি না।', color: 'emerald' },
            { id: 'scramble', icon: <TypeIcon size={48} />, title: 'শব্দ জট ধাঁধা', desc: 'এলোমেলো অক্ষর সাজিয়ে সঠিক শব্দ বানান।', color: 'pink' },
            { id: 'math', icon: <Calculator size={48} />, title: 'গণিত চ্যালেঞ্জ', desc: 'মজাদার গাণিতিক পাজেল সমাধান করুন।', color: 'blue' },
          ].map((game) => (
            <button
              key={game.id}
              onClick={() => { setMode(game.id as GameMode); resetGame(); }}
              className={`group bg-white p-10 rounded-[3.5rem] shadow-xl hover:shadow-2xl transition-all border border-slate-100 flex items-center gap-10 text-left hover:-translate-y-2`}
            >
              <div className={`p-8 bg-${game.color}-50 text-${game.color}-600 rounded-[2.5rem] group-hover:scale-110 transition-transform duration-500`}>
                {game.icon}
              </div>
              <div className="flex-grow">
                <h3 className="text-3xl font-black text-slate-900 mb-2">{game.title}</h3>
                <p className="text-lg text-slate-500 font-bold">{game.desc}</p>
              </div>
              <ChevronRight className="text-slate-300 group-hover:translate-x-2 transition-transform" size={40} />
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-10 animate-in zoom-in-95">
      {/* Game Header */}
      <div className="mb-10 flex items-center justify-between bg-white p-6 rounded-[2.5rem] shadow-md border border-slate-50">
        <button 
          onClick={() => setMode('menu')}
          className="text-slate-400 hover:text-indigo-600 font-black flex items-center gap-2 transition-colors"
        >
          ← গেম মেনু
        </button>
        <div className="flex items-center gap-4">
          <span className="bg-indigo-50 text-indigo-600 px-6 py-2 rounded-full font-black">স্কোর: {score}</span>
        </div>
      </div>

      {!showResult ? (
        <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-indigo-50 relative overflow-hidden">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-2 bg-slate-50">
            <div 
              className="h-full bg-indigo-600 transition-all duration-700"
              style={{ width: `${((step + 1) / (mode === 'mcq' ? QUIZ_QUESTIONS.length : mode === 'true-false' ? TRUE_FALSE_QUESTIONS.length : mode === 'scramble' ? WORD_SCRAMBLE_DATA.length : MATH_PUZZLES.length)) * 100}%` }}
            />
          </div>

          {/* Feedback Overlay */}
          {feedback.type && (
            <div className={`absolute inset-0 z-20 flex items-center justify-center backdrop-blur-sm transition-all duration-300 ${feedback.type === 'success' ? 'bg-emerald-50/80' : 'bg-red-50/80'}`}>
              <div className={`text-center animate-in zoom-in duration-300 ${feedback.type === 'success' ? 'text-emerald-700' : 'text-red-700'}`}>
                {feedback.type === 'success' ? <CheckCircle2 size={120} className="mx-auto mb-6" /> : <XCircle size={120} className="mx-auto mb-6" />}
                <p className="text-4xl font-black">{feedback.msg}</p>
              </div>
            </div>
          )}

          {/* MCQ Mode */}
          {mode === 'mcq' && (
            <div className="space-y-10">
              <h3 className="text-3xl font-black text-slate-900 leading-tight">{QUIZ_QUESTIONS[step].question}</h3>
              <div className="grid grid-cols-1 gap-5">
                {QUIZ_QUESTIONS[step].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleMCQ(i)}
                    className="group w-full text-left p-6 rounded-[2rem] border-2 border-slate-100 hover:border-indigo-600 hover:bg-indigo-50 transition-all font-black flex items-center active:scale-[0.98]"
                  >
                    <span className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-indigo-600 mr-6 group-hover:bg-indigo-600 group-hover:text-white transition-all text-2xl shadow-sm">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-xl">{opt}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* True/False Mode */}
          {mode === 'true-false' && (
            <div className="space-y-12 text-center">
              <h3 className="text-4xl font-black text-slate-900 leading-tight">{TRUE_FALSE_QUESTIONS[step].question}</h3>
              <div className="grid grid-cols-2 gap-8">
                <button
                  onClick={() => handleTrueFalse(true)}
                  className="bg-emerald-600 text-white p-10 rounded-[2.5rem] font-black text-3xl hover:bg-emerald-700 transition-all hover:scale-105 active:scale-95 shadow-xl flex flex-col items-center gap-4"
                >
                  <CheckCircle2 size={64} /> সত্য
                </button>
                <button
                  onClick={() => handleTrueFalse(false)}
                  className="bg-red-600 text-white p-10 rounded-[2.5rem] font-black text-3xl hover:bg-red-700 transition-all hover:scale-105 active:scale-95 shadow-xl flex flex-col items-center gap-4"
                >
                  <XCircle size={64} /> মিথ্যা
                </button>
              </div>
            </div>
          )}

          {/* Scramble Mode */}
          {mode === 'scramble' && (
            <div className="space-y-12 text-center">
              <div className="space-y-4">
                <p className="text-slate-400 font-black uppercase tracking-widest text-sm">হিন্ট: {WORD_SCRAMBLE_DATA[step].hint}</p>
                <div className="flex justify-center gap-4">
                  {WORD_SCRAMBLE_DATA[step].scrambled.split('-').map((char, i) => (
                    <div key={i} className="w-20 h-20 bg-pink-50 text-pink-600 rounded-3xl flex items-center justify-center text-4xl font-black border-4 border-white shadow-xl">
                      {char}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <input 
                  type="text" 
                  autoFocus
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="আপনার উত্তর লিখুন..."
                  className="w-full text-center p-8 bg-slate-50 border-4 border-slate-100 rounded-[2.5rem] outline-none focus:border-pink-400 text-3xl font-black transition-all"
                  onKeyDown={(e) => e.key === 'Enter' && handleInputSubmit(WORD_SCRAMBLE_DATA[step].word, WORD_SCRAMBLE_DATA.length)}
                />
                <button
                  onClick={() => handleInputSubmit(WORD_SCRAMBLE_DATA[step].word, WORD_SCRAMBLE_DATA.length)}
                  className="w-full bg-pink-600 text-white p-8 rounded-[2.5rem] font-black text-2xl hover:bg-pink-700 transition-all shadow-xl active:scale-95"
                >
                  চেক করুন
                </button>
              </div>
            </div>
          )}

          {/* Math Mode */}
          {mode === 'math' && (
            <div className="space-y-12 text-center">
              <div className="p-12 bg-blue-50 rounded-[3rem] border-4 border-white shadow-inner">
                <h3 className="text-6xl font-black text-blue-900">{MATH_PUZZLES[step].q}</h3>
                <p className="mt-6 text-blue-400 font-bold">হিন্ট: {MATH_PUZZLES[step].hint}</p>
              </div>
              <div className="space-y-6">
                <input 
                  type="text" 
                  autoFocus
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="সংখ্যায় উত্তর দিন..."
                  className="w-full text-center p-8 bg-slate-50 border-4 border-slate-100 rounded-[2.5rem] outline-none focus:border-blue-400 text-4xl font-black transition-all"
                  onKeyDown={(e) => e.key === 'Enter' && handleInputSubmit(MATH_PUZZLES[step].a, MATH_PUZZLES.length)}
                />
                <button
                  onClick={() => handleInputSubmit(MATH_PUZZLES[step].a, MATH_PUZZLES.length)}
                  className="w-full bg-blue-600 text-white p-8 rounded-[2.5rem] font-black text-2xl hover:bg-blue-700 transition-all shadow-xl active:scale-95"
                >
                  উত্তর দিন
                </button>
              </div>
            </div>
          )}
        </div>
      ) : renderResult(
        mode === 'mcq' ? QUIZ_QUESTIONS.length : 
        mode === 'true-false' ? TRUE_FALSE_QUESTIONS.length : 
        mode === 'scramble' ? WORD_SCRAMBLE_DATA.length : 
        MATH_PUZZLES.length
      )}
    </div>
  );
};

export default Quiz;
