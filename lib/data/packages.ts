import { PackageFeature } from "@/components/PackageCard";

export interface ServicePackage {
  id: string;
  title: string;
  description: string;
  price?: string;
  features: PackageFeature[];
  popular?: boolean;
}

export interface ServicePackages {
  [key: string]: {
    title: string;
    packages: ServicePackage[];
    customizable?: boolean;
  }
}

export const packages: ServicePackages = {
  "web-gelistirme": {
    title: "Web Geliştirme Paketleri",
    packages: [
      {
        id: "onepage",
        title: "Onepage Tanıtım Sitesi",
        description: "İşletmeniz için hızlı ve etkili tek sayfalık tanıtım sitesi",
        price: "Özel Fiyat",
        features: [
          { name: "Next.js/React teknolojisi", included: true },
          { name: "Hazır tasarım şablonu", included: true },
          { name: "Mobil uyumlu tasarım", included: true },
          { name: "Hızlı teslimat", included: true },
          { name: "İçerik yönetim sistemi", included: false },
          { name: "Backend desteği", included: false },
          { name: "SEO çalışması", included: false },
          { name: "Bakım ve destek paketi", included: false }
        ]
      },
      {
        id: "kurumsal",
        title: "Kurumsal Web Sitesi",
        description: "Profesyonel işletmeler için kapsamlı kurumsal web çözümü",
        price: "Özel Fiyat",
        popular: true,
        features: [
          { name: "Next.js/React teknolojisi", included: true },
          { name: "Node.js/Express.js backend", included: true },
          { name: "MongoDB veritabanı", included: true },
          { name: "Hazır tasarım şablonu", included: true },
          { name: "Mobil uyumlu tasarım", included: true },
          { name: "İçerik yönetim sistemi", included: true },
          { name: "SEO çalışması", included: true },
          { name: "Bakım ve destek paketi", included: true }
        ]
      },
      {
        id: "ozel",
        title: "Özel Kodlanmış Web Sitesi",
        description: "İhtiyaçlarınıza özel tasarım ve geliştirme çözümü",
        price: "Özel Fiyat",
        features: [
          { name: "Next.js/React teknolojisi", included: true },
          { name: "Node.js/Express.js backend", included: true },
          { name: "MongoDB veritabanı", included: true },
          { name: "Özel tasarım", included: true },
          { name: "Mobil uyumlu tasarım", included: true },
          { name: "İçerik yönetim sistemi", included: true },
          { name: "Gelişmiş SEO çalışması", included: true },
          { name: "Premium bakım ve destek", included: true }
        ]
      }
    ],
    customizable: true
  },
  "mobil-uygulama": {
    title: "Mobil Uygulama Paketleri",
    packages: [
      {
        id: "temel",
        title: "Temel Mobil Uygulama",
        description: "İşletmeniz için temel özelliklere sahip mobil uygulama",
        price: "Özel Fiyat",
        features: [
          { name: "React Native teknolojisi", included: true },
          { name: "iOS ve Android desteği", included: true },
          { name: "Temel kullanıcı arayüzü", included: true },
          { name: "Uygulama mağazası yayını", included: true },
          { name: "Push bildirimleri", included: false },
          { name: "Gelişmiş analitik", included: false },
          { name: "Özel backend entegrasyonu", included: false }
        ]
      },
      {
        id: "gelismis",
        title: "Gelişmiş Mobil Uygulama",
        description: "Kapsamlı özelliklere sahip profesyonel mobil uygulama",
        price: "Özel Fiyat",
        popular: true,
        features: [
          { name: "React Native teknolojisi", included: true },
          { name: "iOS ve Android desteği", included: true },
          { name: "Özel kullanıcı arayüzü", included: true },
          { name: "Uygulama mağazası yayını", included: true },
          { name: "Push bildirimleri", included: true },
          { name: "Kullanıcı kimlik doğrulama", included: true },
          { name: "Gelişmiş analitik", included: true },
          { name: "Backend entegrasyonu", included: true }
        ]
      },
      {
        id: "premium",
        title: "Premium Mobil Uygulama",
        description: "Tam özellikli, özel tasarımlı premium mobil uygulama",
        price: "Özel Fiyat",
        features: [
          { name: "Native veya React Native", included: true },
          { name: "iOS ve Android desteği", included: true },
          { name: "Özel premium tasarım", included: true },
          { name: "Uygulama mağazası yayını", included: true },
          { name: "Push bildirimleri", included: true },
          { name: "Gelişmiş kullanıcı yönetimi", included: true },
          { name: "Detaylı analitik ve raporlama", included: true },
          { name: "Özel API ve backend geliştirme", included: true },
          { name: "Premium bakım ve destek", included: true }
        ]
      }
    ],
    customizable: true
  },
  "bulut-cozumleri": {
    title: "Bulut Çözümleri Paketleri",
    packages: [
      {
        id: "baslangic",
        title: "Başlangıç Bulut Paketi",
        description: "Küçük işletmeler için temel bulut çözümleri",
        price: "Özel Fiyat",
        features: [
          { name: "Temel sunucu yönetimi", included: true },
          { name: "Bulut depolama", included: true },
          { name: "Yedekleme hizmeti", included: true },
          { name: "E-posta hizmeti", included: true },
          { name: "7/24 izleme", included: false },
          { name: "Otomatik ölçeklendirme", included: false },
          { name: "DevOps hizmetleri", included: false }
        ]
      },
      {
        id: "isletme",
        title: "İşletme Bulut Paketi",
        description: "Orta ölçekli işletmeler için kapsamlı bulut çözümleri",
        price: "Özel Fiyat",
        popular: true,
        features: [
          { name: "Gelişmiş sunucu yönetimi", included: true },
          { name: "Bulut depolama ve CDN", included: true },
          { name: "Otomatik yedekleme", included: true },
          { name: "E-posta ve iletişim hizmetleri", included: true },
          { name: "7/24 izleme ve uyarı", included: true },
          { name: "Temel DevOps hizmetleri", included: true },
          { name: "Güvenlik duvarı ve koruma", included: true }
        ]
      },
      {
        id: "kurumsal",
        title: "Kurumsal Bulut Paketi",
        description: "Büyük işletmeler için tam kapsamlı bulut çözümleri",
        price: "Özel Fiyat",
        features: [
          { name: "Tam kapsamlı altyapı yönetimi", included: true },
          { name: "Özel bulut çözümleri", included: true },
          { name: "Otomatik yedekleme ve felaket kurtarma", included: true },
          { name: "Kurumsal iletişim çözümleri", included: true },
          { name: "7/24 izleme ve acil müdahale", included: true },
          { name: "Tam DevOps entegrasyonu", included: true },
          { name: "Gelişmiş güvenlik ve uyumluluk", included: true },
          { name: "Performans optimizasyonu", included: true }
        ]
      }
    ]
  },
  "dijital-donusum": {
    title: "Dijital Dönüşüm Paketleri",
    packages: [
      {
        id: "analiz",
        title: "Dijital Analiz Paketi",
        description: "İşletmenizin dijital dönüşüm ihtiyaçlarını analiz etme",
        price: "Özel Fiyat",
        features: [
          { name: "Mevcut durum analizi", included: true },
          { name: "İhtiyaç tespiti", included: true },
          { name: "Dijital dönüşüm yol haritası", included: true },
          { name: "Temel danışmanlık", included: true },
          { name: "Süreç optimizasyonu", included: false },
          { name: "Teknoloji entegrasyonu", included: false },
          { name: "Personel eğitimi", included: false }
        ]
      },
      {
        id: "uygulama",
        title: "Dijital Dönüşüm Uygulama Paketi",
        description: "İşletmeniz için kapsamlı dijital dönüşüm çözümleri",
        price: "Özel Fiyat",
        popular: true,
        features: [
          { name: "Detaylı durum analizi", included: true },
          { name: "Kapsamlı ihtiyaç tespiti", included: true },
          { name: "Dijital dönüşüm stratejisi", included: true },
          { name: "Süreç optimizasyonu", included: true },
          { name: "Teknoloji entegrasyonu", included: true },
          { name: "Personel eğitimi", included: true },
          { name: "Uygulama sonrası destek", included: true }
        ]
      },
      {
        id: "kurumsal",
        title: "Kurumsal Dijital Dönüşüm Paketi",
        description: "Büyük işletmeler için tam kapsamlı dijital dönüşüm",
        price: "Özel Fiyat",
        features: [
          { name: "Kurumsal düzeyde analiz", included: true },
          { name: "Stratejik dijital dönüşüm planı", included: true },
          { name: "Süreç yeniden yapılandırma", included: true },
          { name: "Kapsamlı teknoloji entegrasyonu", included: true },
          { name: "Veri analitiği ve yapay zeka", included: true },
          { name: "Kapsamlı personel eğitimi", included: true },
          { name: "Uzun vadeli danışmanlık", included: true },
          { name: "Sürekli iyileştirme desteği", included: true }
        ]
      }
    ]
  },
  "oyun-eklentileri": {
    title: "Oyun Eklentileri Paketleri",
    packages: [
      {
        id: "temel",
        title: "Temel Oyun Eklentileri",
        description: "Oyun projeleriniz için temel eklentiler ve özellikler",
        price: "Özel Fiyat",
        features: [
          { name: "Temel oyun mekanikleri", included: true },
          { name: "Standart kullanıcı arayüzü", included: true },
          { name: "Basit karakter kontrolleri", included: true },
          { name: "Temel fizik sistemi", included: true },
          { name: "Çoklu oyuncu desteği", included: false },
          { name: "Gelişmiş grafik efektleri", included: false },
          { name: "Yapay zeka sistemleri", included: false }
        ]
      },
      {
        id: "gelismis",
        title: "Gelişmiş Oyun Eklentileri",
        description: "Oyun projeleriniz için kapsamlı eklentiler ve sistemler",
        price: "Özel Fiyat",
        popular: true,
        features: [
          { name: "Gelişmiş oyun mekanikleri", included: true },
          { name: "Özelleştirilmiş kullanıcı arayüzü", included: true },
          { name: "Detaylı karakter kontrolleri", included: true },
          { name: "Gelişmiş fizik sistemi", included: true },
          { name: "Temel çoklu oyuncu desteği", included: true },
          { name: "Orta seviye grafik efektleri", included: true },
          { name: "Temel yapay zeka sistemleri", included: true }
        ]
      },
      {
        id: "premium",
        title: "Premium Oyun Eklentileri",
        description: "Profesyonel oyun projeleri için üst düzey eklentiler",
        price: "Özel Fiyat",
        features: [
          { name: "İleri seviye oyun mekanikleri", included: true },
          { name: "Tamamen özel kullanıcı arayüzü", included: true },
          { name: "Profesyonel karakter kontrol sistemi", included: true },
          { name: "İleri seviye fizik motoru", included: true },
          { name: "Gelişmiş çoklu oyuncu sistemi", included: true },
          { name: "Üst düzey grafik ve efektler", included: true },
          { name: "Gelişmiş yapay zeka ve davranış sistemleri", included: true },
          { name: "Optimizasyon ve performans iyileştirmeleri", included: true }
        ]
      }
    ]
  },
  "api-entegrasyon": {
    title: "API & Entegrasyon Paketleri",
    packages: [
      {
        id: "temel",
        title: "Temel API Entegrasyonu",
        description: "Basit API entegrasyonları için temel paket",
        price: "Özel Fiyat",
        features: [
          { name: "Temel API geliştirme", included: true },
          { name: "Standart dokümantasyon", included: true },
          { name: "Temel güvenlik önlemleri", included: true },
          { name: "Sınırlı endpoint sayısı", included: true },
          { name: "Gelişmiş güvenlik", included: false },
          { name: "Yüksek performans", included: false },
          { name: "Özel entegrasyonlar", included: false }
        ]
      },
      {
        id: "gelismis",
        title: "Gelişmiş API Entegrasyonu",
        description: "Kapsamlı API ve entegrasyon çözümleri",
        price: "Özel Fiyat",
        popular: true,
        features: [
          { name: "Kapsamlı API geliştirme", included: true },
          { name: "Detaylı dokümantasyon", included: true },
          { name: "Gelişmiş güvenlik önlemleri", included: true },
          { name: "Sınırsız endpoint", included: true },
          { name: "Performans optimizasyonu", included: true },
          { name: "Üçüncü parti entegrasyonlar", included: true },
          { name: "Teknik destek", included: true }
        ]
      },
      {
        id: "kurumsal",
        title: "Kurumsal API Çözümleri",
        description: "Büyük işletmeler için özel API ve entegrasyon çözümleri",
        price: "Özel Fiyat",
        features: [
          { name: "Özel API mimarisi", included: true },
          { name: "Kapsamlı dokümantasyon ve eğitim", included: true },
          { name: "Kurumsal düzeyde güvenlik", included: true },
          { name: "Mikroservis mimarisi", included: true },
          { name: "Yüksek performans ve ölçeklenebilirlik", included: true },
          { name: "Özel entegrasyonlar", included: true },
          { name: "7/24 teknik destek", included: true },
          { name: "Sürekli bakım ve geliştirme", included: true }
        ]
      }
    ]
  }
};

