import localFont from "next/font/local";

import Header from "@/components/Header/Header";
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
      </body>
    </html>
  );
}
