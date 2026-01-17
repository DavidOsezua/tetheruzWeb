import Logo from "./svgComponents/Logo";
import Close from "./svgComponents/Close";
import { NavLink } from "react-router";

const MobileMenu: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  scroll: (section: string) => void;
}> = ({ isOpen, onClose, scroll }) => {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden  backdrop-blur-[10.25px] ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background: ` linear-gradient(90.34deg, rgba(112, 127, 157, 0.4) 0%, rgba(99, 143, 184, 0.4) 100%)`,
      }}
    >
      {/* Menu Content */}
      <div className="flex flex-col h-full p-6">
        {/* Header with Close Button */}
        <div className="flex items-center justify-between mb-12">
          <Logo maxWidth="max-w-[88px]" />

          <button onClick={onClose} className="text-white text-2xl">
            <Close />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex-1 space-y-8 text-center">
          <button
            onClick={() => {
              scroll("/features");
              onClose();
            }}
            className="block w-full text-white text-xl py-8 border-b border-[#ffffff67] transition-colors hover:text-blue-400"
          >
            Features
          </button>
          <button
            onClick={() => {
              scroll("/download");
              onClose();
            }}
            className="block w-full text-white text-xl py-8 border-b border-[#ffffff67] transition-colors hover:text-blue-400"
          >
            Visit Dashboard
          </button>
          <NavLink
            to="/policy"
            className="block text-white text-xl py-4 transition-colors hover:text-blue-400"
          >
            Policy
          </NavLink>
        </div>

        {/* CTA Button */}
        <div className="mt-auto pb-8">
          <button className="w-full text-white bg-[#3B3D50] px-6 py-4 rounded-lg text-lg transition-colors">
            <a href="https://tetheruz.com/login">Get Started now</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
