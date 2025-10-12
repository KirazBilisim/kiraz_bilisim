"use client";

import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-rose-50">
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] bg-[size:20px_20px]" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Dijital Dönüşümde Yanınızdayız</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up">
            Geleceği Kodlayan{' '}
            <span className="bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent">
              Teknoloji Çözümleri
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Kiraz Bilişim ile işinizi dijital çağa taşıyın. Yenilikçi yazılım
            geliştirme, web tasarım ve teknoloji danışmanlığı hizmetlerimizle
            fark yaratın.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white px-8 py-6 text-lg group"
            >
              Projeni Başlat
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('services')}
              className="border-2 border-gray-300 hover:border-rose-600 hover:text-rose-600 px-8 py-6 text-lg"
            >
              Hizmetlerimizi Keşfet
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 animate-fade-in-up animation-delay-600">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-rose-600 mb-2">150+</div>
              <div className="text-sm text-gray-600">Başarılı Proje</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-rose-600 mb-2">100+</div>
              <div className="text-sm text-gray-600">Mutlu Müşteri</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-rose-600 mb-2">2+</div>
              <div className="text-sm text-gray-600">Yıllık Tecrübe</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-rose-600 mb-2">99%</div>
              <div className="text-sm text-gray-600">Müşteri Memnuniyeti</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
