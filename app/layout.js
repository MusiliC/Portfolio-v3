import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: {
    default: "Musili Dev",
    template: "%s | Musili",
  },
  description: "Software Engineer",
  keywords: [
    "Web Design and Development",
    "DevOps",
    "Software Development",
    "Musili Dev",
  ],
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}        
        <Footer />
      </body>
    </html>
  );
}
