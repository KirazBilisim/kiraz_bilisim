import React from 'react';
import { Check, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface PackageFeature {
  name: string;
  included: boolean;
}

export interface PackageProps {
  title: string;
  description: string;
  price?: string;
  features: PackageFeature[];
  popular?: boolean;
  ctaText?: string;
  onCTAClick?: () => void;
}

export function PackageCard({
  title,
  description,
  price,
  features,
  popular = false,
  ctaText = "Paketi Seç",
  onCTAClick
}: PackageProps) {
  return (
    <Card className={`flex flex-col h-full transition-all duration-300 ${
      popular 
        ? 'border-rose-500 shadow-lg shadow-rose-100 scale-105 z-10' 
        : 'border-gray-200 hover:border-rose-300 hover:shadow-md'
    }`}>
      {popular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <Badge className="bg-rose-500 hover:bg-rose-600 text-white px-3 py-1">En Popüler</Badge>
        </div>
      )}
      
      <CardHeader className={`pb-4 ${popular ? 'pt-8' : 'pt-6'}`}>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-sm mt-2">{description}</CardDescription>
        
        {price && (
          <div className="mt-4">
            <span className="text-2xl font-bold text-gray-900">{price}</span>
            {price !== "Özel Fiyat" && <span className="text-gray-500 ml-1">+ KDV</span>}
          </div>
        )}
      </CardHeader>
      
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
              ) : (
                <X className="h-5 w-5 text-gray-300 mr-2 shrink-0" />
              )}
              <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="pt-4">
        <Button 
          onClick={onCTAClick} 
          className={`w-full ${
            popular 
              ? 'bg-rose-500 hover:bg-rose-600 text-white' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
          }`}
        >
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
}