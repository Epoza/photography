import { Link } from "react-router-dom";

interface NavigationProps {
  className?: string; // Optional className prop
}

const Navigation = ({ className }: NavigationProps) => {
  return (
    <>
      <Link to="/" className={`${className} hover:text-red-500`}>
        Home
      </Link>
      <Link to="/gallery" className={`${className} hover:text-red-500`}>
        Gallery
      </Link>
      <Link to="/about" className={`${className} hover:text-red-500`}>
        About
      </Link>
    </>
  );
};

export default Navigation;
