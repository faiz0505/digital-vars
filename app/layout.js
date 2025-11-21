import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/common/Navigation";
import { icons } from "lucide-react";

const poppins = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});
export const metadata = {
  title: "Digital Vars | Creative Digital Marketing & Web Design Agency",
  description:
    "Supercharge your brand with Digital Vars—a full-service creative agency specializing in Data-Driven Digital Marketing, AI Solutions, Modern Web Design, and Android App Development. Let's grow your business.",
  keywords: [
    "Digital Marketing",
    "Web Design",
    "Creative Agency",
    "AI Solutions",
    "Android App Development",
    "Brand Strategy",
    "SEO",
  ],
  openGraph: {
    title: "Digital Vars | Creative Digital Marketing & Web Design Agency",
    description:
      "Full-service creative agency for Digital Marketing, AI Solutions, and Web Development. Get real results.",
    url: "https://digital-vars.vercel.app/",
    siteName: "Digital Vars",
    images: [
      {
        url: "https://plus.unsplash.com/premium_photo-1661497292411-8e1ed69525b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 1200,
        height: 630,
        alt: "Digital Vars Agency Logo and services summary",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
