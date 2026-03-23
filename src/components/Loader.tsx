"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader({ onFinish }: { onFinish?: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.random() * 6 + 2;

      if (value >= 100) {
        value = 100;
        clearInterval(interval);

        setTimeout(() => {
          onFinish?.();
        }, 500);
      }

      setProgress(value);
    }, 60);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* CORNER BRACKETS */}
 <div className="absolute inset-0 pointer-events-none">

  {/* TOP LEFT */}
  <div className="absolute top-68 left-88 w-6 h-6">
    <div className="absolute top-0 left-0 w-full h-[1.5px] bg-white/60" />
    <div className="absolute top-0 left-0 h-full w-[1.5px] bg-white/60" />
  </div>

  {/* TOP RIGHT */}
  <div className="absolute top-68 right-88 w-6 h-6">
    <div className="absolute top-0 right-0 w-full h-[1.5px] bg-white/60" />
    <div className="absolute top-0 right-0 h-full w-[1.5px] bg-white/60" />
  </div>

  {/* BOTTOM LEFT */}
  <div className="absolute bottom-68 left-88 w-6 h-6">
    <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white/60" />
    <div className="absolute bottom-0 left-0 h-full w-[1.5px] bg-white/60" />
  </div>

  {/* BOTTOM RIGHT */}
  <div className="absolute bottom-68 right-88 w-6 h-6">
    <div className="absolute bottom-0 right-0 w-full h-[1.5px] bg-white/60" />
    <div className="absolute bottom-0 right-0 h-full w-[1.5px] bg-white/60" />
  </div>

</div>

      {/* CENTER CONTENT */}
      <div className="flex flex-col items-center gap-6 w-[320px]">

        {/* LOADING TEXT */}
        <p className="text-[10px] tracking-[0.4em] text-white/40 uppercase">
          Loading
        </p>

        {/* BIG PERCENT */}
        <div className="flex items-end gap-1">
          <motion.span
            key={Math.floor(progress)}
            className="text-[96px] font-bold text-white leading-none tracking-tight"
          >
            {Math.floor(progress)}
          </motion.span>
          <span className="text-2xl text-white/50 mb-4">%</span>
        </div>

        {/* PROGRESS BAR */}
        <div className="w-full h-[2px] bg-white/10 relative overflow-hidden">
          <motion.div
            className="h-full"
            style={{
              width: `${progress}%`,
              background:
                "linear-gradient(90deg, #4f772d, #90a955, #ecf39e)",
              boxShadow: "0 0 12px rgba(236,243,158,0.6)"
            }}
          />
        </div>

        {/* OPTIONAL FOOTER TEXT */}
        <p className="text-[10px] tracking-[0.3em] text-white/20 uppercase mt-2">
          Portfolio
        </p>

      </div>
    </motion.div>
  );
}