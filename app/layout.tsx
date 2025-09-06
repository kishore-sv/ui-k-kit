import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});


export const metadata: Metadata = {
  title: "K-Kit",
  description:
    "K-Kit is a ui components lib",
  keywords: [
    "ui",
    "k-kit",
    "K-Kit",
    "kishore k-kit",
    "kishore-sv k-kit",
    "ui-k-kit",
    "ui k kit",
    "Open Source",
  ],
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  authors: [{ name: "Kishore" }],
  creator: "Kishore",
  openGraph: {
    title: "K-kit | Ui Component Lib.",
    description:
      "K-Kit is component Lib for react and nextjs.",
    url: "https://k-kit.kishore-sv.me/",
    siteName: "K-Kit",
    type: "website",
    images: [
      {
        url: "/web.png",
        width: 1200,
        height: 500,
        alt: "K-Kit",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
