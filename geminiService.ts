
import { GoogleGenAI, Type } from "@google/genai";

export class GeminiService {
  async askQuestion(question: string): Promise<string> {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `আপনি বলইবুনিয়া মাধ্যমিক বিদ্যালয়ের একজন স্মার্ট সহকারী। ছাত্র বা অভিভাবক জিজ্ঞাসা করেছেন: "${question}"। উত্তরটি বাংলায় এবং অত্যন্ত বন্ধুত্বপূর্ণভাবে দিন। বিদ্যালয়ের ইতিহাস, সুযোগ-সুবিধা, শিক্ষক বা পড়ালেখা নিয়ে সাহায্য করুন। বিদ্যালয়ের সঠিক নাম "বলইবুনিয়া মাধ্যমিক বিদ্যালয়" সবসময় ব্যবহার করবেন। বিদ্যালয়টি বাগেরহাট জেলার মোরলগঞ্জ উপজেলায় অবস্থিত এবং এটি অনেক পুরোনো ও স্বনামধন্য।`,
        config: {
          temperature: 0.7,
        }
      });
      return response.text || "দুঃখিত, আমি উত্তরটি খুঁজে পাচ্ছি না। আবার চেষ্টা করুন।";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "একটি ত্রুটি ঘটেছে। অনুগ্রহ করে পরে চেষ্টা করুন।";
    }
  }

  async getBooksByClass(className: string): Promise<any[]> {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `বাংলাদেশের এনসিটিবি (NCTB) শিক্ষাক্রম অনুযায়ী ${className} শ্রেণির সকল প্রধান বইগুলোর একটি তালিকা তৈরি করুন। প্রতিটি বইয়ের জন্য একটি ইউনিক id, title, subject, এবং format (যেমন: PDF) দিন। থাম্বনেইলের জন্য Unsplash থেকে একটি প্রাসঙ্গিক বইয়ের ছবির URL দিন। আউটপুটটি অবশ্যই JSON অ্যারে ফরম্যাটে হতে হবে।`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                title: { type: Type.STRING },
                subject: { type: Type.STRING },
                thumbnail: { type: Type.STRING },
                format: { type: Type.STRING }
              },
              required: ["id", "title", "subject", "thumbnail", "format"]
            }
          }
        }
      });
      
      const text = response.text;
      return JSON.parse(text || "[]");
    } catch (error) {
      console.error("Gemini Library Fetch Error:", error);
      return [];
    }
  }
}

export const geminiService = new GeminiService();