export const customizableWebPackage = {
  id: "ozellestirilmis",
  title: "Özelleştirilebilen Web Sitesi",
  description: "İhtiyaçlarınıza göre özelleştirebileceğiniz web sitesi paketi",
  price: "Özel Fiyat",
  options: {
    frontend: [
      { id: "react", name: "React.js", default: true },
      { id: "next", name: "Next.js", default: false },
      { id: "vue", name: "Vue.js", default: false }
    ],
    backend: [
      { id: "node", name: "Node.js/Express.js", default: true },
      { id: "none", name: "Backend Yok", default: false }
    ],
    database: [
      { id: "mongodb", name: "MongoDB", default: true },
      { id: "postgresql", name: "PostgreSQL", default: false },
      { id: "none", name: "Veritabanı Yok", default: false }
    ],
    features: [
      { id: "seo", name: "SEO Optimizasyonu", default: false },
      { id: "cms", name: "İçerik Yönetim Sistemi", default: false },
      { id: "analytics", name: "Analitik Entegrasyonu", default: false },
      { id: "responsive", name: "Mobil Uyumlu Tasarım", default: true },
      { id: "multilingual", name: "Çoklu Dil Desteği", default: false },
      { id: "ecommerce", name: "E-Ticaret Özellikleri", default: false },
      { id: "maintenance", name: "Bakım ve Destek Paketi", default: false }
    ]
  }
};

