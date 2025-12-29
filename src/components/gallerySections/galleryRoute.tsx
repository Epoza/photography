import { useParams } from "react-router-dom";
import GalleryTemplate from "./GalleryTemplate";

// get the images at a location

const GalleryRoute = () => {
  const { category } = useParams();

  const images = import.meta.glob(
    `/src/images/*/*.JPG`,
    { eager: true, query: "url", import: "default" }
  );

  const imagePaths = Object.entries(images)
    .filter(([path]) => path.includes(`/${category}/`))
    .map(([, url]) => url as string)
    .sort((a, b) => a.localeCompare(b));

  return <GalleryTemplate imagePaths={imagePaths} />;
};

export default GalleryRoute;
