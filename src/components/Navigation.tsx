import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

interface NavigationProps {
  className?: string;
  onClick?: () => void;
}

const Navigation = ({ className, onClick }: NavigationProps) => {
  const location = useLocation(); // Get the current route
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname); // Update active link on route change
  }, [location]);

  const handleClick = (path: string) => {
    setActiveLink(path);
    if (onClick) onClick(); // Close menu if needed
  };

  return (
    <>
      {[
        { id: "home-link", path: "/", label: "Home" },
        { id: "gallery-link", path: "/gallery", label: "Gallery" },
        { id: "about-link", path: "/about", label: "About" },
      ].map(({ id, path, label }) => (
        <Link
          key={id}
          id={id}
          to={path}
          onClick={() => handleClick(path)}
          className={`relative px-1 pb-1 transition-colors duration-600 ${
            activeLink == path ? "text-red-600" : "hover:text-red-600"
          } ${className}`}
        >
          {label}

          {/* Expanding Bottom Border */}
          <span
            className={`absolute bottom-0 left-0 h-[3px] bg-red-500 transition-all duration-300 ${
              activeLink == path ? "w-full" : "w-0 hover:w-full"
            }`}
          />
        </Link>
      ))}
    </>
  );
};

export default Navigation;
