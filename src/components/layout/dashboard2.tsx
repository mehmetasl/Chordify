// src/app/page.tsx

import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Hero ve Arama */}
      <section className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Hoşgeldin, Mehmet!
          </h1>
          <p className="text-lg text-muted-foreground">
            En güncel akorlar, şarkılar ve topluluk burada!
          </p>
        </div>
        <div className="w-full max-w-md">
          <input
            className="w-full h-12 px-4 rounded-xl border border-emerald-200 bg-white shadow focus:ring-2 focus:ring-emerald-500 transition outline-none"
            placeholder="Şarkı, akor veya sanatçı ara..."
          />
        </div>
      </section>

      {/* Popüler Şarkılar ve Sağ Blok */}
      <section className="w-full flex flex-col md:flex-row gap-8 mb-8">
        {/* Popüler Şarkılar */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">Popüler Şarkılar</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Kart örnekleri */}
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-gradient-to-tr from-purple-50 to-emerald-50 border rounded-xl p-4 flex flex-col items-center shadow group hover:scale-105 transition"
              >
                <div className="w-16 h-16 rounded-lg bg-gray-200 mb-3"></div>
                <span className="font-medium text-gray-800 mb-1">Şarkı Adı {i}</span>
                <span className="text-sm text-gray-500">Sanatçı</span>
                <Button size="sm" variant="outline" className="mt-2">
                  İncele
                </Button>
              </div>
            ))}
          </div>
        </div>
        {/* Sağda: Önerilenler / Banner */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-emerald-100 via-blue-50 to-purple-100 shadow">
            <h3 className="font-bold text-lg mb-2">🎵 Önerilen Şarkı</h3>
            <p className="text-sm text-muted-foreground">“Unutulmaz Parça”</p>
            <Button className="mt-3 w-full bg-gradient-to-r from-emerald-400 to-purple-400 text-white">
              Hemen Dinle
            </Button>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-r from-purple-100 to-emerald-100 shadow">
            <h3 className="font-bold text-lg mb-2">⭐ Premium Özellikler</h3>
            <p className="text-sm">Reklamsız kullanım, gelişmiş analiz ve daha fazlası!</p>
            <Button className="mt-3 w-full bg-gradient-to-r from-purple-400 to-emerald-400 text-white">
              Premium'a Geç
            </Button>
          </div>
        </aside>
      </section>

      {/* Son Eklenenler */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Son Eklenenler</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="bg-white border rounded-xl p-4 flex flex-col items-center shadow hover:bg-emerald-50 transition"
            >
              <div className="w-14 h-14 rounded bg-gray-200 mb-2"></div>
              <span className="font-medium text-gray-800 mb-1">Yeni Şarkı {i}</span>
              <span className="text-sm text-gray-500">Sanatçı</span>
            </div>
          ))}
        </div>
      </section>

      {/* Kısayollar */}
      <section className="flex flex-wrap gap-3 justify-center mt-8">
        <Button variant="outline" size="lg">
          Akor Ekle
        </Button>
        <Button variant="outline" size="lg">
          Topluluk
        </Button>
        <Button variant="outline" size="lg">
          Yardım
        </Button>
        <Button variant="outline" size="lg">
          Hakkında
        </Button>
      </section>
    </main>
  );
}
