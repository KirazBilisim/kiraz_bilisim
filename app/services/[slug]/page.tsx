import { createSlug } from '@/app/utils/slug';

interface ServiceDetailProps {
  params: Promise<{ slug: string }>;
}

const serviceTitles = [
  "Web Geliştirme",
  "Mobil Uygulama",
  "Bulut Çözümleri",
  "Dijital Dönüşüm",
  "Oyun Eklentasyonları",
  "API & Entegrasyon"
];

interface Package {
  name: string;
  price?: string;
  description?: string;
  technologies?: string[];
}

const packages: Record<string, Package[]> = {
  [createSlug("Web Geliştirme")]: [
    { name: "Kişisel Web Sitesi", price: "1000₺", description: "Basit kişisel web sitesi paketi.", technologies: ["HTML", "CSS", "JS"] },
    { name: "Kurumsal Web Sitesi", price: "2500₺", description: "Kurumsal web sitesi paketi.", technologies: ["React", "Next.js", "TailwindCSS"] },
    { name: "Özel Kodlanmış Website", price: "5000₺", description: "Özel yazılım çözümü.", technologies: ["Node.js", "MongoDB", "React"] }
  ],
  [createSlug("Mobil Uygulama")]: [
    { name: "Android Uygulama", price: "3000₺", description: "Android platformu için.", technologies: ["Kotlin", "Firebase"] },
    { name: "iOS Uygulama", price: "3000₺", description: "iOS platformu için.", technologies: ["Swift", "Firebase"] }
  ],
  [createSlug("Bulut Çözümleri")]: [
    { name: "AWS Kurulum", price: "2000₺", description: "AWS bulut altyapı kurulumu.", technologies: ["AWS EC2", "S3", "RDS"] },
    { name: "Azure Kurulum", price: "2000₺", description: "Azure bulut altyapı kurulumu.", technologies: ["Azure VM", "Azure SQL"] }
  ],
  [createSlug("Dijital Dönüşüm")]: [
    { name: "Danışmanlık Paketi 1", price: "1500₺", description: "Süreç analiz ve danışmanlık.", technologies: ["PowerBI", "AI Tools"] },
    { name: "Danışmanlık Paketi 2", price: "2500₺", description: "Tam dijital dönüşüm desteği.", technologies: ["RPA", "Automation Tools"] }
  ],
  [createSlug("Oyun Eklentasyonları")]: [
    { name: "Rust Eklentisi", price: "1000₺", description: "Rust oyun motoru için özel modül.", technologies: ["C#", "Oxide API"] },
    { name: "Minecraft Eklentisi", price: "800₺", description: "Minecraft eklentisi.", technologies: ["Java", "Spigot API"] }
  ],
  [createSlug("API & Entegrasyon")]: [
    { name: "API Bağlantısı", price: "1200₺", description: "REST API entegrasyonu.", technologies: ["REST", "Node.js"] },
    { name: "Özel Entegrasyon", price: "2000₺", description: "Sistemler arası özel entegrasyon.", technologies: ["GraphQL", "Python"] }
  ]
};

export default async function ServiceDetail(props: ServiceDetailProps) {
  const params = await props.params;
  const { slug } = params;
  const servicePackages = slug && slug in packages ? packages[slug] : [];
  const title = serviceTitles.find(t => createSlug(t) === slug) || slug.replace(/-/g, " ");

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-lg text-gray-600">İşinizi dijital çağa taşıyan kapsamlı paketler.</p>
        </div>

        {/* Paket Kartları */}
        {servicePackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicePackages.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  {pkg.price && <p className="text-rose-600 font-bold text-xl mb-2">{pkg.price}</p>}
                  {pkg.description && <p className="text-gray-600">{pkg.description}</p>}
                </div>
                {pkg.technologies && pkg.technologies.length > 0 && (
                  <div className="text-left mt-4">
                    <h4 className="font-semibold mb-1">Kullanılacak Teknolojiler:</h4>
                    <ul className="list-disc list-inside text-gray-700">
                      {pkg.technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">Bu hizmete ait paket bulunamadı.</p>
        )}
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  return serviceTitles.map(title => ({ slug: createSlug(title) }));
}
