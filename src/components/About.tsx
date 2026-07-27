"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FiMapPin, FiBriefcase, FiCode } from "react-icons/fi";
import AnimatedUnderline from "@/components/AnimatedUnderline";


function CountUp({ target, decimals = 0, suffix = "", isInView }: { target: number; decimals?: number; suffix?: string; isInView: boolean }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => v.toFixed(decimals) + suffix);
  const [display, setDisplay] = useState("0" + suffix);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, target, {
      duration: 2,
      ease: "easeOut",
    });
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return () => { controls.stop(); unsubscribe(); };
  }, [isInView, target, count, rounded]);

  return <>{display}</>;
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: <FiBriefcase />, label: "Years Experience", target: 4, decimals: 0, suffix: "+" },
    { icon: <FiCode />, label: "Technologies", target: 20, decimals: 0, suffix: "+" },
    { icon: <FiMapPin />, label: "Based in", value: "Chennai" },

  ];

  return (
    <section id="about" className="section-padding bg-section-alt" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            A passionate developer focused on building robust backend systems
          </p>
          <AnimatedUnderline/>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className="gradient-border-card glow-hover bg-card border border-card-border rounded-2xl p-6 text-center hover:border-accent/50 transition-all hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-glow text-accent rounded-xl mb-4 text-xl">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                {stat.target !== undefined ? (
                  <CountUp target={stat.target} decimals={stat.decimals} suffix={stat.suffix} isInView={isInView} />
                ) : (
                  stat.value
                )}
              </div>
              <div className="text-sm text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 gradient-border-card bg-card border border-card-border rounded-2xl p-6 sm:p-8"
        >
          <p className="text-muted leading-relaxed text-sm sm:text-base mb-4">
            I&apos;m passionate about designing scalable backend systems and solving complex engineering challenges with clean, efficient code. With expertise in Java, Spring Boot, Microservices, Kafka, PostgreSQL, Redis, and AWS, I build reliable APIs and distributed applications that prioritize performance, maintainability, and scalability.
          </p>
          <p className="text-muted leading-relaxed text-sm sm:text-base">
            I enjoy working with modern software architecture, optimizing data flow, and implementing event-driven solutions that deliver resilient and high-performing systems. Outside of work, I continuously explore emerging technologies by building personal projects—from real-time data pipelines and chat applications to cloud-native microservices. I believe that the best software combines thoughtful architecture, clean code, and a mindset of continuous improvement.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
