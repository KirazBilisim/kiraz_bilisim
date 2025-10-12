import { Search, Lightbulb, Code2, Rocket, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Analiz & Keşif',
    description: 'İhtiyaçlarınızı detaylı bir şekilde analiz ediyor, en uygun çözümleri belirliyoruz.'
  },
  {
    icon: Lightbulb,
    title: 'Strateji & Planlama',
    description: 'Projeniz için kapsamlı bir yol haritası oluşturuyor, hedefleri net bir şekilde belirliyoruz.'
  },
  {
    icon: Code2,
    title: 'Geliştirme',
    description: 'En güncel teknolojiler ile kodlama yapıyor, sürekli testler gerçekleştiriyoruz.'
  },
  {
    icon: CheckCircle2,
    title: 'Test & Optimizasyon',
    description: 'Detaylı testler ile kaliteyi garanti ediyor, performansı optimize ediyoruz.'
  },
  {
    icon: Rocket,
    title: 'Yayınlama & Destek',
    description: 'Projenizi başarıyla hayata geçiriyor, sürekli destek ve güncelleme sağlıyoruz.'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Çalışma <span className="bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent">Sürecimiz</span>
          </h2>
          <p className="text-lg text-gray-600">
            Projelerinizi başarıya taşıyan sistematik ve şeffaf çalışma metodolojimiz.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="flex items-start mb-12 group">
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute top-0 left-8 text-6xl font-bold text-rose-100 -z-10 group-hover:text-rose-200 transition-colors">
                      {index + 1}
                    </div>
                  </div>

                  <div className="ml-8 flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-12 bg-gradient-to-b from-rose-300 to-rose-100" />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-rose-50 to-orange-50 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Şeffaflık ve İletişim Önceliğimiz
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sürecin her aşamasında sizinle iletişim halindeyiz. Projenizin ilerleyişini düzenli raporlarla takip ediyor, geri bildirimlerinizi anında değerlendiriyoruz.
          </p>
        </div>
      </div>
    </section>
  );
}
