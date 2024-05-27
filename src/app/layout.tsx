"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "@/redux/store";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-200`}>
        <Provider store={store}>
          <Navbar />
          <Toaster position="top-right" reverseOrder={false} />
          <div className="flex items-center justify-center mt-10">{children}</div>
        </Provider>
      </body>
    </html>
  );
}
