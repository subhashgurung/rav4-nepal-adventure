import type { Metadata } from "next";
import "./globals.css";
import { FilmGrain } from "@/components/FilmGrain";

export const metadata: Metadata = {
  title: "Toyota RAV4 | Tame The Untamed - Nepal Adventure",
  description: "The 2026 Toyota RAV4. Engineered for the Wilds of Nepal. Experience unmatched AWD-i intelligence, Multi-Terrain Select, and TRD suspension built for the most challenging landscapes.",
  keywords: ["Toyota RAV4", "Nepal", "Adventure", "SUV", "Off-road", "AWD", "2026"],
  openGraph: {
    title: "Toyota RAV4 | Tame The Untamed",
    description: "Engineered for the Wilds of Nepal",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-abyss text-white antialiased">
        <FilmGrain />
        {children}
      </body>
    </html>
  );
}
