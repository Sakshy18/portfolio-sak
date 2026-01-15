import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const baseItems = [
  { id: 1, title: "AI Content", image: "/assets/designs/3.svg" },
  { id: 2, title: "Brand Strategy", image: "/assets/designs/17.svg" },
  { id: 3, title: "Growth Design", image: "/assets/designs/13.svg" },
  { id: 4, title: "Conversion UX", image: "/assets/designs/20.svg" },
   { id: 5, title: "Conversion UX", image: "/assets/designs/29.svg" },
    { id: 6, title: "Conversion UX", image: "/assets/designs/26.svg" },
     { id: 7, title: "Conversion UX", image: "/assets/designs/36.svg" },
      { id: 8, title: "Conversion UX", image: "/assets/designs/43.svg" },
];

// duplicate for seamless loop
const items = [...baseItems, ...baseItems];

export default function StayAheadCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [maxDrag, setMaxDrag] = useState(0);
  const animationRef = useRef<any>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const totalWidth = trackRef.current.scrollWidth;
    const visibleWidth = trackRef.current.parentElement!.offsetWidth;
    setMaxDrag(totalWidth - visibleWidth);
  }, []);

  useEffect(() => {
    if (!maxDrag) return;

    animationRef.current = animate(x, [-maxDrag / 2, 0], {
      ease: "linear",
      duration: 15,
      repeat: Infinity,
      repeatType: "loop",
    });

    return () => animationRef.current?.stop();
  }, [maxDrag]);

  return (
    <section className="w-full py-32 bg-black overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-8">
         <div className="flex flex-col items-center mb-16">
     <div className="text-6xl bg-clip-text text-transparent"  style={{fontFamily: "'Georgia', serif" , fontWeight: 500,
            backgroundImage: `linear-gradient(45deg, var(--color-gradient-from), var(--color-gradient-via), var(--color-gradient-to))`
          }}>
        <h2>Graphic Designs </h2>
       
      </div>
       <p className="text-2xl mt-1.5 text-gray-400 ">Only the top picks, click on view more</p>
        </div>

        <div
          className="overflow-hidden"
          onMouseEnter={() => animationRef.current?.stop()}
          onMouseLeave={() => {
            animationRef.current = animate(x, [-maxDrag / 2, 0], {
              ease: "linear",
              duration: 15,
              repeat: Infinity,
              repeatType: "loop",
            });
          }}
        >
          <motion.div
            ref={trackRef}
            className="flex gap-8 cursor-grab active:cursor-grabbing"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -maxDrag, right: 0 }}
            dragElastic={0.08}
            dragMomentum
          >
            {items.map((item, i) => (
              <motion.div
                key={i}
                className="min-w-[420px] h-[420px] rounded-3xl overflow-hidden relative shadow-2xl"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <img
                  src={item.image}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0" />

              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-16">
        <a href="/designs">
             <button className="group relative px-8 py-3 rounded-full font-medium transition-all duration-500 overflow-hidden bg-[#ecf39e] text-black hover:scale-105">
  {/* Original text that slides up and fades out */}
  <span className="block transition-all duration-200 group-hover:-translate-y-full group-hover:opacity-0">
    View All
  </span>
  
  {/* New text that slides up from below */}
  <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 translate-y-full group-hover:translate-y-0">
    Now
  </span>
</button>
        </a>
        </div>
      </div>
    </section>
  );
}
