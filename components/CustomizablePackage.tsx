"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface CustomizableOption {
  id: string;
  name: string;
  default: boolean;
}

interface CustomizablePackageData {
  id: string;
  title: string;
  description: string;
  price?: string;
  options: {
    frontend?: CustomizableOption[];
    backend?: CustomizableOption[];
    database?: CustomizableOption[];
    platform?: CustomizableOption[];
    featureType?: CustomizableOption[];
    complexity?: CustomizableOption[];
    features?: CustomizableOption[];
  };
}

interface CustomizablePackageProps {
  packageData: CustomizablePackageData;
}

export function CustomizablePackage({ packageData }: CustomizablePackageProps) {
  // Güvenli erişim için kontroller eklendi
  const [selectedFrontend, setSelectedFrontend] = useState(
    packageData.options.frontend?.find(opt => opt.default)?.id || packageData.options.frontend?.[0]?.id || ""
  );
  
  const [selectedBackend, setSelectedBackend] = useState(
    packageData.options.backend?.find(opt => opt.default)?.id || packageData.options.backend?.[0]?.id || ""
  );
  
  const [selectedDatabase, setSelectedDatabase] = useState(
    packageData.options.database?.find(opt => opt.default)?.id || packageData.options.database?.[0]?.id || ""
  );
  
  const [selectedPlatform, setSelectedPlatform] = useState(
    packageData.options.platform?.find(opt => opt.default)?.id || packageData.options.platform?.[0]?.id || ""
  );
  
  const [selectedFeatureType, setSelectedFeatureType] = useState(
    packageData.options.featureType?.find(opt => opt.default)?.id || packageData.options.featureType?.[0]?.id || ""
  );
  
  const [selectedComplexity, setSelectedComplexity] = useState(
    packageData.options.complexity?.find(opt => opt.default)?.id || packageData.options.complexity?.[0]?.id || ""
  );
  
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(
    packageData.options.features?.filter(opt => opt.default).map(opt => opt.id) || []
  );

  const handleFeatureChange = (featureId: string, checked: boolean) => {
    if (checked) {
      setSelectedFeatures([...selectedFeatures, featureId]);
    } else {
      setSelectedFeatures(selectedFeatures.filter(id => id !== featureId));
    }
  };

  return (
    <Card className="border-2 border-rose-300 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">{packageData.title}</CardTitle>
        <CardDescription className="text-base">{packageData.description}</CardDescription>
        
        {packageData.price && (
          <div className="mt-4">
            <span className="text-2xl font-bold text-gray-900">{packageData.price}</span>
          </div>
        )}
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Frontend Seçimi */}
        {packageData.options.frontend && (
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Frontend Teknolojisi</h3>
            <RadioGroup value={selectedFrontend} onValueChange={setSelectedFrontend} className="space-y-2">
              {packageData.options.frontend.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.id} id={`frontend-${option.id}`} />
                  <Label htmlFor={`frontend-${option.id}`}>{option.name}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )}
        
        {/* Backend Seçimi */}
        {packageData.options.backend && (
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Backend Teknolojisi</h3>
            <RadioGroup value={selectedBackend} onValueChange={setSelectedBackend} className="space-y-2">
              {packageData.options.backend.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.id} id={`backend-${option.id}`} />
                  <Label htmlFor={`backend-${option.id}`}>{option.name}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )}
        
        {/* Veritabanı Seçimi */}
        {packageData.options.database && (
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Veritabanı</h3>
            <RadioGroup value={selectedDatabase} onValueChange={setSelectedDatabase} className="space-y-2">
              {packageData.options.database.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.id} id={`database-${option.id}`} />
                  <Label htmlFor={`database-${option.id}`}>{option.name}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )}
        
        {/* Özellikler */}
        {packageData.options.features && (
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Ek Özellikler</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {packageData.options.features.map((feature) => (
                <div key={feature.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`feature-${feature.id}`} 
                    checked={selectedFeatures.includes(feature.id)}
                    onCheckedChange={(checked) => handleFeatureChange(feature.id, checked === true)}
                  />
                  <Label htmlFor={`feature-${feature.id}`}>{feature.name}</Label>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Platform Seçimi */}
        {packageData.options.platform && (
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Platform</h3>
            <RadioGroup value={selectedPlatform} onValueChange={setSelectedPlatform} className="space-y-2">
              {packageData.options.platform.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.id} id={`platform-${option.id}`} />
                  <Label htmlFor={`platform-${option.id}`}>{option.name}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )}
        
        {/* Özellik Tipi Seçimi */}
        {packageData.options.featureType && (
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Özellik Tipi</h3>
            <RadioGroup value={selectedFeatureType} onValueChange={setSelectedFeatureType} className="space-y-2">
              {packageData.options.featureType.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.id} id={`featureType-${option.id}`} />
                  <Label htmlFor={`featureType-${option.id}`}>{option.name}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )}
        
        {/* Karmaşıklık Seçimi */}
        {packageData.options.complexity && (
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Karmaşıklık Seviyesi</h3>
            <RadioGroup value={selectedComplexity} onValueChange={setSelectedComplexity} className="space-y-2">
              {packageData.options.complexity.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.id} id={`complexity-${option.id}`} />
                  <Label htmlFor={`complexity-${option.id}`}>{option.name}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )}
        
        {/* Seçilen Özellikler Özeti */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Paket Özeti</h3>
          <ul className="space-y-1 text-sm">
            {packageData.options.frontend && (
              <li><span className="font-medium">Frontend:</span> {packageData.options.frontend?.find(opt => opt.id === selectedFrontend)?.name || 'Yok'}</li>
            )}
            {packageData.options.backend && (
              <li><span className="font-medium">Backend:</span> {packageData.options.backend?.find(opt => opt.id === selectedBackend)?.name || 'Yok'}</li>
            )}
            {packageData.options.database && (
              <li><span className="font-medium">Veritabanı:</span> {packageData.options.database?.find(opt => opt.id === selectedDatabase)?.name || 'Yok'}</li>
            )}
            {packageData.options.platform && (
              <li><span className="font-medium">Platform:</span> {packageData.options.platform?.find(opt => opt.id === selectedPlatform)?.name || 'Yok'}</li>
            )}
            {packageData.options.featureType && (
              <li><span className="font-medium">Özellik Tipi:</span> {packageData.options.featureType?.find(opt => opt.id === selectedFeatureType)?.name || 'Yok'}</li>
            )}
            {packageData.options.complexity && (
              <li><span className="font-medium">Karmaşıklık:</span> {packageData.options.complexity?.find(opt => opt.id === selectedComplexity)?.name || 'Yok'}</li>
            )}
            {packageData.options.features && (
              <li>
                <span className="font-medium">Ek Özellikler:</span>{' '}
                {selectedFeatures.length > 0 && packageData.options.features
                ? selectedFeatures.map(id => packageData.options.features?.find(f => f.id === id)?.name).join(', ')
                : 'Seçilmedi'}
              </li>
            )}
          </ul>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white">
          Özel Teklifinizi Alın
        </Button>
      </CardFooter>
    </Card>
  );
}