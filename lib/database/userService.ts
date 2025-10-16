import { getDatabase } from '../mongodb';
import { User, UserResponse, sanitizeUser } from '../models/User';
import { ObjectId } from 'mongodb';
import { hashPassword, verifyPassword } from '../auth';

const USERS_COLLECTION = 'users';

export class UserService {
  static async createUser(userData: { name: string; email: string; password: string }): Promise<UserResponse> {
    const db = await getDatabase();
    const users = db.collection<User>(USERS_COLLECTION);
    
    // Email kontrolü
    const existingUser = await users.findOne({ email: userData.email });
    if (existingUser) {
      throw new Error('Bu email adresi zaten kayıtlı');
    }
    
    // Şifreyi hash'le
    const hashedPassword = await hashPassword(userData.password);
    
    const user: Omit<User, '_id'> = {
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    const result = await users.insertOne(user);
    const createdUser = await users.findOne({ _id: result.insertedId });
    
    if (!createdUser) {
      throw new Error('Kullanıcı oluşturulamadı');
    }
    
    return sanitizeUser(createdUser);
  }
  
  static async loginUser(email: string, password: string): Promise<UserResponse> {
    const db = await getDatabase();
    const users = db.collection<User>(USERS_COLLECTION);
    
    const user = await users.findOne({ email });
    if (!user) {
      throw new Error('Email veya şifre hatalı');
    }
    
    const isPasswordValid = await verifyPassword(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Email veya şifre hatalı');
    }
    
    // Son giriş zamanını güncelle
    await users.updateOne(
      { _id: user._id },
      { $set: { updatedAt: new Date() } }
    );
    
    return sanitizeUser(user);
  }
  
  static async getUserById(userId: string): Promise<UserResponse | null> {
    const db = await getDatabase();
    const users = db.collection<User>(USERS_COLLECTION);
    
    const user = await users.findOne({ _id: new ObjectId(userId) });
    if (!user) {
      return null;
    }
    
    return sanitizeUser(user);
  }
  
  static async updateUser(userId: string, updateData: Partial<Pick<User, 'name' | 'email'>>): Promise<UserResponse> {
    const db = await getDatabase();
    const users = db.collection<User>(USERS_COLLECTION);
    
    // Email güncelleniyorsa, önceden var mı kontrol et
    if (updateData.email) {
      const existingUser = await users.findOne({ 
        email: updateData.email, 
        _id: { $ne: new ObjectId(userId) } 
      });
      if (existingUser) {
        throw new Error('Bu email adresi zaten kullanılıyor');
      }
    }
    
    const result = await users.findOneAndUpdate(
      { _id: new ObjectId(userId) },
      { 
        $set: { 
          ...updateData, 
          updatedAt: new Date() 
        } 
      },
      { returnDocument: 'after' }
    );
    
    if (!result) {
      throw new Error('Kullanıcı bulunamadı veya güncelleme başarısız');
    }
    
    return sanitizeUser(result);
  }
  
  static async deleteUser(userId: string): Promise<boolean> {
    const db = await getDatabase();
    const users = db.collection<User>(USERS_COLLECTION);
    
    const result = await users.deleteOne({ _id: new ObjectId(userId) });
    return result.deletedCount === 1;
  }
  
  static async changePassword(userId: string, currentPassword: string, newPassword: string): Promise<void> {
    const db = await getDatabase();
    const users = db.collection<User>(USERS_COLLECTION);
    
    const user = await users.findOne({ _id: new ObjectId(userId) });
    if (!user) {
      throw new Error('Kullanıcı bulunamadı');
    }
    
    const isCurrentPasswordValid = await verifyPassword(currentPassword, user.password);
    if (!isCurrentPasswordValid) {
      throw new Error('Mevcut şifre hatalı');
    }
    
    const hashedNewPassword = await hashPassword(newPassword);
    
    await users.updateOne(
      { _id: new ObjectId(userId) },
      { 
        $set: { 
          password: hashedNewPassword,
          updatedAt: new Date() 
        } 
      }
    );
  }
}
