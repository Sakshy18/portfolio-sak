import DomeGallery from '../components/DomeGallery'; // Ensure this path matches your file structure
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Designs() {
  const navigate = useNavigate();
  // Map your 75 images to the format expected by DomeGallery
const myDesigns = Array.from({ length: 75 }).map((_, i) => ({
    src: `/assets/designs/${i + 1}.svg`,
    alt: `Design Experiment ${i + 1}`
  }));

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header overlay so it stays on top of the gallery */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-[10px] uppercase tracking-[0.2em] bg-black/50 border border-white/10 rounded-full px-4 py-2 backdrop-blur-sm"
      >
        <ChevronLeft size={14} />
        Back to Home
      </button>

      {/* Dome Gallery Container */}
      <div className="w-screen h-screen overflow-hidden bg-[#050505]">
     <DomeGallery 
        images={myDesigns} // <--- CHANGED FROM 'items' TO 'images'
        fit={0.9} 
        minRadius={800} 
        segments={34} 
        dragDampening={2.5}
        maxVerticalRotationDeg={0}
        grayscale={false} // Set to false if you want to see your SVG colors
      />
      </div>
      
      {/* Optional: Add a subtle instruction at the bottom */}
      <div className="absolute bottom-10 w-full text-center z-10 pointer-events-none">
        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 animate-pulse">
          Click and Drag to Orbit
        </span>
      </div>
    </main>
  );
}
