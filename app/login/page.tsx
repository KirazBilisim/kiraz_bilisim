"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2 } from "lucide-react";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const { login, user } = useAuth();
  const router = useRouter();

  // Eğer kullanıcı zaten giriş yapmışsa ana sayfaya yönlendir
  if (user) {
    router.push('/');
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Hata mesajını temizle
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await login(formData.email, formData.password);
      router.push('/'); // Ana sayfaya yönlendir
    } catch (error: any) {
      setError(error.message || "Giriş sırasında bir hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Giriş Yap</h1>
        
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-600"
              required
              disabled={loading}
            />
          </div>
          
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Şifre"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-600 pr-10"
              required
              disabled={loading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              disabled={loading}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Giriş Yapılıyor...
              </>
            ) : (
              "Giriş Yap"
            )}
          </Button>
        </form>
        
        <p className="mt-4 text-center text-gray-600">
          Hesabın yok mu?{" "}
          <Link href="/register" className="text-rose-600 font-medium hover:underline">
            Kayıt Ol
          </Link>
        </p>
      </div>
    </div>
  );
}
