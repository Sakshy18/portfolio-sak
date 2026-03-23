import DomeGallery from '../components/DomeGallery'; // Ensure this path matches your file structure

export default function Designs() {
  // Map your 75 images to the format expected by DomeGallery
const myDesigns = Array.from({ length: 75 }).map((_, i) => ({
    src: `/assets/designs/${i + 1}.svg`,
    alt: `Design Experiment ${i + 1}`
  }));

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header overlay so it stays on top of the gallery */}
   

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