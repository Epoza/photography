import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./components/Home";
import Gallery from "./components/Gallery";
import About from "./components/About";
import ImageView from "./components/gallerySections/ImageView";
import Pricing from "./components/Pricing";
import GalleryRoute from "./components/gallerySections/galleryRoute";

const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />}>
            <Route path=":category" element={<GalleryRoute />} />
            <Route path="image/:id" element={<ImageView />} />
          </Route>
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
