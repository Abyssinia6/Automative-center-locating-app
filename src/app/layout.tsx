import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoService - Car Service Management System",
  description: "Professional automotive service center management platform for customers, mechanics, garages, and administrators",
  keywords: ["automotive", "car service", "garage", "mechanic", "vehicle maintenance"],
  authors: [{ name: "AutoService Team" }],
  robots: "index, follow",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "AutoService - Car Service Management",
    description: "Professional automotive service center management platform",
    type: "website",
    siteName: "AutoService"
  }
};

import ErrorBoundary from '@/components/ErrorBoundary';

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#3B82F6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased font-sans">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
