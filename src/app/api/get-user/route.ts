// [project]/src/app/api/get-user/route.ts

import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers'; // Import cookies from next/headers

export async function GET() {
  const cookieStore = await cookies(); // Get the cookie store
  const token = cookieStore.get('token')?.value; // Access the token from cookies

  if (!token) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string); // Replace with your real secret key
    return NextResponse.json({ user: decoded });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
}