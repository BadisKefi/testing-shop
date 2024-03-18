"use client";

import { Finlandica } from "next/font/google";
import "./shop.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Provider } from "react-redux";
import store from "@/store/store";

const finlandica = Finlandica({ subsets: ["latin"] });

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <div className={finlandica.className}>{children}</div>;
        <Footer />
      </Provider>
    </>
  );
}
