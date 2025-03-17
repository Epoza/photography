import { Link } from "react-router-dom";

interface GalleryProps {
  imagePaths: Record<string, () => Promise<unknown>>;
}

const GalleryTemplate = ({ imagePaths }: GalleryProps) => {
  const images = Object.keys(imagePaths);

  return (
    <>
      <div className="px-4 pt-6">
        <Link
          to="/gallery"
          className="inline-block px-4 py-2 mb-4 text-dark-coffee border border-dark-coffee rounded-lg transition hover:bg-medium-latte hover:text-white"
        >
          ← Back to Gallery
        </Link>
      </div>
      <div className="2xl:columns-3 md:columns-2 columns-1 gap-4 p-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden shadow-lg mb-4">
            <Link to={`/gallery/image/${index}`} state={{ image }}>
              <img
                src={image}
                alt={`Gallery ${index}`}
                className="w-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default GalleryTemplate;
