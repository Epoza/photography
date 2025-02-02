import Navigation from "./Navigation";
import { MdOutlineMail } from "react-icons/md";
import { PiInstagramLogo } from "react-icons/pi";

const Menu = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <div className="absolute top-full left-0 w-full h-[calc(100vh-4.5rem)] bg-amber-700 text-white flex flex-col items-center justify-center p-4 shadow-lg">
      <Navigation className="py-4 text-xl" onClick={closeMenu} />
      <div className="flex flex-row gap-6 py-4">
        <PiInstagramLogo size={22} />
        <MdOutlineMail size={22} />
      </div>
    </div>
  );
};

export default Menu;
