
// src/components/layout/repertoire-showcase.tsx
import {
  Search,
  Plus,
  Users,
  Music,
  Flame,
  Clock,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Bu değeri gerçek kullanıcı giriş durumuna göre dinamik olarak ayarlamalısın.
const isLoggedIn = true;

// Simüle edilmiş halka açık repertuar verisi
const publicRepertoires = [
  {
    id: 1,
    ad: "90'lar Türkçe Pop",
    creator: "Ayşe Yılmaz",
    songCount: 25,
    tags: ["Pop", "Nostalji"],
    coverColor: "bg-sky-500",
  },
  {
    id: 2,
    ad: "Akustik Cover'lar",
    creator: "Can Ozan",
    songCount: 15,
    tags: ["Akustik", "Cover"],
    coverColor: "bg-amber-600",
  },
  {
    id: 3,
    ad: "Anadolu Rock Klasikleri",
    creator: "Barış K.",
    songCount: 30,
    tags: ["Rock", "70'ler"],
    coverColor: "bg-red-500",
  },
  {
    id: 4,
    ad: "Sahne Öncesi Isınma",
    creator: "Gitarist Mehmet",
    songCount: 10,
    tags: ["Pratik", "Solo"],
    coverColor: "bg-emerald-500",
  },
  {
    id: 5,
    ad: "Yol Şarkıları",
    creator: "Gezgin Kız",
    songCount: 42,
    tags: ["Alternatif", "Yolculuk"],
    coverColor: "bg-indigo-500",
  },
  {
    id: 6,
    ad: "Yeni Nesil Indie",
    creator: "Bulutsuzluk Özlemi",
    songCount: 18,
    tags: ["Indie", "Keşfet"],
    coverColor: "bg-purple-500",
  },
];

const RepertoireShowcase = () => {
  return (
    <div className="w-full bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Üst Alan: Başlık, CTA ve Arama */}
        <div className="border-b border-gray-200 pb-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Repertuarları Keşfet
              </h1>
              <p className="mt-3 text-lg text-gray-500">
                Topluluk tarafından oluşturulan binlerce repertuara göz at.
              </p>
            </div>
            {isLoggedIn && (
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 flex-shrink-0">
                <Plus className="-ml-1 mr-2 h-5 w-5" />
                Yeni Repertuar Oluştur
              </Button>
            )}
          </div>

          {/* Arama ve Filtreleme */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Repertuar, sanatçı veya etiket ara..."
                className="w-full h-12 pl-12 pr-4 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition"
              />
            </div>
            <Button variant="outline" className="h-12 flex items-center justify-center gap-2 text-gray-700 bg-white">
                Sırala: Popüler
                <ChevronDown size={16} />
            </Button>
          </div>
        </div>

        {/* Repertuar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {publicRepertoires.map((rep) => (
            <div key={rep.id} className="group relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
                <div className={`h-32 w-full ${rep.coverColor}`} />
                <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 truncate group-hover:text-emerald-600 transition-colors">
                        {rep.ad}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                        <Users size={14} />
                        {rep.creator}
                    </p>
                    <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
                        <span className="flex items-center gap-2">
                            <Music size={14} /> {rep.songCount} şarkı
                        </span>
                        <div className="flex items-center gap-2">
                            {rep.tags.map(tag => (
                                <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-800 rounded-md text-xs font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepertoireShowcase;
