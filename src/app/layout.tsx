import type { Metadata } from "next";
import "@fontsource/orbitron/600.css";
import "@fontsource/orbitron/800.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://devtionary.dev"),
  title: "Devtionary",
  description: "Developer vocabulary in context",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
