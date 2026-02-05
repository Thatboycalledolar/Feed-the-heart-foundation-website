import { BrowserRouter,Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Footer from "./components/Footer";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-24 min-h-screen flex flex-col justify-start items-center">
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App
