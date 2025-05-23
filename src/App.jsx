import "./App.css";
import "./index.css";
import Footer from "./components/elements/Footer";
import Navbar from "./components/elements/Navbar";
// import AudienceSection from "./components/sections/AudienceSection";
// import Features from "./components/sections/Features";
// import HeroSection from "./components/sections/HeroSection";
// import PricingSection from "./components/sections/PricingSection";
// import TestimonialSection from "./components/sections/TestimonialSection";
// import VideoPlayer from "./components/sections/VideoPlayer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
