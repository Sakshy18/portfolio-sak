import "./landing-showcase.css";
import flip1 from "/assets/flip1.svg";
import flip2 from "/assets/flip2.svg";
import flip3 from "/assets/flip3.svg";
import flip4 from "/assets/flip4.svg";
import flip5 from "/assets/flip5.svg";
import flip6 from "/assets/flip6.svg";
import flip7 from "/assets/flip7.svg";
import flip8 from "/assets/flip8.svg";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientText from "./GradientText";

gsap.registerPlugin(ScrollTrigger);

const images = [flip1, flip2, flip3, flip4, flip5, flip6, flip7, flip8];

export default function LandingCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLImageElement[]>([]);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;
    const cards = cardsRef.current;

    const ctx = gsap.context(() => {
      gsap.set(cards, {
        transformOrigin: "left center",
        transformStyle: "preserve-3d",
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => "+=" + window.innerHeight * (images.length + 0.5),
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress * images.length;

          cards.forEach((card, i) => {
            const p = progress - i;
            const rotation = Math.min(
              Math.max(p * 120, 0),
              i === images.length - 1 ? 0 : 120
            );

            gsap.set(card, {
              rotateY: rotation,
              zIndex: images.length - i,
            });
          });
        },
      });

      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert();
      cardsRef.current = [];
    };
  }, []);

  return (
    <section ref={sectionRef} className="clay-section">
      <div className="clay-sticky">
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

        <div className="clay-stage">
          <div className="clay-frame">
            {images.map((flip, i) => (
              <img
                key={i}
                src={flip}
                ref={(el) => {
                  if (el) cardsRef.current[i] = el;
                }}
                className="clay-card"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
