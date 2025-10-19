"use client";

import { useState } from "react";
import { Check, Star, Zap, Crown, Settings, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PackageCustomizer from "@/components/PackageCustomizer";

interface PackageFeature {
  name: string;
  included: boolean;
}

interface WebPackage {
  id: string;
  name: string;
  shortDesc: string;
  description: string;
  technologies: string[];
  icon: React.ComponentType<any>;
  price: string;
  priceNote?: string;
  popular?: boolean;
  seo: boolean;
  backend: boolean;
  database?: string;
  design: 'ready' | 'custom';
  features: PackageFeature[];
  customizable?: boolean;
}

const webPackages: WebPackage[] = [
  {
    id: "onepage",
    name: "Onepage Tanıtım Sitesi",
    shortDesc: "Hızlı ve etkili tek sayfa çözümü",
    description: "Modern teknolojilerle geliştirilmiş, mobil uyumlu tek sayfa tanıtım sitesi. İşinizi dijital ortamda profesyonel bir şekilde tanıtmanızı sağlar.",
    technologies: ["Next.js", "React", "TailwindCSS", "TypeScript"],
    icon: Zap,
    price: "Fiyat Belirlenecek",
    priceNote: "Projeye özel fiyatlandırma",
    seo: false,
    backend: false,
    design: 'ready',
    features: [
      { name: "Responsive Tasarım", included: true },
      { name: "Modern UI/UX", included: true },
      { name: "Hızlı Yükleme", included: true },
      { name: "Mobil Uyumlu", included: true },
      { name: "İletişim Formu", included: true },
      { name: "Google Analytics", included: true },
      { name: "SEO Optimizasyonu", included: false },
      { name: "Backend Entegrasyonu", included: false },
      { name: "Veritabanı", included: false }
    ]
  },
  {
    id: "corporate",
    name: "Kurumsal Web Sitesi",
    shortDesc: "Kapsamlı kurumsal çözüm",
    description: "Tam özellikli kurumsal web sitesi çözümü. Backend desteği, veritabanı entegrasyonu ve SEO optimizasyonu ile işinizi dijital dünyada güçlü bir şekilde konumlandırır.",
    technologies: ["Next.js", "React", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
    icon: Star,
    price: "Fiyat Belirlenecek",
    priceNote: "Detaylı analiz sonrası",
    popular: true,
    seo: true,
    backend: true,
    database: "MongoDB",
    design: 'ready',
    features: [
      { name: "Responsive Tasarım", included: true },
      { name: "Modern UI/UX", included: true },
      { name: "SEO Optimizasyonu", included: true },
      { name: "Backend API", included: true },
      { name: "Veritabanı Entegrasyonu", included: true },
      { name: "Yönetim Paneli", included: true },
      { name: "İçerik Yönetimi", included: true },
      { name: "Güvenlik Özellikleri", included: true },
      { name: "Performans Optimizasyonu", included: true }
    ]
  },
  {
    id: "custom",
    name: "Özel Kodlanmış Web Sitesi",
    shortDesc: "Benzersiz özel çözüm",
    description: "Müşteri ihtiyaçlarına özel tasarlanmış, sıfırdan kodlanmış web sitesi. En üst seviye SEO ve performans özellikleri ile rakiplerinizden öne çıkın.",
    technologies: ["Next.js", "React", "Node.js", "Express.js", "MongoDB", "TypeScript"],
    icon: Crown,
    price: "Fiyat Belirlenecek",
    priceNote: "Özel geliştirme fiyatı",
    seo: true,
    backend: true,
    database: "MongoDB",
    design: 'custom',
    features: [
      { name: "Özel Tasarım", included: true },
      { name: "Benzersiz UI/UX", included: true },
      { name: "Gelişmiş SEO", included: true },
      { name: "Özel Backend API", included: true },
      { name: "Gelişmiş Veritabanı", included: true },
      { name: "Özel Özellikler", included: true },
      { name: "Performans Optimizasyonu", included: true },
      { name: "Güvenlik Testleri", included: true },
      { name: "Sürekli Destek", included: true }
    ]
  }
];

const customizablePackage: WebPackage = {
  id: "customizable",
  name: "Özelleştirilebilen Web Sitesi",
  shortDesc: "Kendi paketinizi oluşturun",
  description: "Teknoloji seçimlerinden özelliklere kadar her detayı özelleştirebileceğiniz esnek web sitesi paketi. İhtiyaçlarınıza göre paketinizi kendiniz tasarlayın.",
  technologies: ["React/Next.js/Vue.js", "Node.js/Express.js", "MongoDB/PostgreSQL"],
  icon: Settings,
  price: "Özel Fiyatlandırma",
  priceNote: "Seçimlerinize göre hesaplanır",
  seo: true,
  backend: true,
  database: "Seçilebilir",
  design: 'custom',
  customizable: true,
  features: [
    { name: "Teknoloji Seçimi", included: true },
    { name: "Modüler Özellikler", included: true },
    { name: "Esnek Fiyatlandırma", included: true },
    { name: "Özelleştirilebilir SEO", included: true },
    { name: "Seçilebilir Backend", included: true },
    { name: "Veritabanı Seçimi", included: true },
    { name: "Ek Özellik Entegrasyonu", included: true },
    { name: "Kademeli Geliştirme", included: true },
    { name: "Esnek Destek Paketi", included: true }
  ]
};

export default function ModernWebPackages() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [showCustomizer, setShowCustomizer] = useState(false);

  const PackageCard = ({ pkg, className = "" }: { pkg: WebPackage; className?: string }) => {
    const Icon = pkg.icon;
    
    return (
      <Card className={`relative group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
        pkg.popular ? 'ring-2 ring-rose-500 shadow-lg' : ''
      } ${selectedPackage === pkg.id ? 'ring-2 ring-blue-500' : ''} ${className}`}>
        {pkg.popular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-rose-500 text-white px-4 py-1">
              Popüler
            </Badge>
          </div>
        )}
        
        <CardHeader className="text-center pb-4">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-rose-500 to-rose-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-8 w-8 text-white" />
          </div>
          
          <CardTitle className="text-xl mb-2">{pkg.name}</CardTitle>
          <CardDescription className="text-sm text-gray-600 mb-4">
            {pkg.shortDesc}
          </CardDescription>
          
          <div className="mb-4">
            <div className="text-2xl font-bold text-gray-900">{pkg.price}</div>
            {pkg.priceNote && (
              <div className="text-xs text-gray-500 mt-1">{pkg.priceNote}</div>
            )}
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <p className="text-sm text-gray-600 mb-6">{pkg.description}</p>
          
          {/* Teknolojiler */}
          <div className="mb-6">
            <h4 className="font-semibold text-sm mb-3 text-gray-900">Teknolojiler:</h4>
            <div className="flex flex-wrap gap-2">
              {pkg.technologies.map((tech, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Özellikler */}
          <div className="mb-6">
            <h4 className="font-semibold text-sm mb-3 text-gray-900">Özellikler:</h4>
            <div className="space-y-2">
              {pkg.features.slice(0, 6).map((feature, idx) => (
                <div key={idx} className="flex items-center text-sm">
                  <Check className={`h-4 w-4 mr-2 ${
                    feature.included ? 'text-green-500' : 'text-gray-300'
                  }`} />
                  <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                    {feature.name}
                  </span>
                </div>
              ))}
              {pkg.features.length > 6 && (
                <div className="text-xs text-gray-500 mt-2">
                  +{pkg.features.length - 6} ek özellik
                </div>
              )}
            </div>
          </div>

          {/* Özet Bilgiler */}
          <div className="grid grid-cols-2 gap-4 mb-6 p-3 bg-gray-50 rounded-lg">
            <div className="text-center">
              <div className="text-xs text-gray-500">SEO</div>
              <div className={`text-sm font-medium ${pkg.seo ? 'text-green-600' : 'text-gray-400'}`}>
                {pkg.seo ? 'Dahil' : 'Yok'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500">Backend</div>
              <div className={`text-sm font-medium ${pkg.backend ? 'text-green-600' : 'text-gray-400'}`}>
                {pkg.backend ? 'Dahil' : 'Yok'}
              </div>
            </div>
          </div>

          <Button 
            className="w-full bg-rose-500 hover:bg-rose-600 text-white"
            onClick={() => {
              if (pkg.customizable) {
                setShowCustomizer(true);
              } else {
                setSelectedPackage(pkg.id);
              }
            }}
          >
            {pkg.customizable ? 'Özelleştir' : 'Paket Seç'}
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Web Geliştirme <span className="bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent">Paketlerimiz</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            İhtiyaçlarınıza en uygun web sitesi paketini seçin veya kendi özel paketinizi oluşturun.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              Ücretsiz Danışmanlık
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              7/24 Teknik Destek
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              1 Yıl Garanti
            </div>
          </div>
        </div>

        {/* Ana Paketler (3 paket yan yana) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {webPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Özelleştirilebilen Paket (Ortada tek başına) */}
        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <PackageCard 
              pkg={customizablePackage} 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 shadow-lg"
            />
          </div>
        </div>

        {/* Alt bilgi */}
        <div className="text-center mt-16 p-6 bg-rose-50 rounded-xl">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Hangi paketi seçeceğinizden emin değil misiniz?
          </h3>
          <p className="text-gray-600 mb-4">
            Uzmanlarımızla ücretsiz görüşerek size en uygun paketi belirleyelim.
          </p>
          <Button className="bg-rose-500 hover:bg-rose-600 text-white">
            Ücretsiz Danışmanlık Al
          </Button>
        </div>
      </div>

      {/* Package Customizer Modal */}
      <PackageCustomizer 
        isOpen={showCustomizer} 
        onClose={() => setShowCustomizer(false)} 
      />
    </section>
  );
}