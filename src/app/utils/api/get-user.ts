import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, "your-secret-key"); // Replace with your real secret key
    return res.json({ user: decoded });
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Invalid token" });
  }
}
