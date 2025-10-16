# Kiraz Bilişim - Full Stack Web Application

Bu proje Next.js, MongoDB ve Express.js kullanan tam özellikli bir web uygulamasıdır. Kullanıcı kimlik doğrulama, profil yönetimi ve güvenli oturum yönetimi özellikleri bulunmaktadır.

## 🚀 Özellikler

- **Modern Frontend**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **Güvenli Backend**: MongoDB, JWT tabanlı kimlik doğrulama, bcrypt şifreleme
- **Kullanıcı Yönetimi**: Kayıt olma, giriş yapma, profil yönetimi, şifre değiştirme
- **Responsive Design**: Mobil ve masaüstü uyumlu arayüz
- **Professional UI**: Radix UI komponenları ve modern tasarım

## 📋 Gereksinimler

- Node.js 18+ 
- MongoDB (yerel kurulum veya MongoDB Atlas)
- npm veya yarn

## ⚙️ Kurulum

### 1. Proje Dosyalarını İndirin ve Bağımlılıkları Yükleyin

```bash
cd kirazbilişim
npm install
```

### 2. MongoDB Kurulumu

#### Seçenek A: Yerel MongoDB Kurulumu
1. [MongoDB Community Server](https://www.mongodb.com/try/download/community) indirin ve kurun
2. MongoDB servisini başlatın:
   ```bash
   # Windows
   net start MongoDB
   
   # macOS (Homebrew ile kurulmuşsa)
   brew services start mongodb-community
   
   # Linux
   sudo systemctl start mongod
   ```

#### Seçenek B: MongoDB Atlas (Cloud)
1. [MongoDB Atlas](https://cloud.mongodb.com/) hesabı oluşturun
2. Yeni bir cluster oluşturun
3. Database Access bölümünden kullanıcı oluşturun
4. Network Access bölümünden IP adresinizi ekleyin
5. Connect butonuna tıklayarak connection string'i alın

### 3. Çevre Değişkenlerini Ayarlayın

`.env.local` dosyasını düzenleyin:

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/kiraz-bilisim
# MongoDB Atlas kullanıyorsanız:
# MONGODB_URI=mongodb+srv://kullanici:sifre@cluster.mongodb.net/kiraz-bilisim

# JWT Secret (güvenli bir anahtar oluşturun)
JWT_SECRET=super-gizli-jwt-anahtari-buraya-yazin

# Environment
NODE_ENV=development
```

### 4. Uygulamayı Çalıştırın

```bash
# Development modunda çalıştır
npm run dev
```

Uygulama http://localhost:3000 adresinde çalışacaktır.

## 🎯 Kullanım

### Kullanıcı İşlemleri

1. **Kayıt Olma**: `/register` sayfasından yeni hesap oluşturabilirsiniz
   - Ad soyad, email ve güçlü şifre gereklidir
   - Şifre en az 6 karakter, büyük harf, küçük harf ve rakam içermelidir

2. **Giriş Yapma**: `/login` sayfasından hesabınıza giriş yapabilirsiniz
   - Email ve şifre ile giriş yapın
   - Başarılı girişten sonra ana sayfaya yönlendirilirsiniz

3. **Profil Yönetimi**: `/profile` sayfasından:
   - Ad soyad ve email bilgilerinizi güncelleyebilirsiniz
   - Şifrenizi değiştirebilirsiniz

4. **Çıkış Yapma**: Header'daki kullanıcı menüsünden çıkış yapabilirsiniz

### Güvenlik Özellikleri

- **Şifre Güvenliği**: bcrypt ile 12 round salt kullanılarak hashlenmiştir
- **JWT Tokens**: HTTP-only cookies ile güvenli session yönetimi
- **Input Validation**: Tüm kullanıcı girişleri doğrulanır
- **CORS Protection**: Sadece belirlenen domain'lerden isteklere izin verilir

## 🏗️ Proje Yapısı

```
kirazbilişim/
├── app/                        # Next.js App Router
│   ├── api/                   # API Endpoints
│   │   ├── login/            # Giriş API'si
│   │   ├── register/         # Kayıt API'si
│   │   ├── logout/           # Çıkış API'si
│   │   ├── me/               # Kullanıcı profil API'si
│   │   └── change-password/  # Şifre değiştirme API'si
│   ├── login/                # Giriş sayfası
│   ├── register/             # Kayıt sayfası
│   ├── profile/              # Profil sayfası
│   ├── layout.tsx            # Ana layout
│   └── page.tsx              # Ana sayfa
├── components/               # React komponentleri
│   ├── Header.tsx           # Navigation header
│   └── ui/                  # UI komponentleri
├── contexts/                # React contexts
│   └── AuthContext.tsx      # Kimlik doğrulama context
├── lib/                     # Utility fonksiyonları
│   ├── mongodb.ts          # MongoDB bağlantısı
│   ├── auth.ts             # Kimlik doğrulama utilities
│   ├── models/             # Veri modelleri
│   └── database/           # Database servisleri
└── .env.local              # Çevre değişkenleri
```

## 🔧 API Endpoints

- `POST /api/register` - Yeni kullanıcı kaydı
- `POST /api/login` - Kullanıcı girişi
- `POST /api/logout` - Kullanıcı çıkışı
- `GET /api/me` - Kullanıcı bilgilerini getir
- `PUT /api/me` - Kullanıcı bilgilerini güncelle
- `POST /api/change-password` - Şifre değiştir

## 🚀 Production Deployment

### Environment Variables
Production için aşağıdaki çevre değişkenlerini ayarlayın:

```env
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/kiraz-bilisim
JWT_SECRET=production-da-cok-gizli-bir-anahtar
NODE_ENV=production
```

### Build ve Start

```bash
# Production build
npm run build

# Production start
npm start
```

## 🛠️ Geliştirme

### Yeni Özellik Ekleme

1. Backend: `app/api/` klasörüne yeni route ekleyin
2. Frontend: İlgili sayfaları ve komponentleri oluşturun
3. Database: `lib/database/` klasörüne servis ekleyin
4. Types: `lib/models/` klasörüne model tanımları ekleyin

### Testing

```bash
# Type checking
npm run typecheck

# Linting
npm run lint
```

## 📝 Lisans

Bu proje Kiraz Bilişim tarafından geliştirilmiştir.

## 🤝 Katkıda Bulunma

1. Projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📞 İletişim

Sorularınız için [iletişim sayfamızı](/#contact) ziyaret edebilirsiniz.
