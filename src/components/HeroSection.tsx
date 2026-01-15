import AnimatedTagCarousel from "./AnimatedTagCarousel";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] pb-8">
      {/* Animated Tag Carousel with glassy effect */}
      <div className="mt-6 mb-2 w-full max-w-96 relative">
        <AnimatedTagCarousel />
        {/* Left fade blur effect */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        {/* Right fade blur effect */}
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
      </div>
      
      {/* Headline with green gradient */}
      <h1 className="text-[2.8rem] md:text-6xl font-semibold leading-tight tracking-tight">
        <span className="text-gray-400 font-normal"  style={{ fontFamily: "'Georgia', serif" }}> I'm Sakshi,</span><br />
        <span 
          className="font-bold bg-clip-text text-transparent"
          style={{fontFamily: "'Georgia', serif" , fontWeight: 200,
            backgroundImage: `linear-gradient(45deg, var(--color-gradient-from), var(--color-gradient-via), var(--color-gradient-to))`
          }}
        >
          I Design & Develop.
        </span>
      </h1>
      
      {/* Description in gray */}
      <p className="max-w-xl text-lg mt-4 font-normal text-gray-400">
        love building playful digital experiences that blend creativity and functionality.
      </p>
      
      {/* Updated CTA buttons with animations */}
      <div className="flex gap-4 mt-8">
        {/* Resume Button - Pastel Green */}
       <button className="group relative px-8 py-3 rounded-full font-medium transition-all duration-500 overflow-hidden bg-[#ecf39e] text-black hover:scale-105">
  {/* Original text that slides up and fades out */}
  <span className="block transition-all duration-200 group-hover:-translate-y-full group-hover:opacity-0">
    Resume
  </span>
  
  {/* New text that slides up from below */}
  <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 translate-y-full group-hover:translate-y-0">
    Download
  </span>
</button>

        {/* Contact Button - Glassy */}
       <button className="group relative px-8 py-3 rounded-full font-medium transition-all duration-500 overflow-hidden backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-105">
  {/* Original text that slides up and fades out */}
  <span className="block transition-all duration-200 group-hover:-translate-y-full group-hover:opacity-0">
    Contact
  </span>
  
  {/* New text that slides up from below */}
  <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 translate-y-full group-hover:translate-y-0">
    Let's Talk
  </span>
</button>

      </div>
    </section>
  );
}
