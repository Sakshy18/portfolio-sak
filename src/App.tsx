import { ThemeProvider } from "./contexts/ThemeContext";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ShowcaseSection from "./components/ShowcaseSection";

import { Routes, Route } from "react-router-dom";
import LandingPageShowcase from "./components/LandingPageShowcase";
import StayAheadCarousel from "./components/StayAheadCarousel";
import Designs from "./pages/Designs";
import SplashCursor from "./components/SplashCursor";
import ProjectDetail from "./pages/ProjectDetail";
import AboutMe from "./pages/Aboutme";

function App() {
  return (
    <ThemeProvider>
    <SplashCursor />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroSection />

              {/* <LandingPageShowcase /> */}
              <div className="p-40, m-20">
                <ShowcaseSection />
              </div>
              <StayAheadCarousel />
              <Footer />
            </>
          }
        />
      <Route path="/project/:slug" element={<ProjectDetail />} />
         <Route path="/designs" element={<Designs />} />
         <Route path="/about" element={<AboutMe />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
