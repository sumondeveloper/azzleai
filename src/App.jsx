import "./App.css";
import "./index.css";
import Footer from "./components/elements/Footer";
import Navbar from "./components/elements/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

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
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
