import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Footer from "./components/Footer";


function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <div className="pt-24 min-h-screen flex flex-col justify-start items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Media/:id" element={<Media />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Donate" element={<Donate />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App
