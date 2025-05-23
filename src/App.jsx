import "./App.css";
import Navbar from "./components/elements/Navbar";
import AudienceSection from "./components/sections/AudienceSection";
import Features from "./components/sections/Features";
import HeroSection from "./components/sections/HeroSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <AudienceSection />
    </>
  );
}

export default App;