export const customizableApiPackage = {
  id: "ozellestirilmis-api",
  title: "Özelleştirilebilen API Entegrasyonu",
  description: "İhtiyaçlarınıza göre özelleştirebileceğiniz API ve entegrasyon paketi",
  price: "Özel Fiyat",
  options: {
    apiType: [
      { id: "rest", name: "REST API", default: true },
      { id: "graphql", name: "GraphQL API", default: false },
      { id: "soap", name: "SOAP API", default: false }
    ],
    backend: [
      { id: "node", name: "Node.js/Express.js", default: true },
      { id: "python", name: "Python/Django", default: false },
      { id: "dotnet", name: ".NET Core", default: false }
    ],
    database: [
      { id: "mongodb", name: "MongoDB", default: true },
      { id: "postgresql", name: "PostgreSQL", default: false },
      { id: "mysql", name: "MySQL", default: false }
    ],
    features: [
      { id: "auth", name: "Gelişmiş Kimlik Doğrulama", default: true },
      { id: "docs", name: "API Dokümantasyonu", default: true },
      { id: "testing", name: "Otomatik Test Altyapısı", default: false },
      { id: "monitoring", name: "API İzleme ve Analitik", default: false },
      { id: "versioning", name: "API Versiyonlama", default: false },
      { id: "caching", name: "Önbellek Mekanizması", default: false },
      { id: "thirdparty", name: "Üçüncü Parti Entegrasyonlar", default: false },
      { id: "maintenance", name: "Bakım ve Destek Paketi", default: false }
    ]
  }
};

