import { Target, Eye, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-rose-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Teknoloji ile Değer{' '}
              <span className="bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent">
                Yaratıyoruz
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Kiraz Bilişim, 2025 yılından bu yana müşterilerine yenilikçi ve sürdürülebilir teknoloji çözümleri sunmaktadır. Deneyimli ekibimiz, son teknolojileri kullanarak işletmelerin dijital dönüşüm yolculuğunda en iyi sonuçları elde etmelerini sağlamaktadır.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Kalite, güvenilirlik ve müşteri memnuniyeti odaklı çalışma prensibimizle, her projeyi bir başarı hikayesine dönüştürüyoruz. Sizin başarınız bizim önceliğimizdir.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-rose-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Misyonumuz</h3>
                  <p className="text-sm text-gray-600">İşletmelere teknoloji ile rekabet avantajı sağlamak</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                    <Eye className="h-6 w-6 text-rose-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Vizyonumuz</h3>
                  <p className="text-sm text-gray-600">Türkiye'nin önde gelen teknoloji şirketi olmak</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-700 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kalite</h3>
              <p className="text-sm text-gray-600">En yüksek kalite standartlarında çözümler üretiyoruz</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow mt-8">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-700 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ekip</h3>
              <p className="text-sm text-gray-600">Uzman ve deneyimli kadromuzla yanınızdayız</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-700 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Odak</h3>
              <p className="text-sm text-gray-600">Müşteri memnuniyeti ve sonuç odaklı çalışıyoruz</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow mt-8">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-700 rounded-lg flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">İnovasyon</h3>
              <p className="text-sm text-gray-600">En yeni teknolojileri takip edip uyguluyoruz</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
