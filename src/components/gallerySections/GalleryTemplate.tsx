interface GalleryProps {
  imagePaths: Record<string, () => Promise<unknown>>;
}

const GalleryTemplate = ({ imagePaths }: GalleryProps) => {
  // get the images
  const images = Object.keys(imagePaths);

  return (
    <>
      <div>Gallery section</div>
      <div className="columns-2 gap-4 p-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden shadow-lg mb-4">
            <img
              src={image}
              alt={`Gallery ${index}`}
              className="w-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default GalleryTemplate;
