import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import Header from "@/component/Header";
import Footer from "@/component/Footer";

export const metadata: Metadata = {
  title: "Import Export",
  description: "Your import export company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
