import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./components/Home";
import Gallery from "./components/Gallery";
import About from "./components/About";

const App = () => {
  return (
    <>
      <Router>
        {/* Put components here such as Navbar, footer, homepage, etc.*/}
        <Header />
        <div className="text-3xl underline">App</div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
