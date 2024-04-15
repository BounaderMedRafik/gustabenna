import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigationbar from "./components/Navigationbar";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import { Providers } from "./providers/NextUserProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gusta Benna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Toaster />
          <Navigationbar />
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
