"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type Node = {
  artist: string;
  genre: string;
  value: number;
};

const DATA: Node[] = [
  { artist: "Arijit Singh", genre: "Bollywood", value: 30 },
  { artist: "The Neighbourhood", genre: "Rock and Pop", value: 80 },
  { artist: "Nusrat Fateh Ali Khan", genre: "Qawwali & Sufi", value: 85 },
  { artist: "Talha Anjum", genre: "Indie and Hip Hop", value: 60 },
  { artist: "Taylor Swift", genre: "Pop", value: 75 },
  { artist: "The Weeknd", genre: "Pop", value: 85 },
  { artist: "Jagjit Singh", genre: "Ghazal", value: 50 }
];

const COLORS = [
  "#FF6B6B",
  "#E54800",
  "#7D9F00",
  "#6C5CE7",
  "#00D1B2",
  "#FF9F1C",
  "#A29BFE"
];

const CENTER = 150;

export default function SpotifyDandelion({
  onHover,
  onLeave
}: {
  onHover?: (node: Node | null) => void;
  onLeave?: () => void;
}) {
  const [active, setActive] = useState<number | null>(null);

  // ✅ Stable radial layout
  const nodes = useMemo(() => {
    return DATA.map((node, i) => {
      const angle = (i / DATA.length) * Math.PI * 2;
      const radius = 95;

      return {
        ...node,
        x: CENTER + radius * Math.cos(angle),
        y: CENTER + radius * Math.sin(angle),
        size: Math.max(12, node.value / 5),
        color: COLORS[i % COLORS.length]
      };
    });
  }, []);

  return (
    <svg viewBox="0 0 300 300" className="w-full h-full max-w-[500px]">
      
      {/* 🌑 CENTER NODE (subtle breathing) */}
      <motion.circle
        cx={CENTER}
        cy={CENTER}
        r={28}
        fill="#e5e5e5"
        animate={{
          r: [28, 31, 28]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {nodes.map((n, i) => (
        <motion.g
          key={i}
          // 🌿 subtle floating sway
          animate={{
            x: [0, 4, -2, 0],
            y: [0, -2, 4, 0]
          }}
          transition={{
            duration: 6 + i, // slight variation per node
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* 🔗 LINE */}
          <motion.line
            x1={CENTER}
            y1={CENTER}
            x2={n.x}
            y2={n.y}
            initial={false}
            animate={{
              strokeWidth: active === i ? 2 : 1,
              stroke:
                active === i
                  ? "rgba(255,255,255,0.6)"
                  : "rgba(255,255,255,0.2)"
            }}
            transition={{ duration: 0.3 }}
          />

          {/* ✨ GLOW */}
          <motion.circle
            cx={n.x}
            cy={n.y}
            fill={n.color}
            initial={false}
            animate={{
              r: active === i ? n.size * 2.2 : n.size * 1.6,
              opacity: active === i ? 0.18 : 0.06
            }}
            transition={{ duration: 0.3 }}
          />

          {/* 🔵 NODE */}
          <motion.circle
            cx={n.x}
            cy={n.y}
            fill={n.color}
            initial={false}
            animate={{
              r: active === i ? n.size * 1.25 : n.size,
              opacity: active === null ? 0.9 : active === i ? 1 : 0.25
            }}
            transition={{
              duration: 0.25,
              ease: [0.4, 0, 0.2, 1]
            }}
            style={{ cursor: "pointer" }}
            onMouseEnter={() => {
              setActive(i);
              onHover?.(n);
            }}
            onMouseLeave={() => {
              setActive(null);
              onLeave?.();
            }}
          />
        </motion.g>
      ))}
    </svg>
  );
}