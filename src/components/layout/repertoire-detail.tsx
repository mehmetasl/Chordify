
// src/components/layout/repertoire-detail.tsx
import {
  PlayCircle,
  Share2,
  Pencil,
  Plus,
  Music,
  Clock,
  User,
  Tag,
  GripVertical,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Bu değerleri gerçek kullanıcı ve veri durumuna göre dinamik olarak ayarlamalısın.
const isOwner = true;

// Simüle edilmiş detaylı repertuar verisi
const repertoireDetails = {
  id: 1,
  ad: "90'lar Türkçe Pop",
  creator: "Ayşe Yılmaz",
  description: "90'ların unutulmaz pop şarkılarından oluşan, partiler ve nostalji akşamları için harika bir koleksiyon.",
  songCount: 25,
  totalDuration: "1sa 45dk",
  tags: ["Pop", "Nostalji", "90lar", "Türkçe"],
  coverColor: "bg-sky-500",
  songs: [
    { id: 1, title: "Tarkan - Kış Güneşi", duration: "4:15" },
    { id: 2, title: "Sezen Aksu - Hadi Bakalım", duration: "3:50" },
    { id: 3, title: "Mustafa Sandal - Araba", duration: "4:30" },
    { id: 4, title: "Kenan Doğulu - Aşkım Aşkım", duration: "4:05" },
    { id: 5, title: "Burak Kut - Benimle Oynama", duration: "3:55" },
    // ... daha fazla şarkı
  ],
};

const RepertoireDetail = () => {
  return (
    <div className="w-full bg-gray-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Başlık Alanı */}
        <header className="mb-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight">{repertoireDetails.ad}</h1>
              <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-600">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>Oluşturan: <span className="font-medium text-gray-800">{repertoireDetails.creator}</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <Music size={16} />
                  <span>{repertoireDetails.songCount} şarkı</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{repertoireDetails.totalDuration}</span>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 flex items-center gap-2">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <PlayCircle className="mr-2 h-5 w-5" />
                Oynat
              </Button>
              <Button size="lg" variant="outline" className="bg-white">
                <Share2 className="mr-2 h-5 w-5" />
                Paylaş
              </Button>
              {isOwner && (
                <Button size="lg" variant="outline" className="bg-white">
                  <Pencil className="h-5 w-5" />
                </Button>
              )}
            </div>
          </div>
        </header>

        {/* Ana İçerik Grid'i */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Sol Taraf: Şarkı Listesi */}
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl shadow-sm">
            <ul className="divide-y divide-gray-200">
              {repertoireDetails.songs.map((song, index) => (
                <li key={song.id} className="flex items-center justify-between p-4 group hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <GripVertical className="text-gray-400 cursor-grab group-hover:text-gray-600" size={20} />
                    <span className="text-gray-500 font-medium">{index + 1}</span>
                    <div>
                      <p className="font-semibold text-gray-800">{song.title.split(' - ')[1]}</p>
                      <p className="text-sm text-gray-500">{song.title.split(' - ')[0]}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500 font-mono">{song.duration}</span>
                    <Button variant="outline" size="sm" className="bg-white">Akorları Gör</Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Sağ Taraf: Kenar Çubuğu */}
          <aside className="sticky top-8 space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Repertuar Hakkında</h3>
              <p className="text-sm text-gray-600 mb-4">{repertoireDetails.description}</p>
              <div className="flex flex-wrap gap-2">
                {repertoireDetails.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium flex items-center gap-1">
                    <Tag size={12} /> {tag}
                  </span>
                ))}
              </div>
            </div>
            {isOwner && (
                <Button size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <Plus className="mr-2 h-5 w-5" />
                    Şarkı Ekle
                </Button>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
};

export default RepertoireDetail;
