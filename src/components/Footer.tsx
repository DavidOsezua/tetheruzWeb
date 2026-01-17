import { NavLink } from "react-router";
import LogoText from "./svgComponents/LogoText";

const Footer: React.FC = () => {
  return (
    <footer
      className="px-4 sm:px-6 lg:px-8 py-8 lg:py-12 mt-8 lg:mt-16 "
      style={{
        background:
          "linear-gradient(90.34deg, rgba(200, 222, 255, 0.5) 0%, rgba(123, 165, 230, 0.5) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center">
            <LogoText maxWidth="max-w-[148px] md:max-w-[316px]" />
          </div>

          <div className="flex gap-4 text-center justify-center text-[12px] sm:text-left">
            <NavLink
              to="/policy"
              className="text-white border-r border-[#FFFFFF] pr-6 hover:text-white transition-colors"
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/termsandcondition"
              className="text-white  pr-6 hover:text-white transition-colors"
            >
              Terms of Service
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