export const customizableGamePackage = {
  id: "ozellestirilmis-oyun",
  title: "Özelleştirilebilen Oyun Eklentileri",
  description: "İhtiyaçlarınıza göre özelleştirebileceğiniz oyun eklentileri paketi",
  price: "Özel Fiyat",
  options: {
    platform: [
      { id: "unity", name: "Unity", default: true },
      { id: "unreal", name: "Unreal Engine", default: false },
      { id: "godot", name: "Godot Engine", default: false }
    ],
    featureType: [
      { id: "gameplay", name: "Oynanış Mekanikleri", default: true },
      { id: "ui", name: "Kullanıcı Arayüzü", default: false },
      { id: "multiplayer", name: "Çok Oyunculu Özellikler", default: false },
      { id: "monetization", name: "Gelir Modeli Entegrasyonu", default: false }
    ],
    complexity: [
      { id: "basic", name: "Temel Seviye", default: true },
      { id: "intermediate", name: "Orta Seviye", default: false },
      { id: "advanced", name: "İleri Seviye", default: false }
    ],
    features: [
      { id: "analytics", name: "Oyun Analitikleri", default: true },
      { id: "leaderboard", name: "Lider Tablosu", default: false },
      { id: "achievements", name: "Başarı Sistemi", default: false },
      { id: "iap", name: "Uygulama İçi Satın Alma", default: false },
      { id: "ads", name: "Reklam Entegrasyonu", default: false },
      { id: "social", name: "Sosyal Medya Entegrasyonu", default: false },
      { id: "cloud", name: "Bulut Kaydetme", default: false },
      { id: "maintenance", name: "Bakım ve Destek Paketi", default: false }
    ]
  }
};