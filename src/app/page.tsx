"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills3DLoader from "@/components/Skills3DLoader";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingSocialBar from "@/components/FloatingSocialBar";

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <CursorGlow />
            <ScrollProgress />
            <ScrollToTop />
            <Navbar />
            <main id="main">
              {/* Server-rendered SEO content for crawlers that don't execute JS */}
              <h1 className="sr-only">
                Raj Mohan — Full Stack Java Developer | Software Engineer Portfolio
              </h1>
              <p className="sr-only">
                Raj mohan is a Full Stack Java Developer with 4+ years of experience building scalable microservices and REST APIs using Java and Spring Boot. Proficient in designing event-driven microservices with Apache Kafka, optimizing database performance with Hibernate and Redis, Deployed and maintained containerized applications on AWS with CI/CD pipelines.
              </p>
              <Hero />
              <About />
              <Skills3DLoader />
              <Experience />
              <Projects />
              <Education />
              <Contact />
            </main>
            <FloatingSocialBar />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}