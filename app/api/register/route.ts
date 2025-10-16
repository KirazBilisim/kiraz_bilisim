import { NextResponse } from "next/server";
import { UserService } from "@/lib/database/userService";
import { validateEmail, validatePassword } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    // Validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { message: "Ad soyad en az 2 karakter olmalıdır" },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { message: "Geçersiz email formatı" },
        { status: 400 }
      );
    }

    const passwordValidation = validatePassword(password);
    if (!passwordValidation.isValid) {
      return NextResponse.json(
        { message: passwordValidation.message },
        { status: 400 }
      );
    }

    // Kullanıcı oluştur
    const user = await UserService.createUser({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password
    });

    return NextResponse.json({
      message: "Kayıt başarılı! Şimdi giriş yapabilirsiniz.",
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error: any) {
    console.error("Register error:", error);
    
    if (error.message === "Bu email adresi zaten kayıtlı") {
      return NextResponse.json(
        { message: "Bu email adresi zaten kayıtlı" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { message: "Sunucu hatası. Lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}
