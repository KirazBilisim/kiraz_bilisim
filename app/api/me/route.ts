import { NextResponse } from "next/server";
import { UserService } from "@/lib/database/userService";
import { verifyToken } from "@/lib/auth";
import { cookies } from "next/headers";

export async function GET() {
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
    
    const user = await UserService.getUserById(decoded.userId);
    if (!user) {
      return NextResponse.json(
        { message: "Kullanıcı bulunamadı" },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
    
  } catch (error: any) {
    console.error("Get user error:", error);
    return NextResponse.json(
      { message: "Sunucu hatası" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
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
    
    const { name, email } = await req.json();
    
    // Validation
    if (name && name.trim().length < 2) {
      return NextResponse.json(
        { message: "Ad soyad en az 2 karakter olmalıdır" },
        { status: 400 }
      );
    }
    
    const updateData: any = {};
    if (name) updateData.name = name.trim();
    if (email) updateData.email = email.toLowerCase().trim();
    
    const updatedUser = await UserService.updateUser(decoded.userId, updateData);
    
    return NextResponse.json({
      message: "Profil güncellendi",
      user: {
        id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email
      }
    });
    
  } catch (error: any) {
    console.error("Update user error:", error);
    
    if (error.message === "Bu email adresi zaten kullanılıyor") {
      return NextResponse.json(
        { message: "Bu email adresi zaten kullanılıyor" },
        { status: 409 }
      );
    }
    
    return NextResponse.json(
      { message: "Sunucu hatası" },
      { status: 500 }
    );
  }
}
