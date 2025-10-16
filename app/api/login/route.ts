import { NextResponse } from "next/server";
import { UserService } from "@/lib/database/userService";
import { createToken, validateEmail } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Validation
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email ve şifre gereklidir" },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { message: "Geçersiz email formatı" },
        { status: 400 }
      );
    }

    // Kullanıcı girişi
    const user = await UserService.loginUser(email.toLowerCase().trim(), password);
    
    // JWT token oluştur
    const token = createToken(user._id);

    // Response oluştur
    const response = NextResponse.json({
      message: "Giriş başarılı",
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

    // HTTP-only cookie olarak token'ı set et
    response.cookies.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 7 gün
      path: "/"
    });

    return response;

  } catch (error: any) {
    console.error("Login error:", error);
    
    if (error.message === "Email veya şifre hatalı") {
      return NextResponse.json(
        { message: "Email veya şifre hatalı" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { message: "Sunucu hatası. Lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}
