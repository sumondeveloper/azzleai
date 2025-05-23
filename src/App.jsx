import "./App.css";
import Navbar from "./components/elements/Navbar";
import AudienceSection from "./components/sections/AudienceSection";
import Features from "./components/sections/Features";
import HeroSection from "./components/sections/HeroSection";
import PricingSection from "./components/sections/PricingSection";
import VideoPlayer from "./components/sections/VideoPlayer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <AudienceSection />
      <VideoPlayer />
      <PricingSection />
    </>
  );
}

export default App;
