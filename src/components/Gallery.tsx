import { Link, useLocation, Outlet } from "react-router-dom";
import animalImage from "../images/birds/DSC_4120.JPG";
import littleImage from "../images/little_guys/DSC_0281.JPG";
import bigImage from "../images/big_boys/DSC_4710.JPG";
import landscapeImage from "../images/landscapes/DJI_0238.JPG";
import flowerImage from "../images/flowers/DSC_3120.JPG";
import boatImage from "../images/boats/DSC_2995.JPG";
import skyImage from "../images/sky/DSC05802.JPG";
import sunriseImage from "../images/sunrise/DSC07305.JPG";
import Thumbnail from "./Thumbnail";

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
          {/* Birds */}
          <Thumbnail to="/gallery/birds" imageSrc={animalImage} title="Bird Images"/>
          {/* Little Animals */}
          <Thumbnail to="/gallery/little_guys" imageSrc={littleImage} title="Little Animal Images"/>
          {/* Big Animals */}
          <Thumbnail to="/gallery/big_boys" imageSrc={bigImage} title="Big Animal Images"/>
          {/* landscapes */}
          <Thumbnail to="/gallery/landscapes" imageSrc={landscapeImage} title="Landscape Images"/>
          {/* boats */}
          <Thumbnail to="/gallery/boats" imageSrc={boatImage} title="Boat Images"/>
          {/* flowers */}
          <Thumbnail to="/gallery/flowers" imageSrc={flowerImage} title="Flower Images"/>
          {/* sky */}
          <Thumbnail to="/gallery/sky" imageSrc={skyImage} title="Sky Images"/>
          {/* sunrise */}
          <Thumbnail to="/gallery/sunrise" imageSrc={sunriseImage} title="Sunrise Images"/>
        </div>
      )}

      {/* This will render either Animals or Landscapes when navigated to */}
      <Outlet />
    </div>
  );
};

export default Gallery;
