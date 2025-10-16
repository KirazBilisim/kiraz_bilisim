"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, Save, Loader2, Eye, EyeOff } from "lucide-react";

export default function ProfilePage() {
  const { user, loading, updateUser } = useAuth();
  const router = useRouter();
  
  const [profileData, setProfileData] = useState({ name: "", email: "" });
  const [passwordData, setPasswordData] = useState({ 
    currentPassword: "", 
    newPassword: "", 
    confirmPassword: "" 
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    } else if (user) {
      setProfileData({ name: user.name, email: user.email });
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
    setMessage("");
    setError("");
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
    setMessage("");
    setError("");
  };

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    setMessage("");
    setError("");

    try {
      await updateUser(profileData);
      setMessage("Profil bilgileri başarıyla güncellendi");
    } catch (error: any) {
      setError(error.message || "Profil güncellenirken bir hata oluştu");
    } finally {
      setIsUpdating(false);
    }
  };

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsChangingPassword(true);
    setMessage("");
    setError("");

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError("Yeni şifreler eşleşmiyor");
      setIsChangingPassword(false);
      return;
    }

    try {
      const response = await fetch('/api/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword
        }),
        credentials: 'include'
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Şifre değiştirme başarısız");
      }

      setMessage("Şifre başarıyla değiştirildi");
      setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
    } catch (error: any) {
      setError(error.message || "Şifre değiştirirken bir hata oluştu");
    } finally {
      setIsChangingPassword(false);
    }
  };

  const togglePasswordVisibility = (field: 'current' | 'new' | 'confirm') => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Profil Ayarları</h1>
          
          {message && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md text-green-700">
              {message}
            </div>
          )}
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-700">
              {error}
            </div>
          )}

          {/* Profil Bilgileri */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <User className="mr-2 h-5 w-5" />
              Profil Bilgileri
            </h2>
            
            <form onSubmit={handleProfileUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleProfileChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-600"
                  required
                  disabled={isUpdating}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleProfileChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-600"
                  required
                  disabled={isUpdating}
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800"
                disabled={isUpdating}
              >
                {isUpdating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Güncelleniyor...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Profili Güncelle
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Şifre Değiştirme */}
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Lock className="mr-2 h-5 w-5" />
              Şifre Değiştir
            </h2>
            
            <form onSubmit={handlePasswordUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mevcut Şifre
                </label>
                <div className="relative">
                  <input
                    type={showPasswords.current ? "text" : "password"}
                    name="currentPassword"
                    value={passwordData.currentPassword}
                    onChange={handlePasswordChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-600 pr-10"
                    required
                    disabled={isChangingPassword}
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility('current')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    disabled={isChangingPassword}
                  >
                    {showPasswords.current ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Yeni Şifre
                </label>
                <div className="relative">
                  <input
                    type={showPasswords.new ? "text" : "password"}
                    name="newPassword"
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-600 pr-10"
                    placeholder="Min. 6 karakter, büyük harf, küçük harf, rakam"
                    required
                    disabled={isChangingPassword}
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility('new')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    disabled={isChangingPassword}
                  >
                    {showPasswords.new ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Yeni Şifre (Tekrar)
                </label>
                <div className="relative">
                  <input
                    type={showPasswords.confirm ? "text" : "password"}
                    name="confirmPassword"
                    value={passwordData.confirmPassword}
                    onChange={handlePasswordChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-600 pr-10"
                    placeholder="Yeni şifreyi tekrar girin"
                    required
                    disabled={isChangingPassword}
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility('confirm')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    disabled={isChangingPassword}
                  >
                    {showPasswords.confirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800"
                disabled={isChangingPassword}
              >
                {isChangingPassword ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Değiştiriliyor...
                  </>
                ) : (
                  <>
                    <Lock className="mr-2 h-4 w-4" />
                    Şifreyi Değiştir
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
