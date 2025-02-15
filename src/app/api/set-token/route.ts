// src/app/api/set-token/route.ts

import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

export async function POST(request: Request) {
  const { token } = await request.json(); // Parse the JSON body

  if (!token) {
    return NextResponse.json({ message: "Token is required" }, { status: 400 });
  }

  if (!JWT_SECRET) {
    console.error("JWT_SECRET is not defined");
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }

  // Sign the token with the secret key
  const signedToken = jwt.sign({ token }, JWT_SECRET as string);

  const response = NextResponse.json({ message: "Token set successfully" });

  // Set the signed token in the response cookie
  response.cookies.set('token', signedToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });

  return response;
}