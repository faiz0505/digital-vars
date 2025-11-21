import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/common/Navigation";

const poppins = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Digital Vars",
  description:
    "Building brands, boosting businesses, and redefining possibilities. Let's grow your brand together.",
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
