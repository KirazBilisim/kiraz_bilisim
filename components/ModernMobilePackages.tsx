"use client";

import { useState } from "react";
import { Smartphone, Tablet, Monitor, Zap, Check, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface MobilePackage {
  id: string;
  name: string;
  shortDesc: string;
  description: string;
  technologies: string[];
  icon: React.ComponentType<any>;
  price: string;
  priceNote?: string;
  popular?: boolean;
  platform: 'android' | 'ios' | 'cross-platform';
  features: { name: string; included: boolean; }[];
}

const mobilePackages: MobilePackage[] = [
  {
    id: "android",
    name: "Android Uygulama",
    shortDesc: "Android platform özel çözüm",
    description: "Google Play Store için optimize edilmiş, modern Android uygulama geliştirme hizmeti.",
    technologies: ["Kotlin", "Android Studio", "Firebase", "Material Design"],
    icon: Smartphone,
    price: "3.000₺",
    priceNote: "Başlangıç fiyatı",
    platform: 'android',
    features: [
      { name: "Native Android Geliştirme", included: true },
      { name: "Material Design UI", included: true },
      { name: "Firebase Entegrasyonu", included: true },
      { name: "Push Bildirimleri", included: true },
      { name: "Play Store Yayınlama", included: true },
      { name: "Offline Çalışma", included: true },
      { name: "Performans Optimizasyonu", included: true },
      { name: "6 Ay Teknik Destek", included: true },
      { name: "iOS Versiyonu", included: false }
    ]
  },
  {
    id: "ios",
    name: "iOS Uygulama",
    shortDesc: "Apple App Store çözümü",
    description: "App Store standartlarına uygun, modern iOS uygulama geliştirme hizmeti.",
    technologies: ["Swift", "Xcode", "SwiftUI", "Core Data"],
    icon: Tablet,
    price: "3.500₺",
    priceNote: "Başlangıç fiyatı",
    platform: 'ios',
    features: [
      { name: "Native iOS Geliştirme", included: true },
      { name: "SwiftUI Modern Tasarım", included: true },
      { name: "iCloud Entegrasyonu", included: true },
      { name: "Push Bildirimleri", included: true },
      { name: "App Store Yayınlama", included: true },
      { name: "Face ID / Touch ID", included: true },
      { name: "Performans Optimizasyonu", included: true },
      { name: "6 Ay Teknik Destek", included: true },
      { name: "Android Versiyonu", included: false }
    ]
  },
  {
    id: "cross-platform",
    name: "Cross-Platform Uygulama",
    shortDesc: "Hem Android hem iOS",
    description: "Tek kod tabanı ile hem Android hem iOS platformları için uygulama geliştirme.",
    technologies: ["React Native", "Expo", "Firebase", "TypeScript"],
    icon: Monitor,
    price: "5.000₺",
    priceNote: "Her iki platform için",
    popular: true,
    platform: 'cross-platform',
    features: [
      { name: "React Native Geliştirme", included: true },
      { name: "Android ve iOS Desteği", included: true },
      { name: "Tek Kod Tabanı", included: true },
      { name: "Firebase Entegrasyonu", included: true },
      { name: "Push Bildirimleri", included: true },
      { name: "Her İki Store'da Yayın", included: true },
      { name: "Performans Optimizasyonu", included: true },
      { name: "12 Ay Teknik Destek", included: true },
      { name: "Maliyet Avantajı", included: true }
    ]
  }
];

const premiumPackage: MobilePackage = {
  id: "premium",
  name: "Premium Mobil Çözüm",
  shortDesc: "Gelişmiş özelliklerle donatılmış",
  description: "Gelişmiş entegrasyonlar, özel özellikler ve premium destek ile tam kapsamlı mobil uygulama çözümü.",
  technologies: ["Native + Cross Platform", "AI/ML", "AR/VR", "Blockchain"],
  icon: Zap,
  price: "8.000₺+",
  priceNote: "Özelleştirilebilir fiyat",
  platform: 'cross-platform',
  features: [
    { name: "AI/ML Entegrasyonları", included: true },
    { name: "AR/VR Deneyimleri", included: true },
    { name: "Blockchain Entegrasyonu", included: true },
    { name: "Gelişmiş Analitik", included: true },
    { name: "Çoklu Dil Desteği", included: true },
    { name: "Özel API Geliştirme", included: true },
    { name: "24/7 Premium Destek", included: true },
    { name: "2 Yıl Garanti", included: true },
    { name: "Sürekli Güncelleme", included: true }
  ]
};

export default function ModernMobilePackages() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const PackageCard = ({ pkg, className = "" }: { pkg: MobilePackage; className?: string }) => {
    const Icon = pkg.icon;
    
    const getPlatformColor = (platform: string) => {
      switch (platform) {
        case 'android': return 'bg-green-500';
        case 'ios': return 'bg-gray-800';
        case 'cross-platform': return 'bg-blue-500';
        default: return 'bg-rose-500';
      }
    };

    const getPlatformText = (platform: string) => {
      switch (platform) {
        case 'android': return 'Android';
        case 'ios': return 'iOS';
        case 'cross-platform': return 'Cross-Platform';
        default: return 'Premium';
      }
    };
    
    return (
      <Card className={`relative group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
        pkg.popular ? 'ring-2 ring-blue-500 shadow-lg' : ''
      } ${selectedPackage === pkg.id ? 'ring-2 ring-rose-500' : ''} ${className}`}>
        {pkg.popular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-blue-500 text-white px-4 py-1">
              En Popüler
            </Badge>
          </div>
        )}
        
        <CardHeader className="text-center pb-4">
          <div className={`w-16 h-16 mx-auto mb-4 ${getPlatformColor(pkg.platform)} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="h-8 w-8 text-white" />
          </div>
          
          <div className="mb-2">
            <Badge variant="outline" className="mb-2">
              {getPlatformText(pkg.platform)}
            </Badge>
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

          <Button 
            className={`w-full text-white ${getPlatformColor(pkg.platform)} hover:opacity-90`}
            onClick={() => setSelectedPackage(pkg.id)}
          >
            Paket Seç
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
            Mobil Uygulama <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Paketlerimiz</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            iOS ve Android platformları için profesyonel mobil uygulama geliştirme hizmetleri.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              Store Yayınlama Desteği
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              6-12 Ay Teknik Destek
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              Performans Garantisi
            </div>
          </div>
        </div>

        {/* Ana Paketler (3 paket yan yana) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {mobilePackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Premium Paket (Ortada tek başına) */}
        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <PackageCard 
              pkg={premiumPackage} 
              className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 shadow-lg"
            />
          </div>
        </div>

        {/* Alt bilgi */}
        <div className="text-center mt-16 p-6 bg-blue-50 rounded-xl">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Hangi platform için geliştirme yapmalısınız?
          </h3>
          <p className="text-gray-600 mb-4">
            Uzmanlarımızla görüşerek hedef kitlenize en uygun platform seçimini yapın.
          </p>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            Platform Danışmanlığı Al
          </Button>
        </div>
      </div>
    </section>
  );
}