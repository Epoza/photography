import { Link, useLocation, Outlet } from "react-router-dom";

const Gallery = () => {
  const location = useLocation();

  return (
    <div className="w-full h-full bg-soft-cream">
      {/* Show buttons ONLY if on /gallery */}
      {location.pathname === "/gallery" && (
        // grid container
        <div
          id="container"
          className="min-h-[calc(100vh-4.5rem)] w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] auto-rows-min gap-4 p-4 justify-start"
        >
          <Link
            to="/gallery/animals"
            className="max-w-[300px] max-h-[300px] flex flex-col items-center border-2 border-dark-coffee rounded-lg overflow-hidden transition hover:border-medium-latte hover:opacity-80"
          >
            <img
              src={`${import.meta.env.BASE_URL}/images/animals/DSC_0302.JPG`}
              alt="Animal Gallery"
              className="w-full h-[240px] object-cover"
            />
            <p className="w-full p-4 text-center bg-light-oat text-dark-coffee">
              Animal Images
            </p>
          </Link>

          <Link
            to="/gallery/landscapes"
            className="max-w-[300px] max-h-[300px] flex flex-col items-center border-2 border-dark-coffee rounded-lg overflow-hidden transition hover:border-medium-latte hover:opacity-80"
          >
            <img
              src={`${import.meta.env.BASE_URL}/images/landscapes/DSC_4580.JPG`}
              // change alt tag
              alt="Landscape Gallery"
              // image has max width of 240px
              className="w-full h-[240px] object-cover"
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
