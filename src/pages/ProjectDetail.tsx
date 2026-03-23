import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { projectsData } from "../data/projectsData";
import { ChevronLeft, ExternalLink } from "lucide-react";
import SuspenseImage from "@/components/ui/SuspenseImage";

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
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [project]);

  if (!project)
    return <div className="text-white p-20">Project not found.</div>;

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  // Condition for Aspect Ratio based on slug
  const isWebsite = project.slug.includes("website");

  return (
    <main className="flex flex-col md:flex-row h-auto md:h-screen bg-[#0a0a0a] text-white font-sans overflow-visible md:overflow-hidden">
      {/* LEFT SIDE: FIXED SIDEBAR (30% Width) */}
      <aside className="w-full md:w-[30%] h-auto md:h-full flex flex-col justify-between p-6 md:p-12 border-b md:border-b-0 md:border-r border-white/5 relative bg-[#0a0a0a] z-20">
        <div>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-8 text-[10px] uppercase tracking-[0.2em]"
          >
            <ChevronLeft size={14} /> Case Study
          </button>

          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-3">
            {project.title}
          </h1>
          <div className="flex items-center gap-4">
            <p className="text-zinc-500 text-sm md:text-base leading-snug max-w-full md:max-w-[200px]">
              {project.subtitle}
            </p>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-white/10 hover:bg-white/5 transition-all text-zinc-400 hover:text-white"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Dynamic Number Indicator */}
        <div className="relative py-6 md:py-12">
          <span className="hidden md:block absolute top-0 left-0 text-[12rem] font-bold text-white/[0.02] select-none leading-none -translate-x-8">
            {activeSection}
          </span>
          <div className="relative z-10 pt-2 md:pt-16">
            <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-1">
              Section {activeSection}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {project.sections.find((s) => s.id === activeSection)?.label}
            </h2>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 w-full md:max-w-[280px]">
          {project.sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className={`flex flex-col items-center justify-center py-3 rounded-lg border transition-all duration-300
                ${
                  activeSection === s.id
                    ? "bg-white/10 border-white/20 scale-105"
                    : "bg-white/[0.02] border-white/5 hover:border-white/10"
                }`}
            >
              <span className="text-[9px] text-zinc-500 font-mono mb-0.5">
                {s.id}
              </span>
              <span className="text-[8px] uppercase font-bold tracking-tighter opacity-70">
                {s.label}
              </span>
            </button>
          ))}
        </div>
      </aside>

      {/* RIGHT SIDE: SCROLLABLE CONTENT (70% Width) */}
      <section className="w-full md:w-[70%] h-auto md:h-full overflow-visible md:overflow-y-auto scroll-smooth custom-scrollbar bg-[#0a0a0a]">
        {/* TOP HERO: Video & Metadata (Role/Tools) */}
        <div className="p-6 md:p-24 pb-0">
          {/* Only render video container if videoHero exists */}
          {/* Case 1: Video Hero */}
    {project.videoHero ? (
      <div className="w-full aspect-video bg-[#0d0d0d] border border-white/10 rounded-[1.5rem] md:rounded-[3rem] overflow-hidden mb-8 md:mb-12 shadow-2xl relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10" />
        <video 
          src={project.videoHero} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        />
      </div>
    ) : project.heroImage ? (
      /* Case 2: Image Hero (For TynTan / Stepout) */
      <div className="w-full aspect-video bg-[#0d0d0d] border border-white/10 rounded-[1.5rem] md:rounded-[3rem] overflow-hidden mb-8 md:mb-12 shadow-2xl relative flex items-center justify-center p-4 md:p-12">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
        <SuspenseImage
          src={project.heroImage} 
          alt={`${project.title} Hero`} 
          className="w-full h-full object-contain rounded-2xl"
          priority
        />
      </div>
    ) : null}

          {/* Role & Tools Grid - Unified Style */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12 md:mb-20">
            <div className="bg-white/[0.03] border border-white/5 p-6 md:p-8 rounded-3xl">
              <p className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] mb-3">
                Role
              </p>
              <p className="text-sm font-medium text-white leading-relaxed">
                {project.role || "Designer"}
              </p>
            </div>
            <div className="md:col-span-3 bg-white/[0.03] border border-white/5 p-6 md:p-8 rounded-3xl">
              <p className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] mb-3">
                Tools & Expertise
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tools?.map((tool) => (
                  <span
                    key={tool}
                    className="text-[11px] bg-white/5 px-4 py-1.5 rounded-full border border-white/10 text-zinc-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SECTION MAPPING */}
        {project.sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            ref={(el) => {
              sectionRefs.current[section.id] = el;
            }}
            className="h-auto min-h-[50vh] p-6 md:p-24 flex flex-col justify-start border-b border-white/5"
          >
            {/* Section Heading & Description */}
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-3 mb-6 opacity-30">
                <span className="text-[10px] font-mono tracking-widest">
                  {section.id}
                </span>
                <div className="h-[1px] w-12 bg-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight text-zinc-100">
                {section.title}
              </h3>
              {section.description && (
                <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
                  {section.description}
                </p>
              )}
            </div>

            {/* Metrics Display */}
            {section.metrics && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-16 max-w-3xl">
                {section.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="bg-white/[0.03] border border-white/5 p-6 rounded-2xl"
                  >
                    <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-1">
                      {m.label}
                    </p>
                    <p className="text-3xl font-bold text-white">{m.value}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Case 1: Research Insights */}
            {section.insights && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-5xl">
                {section.insights.map((insight, idx) => (
                  <div
                    key={idx}
                    className="group bg-white/[0.03] border border-white/10 p-10 rounded-[2rem] backdrop-blur-sm hover:bg-white/[0.05] transition-all"
                  >
                    <p className="text-xl text-white italic mb-10 leading-relaxed font-serif">
                      "{insight.quote}"
                    </p>
                    <div className="flex flex-col gap-1">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
                        {insight.role}
                      </p>
                      <p className="text-sm text-zinc-300">
                        Takeaway: {insight.takeaway}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Case 2: Designs Gallery UI */}
            {section.gallery && (
              <div className="flex flex-col gap-40">
                {section.gallery.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col xl:flex-row gap-20 items-center ${
                      idx % 2 !== 0 ? "xl:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content Block */}
                    <div className="w-full xl:w-[35%]">
                      <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                      <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-6">
                        {item.subtitle}
                      </p>
                      <p className="text-zinc-400 text-base leading-relaxed mb-8">
                        {item.description}
                      </p>
                      {item.decisions && (
                        <div className="space-y-4">
                          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-black">
                            Logic
                          </p>
                          {item.decisions.map((d, i) => (
                            <div
                              key={i}
                              className="flex gap-3 items-start border-l border-white/10 pl-4 py-1"
                            >
                              <p className="text-[14px] text-zinc-300 font-light leading-snug">
                                {d}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Media Block: Fixed for White Gaps */}
                    <div
                      className={`w-full xl:w-[65%] ${isWebsite ? "aspect-video p-3 md:p-4" : "aspect-square p-4 md:p-12"} bg-[#0d0d0d] border border-white/10 rounded-[1.5rem] md:rounded-[3rem] flex items-center justify-center relative overflow-hidden group shadow-2xl`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
                      {item.video ? (
                        <video
                          src={item.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className={`
                      ${isWebsite ? "w-full h-full object-cover" : "max-h-full w-auto object-contain"} 
                      rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.9)] transition-transform duration-700 group-hover:scale-[1.02]
                    `}
                        />
                      ) : (
                        <SuspenseImage
                          src={item.imageUrl}
                          alt={item.title}
                          className={`
                      ${isWebsite ? "w-full h-full object-cover" : "max-h-full w-auto object-contain"} 
                      rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.9)] transition-transform duration-700 group-hover:scale-[1.02]
                    `}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Case 3: Decisions Fallback */}
            {!section.gallery && !section.insights && section.decisions && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
                {section.decisions.map((decision, i) => (
                  <div
                    key={i}
                    className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl flex gap-6 items-start"
                  >
                    <span className="text-zinc-700 font-mono text-xl">
                      0{i + 1}
                    </span>
                    <p className="text-zinc-300 text-base leading-relaxed">
                      {decision}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
