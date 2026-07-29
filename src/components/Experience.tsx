"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiBriefcase, FiMapPin, FiCalendar, FiGlobe } from "react-icons/fi";
import { experience } from "@/lib/data";
import { FileCheck } from "lucide-react";
import Image from "next/image";
import AnimatedUnderline from "@/components/AnimatedUnderline";


export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-section-alt" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >

            {/* Icon + Heading */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Work <span className="gradient-text">Experience</span>
          </h2>
          </div>
          <p className="text-muted max-w-xl mx-auto">
            Where I&apos;ve contributed and grown as a developer
          </p>
        <AnimatedUnderline/>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-card-border" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 * (i + 1) }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 bg-accent rounded-full ring-4 ring-background" />

                <div className="gradient-border-card glow-hover bg-card border border-card-border rounded-2xl p-6 hover:border-accent/30 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    
                     <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <div className="group relative w-16 h-10 sm:w-18 sm:h-10 md:w-20 md:h-10 flex-shrink-0 rounded-4xl  bg-card overflow-hidden transition-all duration-300 ">
                            <Image
                              src={`/icons/${exp.icon}`}
                              alt={`${exp.company} Logo`}
                              fill
                              className="object-contain p-1 transition-transform duration-300 group-hover:scale-110"
                              sizes="80px"
                            />
                          </div>


                        <div>
                          <h3 className="text-lg font-bold text-foreground">
                            {exp.company}
                          </h3>
                           
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                            <FiBriefcase className="text-accent" size={14} />
                            <span className="text-sm font-medium text-accent">
                              {exp.role}
                            </span>
                          </div>
                          
                        </div>

                   
                    <div className="self-start sm:self-auto mt-2 sm:mt-0">
                      <a
                        href={exp.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1  px-2.5 py-1 rounded-lg bg-accent-glow border border-accent/20 text-xs font-medium text-accent hover:border-accent/50 hover:bg-accent/10 hover:shadow-[0_0_14px_rgba(250,204,21,.18)] transition-all duration-300"
                      >
                        <FileCheck size={20} className="group-hover:scale-110 transition-transform" />
                        <span>Experience Certificate</span>
                      </a>
                    </div>

                    </div>

                    <div className="flex flex-col items-start sm:items-end gap-1 mt-2 sm:mt-0 ">
                      <div className="flex items-center gap-1.5 text-xs text-muted hover:text-white-400 transition-colors w-fit">
                        <FiCalendar size={12} />
                        {exp.period}
                      </div>
                      {exp.subtitle && (
                            <a
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs text-muted -mt-0 hover:text-blue-400 transition-colors w-fit"
                            >
                              <FiGlobe size={12} />
                              <span>{exp.subtitle}</span>
                            </a>
                          )}
                      <div className="flex items-center gap-1.5 text-xs text-muted">
                        <FiMapPin size={12} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((point, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.2 * (i + 1) + 0.1 * (j + 1) }}
                        className="flex gap-3 text-sm text-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {exp.tech && exp.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-card-border">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-medium px-2.5 py-1 rounded-lg bg-accent-glow text-accent border border-accent/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
