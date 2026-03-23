import { ThemeProvider } from "./contexts/ThemeContext";
import Footer from "./components/Footer";
import HeroSection from "./pages/HeroSection";
import Navbar from "./components/Navbar";
import ShowcaseSection from "./components/ShowcaseSection";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import StayAheadCarousel from "./components/StayAheadCarousel";
import Designs from "./pages/Designs";
import SplashCursor from "./components/SplashCursor";
import ProjectDetail from "./pages/ProjectDetail";

import LandingPageShowcase from "./components/LandingPageShowcase";

import { useState } from "react";
import AboutMe from "./pages/AboutMe";
import Loader from "./components/Loader";


function App() {
  const [loading, setLoading] = useState(() => {
    if (typeof window === "undefined") return false;
    const hasLoadedInSession = sessionStorage.getItem("loaded");
    if (hasLoadedInSession) return false;
    sessionStorage.setItem("loaded", "true");
    return true;
  });
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

                  <div className="px-4 py-8 sm:px-6 sm:py-10 md:p-40 md:m-20">
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
