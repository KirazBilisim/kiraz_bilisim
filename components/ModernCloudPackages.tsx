"use client";

import { useState } from "react";
import { Cloud, Server, Database, Shield, Check, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CloudPackage {
  id: string;
  name: string;
  shortDesc: string;
  description: string;
  technologies: string[];
  icon: React.ComponentType<any>;
  price: string;
  priceNote?: string;
  popular?: boolean;
  provider: 'aws' | 'azure' | 'google' | 'hybrid';
  features: { name: string; included: boolean; }[];
  specs?: {
    cpu: string;
    ram: string;
    storage: string;
    bandwidth: string;
  };
}

const cloudPackages: CloudPackage[] = [
  {
    id: "aws-basic",
    name: "AWS Temel Kurulum",
    shortDesc: "Amazon Web Services başlangıç",
    description: "Küçük ve orta ölçekli projeler için optimize edilmiş AWS bulut altyapı kurulumu.",
    technologies: ["AWS EC2", "RDS", "S3", "CloudFront"],
    icon: Cloud,
    price: "2.000₺",
    priceNote: "Kurulum + 3 ay destek",
    provider: 'aws',
    specs: {
      cpu: "2 vCPU",
      ram: "4 GB RAM",
      storage: "100 GB SSD",
      bandwidth: "1 TB Transfer"
    },
    features: [
      { name: "EC2 Instance Kurulumu", included: true },
      { name: "RDS Veritabanı", included: true },
      { name: "S3 Object Storage", included: true },
      { name: "CloudFront CDN", included: true },
      { name: "SSL Sertifikası", included: true },
      { name: "Backup Sistemi", included: true },
      { name: "Monitoring & Alerting", included: true },
      { name: "3 Ay Teknik Destek", included: true },
      { name: "Load Balancer", included: false }
    ]
  },
  {
    id: "azure-corporate",
    name: "Azure Kurumsal Çözüm",
    shortDesc: "Microsoft Azure enterprise",
    description: "Kurumsal düzeyde güvenlik ve performans gereksinimleri için Azure altyapı çözümü.",
    technologies: ["Azure VM", "Azure SQL", "Azure AD", "App Gateway"],
    icon: Server,
    price: "3.500₺",
    priceNote: "Kurulum + 6 ay destek",
    popular: true,
    provider: 'azure',
    specs: {
      cpu: "4 vCPU",
      ram: "8 GB RAM",
      storage: "250 GB Premium SSD",
      bandwidth: "2 TB Transfer"
    },
    features: [
      { name: "Azure Virtual Machine", included: true },
      { name: "Azure SQL Database", included: true },
      { name: "Active Directory Entegrasyonu", included: true },
      { name: "Application Gateway", included: true },
      { name: "Azure Security Center", included: true },
      { name: "Disaster Recovery", included: true },
      { name: "Advanced Monitoring", included: true },
      { name: "6 Ay Premium Destek", included: true },
      { name: "Multi-Region Deployment", included: true }
    ]
  },
  {
    id: "google-cloud",
    name: "Google Cloud Platform",
    shortDesc: "GCP ile modern altyapı",
    description: "Google Cloud'un gelişmiş AI/ML hizmetleri ile entegre moderne bulut altyapısı.",
    technologies: ["Compute Engine", "Cloud SQL", "Cloud Storage", "Firebase"],
    icon: Database,
    price: "2.800₺",
    priceNote: "Kurulum + AI entegrasyonu",
    provider: 'google',
    specs: {
      cpu: "4 vCPU",
      ram: "6 GB RAM",
      storage: "200 GB SSD",
      bandwidth: "1.5 TB Transfer"
    },
    features: [
      { name: "Compute Engine Setup", included: true },
      { name: "Cloud SQL Veritabanı", included: true },
      { name: "Cloud Storage", included: true },
      { name: "Firebase Entegrasyonu", included: true },
      { name: "AI/ML API Entegrasyonu", included: true },
      { name: "Global Load Balancing", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "4 Ay Teknik Destek", included: true },
      { name: "Container Support", included: false }
    ]
  }
];

const hybridPackage: CloudPackage = {
  id: "hybrid-enterprise",
  name: "Hibrit Kurumsal Çözüm",
  shortDesc: "Multi-cloud hibrit altyapı",
  description: "Farklı cloud sağlayıcıları ile hibrit altyapı kurulumu. En yüksek güvenlik ve performans.",
  technologies: ["Multi-Cloud", "Kubernetes", "Docker", "Terraform"],
  icon: Shield,
  price: "8.000₺+",
  priceNote: "Özel proje fiyatlandırması",
  provider: 'hybrid',
  specs: {
    cpu: "Ölçeklenebilir",
    ram: "Ölçeklenebilir",
    storage: "Sınırsız",
    bandwidth: "Sınırsız"
  },
  features: [
    { name: "Multi-Cloud Orchestration", included: true },
    { name: "Kubernetes Cluster", included: true },
    { name: "Container Orchestration", included: true },
    { name: "Infrastructure as Code", included: true },
    { name: "Advanced Security", included: true },
    { name: "24/7 Enterprise Support", included: true },
    { name: "Disaster Recovery", included: true },
    { name: "Compliance Ready", included: true },
    { name: "DevOps Integration", included: true }
  ]
};

export default function ModernCloudPackages() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const PackageCard = ({ pkg, className = "" }: { pkg: CloudPackage; className?: string }) => {
    const Icon = pkg.icon;
    
    const getProviderColor = (provider: string) => {
      switch (provider) {
        case 'aws': return 'bg-orange-500';
        case 'azure': return 'bg-blue-600';
        case 'google': return 'bg-green-500';
        case 'hybrid': return 'bg-purple-600';
        default: return 'bg-gray-500';
      }
    };

    const getProviderText = (provider: string) => {
      switch (provider) {
        case 'aws': return 'AWS';
        case 'azure': return 'Azure';
        case 'google': return 'Google Cloud';
        case 'hybrid': return 'Hibrit';
        default: return 'Cloud';
      }
    };
    
    return (
      <Card className={`relative group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
        pkg.popular ? 'ring-2 ring-blue-500 shadow-lg' : ''
      } ${selectedPackage === pkg.id ? 'ring-2 ring-rose-500' : ''} ${className}`}>
        {pkg.popular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-blue-500 text-white px-4 py-1">
              Kurumsal Favorisi
            </Badge>
          </div>
        )}
        
        <CardHeader className="text-center pb-4">
          <div className={`w-16 h-16 mx-auto mb-4 ${getProviderColor(pkg.provider)} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="h-8 w-8 text-white" />
          </div>
          
          <div className="mb-2">
            <Badge variant="outline" className="mb-2">
              {getProviderText(pkg.provider)}
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
          
          {/* Spesifikasyonlar */}
          {pkg.specs && (
            <div className="mb-6">
              <h4 className="font-semibold text-sm mb-3 text-gray-900">Spesifikasyonlar:</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500">CPU:</span>
                  <span className="font-medium">{pkg.specs.cpu}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">RAM:</span>
                  <span className="font-medium">{pkg.specs.ram}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Storage:</span>
                  <span className="font-medium">{pkg.specs.storage}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Transfer:</span>
                  <span className="font-medium">{pkg.specs.bandwidth}</span>
                </div>
              </div>
            </div>
          )}
          
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
            className={`w-full text-white ${getProviderColor(pkg.provider)} hover:opacity-90`}
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
            Bulut Çözümleri <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Paketlerimiz</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Güvenli, ölçeklenebilir ve maliyet etkin bulut altyapı çözümleri.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              99.9% Uptime Garantisi
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              Otomatik Backup
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              7/24 Monitoring
            </div>
          </div>
        </div>

        {/* Ana Paketler (3 paket yan yana) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {cloudPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Hibrit Paket (Ortada tek başına) */}
        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <PackageCard 
              pkg={hybridPackage} 
              className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 shadow-lg"
            />
          </div>
        </div>

        {/* Alt bilgi */}
        <div className="text-center mt-16 p-6 bg-blue-50 rounded-xl">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Hangi bulut sağlayıcısı size uygun?
          </h3>
          <p className="text-gray-600 mb-4">
            Uzmanlarımızla görüşerek ihtiyaçlarınıza en uygun bulut altyapısını belirleyin.
          </p>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            Ücretsiz Bulut Danışmanlığı
          </Button>
        </div>
      </div>
    </section>
  );
}