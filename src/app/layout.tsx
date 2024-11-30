import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/navigation/footer/Footer";

export const metadata: Metadata = {
  title: "Ysor Todo",
  description: "Family Organizer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
