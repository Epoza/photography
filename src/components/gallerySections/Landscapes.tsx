import GalleryTemplate from "./GalleryTemplate";

const imagePaths = import.meta.glob(
  `/src/assets/images/landscapes/*.{jpg,png,webp,JPG}`
);

const Landscapes = () => {
  return <GalleryTemplate imagePaths={imagePaths} />;
};

export default Landscapes;
