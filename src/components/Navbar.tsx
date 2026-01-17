import React, { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import Logo from "./svgComponents/Logo";
import Open from "./svgComponents/Open";
import { NavLink, useLocation, useNavigate } from "react-router";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [pendingScroll, setPendingScroll] = useState<string>("");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [sectionId] = useState("");

  useEffect(() => {
    if (pendingScroll && location.pathname === "/") {
      const timer = setTimeout(() => {
        const element = document.getElementById(pendingScroll);
        element?.scrollIntoView({
          behavior: "smooth",
        });
        setPendingScroll("");
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location.pathname, pendingScroll]);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === "/") {
      // Already on homepage, scroll directly
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      // Navigate to homepage first, then scroll
      setPendingScroll(sectionId);
      navigate("/");
    }
  };

  return (
    <header className="py-6 px-4 md:px-0 sticky top-0 z-10 ">
      <nav
        className="flex mx-auto max-w-[1296px] md:h-[80px] py-4 rounded-2xl backdrop-blur-[42px] items-center justify-between px-6 lg:px-6"
        style={{
          background:
            " linear-gradient(90.34deg, rgba(200, 222, 255, 0.5) 0%, rgba(123, 165, 230, 0.5) 100%)",
        }}
      >
        <NavLink to="/" className={`max-w-[88px]  md:max-w-[158px] w-ful`}>
          <Logo maxWidth={`max-w-[88px]  md:max-w-[158px]`} />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("/features")}
            className="text-[#F8F8F8] hover:text-white transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("/download")}
            className="text-[#F8F8F8] hover:text-white transition-colors"
          >
            <a href="https://tetheruz.com/login">Vist Dashboard</a>
          </button>
          <NavLink
            to="/policy"
            className="text-[#F8F8F8] hover:text-white transition-colors"
          >
            Policy
          </NavLink>
        </div>

        {/* Desktop CTA Button */}
        <button
          className={`hidden lg:block  text-white px-5 py-3 bg-[#3B3D50]  rounded-lg transition-colors text-sm ${
            sectionId === "download" ? "" : "font-semibold"
          }`}
        >
          <a href="https://tetheruz.com/signup">Get Started</a>
        </button>

        {/* Mobile Hamburger - Only show on mobile/tablet, hidden on desktop */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Open />
        </button>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        scroll={scrollToSection}
      />
    </header>
  );
};

export default Navbar;
