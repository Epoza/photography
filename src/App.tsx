import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./components/Home";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Animals from "./components/gallerySections/Animals";
import Landscapes from "./components/gallerySections/Landscapes";

const App = () => {
  return (
    <>
      <Router>
        {/* Put components here such as Navbar, footer, homepage, etc.*/}
        {/* Possible move header into each component home, gallery, About */}
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />}>
            {/* Nested routes */}
            <Route path="animals" element={<Animals />} />
            <Route path="landscapes" element={<Landscapes />} />
          </Route>
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
