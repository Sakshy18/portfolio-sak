import DesignPortfolio from "../pages/DesignPortfolio.tsx";
import "./landing-showcase.css";
export default function ShowcaseSection() {
  return (
    <section id="design" className="w-full px-8 mt-32">
   <div className="flex flex-col items-center mb-16">
     <div className="text-6xl bg-clip-text text-transparent"  style={{fontFamily: "'Georgia', serif" , fontWeight: 500,
            backgroundImage: `linear-gradient(45deg, var(--color-gradient-from), var(--color-gradient-via), var(--color-gradient-to))`
          }}>
        <h2>End to End designs</h2>
       
      </div>
       <p className="text-2xl mt-1.5 text-gray-400 ">One of the top projects</p>
   </div>
      <div className="max-w-[1400px] mx-auto">
        <DesignPortfolio />
      </div>

    
    </section>
  );
}
