import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User } from './models/User';

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET çevre değişkeni tanımlanmamış');
}

const JWT_SECRET = process.env.JWT_SECRET;

// Şifre hash'leme
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
}

// Şifre kontrolü
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword);
}

// JWT token oluşturma
export function createToken(userId: string): string {
  return jwt.sign(
    { userId },
    JWT_SECRET,
    { expiresIn: '7d' } // 7 gün geçerli
  );
}

// JWT token doğrulama
export function verifyToken(token: string): { userId: string } | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    return decoded;
  } catch (error) {
    return null;
  }
}

// Password güçlülük kontrolü
export function validatePassword(password: string): { isValid: boolean; message?: string } {
  if (password.length < 6) {
    return { isValid: false, message: 'Şifre en az 6 karakter olmalıdır' };
  }
  
  if (!/(?=.*[a-z])/.test(password)) {
    return { isValid: false, message: 'Şifre en az bir küçük harf içermelidir' };
  }
  
  if (!/(?=.*[A-Z])/.test(password)) {
    return { isValid: false, message: 'Şifre en az bir büyük harf içermelidir' };
  }
  
  if (!/(?=.*\d)/.test(password)) {
    return { isValid: false, message: 'Şifre en az bir rakam içermelidir' };
  }
  
  return { isValid: true };
}

// Email format kontrolü
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
