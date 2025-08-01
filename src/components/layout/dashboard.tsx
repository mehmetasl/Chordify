// pages/dashboard/index.tsx
import { Music2, Plus, BookOpen, Star, Clock, Users, ExternalLink } from "lucide-react";

const Dashboard = () => {
  // Simüle edilmiş repertuar verisi
  const repertuarlar = [
    {
      id: 1,
      ad: "Akustik Akşam",
      şarkıSayısı: 8,
      sonGüncelleme: "Bugün",
      renk: "bg-emerald-500",
      favori: true,
    },
    {
      id: 2,
      ad: "Sahne Seti",
      şarkıSayısı: 12,
      sonGüncelleme: "3 gün önce",
      renk: "bg-purple-500",
      favori: false,
    },
    {
      id: 3,
      ad: "Yaz Şarkıları",
      şarkıSayısı: 6,
      sonGüncelleme: "1 hafta önce",
      renk: "bg-amber-500",
      favori: true,
    },
    {
      id: 4,
      ad: "Duygusal Dönem",
      şarkıSayısı: 7,
      sonGüncelleme: "2 hafta önce",
      renk: "bg-rose-500",
      favori: false,
    },
  ];

  return (
    <>
      {/* Ana Başlık */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          🎸 Repertuarlarım
        </h1>
        <p className="text-gray-600 mt-1">Organize edilmiş çalma listelerin burada.</p>
      </div>

      {/* Hızlı Erişim / Yeni Repertuar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        {/* Yeni Repertuar Ekle */}
        <button className="bg-white border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-200 group">
          <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-200">
            <Plus className="text-emerald-600" size={24} />
          </div>
          <span className="font-medium text-gray-700">Yeni Repertuar</span>
        </button>

        {/* En Çok Oynanan Şarkı */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
              <Star size={20} className="text-white" />
            </div>
            <div className="truncate">
              <p className="font-medium text-gray-900 truncate">Benimle Kal</p>
              <p className="text-sm text-gray-500">Hodio</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">Bu hafta 287 kez çalındı</p>
        </div>

        {/* Toplam Şarkı */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border text-center">
          <p className="text-2xl font-bold text-emerald-600">142</p>
          <p className="text-sm text-gray-600">Toplam Şarkı</p>
        </div>

        {/* Toplam Repertuar */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border text-center">
          <p className="text-2xl font-bold text-purple-600">4</p>
          <p className="text-sm text-gray-600">Repertuar</p>
        </div>
      </div>

      {/* Repertuar Listesi */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Tüm Repertuarlar</h2>
          <div className="space-y-4">
            {repertuarlar.map((liste) => (
              <div
                key={liste.id}
                className="bg-white p-5 rounded-2xl shadow-sm border hover:shadow-md transition-shadow duration-200 cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${liste.renk} rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition`}>
                      {liste.ad.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{liste.ad}</p>
                      <p className="text-sm text-gray-500">
                        {liste.şarkıSayısı} şarkı • {liste.sonGüncelleme}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {liste.favori && (
                      <Star className="text-yellow-400 fill-yellow-400" size={18} />
                    )}
                    <ExternalLink className="text-gray-400 group-hover:text-purple-600 transition" size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sağ Panel: Hızlı Erişim & İpuçları */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">💡 İpuçları</h2>
          <div className="bg-gradient-to-br from-purple-50 to-emerald-50 rounded-2xl p-5 space-y-4 border border-purple-100">
            <div className="flex items-start gap-3">
              <BookOpen className="text-purple-600 mt-1 flex-shrink-0" size={18} />
              <div>
                <p className="text-sm font-medium text-gray-800">Akorları Güncelle</p>
                <p className="text-xs text-gray-600">Yeni akor stillerini deneyin.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="text-emerald-600 mt-1 flex-shrink-0" size={18} />
              <div>
                <p className="text-sm font-medium text-gray-800">Zamana Bağlı Liste</p>
                <p className="text-xs text-gray-600">"Yaz Şarkıları" yazın otomatik aktif olsun.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="text-gray-600 mt-1 flex-shrink-0" size={18} />
              <div>
                <p className="text-sm font-medium text-gray-800">Takım Repertuarı</p>
                <p className="text-xs text-gray-600">Grup üyeleriyle paylaşın.</p>
              </div>
            </div>
          </div>

          {/* Hızlı Ekleme */}
          <button className="mt-6 w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition text-sm">
            + Şarkı Ekle
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;