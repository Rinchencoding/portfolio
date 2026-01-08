import React, { useState, useEffect, useCallback } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  /* ======================= SCROLL SPY ======================= */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  /* ======================= SCROLL TO SECTION ======================= */
  const handleMenuClick = useCallback((id) => {
    setIsOpen(false);
    const section = document.getElementById(id);
    if (!section) return;

    const navbarHeight = 80;
    const top =
      section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  const menuItems = [
    { id: "about", label: "ABOUT" },
    { id: "skills", label: "SKILLS" },
    { id: "certificate", label: "CERTIFICATE" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "work", label: "PROJECTS" },
    { id: "education", label: "EDUCATION" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <>
      {/* ================= Top bar with logo + social icons ================= */}
      <div className="fixed top-0 left-0 right-0 z-50 px-[6vw] flex items-center justify-between py-5 text-white bg-[#050414]/50 backdrop-blur-md">
        {/* LOGO */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm font-semibold uppercase tracking-[0.25em]"
        >
          <span className="text-[#8245ec]">&lt;</span> Rinchen
          <span className="text-[#8245ec]">/</span>Dawa
          <span className="text-[#8245ec]">&gt;</span>
        </button>

        {/* Desktop social icons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com/Rinchencoding" target="_blank">
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/rinchen-dawa-6b3559276/"
            target="_blank"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase active:scale-95"
          >
            {isOpen ? <><FiX /> Close</> : <><FiMenu /> Menu</>}
          </button>
        </div>
      </div>

      {/* ================= Desktop bottom-centered menu ================= */}
      <div className="hidden md:flex fixed left-1/2 bottom-8 transform -translate-x-1/2 z-50">
        <ul className="flex gap-4 rounded-full bg-[#050414]/90 backdrop-blur-lg border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.21em]">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuClick(item.id)}
                className={`relative rounded-full px-4 py-2 transition ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {activeSection === item.id && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-white/20"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* ================= Mobile full-screen menu ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#050414]/95 backdrop-blur-xl md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="h-full px-[10vw] pt-32 pb-12 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col gap-8 text-3xl font-semibold">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleMenuClick(item.id)}
                    className={`border-b border-white/10 pb-4 text-left ${
                      activeSection === item.id
                        ? "text-[#8245ec]"
                        : "text-white/80"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="mt-16 flex gap-6">
                <FaGithub size={24} />
                <FaLinkedin size={24} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
