import Menu from "./Menu";
import Navigation from "./Navigation";
import { useState, useEffect } from "react";
import { PiX, PiInstagramLogo } from "react-icons/pi";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when screen width is >= 768px (md breakpoint)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full flex justify-between items-center bg-light-oat h-18 p-4 relative">
      {/* Website Name */}
      <div
        className="text-2xl font-semibold flex items-center gap-2"
        id="website-name"
      >
        <span>{/* Icon here */}</span>Photo.Repeat
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex gap-3 items-center justify-center">
        <Navigation />
        <div className="flex gap-2 items-center justify-center">
          <a href="https://instagram.com/Photo.Repeat/">
            <PiInstagramLogo size={20} />
          </a>
          <a href="mailto:malarie1012@gmail.com">
            <MdOutlineMail size={20} />
          </a>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center p-2 border rounded-lg"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <PiX size={24} /> : <IoIosMenu size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && <Menu closeMenu={() => setMenuOpen(false)} />}
    </div>
  );
};

export default Header;
