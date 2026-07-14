import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../../constants";
import SpotlightCard from "../SpotlightCard";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const hasLiveLink = selectedProject && selectedProject.webapp;
  const hasRepoLink = selectedProject && selectedProject.github;

  return (
    <section
      id="work"
      className="relative overflow-hidden py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#8245ec]/30 blur-3xl" />
        <span className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-[#35c3ff]/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.header
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <p className="text-xs uppercase tracking-[0.5em] text-gray-500">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold uppercase tracking-[0.35em] text-gray-300">
            Projects
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            A curated view of products I have shipped across web and full-stack builds. Each project balances thoughtful UI with resilient engineering.
          </p>
        </motion.header>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <SpotlightCard
              key={project.id}
              custom={index % 3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              onClick={() => handleOpenModal(project)}
              className="flex cursor-pointer flex-col rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg transition duration-500 hover:-translate-y-2 hover:border-[#8245ec]/60 hover:shadow-[0_32px_70px_-30px_rgba(130,69,236,0.8)]"
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#8245ec] via-white/40 to-[#35c3ff] opacity-60 transition duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col px-6 pb-6 pt-8">
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-4 flex-1 text-sm text-gray-400">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-white/10 bg-[#8245ec]/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-[#ccaaff]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-10 backdrop-blur-md"
            onClick={handleCloseModal}
          >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#0b0a1f] text-white shadow-[0_40px_120px_-45px_rgba(130,69,236,0.9)]">
            <button
              type="button"
              onClick={handleCloseModal}
              className="absolute right-6 top-6 text-3xl font-light text-gray-400 transition hover:text-white"
              aria-label="Close project details"
            >
              &times;
            </button>

            <div className="flex flex-col gap-10 p-6 sm:p-10">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full object-cover"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
                    Case Study
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold">
                    {selectedProject.title}
                  </h3>
                </div>

                <p className="text-gray-300">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  {hasRepoLink && (
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="inline-flex flex-1 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-gray-200 transition hover:border-[#8245ec]/50 hover:bg-[#8245ec]/15"
                    >
                      View Code
                    </motion.a>
                  )}
                  {hasLiveLink && (
                    <motion.a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="inline-flex flex-1 items-center justify-center rounded-2xl bg-[#8245ec] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7138d9]"
                    >
                      View Live
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
