import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ title = "KAN PORTFOLIO" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      {/* <!-- ===== BOX ICONS ===== --> */}
      <link
        href="https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css"
        rel="stylesheet"
      />
    </Head>
    <Header />
    <main>
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Layout;
