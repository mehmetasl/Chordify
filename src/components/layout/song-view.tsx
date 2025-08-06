"use client"
// src/components/layout/song-view.tsx
import React, { useState } from 'react';
import {
  Play,
  Pause,
  ChevronUp,
  ChevronDown,
  Plus,
  Minus,
  Printer,
  Maximize,
  Music4
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

// Simüle edilmiş şarkı verisi. Akorlar sözlerin içinde [Am] formatında yer alıyor.
const songData = {
  title: "Kış Güneşi",
  artist: "Tarkan",
  content: `
[Intro]
Am G C F

[Verse 1]
[Am]Yüzümde çizgiler, [G]aklımda sorular var
[C]İçimde bir çocuk, [F]hep aynı şarkıyı çalar
[Am]Yollar uzun, [G]yollar yokuş olsa da
[C]Kalbimde bir umut, [F]hiç sönmeyen bir ateş var

[Chorus]
[C]
Sen benim kış güneşim, [G]ayazda açan çiçeğim
[Am]En soğuk gecede bile, [F]içimi ısıtan sevdiğim
[C]Sen benim kış güneşim, [G]karanlığı delen ışığım
[Am]Kaybolmuş yollarımda, [F]yönümü bulduran sığınağım
`,
};

// Şarkı sözlerini ve akorları ayrıştıran component
const SongContent = ({ content, fontSize }: { content: string, fontSize: number }) => {
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
    <div className="text-left whitespace-pre-wrap" style={{ fontSize: `${fontSize}px`, lineHeight: `${fontSize * 2}px` }}>
      {lines.map((line, index) => (
        <div key={index} className="relative mb-2">
          {parseLine(line)}
        </div>
      ))}
    </div>
  );
};

// Ana Şarkı Görüntüleme Sayfası
const SongView = () => {
  const [fontSize, setFontSize] = useState(18);
  const [transpose, setTranspose] = useState(0);
  const [scrollSpeed, setScrollSpeed] = useState(5);

  return (
    <div className="w-full bg-white min-h-screen p-4 sm:p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Şarkı Başlığı */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">{songData.title}</h1>
          <p className="text-xl text-gray-600 mt-2">{songData.artist}</p>
        </header>

        {/* Şarkı İçeriği */}
        <main className="mb-32"> {/* Toolbar için altta boşluk bırak */}
          <SongContent content={songData.content} fontSize={fontSize} />
        </main>

        {/* Sabit Kontrol Paneli (Toolbar) */}
        <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-gray-200 p-3 z-50">
            <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
                {/* Otomatik Kaydırma */}
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon"><Play size={18}/></Button>
                    <div className='w-24'>
                        <Slider defaultValue={[scrollSpeed]} max={10} step={1} onValueChange={(value) => setScrollSpeed(value[0])} />
                    </div>
                </div>

                {/* Transpoze */}
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" onClick={() => setTranspose(t => t - 1)}><Minus size={18}/></Button>
                    <span className="font-bold w-16 text-center">T: {transpose > 0 ? `+${transpose}` : transpose}</span>
                    <Button variant="outline" size="icon" onClick={() => setTranspose(t => t + 1)}><Plus size={18}/></Button>
                </div>

                {/* Yazı Tipi Boyutu */}
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" onClick={() => setFontSize(s => Math.max(12, s - 1))}><ChevronDown size={18}/></Button>
                    <span className="font-bold w-12 text-center">{fontSize}px</span>
                    <Button variant="outline" size="icon" onClick={() => setFontSize(s => Math.min(32, s + 1))}><ChevronUp size={18}/></Button>
                </div>

                 {/* Ekstra Araçlar */}
                 <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon"><Music4 size={18}/></Button>
                    <Button variant="outline" size="icon"><Printer size={18}/></Button>
                 </div>
            </div>
        </footer>
      </div>
    </div>
  );
};

export default SongView;
