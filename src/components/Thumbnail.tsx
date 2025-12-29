import { Link } from "react-router-dom";

interface ThumbnailProps {
  to: string;         
  imageSrc: string;   
  title: string;      
}

const Thumbnail = ({ to, imageSrc, title }: ThumbnailProps) => {
  return (
    <Link
      to={to}
      className="max-w-[300px] max-h-[300px] flex flex-col items-center border-2 border-dark-coffee rounded-lg overflow-hidden transition hover:border-medium-latte hover:opacity-80"
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-[240px] object-cover"
      />
      <p className="w-full p-4 text-center bg-light-oat text-dark-coffee">
        {title}
      </p>
    </Link>
  );
};

export default Thumbnail;
