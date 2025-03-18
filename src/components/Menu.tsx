import Navigation from "./Navigation";
import { MdOutlineMail } from "react-icons/md";
import { PiInstagramLogo } from "react-icons/pi";

const Menu = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <div className="absolute top-full left-0 w-full h-[calc(100vh-4.5rem)] bg-light-oat flex flex-col items-center justify-center p-4 shadow-lg">
      <Navigation className="py-4 text-xl" onClick={closeMenu} />
      <div className="flex flex-row gap-6 py-4">
        <a href="https://instagram.com/Photo.Repeat/">
          <PiInstagramLogo size={22} />
        </a>
        <a href="mailto:malarie1012@gmail.com">
          <MdOutlineMail size={22} />
        </a>
      </div>
    </div>
  );
};

export default Menu;
