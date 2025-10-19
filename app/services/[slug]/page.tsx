import React from 'react';
import { notFound } from 'next/navigation';
import { PackageCard } from '@/components/PackageCard';
import { packages, customizableWebPackage, customizableApiPackage, customizableGamePackage } from '@/lib/data/packages';
import { CustomizablePackage } from '@/components/CustomizablePackage';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = params;
  
  // Slug'a göre hizmet paketlerini bul
  const servicePackages = packages[slug];
  
  // Konsola slug değerini yazdır (hata ayıklama için)
  console.log("Aranan slug:", slug);
  console.log("Mevcut paketler:", Object.keys(packages));
  
  // Eğer bu slug için paket yoksa 404 sayfasına yönlendir
  if (!servicePackages) {
    console.error(`Paket bulunamadı: ${slug}`);
    notFound();
  }

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent">
              {servicePackages.title}
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            İhtiyaçlarınıza en uygun paketi seçin
          </p>
        </div>

        {/* Standart paketler */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative">
          {servicePackages.packages.map((pkg) => (
            <div key={pkg.id} className={pkg.popular ? "mt-4" : ""}>
              <PackageCard
                title={pkg.title}
                description={pkg.description}
                price={pkg.price}
                features={pkg.features}
                popular={pkg.popular}
                ctaText="İletişime Geç"
              />
            </div>
          ))}
        </div>

        {/* Özelleştirilebilir paketler */}
        {slug === 'web-gelistirme' && servicePackages.customizable && (
          <div className="mt-20">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent">
                  Özelleştirilebilir Web Paketi
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                İhtiyaçlarınıza göre kendi paketinizi oluşturun
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <CustomizablePackage packageData={customizableWebPackage} />
            </div>
          </div>
        )}
        
        {slug === 'api-entegrasyon' && (
          <div className="mt-20">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent">
                  Özelleştirilebilir API Entegrasyonu
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                İhtiyaçlarınıza göre kendi API entegrasyon paketinizi oluşturun
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <CustomizablePackage packageData={customizableApiPackage} />
            </div>
          </div>
        )}
        
        {slug === 'oyun-eklentileri' && (
          <div className="mt-20">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent">
                  Özelleştirilebilir Oyun Eklentileri
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                İhtiyaçlarınıza göre kendi oyun eklenti paketinizi oluşturun
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <CustomizablePackage packageData={customizableGamePackage} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}