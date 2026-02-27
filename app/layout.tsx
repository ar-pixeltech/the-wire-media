import "../styles/globals.css";
import "../styles/index.css";
import "../styles/main.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
// import { unstable_cache } from "next/cache";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig?.url || "http://localhost:3000"),
  title: {
    default: "IT Consultant Company | Digital Solutions",
    template: "%s | IT Consultant Company",
  },
  description:
    "Professional IT consulting services including web development, cloud solutions, and business automation.",
  keywords: [
    "IT consulting",
    "web development",
    "cloud services",
    "business automation",
  ],
  openGraph: {
    title: "IT Consultant Company",
    description: "Professional IT consulting services.",
    url: "https://yourdomain.com",
    siteName: "IT Consultant Company",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}