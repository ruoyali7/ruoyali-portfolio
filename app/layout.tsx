import type { Metadata } from "next";
import "./globals.css";
import "./mvp.css";
import "./v2.css";
import "./engineering.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ruoyali-portfolio.vercel.app"),
  title: "Ruoya Li — Software Engineer & Creative Technologist",
  description: "Software engineering portfolio spanning full-stack development, AI-powered products, and 3D / creative technology.",
  openGraph: {
    title: "Ruoya Li — Software Engineer & Creative Technologist",
    description: "Full-Stack · AI · 3D · Creative Technology",
    url: "https://ruoyali-portfolio.vercel.app/",
    siteName: "Ruoya Li Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ruoya Li — Software Engineer & Creative Technologist",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruoya Li — Software Engineer & Creative Technologist",
    description: "Full-Stack · AI · 3D · Creative Technology",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
