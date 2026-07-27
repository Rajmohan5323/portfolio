"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { FiCalendar, FiX, FiLayout } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { projects } from "@/lib/data";
import AnimatedUnderline from "@/components/AnimatedUnderline";

function ImageModal({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-pointer"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="relative max-w-5xl w-full cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Close image"
        >
          <FiX size={24} />
        </button>
        <Image
          src={src}
          alt={alt}
          width={1920}
          height={1080}
          className="w-full h-auto rounded-xl border border-card-border shadow-2xl"
          quality={95}
        />
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({
  project,
  index,
  isInView,
  onImageClick,
}: {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
  onImageClick?: (src: string, alt: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.15 * (index + 1) }}
      className="group gradient-border-card glow-hover bg-card border border-card-border rounded-2xl p-6 hover:border-accent/40 transition-all hover:-translate-y-1"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-xs font-medium text-accent bg-accent-glow px-2 py-0.5 rounded-md">
              {project.language}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted">
              <FiCalendar size={11} />
              {project.date}
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          {"image" in project && project.image && onImageClick && (
            <button
              onClick={() => onImageClick(project.image!, `${project.title} Architecture`)}
              className="p-2 text-muted hover:text-accent rounded-lg hover:bg-accent-glow transition-colors"
              aria-label={`View ${project.title} architecture diagram`}
              title="View Architecture"
            >
              <FiLayout size={18} />
            </button>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted hover:text-accent rounded-lg hover:bg-accent-glow transition-colors"
            aria-label={`${project.title} GitHub repo`}
          >
            <FaGithub size={18} />
          </a>
        </div>
      </div>

      <ul className="space-y-2 mb-5">
        {project.description.map((point, j) => (
          <motion.li
            key={j}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.15 * (index + 1) + 0.08 * (j + 1) }}
            className="flex gap-3 text-sm text-muted"
          >
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
            <span className="leading-relaxed">{point}</span>
          </motion.li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-medium px-2.5 py-1 rounded-lg bg-section-alt text-muted border border-card-border"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [modal, setModal] = useState<{ src: string; alt: string } | null>(null);

  const openModal = useCallback((src: string, alt: string) => {
    setModal({ src, alt });
  }, []);

  const closeModal = useCallback(() => {
    setModal(null);
  }, []);

  return (
    <>
      <section id="projects" className="section-padding" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Personal <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Side projects that showcase my interests and skills
            </p>
            <AnimatedUnderline/>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                isInView={isInView}
                onImageClick={openModal}
              />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {modal && (
          <ImageModal src={modal.src} alt={modal.alt} onClose={closeModal} />
        )}
      </AnimatePresence>
    </>
  );
}
