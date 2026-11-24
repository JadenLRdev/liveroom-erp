import type { Metadata } from "next";
import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "LiveroomOne ERP", template: "%s | LiveroomOne" },
  description: "Run finance, sales, projects and assets from one connected platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
