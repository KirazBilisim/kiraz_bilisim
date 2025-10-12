"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<string | null>(null); // login durumu
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // localStorage'dan kullanıcı al
    const savedUser = localStorage.getItem('user');
    if (savedUser) setUser(savedUser);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollOrNavigate = (id: string) => {
    if (pathname === '/') {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${id}`;
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <Link href="/">
              <Image
                src="/kiraz.png"
                alt="Kiraz Bilişim Logo"
                width={30}
                height={30}
                className="rounded-lg"
              />
            </Link>
            <Link href="/">
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent">
                Kiraz Bilişim
              </span>
            </Link>
          </div>

          {/* Desktop Menü */}
          <div className="hidden md:flex items-center w-full">
            <nav className="flex items-center justify-center flex-1 space-x-8">
              <button onClick={() => scrollOrNavigate('services')} className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
                Hizmetler
              </button>
              <button onClick={() => scrollOrNavigate('about')} className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
                Hakkımızda
              </button>
              <button onClick={() => scrollOrNavigate('process')} className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
                Süreç
              </button>
              <button onClick={() => scrollOrNavigate('contact')} className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
                İletişim
              </button>
              <Button onClick={() => scrollOrNavigate('contact')} className="bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800">
                Teklif Al
              </Button>
            </nav>

            {/* Sağ üst Kayıt/Giriş veya Hesabım */}
            <div className="flex items-center space-x-2 ml-auto">
              {user ? (
                <>
                  <span>Hesabım: {user}</span>
                  <Button onClick={handleLogout} variant="outline">Çıkış Yap</Button>
                </>
              ) : (
                <>
                  <Link href="/register">
                    <Button variant="outline">Kayıt Ol</Button>
                  </Link>
                  <Link href="/login">
                    <Button variant="default">Giriş Yap</Button>
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menü Butonu */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobil Menü */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            <button onClick={() => scrollOrNavigate('services')} className="text-left text-gray-700 hover:text-rose-600 transition-colors font-medium">
              Hizmetler
            </button>
            <button onClick={() => scrollOrNavigate('about')} className="text-left text-gray-700 hover:text-rose-600 transition-colors font-medium">
              Hakkımızda
            </button>
            <button onClick={() => scrollOrNavigate('process')} className="text-left text-gray-700 hover:text-rose-600 transition-colors font-medium">
              Süreç
            </button>
            <button onClick={() => scrollOrNavigate('contact')} className="text-left text-gray-700 hover:text-rose-600 transition-colors font-medium">
              İletişim
            </button>
            <Button onClick={() => scrollOrNavigate('contact')} className="bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 w-full">
              Teklif Al
            </Button>

            {/* Mobil Kayıt/Giriş veya Hesabım */}
            {user ? (
              <>
                <span className="block text-gray-700">Hesabım: {user}</span>
                <Button onClick={handleLogout} variant="outline" className="w-full">Çıkış Yap</Button>
              </>
            ) : (
              <>
                <Link href="/register">
                  <Button variant="outline" className="w-full">Kayıt Ol</Button>
                </Link>
                <Link href="/login">
                  <Button variant="default" className="w-full">Giriş Yap</Button>
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
