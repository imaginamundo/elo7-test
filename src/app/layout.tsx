import localFont from "next/font/local";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Analytics from "@/providers/Analytics";
import "./globals.scss";

const museo = localFont({
  src: [
    {
      path: "../font/MuseoSans/500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../font/MuseoSans/700.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={museo.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      <Analytics />
    </html>
  );
}

export const metadata: Metadata = {
  applicationName: "elo7",
  title: {
    template: "%s · elo7",
    default: "elo7",
  },
};
