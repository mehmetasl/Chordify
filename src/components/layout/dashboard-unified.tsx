
// src/components/layout/dashboard-unified.tsx
import {
  Music,
  Search,
  PlusCircle,
  ListMusic,
  User,
  Star,
  Clock,
  ChevronRight,
  Guitar,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Simüle edilmiş veri
const repertuarlar = [
  {
    id: 1,
    ad: "Akustik Akşam",
    şarkıSayısı: 8,
    renk: "bg-emerald-500",
  },
  {
    id: 2,
    ad: "Sahne Seti",
    şarkıSayısı: 12,
    renk: "bg-purple-500",
  },
  {
    id: 3,
    ad: "Yaz Şarkıları",
    şarkıSayısı: 6,
    renk: "bg-amber-500",
  },
];

const sonAktiviteler = [
    { id: 1, ad: "Benimle Kal", sanatçı: "Hodio", zaman: "3 saat önce" },
    { id: 2, ad: "Denize Bıraksam", sanatçı: "Göksel", zaman: "Dün" },
    { id: 3, ad: "Müsaadenle", sanatçı: "Gülşen", zaman: "2 gün önce" },
]

const UnifiedDashboard = () => {
  return (
    <main className="w-full bg-gray-50/50 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Üst Başlık ve Arama */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Ana Panel</h1>
            <p className="text-gray-500 mt-1">Hoş geldin Mehmet, bugün ne çalıyoruz?</p>
          </div>
          <div className="relative w-full sm:w-72 mt-4 sm:mt-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Şarkı, sanatçı veya akor ara..."
              className="w-full h-11 pl-10 pr-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-400 outline-none transition-all"
            />
          </div>
        </header>

        {/* Ana Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sol Taraf (Ana İçerik) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hızlı İstatistikler */}
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <StatCard icon={ListMusic} title="Repertuarlar" value="4" color="purple" />
                <StatCard icon={Music} title="Toplam Şarkı" value="142" color="emerald" />
                <StatCard icon={User} title="Takip Edilenler" value="12" color="amber" />
            </section>

            {/* Repertuarlarım */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Repertuarlarım</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {repertuarlar.map((r) => (
                  <div key={r.id} className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-lg hover:border-purple-300 transition-all duration-300 cursor-pointer flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 ${r.renk} rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform`}>
                            {r.ad.charAt(0)}
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900">{r.ad}</p>
                            <p className="text-sm text-gray-500">{r.şarkıSayısı} şarkı</p>
                        </div>
                    </div>
                    <ChevronRight className="text-gray-400 group-hover:text-purple-600 transition-colors" />
                  </div>
                ))}
                 <div className="bg-white/80 border-2 border-dashed border-gray-300 rounded-2xl p-4 text-center hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-200 group flex items-center justify-center cursor-pointer">
                    <div className="text-center">
                        <PlusCircle className="text-gray-400 group-hover:text-emerald-500 mx-auto mb-2" size={24}/>
                        <span className="font-medium text-gray-600 group-hover:text-emerald-600">Yeni Repertuar</span>
                    </div>
                </div>
              </div>
            </section>

            {/* Son Aktiviteler */}
            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Son Aktiviteler</h2>
                <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-sm">
                    <ul className="divide-y divide-gray-100">
                        {sonAktiviteler.map(sarki => (
                            <li key={sarki.id} className="flex items-center justify-between py-3 group cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                        <Music size={20} className="text-gray-500"/>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">{sarki.ad}</p>
                                        <p className="text-sm text-gray-500">{sarki.sanatçı}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <p className="text-sm text-gray-400">{sarki.zaman}</p>
                                    <ChevronRight className="text-gray-400 group-hover:text-purple-600 transition-colors" />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
          </div>

          {/* Sağ Taraf (Kenar Çubuğu) */}
          <aside className="space-y-8">
            {/* Haftanın Önerisi */}
            <section className="bg-gradient-to-br from-purple-500 to-emerald-500 p-6 rounded-2xl shadow-lg text-white">
                <div className="flex items-center gap-3 mb-3">
                    <Star className="text-yellow-300" size={22} />
                    <h3 className="text-lg font-bold">Haftanın Sanatçısı</h3>
                </div>
                <div className="text-center my-4">
                    <img src="https://via.placeholder.com/80" alt="Sanatçı" className="w-20 h-20 rounded-full mx-auto border-4 border-white/50" />
                    <p className="mt-3 font-semibold text-xl">Duman</p>
                    <p className="text-sm opacity-80">Rock müziğin efsanesi</p>
                </div>
                <Button className="w-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30">
                    Sanatçıyı Keşfet
                </Button>
            </section>

            {/* Premium Banner */}
            <section className="bg-white p-6 rounded-2xl border-2 border-amber-300 shadow-md">
                <div className="flex items-center gap-3 mb-2">
                    <Guitar className="text-amber-500" size={22} />
                    <h3 className="text-lg font-bold text-gray-800">Chordify Premium</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                    Daha fazla özellik ile müziğini bir üst seviyeye taşı.
                </p>
                <Button className="w-full bg-amber-400 hover:bg-amber-500 text-white font-bold">
                    Premium'a Geç
                </Button>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
};

// Stat Card Component
const StatCard = ({ icon: Icon, title, value, color } : {icon: React.ElementType, title: string, value: string, color: string}) => {
    const colors = {
        purple: "text-purple-600 bg-purple-100",
        emerald: "text-emerald-600 bg-emerald-100",
        amber: "text-amber-600 bg-amber-100",
    }
    return (
        <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors.emerald}`}>
                <Icon size={24} />
            </div>
            <div>
                <p className="text-2xl font-bold text-gray-800">{value}</p>
                <p className="text-sm text-gray-500">{title}</p>
            </div>
        </div>
    )
}


export default UnifiedDashboard;
