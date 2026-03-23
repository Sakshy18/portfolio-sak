import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft } from "lucide-react";
import { aboutMeData } from "../data/aboutMeData";
import type {
  GalleryItem,
  SkillGroup,
  EducationEntry,
  ExperienceEntry,
} from "../data/aboutMeData";
import SpotifyDandelion from "@/components/SpotifyDandelion";

// --- Shared Card Components ---
const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white/[0.03] border border-white/10 rounded-3xl p-10 ${className}`}>
    {children}
  </div>
);

// --- Section 01: Experience Component ---
const ExperienceView = ({ entries }: { entries: ExperienceEntry[] }) => (
  <div className="space-y-16 max-w-5xl">
    {entries.map((entry, idx) => (
      <div key={idx} className="relative pl-12">
        <div className="absolute top-0 left-0 h-full w-[2px] bg-white/5 flex flex-col items-center">
          <div className="w-4 h-4 rounded-full border border-white/20 bg-[#0a0a0a] -translate-y-2 flex items-center justify-center">
            <div className="w-1 h-1 bg-white rounded-full" />
          </div>
          {idx === entries.length - 1 && <div className="w-3 h-3 rounded-full border border-white/10 bg-[#0a0a0a] absolute -bottom-1" />}
        </div>

        <GlassCard>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-10">
            <div>
              <h4 className="text-2xl font-bold mb-1 tracking-tight">{entry.company}</h4>
              <p className="text-sm text-zinc-500 font-medium">{entry.location}</p>
            </div>
          </div>
          <p className="text-xl text-zinc-400 font-light leading-relaxed italic mb-10 max-w-3xl">"{entry.summary}"</p>
          
          <div className="border-t border-white/5 pt-10 space-y-12">
            {entry.roles.map((role, i) => (
              <div key={i} className="pl-6 border-l border-white/10 relative">
                <div className="flex items-center gap-6 mb-3">
                  <h5 className="text-lg font-bold tracking-tight text-white/90">{role.title}</h5>
                  <span className="text-xs text-zinc-600 font-mono tracking-wider">{role.duration}</span>
                </div>
                {role.type && (
                  <span className="inline-block bg-white/5 border border-white/10 text-zinc-400 px-3 py-1 rounded-full text-xs mb-6 font-medium">
                    {role.type}
                  </span>
                )}
                {role.description && (
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">{role.description}</p>
                )}
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    ))}
  </div>
);

// --- Section 02: Education Component ---
const EducationView = ({ entries }: { entries: EducationEntry[] }) => (
  <div className="grid grid-cols-1 gap-8 mb-20 w-full">
    {entries.map((entry, idx) => (
      <GlassCard key={idx} className="flex flex-col justify-between">
        <div>
          <h4 className="text-2xl font-bold mb-1 tracking-tight">{entry.institution}</h4>
          <p className="text-sm text-zinc-500 font-medium mb-6">{entry.location}</p>
          <h5 className="text-lg font-semibold tracking-tight text-white/90 mb-2">{entry.degree}</h5>
          {entry.duration && <p className="text-xs text-zinc-600 font-mono tracking-wider mb-6">{entry.duration}</p>}
          {entry.description && <p className="text-zinc-400 text-sm leading-relaxed mb-6 italic">"{entry.description}"</p>}
        </div>
        {entry.type && (
          <span className="inline-block bg-white/5 border border-white/10 text-zinc-400 px-3 py-1 rounded-full text-xs font-medium self-start mt-4">
            {entry.type}
          </span>
        )}
      </GlassCard>
    ))}
  </div>
);

// --- Section 03: Skills Component ---
const SkillsView = ({ groups }: { groups: SkillGroup[] }) => (
  <GlassCard className="max-w-4xl space-y-10">
    {groups.map((group, idx) => (
      <div key={idx} className={`${idx !== 0 ? 'border-t border-white/5 pt-10' : ''}`}>
        <h4 className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-black mb-8">{group.category}</h4>
        <div className="flex flex-wrap gap-3">
          {group.tags.map((tag, i) => (
            <span key={i} className="bg-white/5 border border-white/10 text-zinc-300 px-4 py-2 rounded-full text-sm font-medium transition hover:border-white/20 hover:bg-white/10">
              {tag}
            </span>
          ))}
        </div>
      </div>
    ))}
  </GlassCard>
);

// --- Section 04: Hobbies Component ---
type SpotifyNode = {
  artist: string;
  genre: string;
  value: number;
};

const HobbiesView = ({ items }: { items: GalleryItem[] }) => {
  const [activeNode, setActiveNode] = useState<SpotifyNode | null>(null);
  const [timeoutRef, setTimeoutRef] = useState<ReturnType<typeof setTimeout> | null>(null);

  const handleHover = (node: SpotifyNode | null) => {
    if (timeoutRef) clearTimeout(timeoutRef);
    setActiveNode(node);
  };

  const handleLeave = () => {
    const timeout = setTimeout(() => {
      setActiveNode(null);
    }, 200);
    setTimeoutRef(timeout);
  };

  return (
    <div className="flex flex-col gap-48">
      {items.map((item, idx) => {

        // ✅ SIMPLE GRID SECTION
        if (item.type === "grid" && item.images && !Array.isArray(item.images)) {
          const gridImages = item.images;

          return (
            <div key={idx} className="w-full">
              
              {/* MAIN TITLE */}
              <div className="mb-16">
                <h4 className="text-3xl font-bold">{item.title}</h4>
              </div>
            

              {/* CREATE */}
              <div>
                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-6">
                  Create
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {gridImages.create.map((img, i) => (
                    <div
                      key={i}
                      className="aspect-square overflow-hidden rounded-2xl border border-white/5 bg-[#0d0d0d] group"
                    >
                      <img
                        src={img}
                        alt={`create-${i}`}
                        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>

                 <div className="mb-20 mt-20">
                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-6">
                  Capture
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {gridImages.capture.map((img, i) => (
                    <div
                      key={i}
                      className="aspect-square overflow-hidden rounded-2xl border border-white/5 bg-[#0d0d0d] group"
                    >
                      <img
                        src={img}
                        alt={`capture-${i}`}
                        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>


                <div className="mb-20">
                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-6">
                  Curate Experiences
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {gridImages.curate.map((img, i) => (
                    <div
                      key={i}
                      className="aspect-square overflow-hidden rounded-2xl border border-white/5 bg-[#0d0d0d] group"
                    >
                      <img
                        src={img}
                        alt={`curate-${i}`}
                        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        // ✅ EXISTING (UNCHANGED)
        return (
          <div
            key={idx}
            className={`flex flex-col xl:flex-row gap-20 items-center ${
              idx % 2 !== 0 ? "xl:flex-row-reverse" : ""
            }`}
          >
            {/* LEFT PANEL */}
            <div className="w-full xl:w-[35%] transition-all duration-300 ease-out">
              <h4 className="text-2xl font-bold mb-2">
                {item.type === "spotify"
                  ? activeNode?.artist || item.title
                  : item.title}
              </h4>

              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-6">
                {item.type === "spotify"
                  ? activeNode?.genre || item.subtitle
                  : item.subtitle}
              </p>

              <p className="text-zinc-400 text-base leading-relaxed mb-10">
                {item.type === "spotify"
                  ? activeNode
                    ? `You’ve spent ~${activeNode.value} hours listening to ${activeNode.artist}.`
                    : item.description
                  : item.description}
              </p>

              {item.decisions && (
                <div className="space-y-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-black">
                    Medium Details
                  </p>

                  {item.type === "spotify" && activeNode ? (
                    <>
                      <div className="border-l border-white/10 pl-4">
                        <p className="text-zinc-300">
                          Genre → {activeNode.genre}
                        </p>
                      </div>
                      <div className="border-l border-white/10 pl-4">
                        <p className="text-zinc-300">
                          Listening → {activeNode.value} hrs
                        </p>
                      </div>
                    </>
                  ) : (
                    item.decisions.map((d, i) => (
                      <div key={i} className="border-l border-white/10 pl-4">
                        <p className="text-zinc-300">{d}</p>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* RIGHT PANEL */}
            <div className="w-full xl:w-[65%] aspect-square bg-[#0d0d0d] border border-white/5 rounded-[3rem] flex items-center justify-center p-0 xl:p-6 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

              {item.type === "spotify" ? (
                <SpotifyDandelion
                  onHover={handleHover}
                  onLeave={handleLeave}
                />
              ) : (
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="max-h-full w-auto object-contain rounded-2xl"
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// --- Main About Page Component ---
export default function AboutMe() {
  const navigate = useNavigate();
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
    Object.values(sectionRefs.current).forEach((section) => { if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => { sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <main className="flex h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden">
      {/* SIDEBAR (30%) */}
      <aside className="w-[30%] h-full flex flex-col justify-between p-10 md:p-12 border-r border-white/5 bg-[#0a0a0a] z-20">
        <div>
          <button onClick={() => navigate("/")} className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 text-[10px] uppercase tracking-[0.2em]">
            <ChevronLeft size={14} /> Back to Portfolio
          </button>
          
          <div className="flex flex-col gap-6 mb-16">
            <div className="w-24 h-24 rounded-full border border-white/10 p-1 bg-white/[0.02]">
                <img src={aboutMeData.profilePicUrl} alt={aboutMeData.name} className="w-full h-full rounded-full object-cover grayscale" />
            </div>
            <div>
                <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest mb-1">{aboutMeData.title}</p>
                <h1 className="text-3xl font-bold leading-tight mb-2">{aboutMeData.name}</h1>
                <p className="text-zinc-500 text-[13px] max-w-[220px] leading-relaxed">{aboutMeData.summary}</p>
            </div>
          </div>
        </div>

        {/* REFINED NUMBER INDICATOR: Adjusted Positioning & Opacity */}
        <div className="relative h-64 flex items-end">
          <span className="absolute -bottom-12 -left-10 text-[16rem] font-bold text-white/[0.05] leading-none select-none pointer-events-none z-0">
            {activeSection}
          </span>
          <div className="relative z-10 mb-8">
            <p className="text-zinc-600 font-mono text-[9px] uppercase tracking-[0.3em] mb-2">About Me // Sakshi</p>
            <h2 className="text-5xl font-bold tracking-tighter">
                {aboutMeData.sections.find(s => s.id === activeSection)?.label}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 max-w-[280px]">
          {aboutMeData.sections.map((s) => (
            <button key={s.id} onClick={() => scrollToSection(s.id)} className={`flex flex-col items-center justify-center py-4 rounded-xl border transition-all duration-500 ${activeSection === s.id ? 'bg-white/10 border-white/20 scale-105 shadow-2xl' : 'bg-white/[0.02] border-white/5 hover:border-white/10'}`}>
              <span className="text-[10px] text-zinc-500 font-mono mb-1">{s.id}</span>
              <span className="text-[9px] uppercase font-bold tracking-tight opacity-80">{s.label}</span>
            </button>
          ))}
        </div>
      </aside>

      {/* CONTENT (70%) */}
      <section className="w-[70%] h-full overflow-y-auto scroll-smooth custom-scrollbar bg-[#0a0a0a]">
        {aboutMeData.sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            ref={(el) => {
              sectionRefs.current[section.id] = el;
            }}
            className="min-h-screen p-16 md:p-32 flex flex-col justify-start border-b border-white/5"
          >
            <div className="max-w-3xl mb-24">
              <div className="flex items-center gap-4 mb-8 opacity-20">
                  <span className="text-xs font-mono tracking-widest">{section.id}</span>
                  <div className="h-[1px] w-16 bg-white" />
              </div>
              <h3 className="text-4xl font-bold mb-8 text-zinc-100 tracking-tight">{section.title}</h3>
              {section.description && <p className="text-2xl text-zinc-400 leading-relaxed font-light">{section.description}</p>}
            </div>

            {section.experience && <ExperienceView entries={section.experience} />}
            {section.education && <EducationView entries={section.education} />}
            {section.skills && <SkillsView groups={section.skills} />}
            {section.hobbiesGallery && <HobbiesView items={section.hobbiesGallery} />}
          </div>
        ))}
      </section>
    </main>
  );
}
