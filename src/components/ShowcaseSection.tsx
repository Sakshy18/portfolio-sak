import { useRef } from "react";
import "./showcase-section.css";

const projects = [
  {
    title: "Buddy Website",
    description: "Landing page for a community platform",
  image: "/projects/buddy-home.png",
  },
  {
    title: "One Dash",
    description: "A dashboard for stakeholders to analyze data",
   image: "/projects/one-dash.png",
  },
  {
    title: "Buddy App",
    description: "A one stop solution for moving out of your home",
    image: "/projects/buddy-app.webp",
  },
  {
    title: "Stepout",
    description: "A football analysis platform for players and coaches",
    image: "/projects/stepout.webp",  
  },
  {
    title:"TynTan",
    description: "Buy and sell tokens with a swipe",
    image: "/projects/tyntan.webp", 
  },
    {
    title: "Fans On Chain",
    description: "Tokenize your fandom and earn rewards",
    image: "/projects/fans-oon-chain.png",  
  },
];

export default function ShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="design" className="showcase-grid-section">
      <div className="showcase-grid-shell">
        <button className="showcase-pill" type="button" aria-label="Projects section">
          Projects
        </button>

        <div className="flex flex-col items-center mb-16">
          <div
            className="text-6xl bg-clip-text text-transparent"
            style={{
              fontFamily: "'Georgia', serif",
              fontWeight: 500,
              backgroundImage: `linear-gradient(45deg, var(--color-gradient-from), var(--color-gradient-via), var(--color-gradient-to))`,
            }}
          >
            <h2>End to End designs</h2>
          </div>
          <p className="text-2xl mt-1.5 text-gray-400">One of the top projects</p>
        </div>

        <div className="showcase-grid">
          {projects.map((project) => (
            <article key={project.title} className="showcase-project-card">
              <div className="showcase-project-media">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="showcase-project-img" 
                />
                {/* Overlay for hover effect */}
                <div className="showcase-project-overlay"></div>
              </div>
              
              <div className="showcase-project-copy">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}