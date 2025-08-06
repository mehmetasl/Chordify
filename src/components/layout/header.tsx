"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Guitar, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Navigasyon verisi
const navLinks = [
  { href: "/repertoires", label: "Repertuarlar" },
  { href: "/chords", label: "Akorlar" },
  { href: "/add-song", label: "Şarkı Ekle" },
  { href: "/top-lists", label: "Top Listeler" },
  { href: "/about", label: "Hakkında" },
];

// Kullanıcı simülasyonu
const useUser = () => {
  const [isLoggedIn] = React.useState(true);
  const [user] = React.useState({
    name: "Mehmet Aslan",
    email: "mehmet@example.com",
    avatarUrl: "https://github.com/shadcn.png",
  });
  return { isLoggedIn, user };
};

// Logo bileşeni TODO: İÇ KULLANICI GÖRECEK SADECE
const Logo = () => (
  <Link href="/" className="flex items-center gap-2 select-none">
    <Guitar className="h-9 w-9 text-primary drop-shadow" />
    <span className="text-2xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-emerald-400">
      Akorify
    </span>
  </Link>
);

// Masaüstü menüsü
const DesktopNav = () => (
  <nav className="hidden md:flex items-center gap-6 text-base font-semibold whitespace-nowrap">
    {navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className="transition-colors text-gray-700 hover:text-emerald-600 px-2 py-1"
      >
        {link.label}
      </Link>
    ))}
  </nav>
);

// Mobil menü
const MobileNav = () => (
  <Sheet >
    <SheetTrigger asChild>
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="h-7 w-7" />
        <span className="sr-only">Menüyü Aç</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="w-full max-w-xs sm:max-w-sm">
      <SheetHeader className="flex items-center justify-between border-b pb-4">
        <Logo />
        <SheetClose className="absolute right-4 top-4 rounded-full p-1 opacity-70 transition hover:opacity-100">
          <span className="sr-only">Kapat</span>
        </SheetClose>
      </SheetHeader>
      <div className="flex flex-col gap-5 py-8 px-2">
        {navLinks.map((link) => (
          <SheetClose asChild key={link.href}>
            <Link
              href={link.href}
              className="text-lg font-medium text-gray-700 hover:text-emerald-600 transition-colors"
            >
              {link.label}
            </Link>
          </SheetClose>
        ))}
        <div className="flex gap-2 mt-8">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="flex-1 font-semibold"
          >
            <Link href="/giris">Giriş Yap</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="flex-1 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold"
          >
            <Link href="/kayit">Kayıt Ol</Link>
          </Button>
        </div>
      </div>
    </SheetContent>
  </Sheet>
);

// Kullanıcı profil dropdown
const UserProfile = ({
  user,
}: {
  user: { name: string; email: string; avatarUrl: string };
}) => (
  // TODO: BACKENDDEN FOTOĞRAF GELECEK
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="relative h-12 w-12 rounded-full p-0">
        <Avatar className="h-12 w-12 border-2 border-emerald-400 shadow">
          <AvatarImage src={user.avatarUrl} alt={user.name} />
          <AvatarFallback>
            {user.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-60 mt-2" align="end" forceMount>
      <DropdownMenuLabel className="font-normal">
        <div className="flex flex-col space-y-1">
          <p className="text-base font-bold leading-tight">{user.name}</p>
          <p className="text-xs leading-tight text-muted-foreground">
            {user.email}
          </p>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem className="text-base">Profil</DropdownMenuItem>
      <DropdownMenuItem className="text-base">Ayarlar</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem className="text-base text-red-500">
        Çıkış Yap
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

// Giriş/Kayıt butonları (desktop)
const AuthButtons = () => (
  <div className="hidden md:flex items-center gap-3">
    <Button asChild variant="outline" size="lg" className="font-semibold">
      <Link href="/giris">Giriş Yap</Link>
    </Button>
    <Button
      asChild
      size="lg"
      className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-md font-semibold"
    >
      <Link href="/kayit">Kayıt Ol</Link>
    </Button>
  </div>
);

export default function Header() {
  const { isLoggedIn, user } = useUser();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur">
      <div className="mx-auto w-full max-w-7xl flex items-center h-20 px-4">
        {/* Mobilde hamburger ve logo (sol) */}
        <div className="flex items-center gap-2 flex-shrink-0 md:hidden ">
          <MobileNav />
          <Logo />
        </div>
        {/* Desktopta sadece logo (sol) */}
        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          <Logo />
        </div>
        {/* Orta: Menü */}
        <div className="flex-1 flex justify-center">
          <DesktopNav />
        </div>
        {/* Sağ: Avatar veya Auth */}
        <div className="flex items-center gap-2 flex-shrink-0 ml-2">
          {isLoggedIn ? <UserProfile user={user} /> : <AuthButtons />}
        </div>
      </div>
    </header>
  );
}
