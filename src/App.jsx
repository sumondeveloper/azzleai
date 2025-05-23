import "./App.css";
import Navbar from "./components/elements/Navbar";
import AudienceSection from "./components/sections/AudienceSection";
import Features from "./components/sections/Features";
import HeroSection from "./components/sections/HeroSection";
import VideoPlayer from "./components/sections/VideoPlayer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <AudienceSection />
      <VideoPlayer />
    </>
  );
}

export default App;
