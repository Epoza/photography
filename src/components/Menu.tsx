import { MdOutlineMail } from "react-icons/md";
import { PiInstagramLogo } from "react-icons/pi";
const Menu = () => {
  return (
    <div className="absolute top-full left-0 w-full h-[calc(100vh-4.5rem)] bg-amber-700 text-white flex flex-col items-center justify-center p-4 shadow-lg">
      <div className="py-4 text-xl">Gallery</div>
      <div className="py-4 text-xl">About</div>
      <div className="py-4 text-xl">Home</div>
      <div className="flex flex-row gap-6 py-4">
        <PiInstagramLogo size={22} />
        <MdOutlineMail size={22} />
      </div>
    </div>
  );
};

export default Menu;
