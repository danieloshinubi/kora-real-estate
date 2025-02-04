import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: "Token is required" });
  }

  res.setHeader("Set-Cookie", serialize("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  }));

  return res.json({ message: "Token set successfully" });
}
