import type { Metadata } from "next";
import "./globals.css";
import "./mvp.css";
import "./v2.css";

export const metadata: Metadata = {
  title: "Ruoya Li — Creative Technologist & Software Engineer",
  description: "Creative technologist and software engineer building AI-powered tools, media workflows, and interactive systems.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
