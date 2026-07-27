"use client";

import { motion } from "framer-motion";

interface GlowRingProps {
  size?: number;
}

export default function GlowRing({
  size = 650,
}: GlowRingProps) {
  const center = 325;
  const radius = 250;
  const orbitParticles = Array.from({ length: 18 }, (_, i) => ({
  angle: (360 / 18) * i,
}));

const markers = Array.from({ length: 8 }, (_, i) => ({
  angle: (360 / 8) * i,
}));

  return (
    <div
    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
    style={{
        width: size,
        height: size,
    }}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 650 650"
        fill="none"
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          overflow: "visible",
        }}
      >
        <defs>

          {/* Gold Gradient */}

          <linearGradient
            id="goldGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="#FFF7AE"
            />

            <stop
              offset="30%"
              stopColor="#FACC15"
            />

            <stop
              offset="60%"
              stopColor="#F59E0B"
            />

            <stop
              offset="100%"
              stopColor="#FB923C"
            />

          </linearGradient>

          {/* Orange Gradient */}

          <linearGradient
            id="orangeGradient"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="#FDBA74"
            />

            <stop
              offset="50%"
              stopColor="#F97316"
            />

            <stop
              offset="100%"
              stopColor="#EA580C"
            />
          </linearGradient>

          {/* Glow */}

          <filter
            id="glow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur
              stdDeviation="5"
              result="coloredBlur"
            />

            <feMerge>

              <feMergeNode in="coloredBlur" />

              <feMergeNode in="SourceGraphic" />

            </feMerge>

          </filter>

          {/* Strong Glow */}

          <filter
            id="strongGlow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur
              stdDeviation="12"
              result="blur"
            />

            <feMerge>

              <feMergeNode in="blur" />

              <feMergeNode in="SourceGraphic" />

            </feMerge>

          </filter>

        </defs>

        {/* Main Ring */}

        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="url(#goldGradient)"
          strokeWidth="2"
          opacity=".25"
        />

        {/* Outer Ring */}

        <circle
          cx={center}
          cy={center}
          r={radius + 22}
          stroke="url(#orangeGradient)"
          strokeWidth="1.5"
          strokeDasharray="7 10"
          opacity=".18"
        />
        {/* Pulse Ring */}
        <motion.circle
            cx={center}
            cy={center}
            r={radius + 10}
            fill="none"
            stroke="#fbbf24"
            strokeWidth="1"
            opacity=".12"
            animate={{
                scale: [1, 1.04, 1],
                opacity: [0.08, 0.22, 0.08],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            />

        {/* Ellipse */}

        <ellipse
          cx={center}
          cy={center}
          rx={radius + 40}
          ry={radius - 20}
          stroke="#fbbf24"
          strokeWidth="1"
          opacity=".15"
        />
                {/* ===============================
             COMET ARC 1
        ================================ */}

        <motion.circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="90 1480"
          filter="url(#strongGlow)"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            transformOrigin: `${center}px ${center}px`,
          }}
        />

        {/* ===============================
             COMET ARC 2
        ================================ */}

        <motion.circle
          cx={center}
          cy={center}
          r={radius + 22}
          fill="none"
          stroke="url(#orangeGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="70 1600"
          filter="url(#glow)"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            transformOrigin: `${center}px ${center}px`,
          }}
        />

        {/* ===============================
             INNER ARC
        ================================ */}

        <motion.circle
          cx={center}
          cy={center}
          r={radius - 28}
          fill="none"
          stroke="#fde68a"
          strokeWidth="2"
          strokeDasharray="45 1400"
          strokeLinecap="round"
          opacity={0.8}
          filter="url(#glow)"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            transformOrigin: `${center}px ${center}px`,
          }}
        />
         {/* ===============================
            COMET HEAD
        ================================ */}

        <motion.g
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            transformOrigin: `${center}px ${center}px`,
          }}
        >
          <circle
            cx={center + radius}
            cy={center}
            r="7"
            fill="#FFF8DC"
            filter="url(#strongGlow)"
          />

          <circle
            cx={center + radius}
            cy={center}
            r="13"
            fill="#fbbf24"
            opacity=".28"
          />
        </motion.g>
           {/* ===============================
            SECOND COMET
        ================================ */}

        <motion.g
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            transformOrigin: `${center}px ${center}px`,
          }}
        >
          <circle
            cx={center}
            cy={center - radius - 22}
            r="6"
            fill="#FDBA74"
            filter="url(#glow)"
          />

          <circle
            cx={center}
            cy={center - radius - 22}
            r="12"
            fill="#f97316"
            opacity=".22"
          />
        </motion.g>

        {/* Orbit Particles */}

       <motion.g
        animate={{
            rotate: 360,
        }}
        transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
        }}
        style={{
            transformOrigin: `${center}px ${center}px`,
        }}
        >
        {orbitParticles.map((p, index) => (
            <circle
            key={index}
            cx={center + Math.cos((p.angle * Math.PI) / 180) * (radius + 60)}
            cy={center + Math.sin((p.angle * Math.PI) / 180) * (radius + 60)}
            r="2.3"
            fill="#fde68a"
            opacity=".7"
            />
        ))}
        </motion.g>

        {/* Cross Markers */}

        <motion.g
            animate={{
                rotate: -360,
            }}
            transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
            }}
            style={{
                transformOrigin: `${center}px ${center}px`,
            }}
            >
            {markers.map((m, index) => {
                const x =
                center + Math.cos((m.angle * Math.PI) / 180) * (radius + 85);

                const y =
                center + Math.sin((m.angle * Math.PI) / 180) * (radius + 85);

                return (
                <g
                    key={index}
                    transform={`translate(${x},${y})`}
                >
                    <line
                    x1="-6"
                    y1="0"
                    x2="6"
                    y2="0"
                    stroke="#fbbf24"
                    strokeWidth="1"
                    opacity=".35"
                    />

                    <line
                    x1="0"
                    y1="-6"
                    x2="0"
                    y2="6"
                    stroke="#fbbf24"
                    strokeWidth="1"
                    opacity=".35"
                    />
                </g>
                );
            })}
       </motion.g>

            {/* Energy Dots */}

            {Array.from({ length: 24 }).map((_, index) => {
                const angle = (360 / 24) * index;

                const x =
                    center + Math.cos((angle * Math.PI) / 180) * (radius - 55);

                const y =
                    center + Math.sin((angle * Math.PI) / 180) * (radius - 55);

                return (
                    <motion.circle
                    key={index}
                    cx={x}
                    cy={y}
                    r="1.8"
                    fill="#fff7ae"
                    animate={{
                        opacity: [0.15, 1, 0.15],
                    }}
                    transition={{
                        duration: 2,
                        delay: index * 0.08,
                        repeat: Infinity,
                    }}
                    />
                );
                })}

 </motion.svg>
</div>
  );
}