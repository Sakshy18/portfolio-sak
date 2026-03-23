import { ThemeProvider } from "./contexts/ThemeContext";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ShowcaseSection from "./components/ShowcaseSection";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import StayAheadCarousel from "./components/StayAheadCarousel";
import Designs from "./pages/Designs";
import SplashCursor from "./components/SplashCursor";
import ProjectDetail from "./pages/ProjectDetail";

import LandingPageShowcase from "./components/LandingPageShowcase";

import { useEffect, useState } from "react";
import AboutMe from "./pages/AboutMe";
import Loader from "./components/Loader";


function App() {

  const [loading, setLoading] = useState(true);
useEffect(() => {
  const hasLoaded = sessionStorage.getItem("loaded");

  if (hasLoaded) {
    setLoading(false);
  } else {
    sessionStorage.setItem("loaded", "true");
  }
}, []);
  return (
    <ThemeProvider>

      <AnimatePresence>
        {loading && <Loader onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <SplashCursor />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <HeroSection />

                  <div className="p-40 m-20">
                    <ShowcaseSection />
                  </div>

                  <LandingPageShowcase />
                  <StayAheadCarousel />
                  <Footer />
                </>
              }
            />

            <Route path="/project/:slug" element={<ProjectDetail />} />
            <Route path="/designs" element={<Designs />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </>
      )}

    </ThemeProvider>
  );
}

export default App;
