"use client";

// import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader() {
    // const [speed, setSpeed] = useState(2);

    //     useEffect(() => {
    //     const timer1 = setTimeout(() => {
    //         setSpeed(1.4);
    //     }, 500);

    //     const timer2 = setTimeout(() => {
    //         setSpeed(0.8);
    //     }, 1100);

    //     return () => {
    //         clearTimeout(timer1);
    //         clearTimeout(timer2);
    //     };
    //     }, []);
  // return (
  //   <motion.div
  //       initial={{
  //           opacity: 1,
  //           scale: 1,
  //           filter: "blur(0px)",
  //       }}
  //       animate={{
  //           opacity: 1,
  //           scale: 1,
  //           filter: "blur(0px)",
  //       }}
  //       exit={{
  //           opacity: 0,
  //           scale: 1.08,
  //           filter: "blur(18px)",
  //       }}
  //       transition={{
  //           duration: 0.6,
  //           ease: "easeInOut",
  //       }}
  //       className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#09090b] overflow-hidden"
  //       >

  //     {/* Background Glow */}
  //     <div className="absolute w-[320px] h-[320px] rounded-full bg-amber-400/10 blur-3xl" />

  //     {/* Content */}
  //     <div className="relative flex flex-col items-center">

  //       {/* Rotating Ring */}
  //       <motion.div
  //         animate={{ rotate: 360 }}
  //         transition={{
  //           duration: speed,
  //           repeat: Infinity,
  //           ease: "linear",
  //         }}
  //         className="relative w-36 h-36"
  //       >
  //         <svg
  //           viewBox="0 0 150 150"
  //           className="absolute inset-0 w-full h-full"
  //         >
  //           <defs>
  //             <linearGradient id="loaderRing">
  //               <stop offset="0%" stopColor="#fde047" />
  //               <stop offset="50%" stopColor="#f59e0b" />
  //               <stop offset="100%" stopColor="#fb923c" />
  //             </linearGradient>

  //             <filter id="loaderGlow">
  //               <feGaussianBlur stdDeviation="3" result="blur" />
  //               <feMerge>
  //                 <feMergeNode in="blur" />
  //                 <feMergeNode in="SourceGraphic" />
  //               </feMerge>
  //             </filter>
  //           </defs>

  //           <circle
  //             cx="75"
  //             cy="75"
  //             r="66"
  //             fill="none"
  //             stroke="url(#loaderRing)"
  //             strokeWidth="4"
  //             strokeDasharray="140 275"
  //             strokeLinecap="round"
  //             filter="url(#loaderGlow)"
  //           />
  //         </svg>
  //       </motion.div>

  //       {/* Name */}
  //       <motion.h1
  //       className="mt-8 text-5xl font-bold tracking-wide flex"
  //       initial="hidden"
  //       animate="visible"
  //       >
  //       {"Raj Mohan".split("").map((char, index) => (
  //           <motion.span
  //           key={index}
  //           variants={{
  //               hidden: {
  //               opacity: 0,
  //               y: 20,
  //               },
  //               visible: {
  //               opacity: 1,
  //               y: 0,
  //               },
  //           }}
  //           transition={{
  //               delay: index * 0.08,
  //               duration: 0.35,
  //           }}
  //           className={
  //               char === " "
  //               ? "w-3"
  //               : index < 3
  //               ? "text-white"
  //               : "text-amber-400"
  //           }
  //           >
  //           {char === " " ? "\u00A0" : char}
  //           </motion.span>
  //       ))}
  //       </motion.h1>

  //       {/* Subtitle */}
  //       <motion.p
  //         initial={{
  //           opacity: 0,
  //         }}
  //         animate={{
  //           opacity: 1,
  //         }}
  //         transition={{
  //           delay: 0.8,
  //         }}
  //         className="mt-3 text-gray-400 tracking-[0.25em] uppercase text-sm"
  //       >
  //         Java Full Stack Developer
  //       </motion.p>

  //       {/* Loading Dots */}
  //       <motion.div
  //         animate={{
  //           opacity: [0.3, 1, 0.3],
  //         }}
  //         transition={{
  //           duration: 1.2,
  //           repeat: Infinity,
  //         }}
  //         className="mt-8 flex gap-2"
  //       >
  //         <div className="w-2 h-2 rounded-full bg-amber-400" />
  //         <div className="w-2 h-2 rounded-full bg-amber-400" />
  //         <div className="w-2 h-2 rounded-full bg-amber-400" />
  //       </motion.div>
  //     </div>

    {/* GOLDEN FLASH */}
    
      {/* <motion.div
        initial={{
            opacity: 0,
            scale: 0.8,
        }}
        animate={{
            opacity: 0,
        }}
        exit={{
            opacity: [0, 0.35, 0],
            scale: [0.8, 3.5, 5],
        }}
        transition={{
            duration: 0.55,
            ease: "easeOut",
        }}
        className="absolute inset-0 rounded-full bg-amber-400 blur-3xl pointer-events-none"
        />*/}
    {/* </motion.div> 
  );
} */}

 return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05,
        filter: "blur(12px)",
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#09090b] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[320px] h-[320px] rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative flex flex-col items-center">

        {/* Smooth CSS Rotating Ring */}
        <div className="relative w-36 h-36 animate-spin" style={{ animationDuration: "3s" }}>
          <svg
            viewBox="0 0 150 150"
            className="absolute inset-0 w-full h-full"
          >
            <defs>
              <linearGradient id="loaderRing">
                <stop offset="0%" stopColor="#fde047" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#fb923c" />
              </linearGradient>
            </defs>

            <circle
              cx="75"
              cy="75"
              r="66"
              fill="none"
              stroke="url(#loaderRing)"
              strokeWidth="4"
              strokeDasharray="140 275"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Animated Name */}
        <motion.h1
          className="mt-8 text-5xl font-bold tracking-wide flex"
          initial="hidden"
          animate="visible"
        >
          {"Raj Mohan".split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                delay: index * 0.08,
                duration: 0.35,
              }}
              className={
                char === " "
                  ? "w-3"
                  : index < 3
                  ? "text-white"
                  : "text-amber-400"
              }
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.4,
          }}
          className="mt-3 text-gray-400 tracking-[0.25em] uppercase text-sm"
        >
          Java Full Stack Developer
        </motion.p>

        {/* Loading Dots */}
        <div className="mt-8 flex gap-2">
          <motion.div
            className="w-2 h-2 rounded-full bg-amber-400"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
          <motion.div
            className="w-2 h-2 rounded-full bg-amber-400"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: 0.2,
            }}
          />
          <motion.div
            className="w-2 h-2 rounded-full bg-amber-400"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: 0.4,
            }}
          />
        </div>
      </div>
    </motion.div>
    
  );
}