import type { Metadata, Viewport } from "next";
import "./globals.css";
import { FilmGrain } from "@/components/FilmGrain";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export const metadata: Metadata = {
  // Core Meta
  title: {
    default: "Toyota RAV4 2026 | Tame The Untamed - Nepal Adventure Edition",
    template: "%s | Toyota RAV4 Nepal",
  },
  description: "The 2026 Toyota RAV4 Nepal Adventure Edition. Engineered for the Wilds of Nepal with AWD-i intelligence, Multi-Terrain Select with 6 modes, TRD suspension, and 302HP hybrid power. Conquer Mustang, the Himalayas, and Terai.",
  keywords: [
    "Toyota RAV4",
    "RAV4 2026",
    "Nepal Adventure",
    "SUV Nepal",
    "Off-road SUV",
    "AWD SUV",
    "Toyota Nepal",
    "Himalayan SUV",
    "TRD Suspension",
    "Multi-Terrain Select",
    "Hybrid SUV",
    "Adventure Vehicle",
  ],
  authors: [{ name: "Toyota Nepal" }],
  creator: "Toyota Motor Corporation",
  publisher: "Toyota Nepal",

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rav4-nepal-adventure.vercel.app",
    siteName: "Toyota RAV4 Nepal Adventure",
    title: "Toyota RAV4 2026 | Tame The Untamed",
    description: "Engineered for the Wilds of Nepal. AWD-i intelligence, Multi-Terrain Select, TRD suspension, and 302HP hybrid power.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Toyota RAV4 2026 Nepal Adventure Edition",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Toyota RAV4 2026 | Tame The Untamed - Nepal Adventure",
    description: "Engineered for the Wilds of Nepal. Experience unmatched AWD-i intelligence and TRD suspension.",
    images: ["/og-image.jpg"],
    creator: "@ToyotaNepal",
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },

  // Manifest
  manifest: "/site.webmanifest",

  // Alternates
  alternates: {
    canonical: "https://rav4-nepal-adventure.vercel.app",
  },

  // Category
  category: "automotive",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Toyota RAV4 2026 Nepal Adventure Edition",
  description: "The 2026 Toyota RAV4 engineered for the Wilds of Nepal with AWD-i intelligence, Multi-Terrain Select, and TRD suspension.",
  brand: {
    "@type": "Brand",
    name: "Toyota",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Toyota Motor Corporation",
  },
  category: "SUV",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/PreOrder",
    priceCurrency: "NPR",
  },
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Ground Clearance",
      value: "8.6 inches",
    },
    {
      "@type": "PropertyValue",
      name: "Horsepower",
      value: "302 HP",
    },
    {
      "@type": "PropertyValue",
      name: "Terrain Modes",
      value: "6",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-abyss text-white antialiased">
        <FilmGrain />
        {children}
      </body>
    </html>
  );
}
