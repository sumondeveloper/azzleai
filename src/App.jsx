import "./App.css";
import "./index.css";
import Footer from "./components/elements/Footer";
import Navbar from "./components/elements/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Faq from "./pages/Faq";

import Faq2 from "./pages/Faq2";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/servicedetails" element={<ServiceDetails />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogdetails" element={<BlogDetails />} />
          <Route path="/faq-1" element={<Faq />} />
          <Route path="/faq-2" element={<Faq2 />} />
          <Route path="/pricing" element={<Pricing />} />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
