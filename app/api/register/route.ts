import { NextResponse } from "next/server";
import { users } from "../users";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  if (users.find(u => u.email === email)) {
    return NextResponse.json({ message: "Email zaten kayıtlı" }, { status: 400 });
  }

  users.push({ name, email, password });
  return NextResponse.json({ message: "Kayıt başarılı", userId: users.length });
}
