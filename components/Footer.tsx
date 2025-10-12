"use client";

import { Code2, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-rose-500 to-rose-700 p-2 rounded-lg">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Kiraz Bilişim</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Teknoloji ile değer yaratan, müşteri memnuniyetini ön planda tutan ve yenilikçi çözümler sunan güvenilir iş ortağınız.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('hero')} className="hover:text-rose-400 transition-colors text-sm">
                  Ana Sayfa
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-rose-400 transition-colors text-sm">
                  Hizmetler
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-rose-400 transition-colors text-sm">
                  Hakkımızda
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('process')} className="hover:text-rose-400 transition-colors text-sm">
                  Çalışma Süreci
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-rose-400 transition-colors text-sm">
                  İletişim
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2 text-sm">
              <li>Web Geliştirme</li>
              <li>Mobil Uygulama</li>
              <li>Bulut Çözümleri</li>
              <li>Dijital Dönüşüm</li>
              <li>Siber Güvenlik</li>
              <li>API & Entegrasyon</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-rose-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@kirazbilisim.com" className="hover:text-rose-400 transition-colors text-sm">
                  info@kirazbilisim.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-rose-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+902121234567" className="hover:text-rose-400 transition-colors text-sm">
                  Eklenecek
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-rose-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Yakında fiziksel ofisimiz açılacaktır. Şimdilik online olarak hizmet vermekteyiz.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Kiraz Bilişim. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
