import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  icons: {
    icon: '/new_logo.jpeg',
    shortcut: '/new_logo.jpeg',
    apple: '/new_logo.jpeg',
  },
  title: "TickToFly Inc. | Where Every Journey Becomes a Tailored Adventure",
  description:
    "Specializing in vacation packages and complex itineraries, TickToFly offers travelers the freedom to explore the globe. Custom vacations, group travel coordination, and 24/7 VIP support.",
  keywords: [
    "travel agency",
    "vacation packages",
    "luxury travel",
    "concierge service",
    "group travel",
    "honeymoon packages",
    "adventure tours",
  ],
  authors: [{ name: "TickToFly Inc." }],
  openGraph: {
    title: "TickToFly Inc. | Elite Travel. Personal Service.",
    description:
      "Where Every Journey Becomes a Tailored Adventure. Custom vacation packages, complex itinerary management, and 24/7 VIP support.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17995180897"
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17995180897');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased bg-white text-[#111318]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
