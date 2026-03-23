import { useRef } from "react";
import "./showcase-section.css";
import { projectsData } from "../data/projectsData";
import { Link } from "react-router-dom";
import GradientText from "./GradientText";
import SuspenseImage from "./ui/SuspenseImage";

export default function ShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="design" className="showcase-grid-section">
      <div className="showcase-grid-shell">
        <button className="showcase-pill" type="button" aria-label="Projects section">
          Projects
        </button>

       <div className="flex flex-col items-center text-center mb-16">
  <div
    className="showcase-title-wrapper"

  >
 <GradientText
   colors={["#4f772d", "#90a955", "#ecf39e"]}
   animationSpeed={11.5}
   showBorder={false}
   // Keep the className for any tailwind/global spacing if needed
   className="font-bold" 
   // Add the style prop here
   style={{ 
    fontSize:'3.9rem',
     fontFamily: "'Georgia', serif", 
     fontWeight: 200 
   }}
 >
 End to End Designs
 </GradientText>
  </div>
  <p className="text-[1.2rem] md:text-2xl mt-3 text-gray-400">
    One of the top projects
  </p>
</div>

        <div className="showcase-grid">
          {projectsData.map((project) => (
            <Link 
              to={`/project/${project.slug}`} 
              key={project.slug} 
              className="showcase-project-link"
            >
              <article className="showcase-project-card">
                <div className="showcase-project-media">
                  <SuspenseImage
                    src={project.image} 
                    alt={project.title} 
                    className="showcase-project-img" 
                  />
                  <div className="showcase-project-overlay"></div>
                </div>
                
                <div className="showcase-project-copy">
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
