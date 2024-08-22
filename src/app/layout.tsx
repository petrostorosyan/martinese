import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.scss";
import Header from "../components/header/index"

const cinzel = Cinzel({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Martinese",
  description: "Martinese",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={cinzel.className}>
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
