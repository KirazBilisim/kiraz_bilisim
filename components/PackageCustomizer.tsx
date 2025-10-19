"use client";

import { useState } from "react";
import { X, Plus, Minus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

interface CustomizationOption {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'technology' | 'feature' | 'service';
  required?: boolean;
}

const customizationOptions: CustomizationOption[] = [
  // Teknoloji Seçenekleri
  { id: 'react', name: 'React', description: 'Modern React framework', price: 0, category: 'technology', required: true },
  { id: 'nextjs', name: 'Next.js', description: 'Full-stack React framework', price: 500, category: 'technology' },
  { id: 'vuejs', name: 'Vue.js', description: 'Progressive framework', price: 300, category: 'technology' },
  { id: 'nodejs', name: 'Node.js Backend', description: 'JavaScript backend', price: 800, category: 'technology' },
  { id: 'expressjs', name: 'Express.js', description: 'Node.js framework', price: 200, category: 'technology' },
  { id: 'mongodb', name: 'MongoDB', description: 'NoSQL veritabanı', price: 400, category: 'technology' },
  { id: 'postgresql', name: 'PostgreSQL', description: 'İlişkisel veritabanı', price: 500, category: 'technology' },
  
  // Özellik Seçenekleri
  { id: 'seo', name: 'SEO Optimizasyonu', description: 'Arama motoru optimizasyonu', price: 1000, category: 'feature' },
  { id: 'admin-panel', name: 'Yönetim Paneli', description: 'İçerik yönetim sistemi', price: 1500, category: 'feature' },
  { id: 'ecommerce', name: 'E-Ticaret Modülü', description: 'Online satış sistemi', price: 2500, category: 'feature' },
  { id: 'blog', name: 'Blog Sistemi', description: 'İçerik yönetimi', price: 800, category: 'feature' },
  { id: 'multilang', name: 'Çoklu Dil Desteği', description: 'Birden fazla dil seçeneği', price: 1200, category: 'feature' },
  { id: 'payment', name: 'Ödeme Entegrasyonu', description: 'Online ödeme sistemleri', price: 1000, category: 'feature' },
  { id: 'api', name: 'REST API', description: 'Harici entegrasyonlar için API', price: 1500, category: 'feature' },
  
  // Servis Seçenekleri
  { id: 'hosting', name: '1 Yıl Hosting', description: 'Profesyonel hosting hizmeti', price: 800, category: 'service' },
  { id: 'domain', name: '1 Yıl Domain', description: '.com domain kaydı', price: 200, category: 'service' },
  { id: 'ssl', name: 'SSL Sertifikası', description: 'Güvenlik sertifikası', price: 300, category: 'service' },
  { id: 'maintenance', name: '6 Ay Bakım', description: 'Teknik destek ve güncellemeler', price: 1500, category: 'service' },
  { id: 'training', name: 'Kullanım Eğitimi', description: '2 saatlik online eğitim', price: 500, category: 'service' }
];

interface PackageCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PackageCustomizer({ isOpen, onClose }: PackageCustomizerProps) {
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set(['react']));
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  if (!isOpen) return null;

  const handleOptionToggle = (optionId: string, required?: boolean) => {
    if (required) return; // Zorunlu seçenekleri değiştirmeye izin verme
    
    const newSelected = new Set(selectedOptions);
    if (newSelected.has(optionId)) {
      newSelected.delete(optionId);
    } else {
      newSelected.add(optionId);
    }
    setSelectedOptions(newSelected);
  };

  const calculateTotal = () => {
    let total = 2000; // Base price
    selectedOptions.forEach(optionId => {
      const option = customizationOptions.find(opt => opt.id === optionId);
      if (option) {
        const quantity = quantities[optionId] || 1;
        total += option.price * quantity;
      }
    });
    return total;
  };

  const getOptionsByCategory = (category: string) => {
    return customizationOptions.filter(opt => opt.category === category);
  };

  const CategorySection = ({ category, title }: { category: string; title: string }) => (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">{title}</h3>
      <div className="space-y-3">
        {getOptionsByCategory(category).map((option) => {
          const isSelected = selectedOptions.has(option.id);
          const quantity = quantities[option.id] || 1;
          
          return (
            <Card key={option.id} className={`transition-all ${
              isSelected ? 'ring-2 ring-rose-500 bg-rose-50' : 'hover:shadow-md'
            }`}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      checked={isSelected}
                      onCheckedChange={() => handleOptionToggle(option.id, option.required)}
                      disabled={option.required}
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium text-gray-900">{option.name}</h4>
                        {option.required && (
                          <Badge variant="secondary" className="text-xs">Zorunlu</Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{option.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    {isSelected && category === 'service' && (
                      <div className="flex items-center space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setQuantities(prev => ({
                            ...prev,
                            [option.id]: Math.max(1, (prev[option.id] || 1) - 1)
                          }))}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center">{quantity}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setQuantities(prev => ({
                            ...prev,
                            [option.id]: (prev[option.id] || 1) + 1
                          }))}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    )}
                    <div className="text-right">
                      <div className="font-medium text-gray-900">
                        {option.price === 0 ? 'Ücretsiz' : `${option.price * quantity}₺`}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Paket Özelleştirici</h2>
            <p className="text-gray-600">İhtiyaçlarınıza göre paketinizi oluşturun</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex">
          {/* Options */}
          <div className="flex-1 p-6 max-h-[70vh] overflow-y-auto">
            <CategorySection category="technology" title="🚀 Teknoloji Seçenekleri" />
            <CategorySection category="feature" title="⚡ Özellik Seçenekleri" />
            <CategorySection category="service" title="🛠️ Servis Seçenekleri" />
          </div>

          {/* Summary */}
          <div className="w-80 bg-gray-50 p-6 border-l border-gray-200">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Paket Özeti</h3>
            
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span>Temel Paket</span>
                <span>2.000₺</span>
              </div>
              
              {Array.from(selectedOptions).map(optionId => {
                const option = customizationOptions.find(opt => opt.id === optionId);
                if (!option || option.price === 0) return null;
                
                const quantity = quantities[optionId] || 1;
                return (
                  <div key={optionId} className="flex justify-between text-sm">
                    <span>{option.name} {quantity > 1 && `(${quantity}x)`}</span>
                    <span>{option.price * quantity}₺</span>
                  </div>
                );
              })}
              
              <div className="border-t border-gray-300 pt-2 mt-4">
                <div className="flex justify-between font-semibold">
                  <span>Toplam</span>
                  <span className="text-rose-600">{calculateTotal().toLocaleString()}₺</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white">
                <Check className="h-4 w-4 mr-2" />
                Paketi Onayla
              </Button>
              <Button variant="outline" className="w-full">
                Teklif Al
              </Button>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">💡 Uzman Önerisi</h4>
              <p className="text-sm text-blue-700">
                Kurumsal web sitesi için SEO, yönetim paneli ve SSL sertifikası eklemenizi öneriyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}