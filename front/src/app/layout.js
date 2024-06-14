import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import NavBar from "/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sejong AI Faculty",
  description: "AI department faculty of Sejong univ",
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>
        <NavBar></NavBar>
        
        {children}
      </body>
    </html>
  );
}
