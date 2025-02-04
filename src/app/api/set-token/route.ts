// src/app/api/set-token/route.ts

import { NextResponse } from 'next/server';
// import { serialize } from 'cookie';

export async function POST(request: Request) {
  const { token } = await request.json(); // Parse the JSON body

  if (!token) {
    return NextResponse.json({ message: "Token is required" }, { status: 400 });
  }

  const response = NextResponse.json({ message: "Token set successfully" });

  // Set the cookie in the response
  response.cookies.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });

  return response;
}