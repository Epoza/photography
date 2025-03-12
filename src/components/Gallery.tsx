import { Link, useLocation, Outlet } from "react-router-dom";

const Gallery = () => {
  const location = useLocation();

  return (
    <div className="p-4">
      {/* Show buttons ONLY if on /gallery */}
      {location.pathname === "/gallery" && (
        <div className="flex gap-4 mb-4">
          <Link
            to="/gallery/animals"
            className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-blue-500 hover:text-white"
          >
            Animal Images
          </Link>
          <Link
            to="/gallery/landscapes"
            className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-blue-500 hover:text-white"
          >
            Landscape Images
          </Link>
        </div>
      )}

      {/* This will render either Animals or Landscapes when navigated to */}
      <Outlet />
    </div>
  );
};

export default Gallery;
