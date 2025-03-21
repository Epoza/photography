import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./components/Home";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Animals from "./components/gallerySections/Animals";
import Landscapes from "./components/gallerySections/Landscapes";
import ImageView from "./components/gallerySections/ImageView";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <>
      <Router basename="/photography">
        {/* Put components here such as Navbar, footer, homepage, etc.*/}
        {/* Possible move header into each component home, gallery, About */}
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />}>
            {/* Nested routes */}
            <Route path="animals" element={<Animals />} />
            <Route path="landscapes" element={<Landscapes />} />
            <Route path="/gallery/image/:id" element={<ImageView />} />
          </Route>
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
