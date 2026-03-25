import "./landing-showcase.css";
import flip1 from "/assets/flip1.png";
import flip2 from "/assets/flip2.png";
import flip3 from "/assets/flip3.png";
import flip4 from "/assets/flip4.png";
import flip5 from "/assets/flip5.png";
import flip6 from "/assets/flip6.png";
import flip7 from "/assets/flip7.png";
import flip8 from "/assets/flip8.png";
import design1 from "/assets/designs/1.svg";
import design2 from "/assets/designs/2.svg";
import design3 from "/assets/designs/3.svg";
import design4 from "/assets/designs/4.svg";
import design5 from "/assets/designs/5.svg";
import design6 from "/assets/designs/6.svg";
import design7 from "/assets/designs/7.svg";
import design8 from "/assets/designs/8.svg";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientText from "./GradientText";
import SuspenseImage from "./ui/SuspenseImage";

gsap.registerPlugin(ScrollTrigger);

const desktopImages = [flip1, flip2, flip3, flip4, flip5, flip6, flip7, flip8];
const mobileImages = [design1, design2, design3, design4, design5, design6, design7, design8];

export default function LandingCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLImageElement[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isLiteMode, setIsLiteMode] = useState(false);
  const [loadedMap, setLoadedMap] = useState<Record<string, boolean>>({});
  const activeImages = isMobile || isLiteMode ? mobileImages : desktopImages;

  useEffect(() => {
    const timer = window.setTimeout(() => {
      activeImages.slice(0, 3).forEach((src) => {
        const img = new Image();
        img.decoding = "async";
        img.src = src;
      });
    }, 0);

    return () => window.clearTimeout(timer);
  }, [activeImages]);

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
        end: () => "+=" + window.innerHeight * (desktopImages.length + 0.5),
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress * desktopImages.length;

          cards.forEach((_, i) => {
            const p = progress - i;
            const rotation = Math.min(
              Math.max(p * 120, 0),
              i === desktopImages.length - 1 ? 0 : 120
            );
            const zIndex = desktopImages.length - i;

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

  const setLoaded = (src: string) => {
    setLoadedMap((prev) => (prev[src] ? prev : { ...prev, [src]: true }));
  };

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
            {activeImages.map((imageSrc, i) => (
              <div key={i} className="clay-card-static-wrap">
                <div
                  className={`clay-skeleton ${loadedMap[imageSrc] ? "clay-skeleton-hidden" : ""}`}
                  aria-hidden="true"
                />
                <SuspenseImage
                  src={imageSrc}
                  className={`clay-card clay-card-static ${loadedMap[imageSrc] ? "clay-image-loaded" : "clay-image-loading"}`}
                  alt={`Landing design ${i + 1}`}
                  priority={i < 3}
                  onLoad={() => setLoaded(imageSrc)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="clay-stage">
            <div className="clay-frame">
              {activeImages.map((imageSrc, i) => (
                <div key={i} className="clay-card-wrap">
                  <div
                    className={`clay-skeleton ${loadedMap[imageSrc] ? "clay-skeleton-hidden" : ""}`}
                    aria-hidden="true"
                  />
                  <SuspenseImage
                    src={imageSrc}
                    ref={(el) => {
                      if (el) cardsRef.current[i] = el;
                    }}
                    className={`clay-card ${loadedMap[imageSrc] ? "clay-image-loaded" : "clay-image-loading"}`}
                    alt={`Landing design ${i + 1}`}
                    priority={i < 3}
                    onLoad={() => setLoaded(imageSrc)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
