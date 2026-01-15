import { ThemeProvider } from "./contexts/ThemeContext";
// import ThemeSelector from "./components/ThemeSelector";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ShowcaseSection from "./components/ShowcaseSection";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-x-hidden">
        {/* <ThemeSelector /> */}
        <Navbar />
        <HeroSection />
        {/* <ShowcaseSection /> */}
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
