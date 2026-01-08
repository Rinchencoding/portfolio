import React, { useState, useEffect, useCallback } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  // Close menu on ESC
  useEffect(() => {
    const handleKeyDown = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleMenuItemClick = useCallback((id) => {
    setActiveSection(id);
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleLogoClick = () => {
    setActiveSection("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const menuItems = [
    { id: "about", label: "ABOUT" },
    { id: "skills", label: "SKILLS" },
    { id: "work", label: "PROJECTS" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-[6vw] transition ${
        isScrolled
          ? "bg-[#050414]/70 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between py-5 text-white">
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="flex gap-2 text-sm font-semibold uppercase tracking-[0.4em]"
        >
          <span className="text-[#8245ec]">&lt;</span> Rinchen
          <span className="text-[#8245ec]">/</span>Dawa
          <span className="text-[#8245ec]">&gt;</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs uppercase tracking-[0.21em]">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`transform rounded-full px-5 py-3 transition-transform duration-200 ease-out ${
                    activeSection === item.id
                      ? "text-white scale-150"
                      : "text-gray-300 hover:text-white hover:scale-110"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <a
            href="https://github.com/Rinchencoding"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/rinchen-dawa-6b3559276/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen((p) => !p)}
          className="md:hidden flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase"
        >
          {isOpen ? "Close" : "Menu"}
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#050414]/95 backdrop-blur-xl md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="flex h-full flex-col justify-between px-[10vw] pt-28 pb-12"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="space-y-6 text-3xl font-semibold">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuItemClick(item.id)}
                  className="w-full border-b border-white/10 pb-4 text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex gap-4">
              <FaGithub size={22} />
              <FaLinkedin size={22} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
