import { NextResponse } from "next/server";
import { UserService } from "@/lib/database/userService";
import { verifyToken, validatePassword } from "@/lib/auth";
import { cookies } from "next/headers";
export const dynamic = "force-dynamic"
export async function POST(req: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth-token")?.value;
    
    if (!token) {
      return NextResponse.json(
        { message: "Yetkilendirme gerekli" },
        { status: 401 }
      );
    }
    
    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json(
        { message: "Geçersiz token" },
        { status: 401 }
      );
    }
    
    const { currentPassword, newPassword } = await req.json();
    
    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { message: "Mevcut şifre ve yeni şifre gereklidir" },
        { status: 400 }
      );
    }
    
    // Yeni şifre kontrolü
    const passwordValidation = validatePassword(newPassword);
    if (!passwordValidation.isValid) {
      return NextResponse.json(
        { message: passwordValidation.message },
        { status: 400 }
      );
    }
    
    await UserService.changePassword(decoded.userId, currentPassword, newPassword);
    
    return NextResponse.json({
      message: "Şifre başarıyla güncellendi"
    });
    
  } catch (error: any) {
    console.error("Change password error:", error);
    
    if (error.message === "Mevcut şifre hatalı") {
      return NextResponse.json(
        { message: "Mevcut şifre hatalı" },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { message: "Sunucu hatası" },
      { status: 500 }
    );
  }
}
