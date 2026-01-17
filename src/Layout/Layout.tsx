import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BottomImg from "../components/svgComponents/BottomImg";
import TopImg from "../components/svgComponents/TopImg";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <section
      className="min-h-screen relative"
      style={{
        background: "linear-gradient(180deg, #4A4A76 0%, #292934 100%)",
      }}
    >
      {/* Background Pattern */}
      <div className="fixed left-0">
        <TopImg />
      </div>

      <div className="absolute bottom-0 right-0">
        <BottomImg />
      </div>

      {/* Content */}
      <div className="relative z-10 ">
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </div>
    </section>
  );
};

export default Layout;
