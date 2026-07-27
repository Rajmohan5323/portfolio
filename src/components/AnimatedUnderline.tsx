"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedUnderlineProps {
  width?: string;
  className?: string;
}

export default function AnimatedUnderline({
  width = "w-44",
  className = "",
}: AnimatedUnderlineProps) {
  const lineRef = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState(180);

  useEffect(() => {
    if (lineRef.current) {
      setTravel(lineRef.current.offsetWidth + 40);
    }
  }, []);

  return (
    <div className={`flex justify-center mt-3 ${className}`}>
      <div
        ref={lineRef}
        className={`relative h-[2px] ${width} overflow-hidden rounded-full`}
      >
        {/* Base Line */}
        <div className="absolute inset-0 bg-yellow-400/20" />

        {/* Moving Glow */}
        <motion.div
          animate={{
            x: [-40, travel],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[2px] w-10 rounded-full bg-yellow-300"
          style={{
            boxShadow: `
              0 0 8px #fde047,
              0 0 16px #facc15,
              0 0 24px #f59e0b
            `,
          }}
        />
      </div>
    </div>
  );
}