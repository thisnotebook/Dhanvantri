import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"],
variable:'--inter' });
const roboto = Roboto({
  weight: ['100',"300",'400','500','700','900'],
  subsets: ["latin"],
  display: "swap",
  variable: '--roboto'
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={(inter.variable, roboto.variable)}>{children}</body>
    </html>
  );
}
