import { ThemeProvider } from "./contexts/ThemeContext";
// import ThemeSelector from "./components/ThemeSelector";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ShowcaseSection from "./components/ShowcaseSection";
import Cursor from "./components/Cursor";

import { Routes, Route } from "react-router-dom";
import ProjectDetail from "./pages/ProjectDetail";
import LandingPageShowcase from "./components/LandingPageShowcase";
import StayAheadCarousel from "./components/StayAheadCarousel";
import Designs from "./pages/Designs";

function App() {
  return (
    <ThemeProvider>
      <Cursor />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroSection />

              <LandingPageShowcase />
              <div className="p-40, m-20">
                <ShowcaseSection />
              </div>
              <StayAheadCarousel />
              <Footer />
            </>
          }
        />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
         <Route path="/designs" element={<Designs />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
