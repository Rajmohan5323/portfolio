"use client";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiMail, FiHeart } from "react-icons/fi";
import { personalInfo, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-card-border bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid sm:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <a href="#" className="text-xl font-bold gradient-text">
              Raj Mohan
            </a>
            <p className="text-xs text-muted mt-1.5 leading-relaxed max-w-[200px]">
              Full Stack Java Developer building robust backend systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Quick Links</p>
            <ul className="space-y-1.5">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs text-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="sm:text-right">
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Connect</p>
            <div className="flex sm:justify-end gap-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted hover:text-accent hover:bg-accent-glow rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted hover:text-accent hover:bg-accent-glow rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 text-muted hover:text-accent hover:bg-accent-glow rounded-lg transition-colors"
                aria-label="Email"
              >
                <FiMail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-card-border text-center">
          <p className="text-xs text-muted flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Raj Mohan. Built with
            <FiHeart size={12} className="text-rose-500" />
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
