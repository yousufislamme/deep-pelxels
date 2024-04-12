"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import MyGlobalState from "@/Context/Context";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isHeaderVisible, setHeaderVisibility] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 500) {
        setHeaderVisibility(true);
      } else {
        setHeaderVisibility(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <MyGlobalState>
          <Header
            isVisible={isHeaderVisible}
            searchClass={isHeaderVisible ? "flex " : "hidden"}
          />
          {children}
        </MyGlobalState>
      </body>
    </html>
  );
}
