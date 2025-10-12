import { Code, Smartphone, Cloud, LineChart, Zap, Gamepad } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { createSlug } from '@/app/utils/slug';

const services = [
  {
    icon: Code,
    title: 'Web Geliştirme',
    description: 'Modern teknolojilerle hızlı, güvenli ve ölçeklenebilir web uygulamaları geliştiriyoruz.',
    features: ['Frontend ve Backend Desteği', 'E-Ticaret Sistemleri', 'Kurumsal Web Siteleri', 'CMS Entegrasyonu', 'Performans Optimizasyonu', 'SEO Uyumlu Tasarım', 'Responsive(Mobil ve PC Uyumlu) Tasarım', 'Bakım ve Destek', 'Özel Yazılım Çözümleri']
  },
  {
    icon: Smartphone,
    title: 'Mobil Uygulama',
    description: 'iOS ve Android platformları için kullanıcı dostu mobil uygulamalar tasarlıyoruz.',
    features: ['Cross-Platform', 'Native Uygulama', 'Mobil Tasarım', 'App Store & Play Store Yayınlama', 'Push Bildirimleri', 'Performans Optimizasyonu', 'Kullanıcı Deneyimi (UX) Tasarımı', 'Bakım ve Güncellemeler']
  },
  {
    icon: Cloud,
    title: 'Bulut Çözümleri',
    description: 'Altyapınızı buluta taşıyarak güvenli, esnek ve maliyet etkin sistemler kuruyoruz.',
    features: ['Cloud Migration', 'DevOps', 'Sistem Yönetimi', 'Yedekleme & Felaket Kurtarma', 'Performans İzleme', 'Güvenlik ve Uyumluluk', 'Otomasyon ve CI/CD', 'Sunucu Yönetimi', 'Veri Tabanı Yönetimi', 'Ağ Yapılandırması']
  },
  {
    icon: LineChart,
    title: 'Dijital Dönüşüm',
    description: 'İş süreçlerinizi dijitalleştirerek verimliliğinizi artırıyor ve rekabet gücünüzü güçlendiriyoruz.',
    features: ['Süreç Analizi', 'Otomasyon', 'Danışmanlık', 'Eğitim & Destek', 'Veri Analitiği', 'Yapay Zeka Entegrasyonu', 'İş Süreçleri Optimizasyonu', 'Dijital Strateji Geliştirme']
  },
  {
    icon: Gamepad,
    title: 'Oyun Eklentasyonları',
    description: 'Oyunlarınız için özel eklentiler ve modüller geliştiriyoruz.',
    features: ['Oyun Motoru Entegrasyonu', 'Özel Modüller', 'Çoklu Platform Desteği', 'Performans Optimizasyonu', 'Kullanıcı Deneyimi (UX) Tasarımı', 'Bakım ve Güncellemeler']
  },
  {
    icon: Zap,
    title: 'API & Entegrasyon',
    description: 'Sistemlerinizi birbirine bağlayarak sorunsuz veri akışı ve otomasyon sağlıyoruz.',
    features: ['REST API', 'Mikroservis', 'Sistem Entegrasyonu', 'Veri Senkronizasyonu', 'Gerçek Zamanlı Veri İşleme', 'API Güvenliği', 'Dokümantasyon ve Eğitim', 'Bakım ve Destek']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Profesyonel <span className="bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent">Hizmetlerimiz</span>
          </h2>
          <p className="text-lg text-gray-600">
            İşinizi dijital çağa taşıyan kapsamlı teknoloji çözümleri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const slug = createSlug(service.title);

            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-rose-200 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-rose-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-rose-600 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4">
                    <Link href={`/services/${slug}`}>
                      <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-400">
                        Paketleri İncele
                      </button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
