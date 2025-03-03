import type { Metadata } from "next";
import { inknutAntiqua } from "@/app/ui/fonts";
import { Providers } from "./utils/Providers";

import { UserProvider } from "./context/UserContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kora Real Estate Management Application",
  description: "Welcome to KORA – Your Gateway to Smart Real Estate Management, Effortlessly manage properties, streamline transactions, and find the perfect spaces—all in one powerful platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inknutAntiqua.variable} antialiased`}>
        <Providers>
          <UserProvider>{children}</UserProvider>
        </Providers>
      </body>
    </html>
  );
}
