import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";

const outfit = Outfit({ subsets:["latin"],weight:'400' })


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
      <body
        className={`${outfit.className} `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header></Header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
