import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kiraz Bilişim',
  description: 'Kiraz Bilişim, yazılım geliştirme, dijital dönüşüm ve teknoloji danışmanlığı alanlarında profesyonel çözümler sunan lider bir teknoloji şirketidir.',
  keywords: 'Kiraz Bilişim, yazılım geliştirme, dijital dönüşüm, web tasarım, mobil uygulama, teknoloji danışmanlığı',
  authors: [{ name: 'Kiraz Bilişim' }],
  openGraph: {
    title: 'Kiraz Bilişim',
    description: 'Yazılım geliştirme ve dijital dönüşüm hizmetleri',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Navbar />          {/* Navbar tüm sayfalarda gözükecek */}
        <main>{children}</main> {/* Dinamik sayfalar burada render edilecek */}
        <Footer />          {/* Footer tüm sayfalarda gözükecek */}
      </body>
    </html>
  );
}
