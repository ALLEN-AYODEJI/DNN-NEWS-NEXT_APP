import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";

export const metadata: Metadata = {
  title: "DNN News",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bglightmode dark:bg-darkmode transition-all duration-700">
        <Header />

        <div className="max-w-6xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
