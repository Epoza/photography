import { Link, useLocation, Outlet } from "react-router-dom";

const Gallery = () => {
  const location = useLocation();

  return (
    <div className="w-full h-[calc(100vh-4.5rem)] bg-soft-cream">
      {/* Show buttons ONLY if on /gallery */}
      {location.pathname === "/gallery" && (
        // grid container
        <div
          id="container"
          className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 p-4"
        >
          <Link
            to="/gallery/animals"
            className="w-[300px] h-[400px] flex flex-col items-center border-2 border-dark-coffee rounded-lg overflow-hidden transition hover:border-light-oat"
          >
            <img
              src="/src/assets/images/animals/preview.jpg"
              alt="Animal Gallery"
              className="w-full h-48 object-cover"
            />
            <p className="w-full p-4 text-center bg-light-oat text-dark-coffee">
              Animal Images
            </p>
          </Link>

          <Link
            to="/gallery/landscapes"
            className="w-[300px] h-[300px] flex flex-col items-center border-2 border-dark-coffee rounded-lg overflow-hidden transition hover:border-medium-latte hover:opacity-80"
          >
            <img
              src="/src/assets/images/landscapes/DSC_3591.JPG"
              // change alt tag
              alt="Landscape Gallery"
              className="w-full h-[250px] object-cover"
            />
            <p className="w-full p-4 text-center bg-light-oat text-dark-coffee">
              Landscape Images
            </p>
          </Link>
        </div>
      )}

      {/* This will render either Animals or Landscapes when navigated to */}
      <Outlet />
    </div>
  );
};

export default Gallery;
