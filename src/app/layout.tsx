import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const spaceGortesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ['300', '400', '700']
 });

export const metadata: Metadata = {
  title: "5Dourou",
  description: "Track product prices effortlessly and save money on your online shopping.",
  generator: 'Next.js',
  authors: [
    {
      name: 'mohamed ali hosni',
    }
  ],
  applicationName: '5Dourou',
  keywords: ["Web Scraping", "Data Extraction", "Web Data Scraper", "Automated Data Collection", "Web Crawler", "Data Mining",
    "Screen Scraping", "Web Harvesting", "Data Scraping Tools", "Python Web Scraping", "Scraping Bots", "Web Scraper Software",
    "Custom Web Scraping Solutions", "Real-Time Data Extraction", "Web Scraping Service", "Web Scraping for Business", 
    "Data Aggregation", "Online Data Extraction", "Website Data Scraping", "Big Data", "Data Automation", "Web Content Extraction"],
  openGraph: {
    title: '5Dourou',
    description: 'Track product prices effortlessly and save money on your online shopping.',
    images: [
      {
        url: '/ogimg.png',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    creator: 'mohamedalihosni',
    title: '5Dourou',
    description: 'Track product prices effortlessly and save money on your online shopping.',
    images: [
      {
        url: '/ogimg.png',
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-10xl mx-auto">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
