// import "./globals.css";
import "../styles/globals.css";
import "../styles/index.css";
import "../styles/main.scss";

// import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
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
        {children}
        <Footer />
      </body>
    </html>
  );
}