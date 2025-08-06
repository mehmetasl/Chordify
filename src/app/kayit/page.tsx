"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Guitar, Music, UserPlus } from "lucide-react";

export default function RegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const firstName = formData.get("first-name") as string;
    const lastName = formData.get("last-name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const response = await fetch("http://localhost:4000/api/auth/register", { // Backend adresiniz
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          email, 
          password, 
          username: `${firstName} ${lastName}`
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Bir hata oluştu.");
      }

      // Başarılı kayıt sonrası kullanıcıyı bilgilendir ve yönlendir
      alert(data.message);
      window.location.href = '/giris'; // Giriş sayfasına yönlendir

    } catch (error: any) {
      alert(`Kayıt başarısız: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gray-50/50 dark:bg-gray-900/50 p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 via-emerald-100/20 to-white dark:from-purple-900/10 dark:via-emerald-900/10 dark:to-gray-900/10 -z-10"></div>
      
      <div className="absolute top-8 left-8">
        <Link href="/" className="flex items-center gap-2 select-none">
          <Guitar className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-emerald-400">
            Akorify
          </span>
        </Link>
      </div>

      <Card className="w-full max-w-md shadow-2xl shadow-emerald-100/50 dark:shadow-purple-900/50 border-gray-200/80 dark:border-gray-800/80 rounded-2xl">
        <CardHeader className="text-center space-y-2 pt-8">
          <UserPlus className="mx-auto h-8 w-8 text-emerald-500" />
          <CardTitle className="text-3xl font-bold">Hesap Oluştur</CardTitle>
          <CardDescription>
            Müziğin ritmine katıl! Zaten bir hesabın var mı?{" "}
            <Link href="/giris" className="font-semibold text-emerald-600 hover:underline">
              Giriş Yap
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">Ad</Label>
                <Input id="first-name" name="first-name" placeholder="Mehmet" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Soyad</Label>
                <Input id="last-name" name="last-name" placeholder="Aslan" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-posta</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="mehmet@akorify.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Şifre</Label>
              <Input id="password" name="password" type="password" required />
            </div>
            <Button type="submit" className="w-full h-12 text-base font-bold bg-gradient-to-r from-emerald-500 to-purple-500 text-white hover:opacity-90 transition-opacity" disabled={isSubmitting}>
              {isSubmitting ? "Hesap Oluşturuluyor..." : "Ücretsiz Kayıt Ol"}
            </Button>
          </form>
           <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Veya şununla devam et
              </span>
            </div>
          </div>
           <div className="grid grid-cols-2 gap-4 mt-6">
            <Button variant="outline" className="h-11">
                Google
            </Button>
             <Button variant="outline" className="h-11">
                GitHub
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
