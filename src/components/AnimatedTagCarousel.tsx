import React from "react";

const tags = [
  "Branding",
  "Web Design", 
  "UX & UI design",
  "Graphics",
  "SaaS",
  "No-Code",
  "Animation",
];

export default function AnimatedTagCarousel() {
  const tagList = [...tags, ...tags];

  return (
    <div className="relative w-full overflow-hidden flex justify-center">
      <div
        className="flex gap-4 animate-scroll-x whitespace-nowrap"
        style={{ animationDuration: "20s" }}
      >
        {tagList.map((tag, idx) => (
          <span
            key={idx}
            className="inline-block px-6 py-3 rounded-full font-medium text-sm backdrop-blur-md bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300 cursor-pointer select-none shadow-lg"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
