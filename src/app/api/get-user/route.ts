// [project]/src/app/api/get-user/route.ts

import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers'; // Import cookies from next/headers

const { JWT_SECRET } = process.env;

export async function GET() {
  const cookieStore = await cookies(); // Get the cookie store
  const token = cookieStore.get('token')?.value; // Access the token from cookies

  if (!token) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  if (!JWT_SECRET) {
    console.error("JWT_SECRET is not defined");
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET as string); // Ensure JWT_SECRET is defined and correct
    return NextResponse.json({ user: decoded });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
}