import GalleryTemplate from "./GalleryTemplate";

const imagePaths = import.meta.glob(
  `/src/assets/images/animals/*.{jpg,png,webp,JPG}`
);

const Animals = () => {
  return <GalleryTemplate imagePaths={imagePaths} />;
};

export default Animals;
