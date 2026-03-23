import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { projectsData } from "./projectsData";
import { ChevronLeft } from "lucide-react";

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.slug === slug);
  const [activeSection, setActiveSection] = useState("01");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [project]);

  if (!project) return <div className="text-white p-20">Project not found.</div>;

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

return (
    <main className="flex h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden">
      {/* LEFT SIDE: FIXED SIDEBAR (30% Width) */}
      <aside className="w-[30%] h-full flex flex-col justify-between p-10 md:p-12 border-r border-white/5 relative bg-[#0a0a0a] z-20">
        <div>
          <button 
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-8 text-[10px] uppercase tracking-[0.2em]"
          >
            <ChevronLeft size={14} /> Case Study
          </button>
          
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3">{project.title}</h1>
          <div className="flex items-center gap-2">
             <p className="text-zinc-500 text-sm md:text-base leading-snug max-w-[200px]">{project.subtitle}</p>
             <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
             </div>
          </div>
        </div>

        {/* Dynamic Number Indicator */}
        <div className="relative py-12">
          <span className="absolute top-0 left-0 text-[12rem] font-bold text-white/[0.02] select-none leading-none -translate-x-8">
            {activeSection}
          </span>
          <div className="relative z-10 pt-16">
            <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-1">Section {activeSection}</p>
            <h2 className="text-4xl font-bold tracking-tight">
                {project.sections.find(s => s.id === activeSection)?.label}
            </h2>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-4 gap-1.5 max-w-[280px]">
          {project.sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className={`flex flex-col items-center justify-center py-3 rounded-lg border transition-all duration-300
                ${activeSection === s.id 
                  ? 'bg-white/10 border-white/20 scale-105' 
                  : 'bg-white/[0.02] border-white/5 hover:border-white/10'}`}
            >
              <span className="text-[9px] text-zinc-500 font-mono mb-0.5">{s.id}</span>
              <span className="text-[8px] uppercase font-bold tracking-tighter opacity-70">{s.label}</span>
            </button>
          ))}
        </div>
      </aside>

      {/* RIGHT SIDE: SCROLLABLE CONTENT (70% Width) */}
     <section className="w-[70%] h-full overflow-y-auto scroll-smooth custom-scrollbar bg-[#0a0a0a]">
  {project.sections.map((section) => (
    <div
      key={section.id}
      id={section.id}
      ref={(el) => (sectionRefs.current[section.id] = el)}
      className="h-auto min-h-[40vh] p-16 md:p-24 flex flex-col justify-start border-b border-white/5"
    >
            {/* Section Heading & Description */}
            <div className="max-w-3xl mb-16">
              <div className="flex items-center gap-3 mb-6 opacity-30">
                  <span className="text-[10px] font-mono tracking-widest">{section.id}</span>
                  <div className="h-[1px] w-12 bg-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight text-zinc-100">{section.title}</h3>
              {section.description && (
                <p className="text-xl text-zinc-400 leading-relaxed font-light">
                  {section.description}
                </p>
              )}
            </div>

            {/* Case 1: Research Insights Layout */}
            {section.insights && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-5xl">
                {section.insights.map((insight, idx) => (
                  <div key={idx} className="group bg-white/[0.03] border border-white/10 p-10 rounded-[2rem] backdrop-blur-sm hover:bg-white/[0.05] transition-all">
                    <p className="text-xl text-white italic mb-10 leading-relaxed font-serif">"{insight.quote}"</p>
                    <div className="flex flex-col gap-1">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">{insight.role}</p>
                      <p className="text-sm text-zinc-300">Takeaway: {insight.takeaway}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Case 2: Designs Gallery UI (Alternating Layout) */}
            {section.gallery ? (
              <div className="flex flex-col gap-48">
                {section.gallery.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`flex flex-col xl:flex-row gap-20 items-center ${
                      idx % 2 !== 0 ? 'xl:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Content Block */}
                    <div className="w-full xl:w-[35%]">
                      <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                      <p className="text-zinc-500 text-xs uppercase tracking-widest mb-6">{item.subtitle}</p>
                      <p className="text-zinc-400 text-base leading-relaxed mb-10">{item.description}</p>
                      
                      {item.decisions && (
                        <div className="space-y-4">
                          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-black">Design Logic</p>
                          {item.decisions.map((d, i) => (
                            <div key={i} className="flex gap-3 items-start border-l border-white/10 pl-4 py-1">
                              <p className="text-[14px] text-zinc-300 font-light leading-snug">{d}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Image Block */}
                    <div className="w-full xl:w-[65%] aspect-square bg-[#0d0d0d] border border-white/10 rounded-[3rem] flex items-center justify-center p-12 relative overflow-hidden group shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
                      <img 
                        src={item.imageUrl} 
                        alt={item.title}
                        className="max-h-full w-auto object-contain rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.9)] transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : !section.insights && section.decisions ? (
              /* Case 3: NEW Fallback for text-heavy sections (Journey, Reflection, etc.) */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
                {section.decisions.map((decision, i) => (
                  <div key={i} className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl flex gap-6 items-start">
                    <span className="text-zinc-700 font-mono text-xl">0{i + 1}</span>
                    <p className="text-zinc-300 text-base leading-relaxed">{decision}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </section>
    </main>
  );
}