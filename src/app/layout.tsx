import type { Metadata } from "next";
import "./globals.scss";
import Header from "../components/header/index";
import { Source_Serif_4 } from "next/font/google";

const source = Source_Serif_4({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Martinese",
  description: "Martinese",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={source.className}>
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
