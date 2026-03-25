import "./landing-showcase.css";
import flip1 from "/assets/flip1.svg";
import flip2 from "/assets/flip2.svg";
import flip3 from "/assets/flip3.svg";
import flip4 from "/assets/flip4.svg";
import flip5 from "/assets/flip5.svg";
import flip6 from "/assets/flip6.svg";
import flip7 from "/assets/flip7.svg";
import flip8 from "/assets/flip8.svg";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientText from "./GradientText";
import SuspenseImage from "./ui/SuspenseImage";

gsap.registerPlugin(ScrollTrigger);

const images = [flip1, flip2, flip3, flip4, flip5, flip6, flip7, flip8];

export default function LandingCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLImageElement[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isLiteMode, setIsLiteMode] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      images.slice(0, 2).forEach((src) => {
        const img = new Image();
        img.decoding = "async";
        img.src = src;
      });
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");

    const updateMobile = () => setIsMobile(mediaQuery.matches);
    updateMobile();

    mediaQuery.addEventListener("change", updateMobile);
    return () => mediaQuery.removeEventListener("change", updateMobile);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateLiteMode = () => {
      const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
      setIsLiteMode(mediaQuery.matches || memory <= 4);
    };

    updateLiteMode();
    mediaQuery.addEventListener("change", updateLiteMode);
    return () => mediaQuery.removeEventListener("change", updateLiteMode);
  }, []);

  useLayoutEffect(() => {
    if (!sectionRef.current || isMobile || isLiteMode) return;
    const cards = cardsRef.current;

    const ctx = gsap.context(() => {
      gsap.set(cards, {
        transformOrigin: "left center",
        transformStyle: "preserve-3d",
        force3D: true,
        willChange: "transform",
      });

      const rotationSetters = cards.map((card) =>
        gsap.quickSetter(card, "rotateY", "deg")
      );
      const zIndexSetters = cards.map((card) => gsap.quickSetter(card, "zIndex"));
      const previousRotation = cards.map(() => -1);
      const previousZIndex = cards.map(() => -1);

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => "+=" + window.innerHeight * (images.length + 0.5),
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress * images.length;

          cards.forEach((_, i) => {
            const p = progress - i;
            const rotation = Math.min(
              Math.max(p * 120, 0),
              i === images.length - 1 ? 0 : 120
            );
            const zIndex = images.length - i;

            if (Math.abs(rotation - previousRotation[i]) > 0.2) {
              rotationSetters[i](rotation);
              previousRotation[i] = rotation;
            }

            if (previousZIndex[i] !== zIndex) {
              zIndexSetters[i](zIndex);
              previousZIndex[i] = zIndex;
            }
          });
        },
      });

      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert();
      cardsRef.current = [];
    };
  }, [isMobile, isLiteMode]);

  return (
    <section ref={sectionRef} className={`clay-section ${isMobile || isLiteMode ? "clay-section-mobile" : ""}`}>
      <div className={`clay-sticky ${isMobile || isLiteMode ? "clay-sticky-mobile" : ""}`}>
        <div className="flex flex-col items-center mb-16 text-center w-full">
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
              fontWeight: 200,
              textAlign: "center",
              width: "100%"
            }}
          >
         Landing Page Designs
          </GradientText>
          <p className="text-[1.2rem] mt-3 text-gray-400 text-center w-full">Few landing page designs</p>
        </div>

        {isMobile || isLiteMode ? (
          <div className="clay-stack">
            {images.map((flip, i) => (
              <SuspenseImage
                key={i}
                src={flip}
                className="clay-card clay-card-static"
                alt={`Landing design ${i + 1}`}
                priority={i < 3}
              />
            ))}
          </div>
        ) : (
          <div className="clay-stage">
            <div className="clay-frame">
              {images.map((flip, i) => (
                <SuspenseImage
                  key={i}
                  src={flip}
                  ref={(el) => {
                    if (el) cardsRef.current[i] = el;
                  }}
                  className="clay-card"
                  alt={`Landing design ${i + 1}`}
                  priority={i < 3}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
