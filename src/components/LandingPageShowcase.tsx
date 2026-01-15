import "./landing-showcase.css";
import flip1 from "/assets/flip1.svg";
import flip2 from "/assets/flip2.svg";
import flip3 from "/assets/flip3.svg";
import flip4 from "/assets/flip4.svg";
import flip5 from "/assets/flip5.svg";
import flip6 from "/assets/flip6.svg";
import flip7 from "/assets/flip7.svg";
import flip8 from "/assets/flip8.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const images = [flip1, flip2, flip3, flip4, flip5, flip6, flip7, flip8];

export default function LandingCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLImageElement[]>([]);

useEffect(() => {
  const cards = cardsRef.current;

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
    onUpdate: self => {
      const progress = self.progress * images.length;

      cards.forEach((card, i) => {
        const p = progress - i;
        const rotation = Math.min(Math.max(p * 120, 0), i === images.length - 1 ? 0 : 120);

        gsap.set(card, {
          rotateY: rotation,
          zIndex: images.length - i,
        });
      });
    }
  });

  ScrollTrigger.refresh();
}, []);


return (
  <section ref={sectionRef} className="clay-section">
    <div className="clay-sticky">

      {/* Heading */}
       <div className="flex flex-col items-center mb-16">
     <div className="text-6xl bg-clip-text text-transparent"  style={{fontFamily: "'Georgia', serif" , fontWeight: 500,
            backgroundImage: `linear-gradient(45deg, var(--color-gradient-from), var(--color-gradient-via), var(--color-gradient-to))`
          }}>
        <h2>Landing Page Designs</h2>
       
      </div>
       <p className="text-2xl mt-1.5 text-gray-400 ">Few landing page designs</p>
   </div>

      {/* Stage */}
      <div className="clay-stage">
        <div className="clay-frame">
          {images.map((flip, i) => (
            <img
              key={i}
              src={flip}
              ref={el => (cardsRef.current[i] = el!)}
              className="clay-card"
            />
          ))}
        </div>
      </div>

    </div>
  </section>
);
}