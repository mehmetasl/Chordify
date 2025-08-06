
// src/components/layout/song-detail-page.tsx
import React, { useState } from 'react';
import {
  ChevronUp,
  ChevronDown,
  Plus,
  Minus,
  Printer,
  Music2,
  Clock,
  KeyRound,
  Youtube,
  ListPlus
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Simüle edilmiş zenginleştirilmiş şarkı verisi
const songDetails = {
  title: "Kış Güneşi",
  artist: "Tarkan",
  album: "Aacayipsin",
  year: 1994,
  key: "Am",
  bpm: 95,
  youtubeUrl: "https://www.youtube.com/embed/your_video_id", // Buraya gerçek bir YouTube video ID'si koy
  content: `
[Intro]
Am G C F

[Verse 1]
[Am]Yüzümde çizgiler, [G]aklımda sorular var
[C]İçimde bir çocuk, [F]hep aynı şarkıyı çalar
[Am]Yollar uzun, [G]yollar yokuş olsa da
[C]Kalbimde bir umut, [F]hiç sönmeyen bir ateş var

[Chorus]
[C]Sen benim kış güneşim, [G]ayazda açan çiçeğim
[Am]En soğuk gecede bile, [F]içimi ısıtan sevdiğim
[C]Sen benim kış güneşim, [G]karanlığı delen ışığım
[Am]Kaybolmuş yollarımda, [F]yönümü bulduran sığınağım
`,
};

// Şarkı sözlerini ve akorları ayrıştıran component
const SongLyrics = ({ content, fontSize }: { content: string, fontSize: number }) => {
    const lines = content.split('\n').filter(line => line.trim() !== '');
  
    const parseLine = (line: string) => {
      const parts = line.split(/(\[.*?\])/g).filter(part => part);
      return parts.map((part, index) => {
        if (part.startsWith('[') && part.endsWith(']')) {
          return (
            <span key={index} className="font-bold text-emerald-600">
              {part.substring(1, part.length - 1)}
            </span>
          );
        }
        return <span key={index}>{part}</span>;
      });
    };
  
    return (
      <div className="text-left whitespace-pre-wrap bg-white p-6 sm:p-8 rounded-b-2xl" style={{ fontSize: `${fontSize}px`, lineHeight: `${fontSize * 1.8}px` }}>
        {lines.map((line, index) => (
          <div key={index} className="relative mb-4">
            {parseLine(line)}
          </div>
        ))}
      </div>
    );
  };

// Ana Şarkı Detay Sayfası
const SongDetailPage = () => {
  const [fontSize, setFontSize] = useState(16);
  const [transpose, setTranspose] = useState(0);

  return (
    <div className="w-full bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <header className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{songDetails.title}</h1>
            <p className="text-xl text-gray-600">by <a href="#" className="hover:underline">{songDetails.artist}</a></p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Ana İçerik: Şarkı Sözleri ve Kontroller */}
            <div className="lg:col-span-2">
                <div className="bg-gray-50 border border-b-0 border-gray-200 rounded-t-2xl p-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Transpoze */}
                    <div className="flex items-center gap-2">
                        <span className='text-sm font-medium text-gray-700'>Transpoze:</span>
                        <Button variant="outline" size="icon" className='h-8 w-8 bg-white' onClick={() => setTranspose(t => t - 1)}><Minus size={16}/></Button>
                        <span className="font-bold w-12 text-center text-emerald-600">{transpose > 0 ? `+${transpose}` : transpose}</span>
                        <Button variant="outline" size="icon" className='h-8 w-8 bg-white' onClick={() => setTranspose(t => t + 1)}><Plus size={16}/></Button>
                    </div>
                    {/* Yazı Tipi Boyutu */}
                    <div className="flex items-center gap-2">
                        <span className='text-sm font-medium text-gray-700'>Yazı Boyutu:</span>
                        <Button variant="outline" size="icon" className='h-8 w-8 bg-white' onClick={() => setFontSize(s => Math.max(12, s - 1))}><Minus size={16}/></Button>
                        <span className="font-bold w-12 text-center">{fontSize}px</span>
                        <Button variant="outline" size="icon" className='h-8 w-8 bg-white' onClick={() => setFontSize(s => Math.min(28, s + 1))}><Plus size={16}/></Button>
                    </div>
                    <Button variant="outline" className='bg-white'><Printer size={16} className='mr-2'/> Yazdır</Button>
                </div>
                <SongLyrics content={songDetails.content} fontSize={fontSize} />
            </div>

            {/* Sağ Taraf: Bilgi Paneli */}
            <aside className="sticky top-10 space-y-6">
                <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
                    <div className="p-5">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Şarkı Künyesi</h3>
                        <ul className="space-y-3 text-sm">
                            <li className='flex items-center gap-3'><KeyRound size={16} className='text-gray-500'/> Ton: <span className='font-bold'>{songDetails.key}</span></li>
                            <li className='flex items-center gap-3'><Clock size={16} className='text-gray-500'/> Tempo: <span className='font-bold'>{songDetails.bpm} BPM</span></li>
                            <li className='flex items-center gap-3'><Music2 size={16} className='text-gray-500'/> Albüm: <span className='font-bold'>{songDetails.album} ({songDetails.year})</span></li>
                        </ul>
                    </div>
                    <div className='border-t border-gray-200 p-5'>
                        <Button className='w-full bg-emerald-600 hover:bg-emerald-700'><ListPlus size={18} className='mr-2'/> Repertuara Ekle</Button>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2"><Youtube size={20} className='text-red-600'/> Video</h3>
                    <div className='aspect-w-16 aspect-h-9'>
                        <iframe 
                            className='w-full h-full rounded-lg'
                            src={songDetails.youtubeUrl} 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </aside>
        </div>
      </div>
    </div>
  );
};

export default SongDetailPage;
