import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ModalProvider } from "./context/ModalContext";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "DecodeMe",
  description: "Landing page for decodeme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}