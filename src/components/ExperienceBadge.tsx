"use client";

import { motion } from "framer-motion";

export default function ExperienceBadge() {
    return (
        <motion.div
            animate={{
                y: [0, -10, 0],
            }}
            transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="absolute top-[68%] -right-16 -translate-y-1/2 z-50"
        >
            {/* ================= Glow ================= */}

            <motion.div
                animate={{
                    opacity: [0.35, 0.6, 0.35],
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                }}
                className="absolute -inset-7 rounded-full bg-yellow-400/25 blur-3xl"
            />

            {/* ================= OUTER ROTATING ARC ================= */}

            <motion.svg
                width="143"
                height="143"
                viewBox="0 0 145 145"
                className="absolute -top-[9px] -left-[9px]"
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{
                    transformOrigin: "72.5px 72.5px",
                }}
            >
                <defs>
                    <linearGradient id="goldOuter">
                        <stop offset="0%" stopColor="#fc8727" />
                        <stop offset="25%" stopColor="#fc8f12" />
                        <stop offset="65%" stopColor="#fde047" />
                        <stop offset="100%" stopColor="#292929" />

                    </linearGradient>

                    <filter id="outerGlow">
                        <feGaussianBlur stdDeviation="2.5" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                <circle
                    cx="72.5"
                    cy="72.5"
                    r="66"
                    fill="none"
                    stroke="url(#goldOuter)"
                    strokeWidth="4"
                    strokeDasharray="120 294"
                    strokeLinecap="round"
                    filter="url(#outerGlow)"
                />
            </motion.svg>

            <motion.div
                whileHover={{
                    scale: 1.08,
                }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                }}
                className="
        relative
        w-32
        h-32
        rounded-full
        bg-[#101010]
        border
        border-[#2b2b2b]
        flex
        flex-col
        justify-center
        items-center
        overflow-hidden
        shadow-[0_0_45px_rgba(250,204,21,.35)]
      "
            >
                {/* Shine */}

                <motion.div
                    animate={{
                        x: [-140, 180],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                    }}
                    className="
          absolute
          top-0
          left-0
          h-full
          w-10
          bg-white/20
          blur-lg
          rotate-12
        "
                />

                {/* Inner Glow */}

                <div className="absolute inset-3 rounded-full bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent" />

                {/* Number */}

                <h2 className="relative z-20 text-5xl font-extrabold text-yellow-400 tracking-tight">
                    4+
                </h2>

                {/* Text */}

                <p className="relative z-20 mt-1 text-[12px] text-center text-gray-200 leading-4">
                    Years of
                    <br />
                    Experience
                </p>
            </motion.div>
        </motion.div>
    );
}
