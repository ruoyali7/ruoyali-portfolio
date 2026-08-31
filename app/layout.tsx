import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ruoya Li — Creative Technology",
  description: "Software Engineer & Creative Technologist building applied AI tools and creative workflow systems.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
