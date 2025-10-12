import { NextResponse } from "next/server";
import { users } from "../users";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = users.find(u => u.email === email);
  if (!user) return NextResponse.json({ message: "Kullanıcı bulunamadı" }, { status: 404 });
  if (user.password !== password) return NextResponse.json({ message: "Yanlış şifre" }, { status: 401 });

  return NextResponse.json({ message: "Giriş başarılı" });
}
