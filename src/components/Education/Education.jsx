import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans"
    >
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute -left-16 top-12 h-64 w-64 rounded-full bg-[#35c3ff]/15 blur-3xl" />
        <span className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 rounded-full bg-[#8245ec]/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <header className="text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-gray-500">
            Learning Path
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold uppercase tracking-[0.35em] text-gray-300">
            Education
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            From foundational science to specialized computer science, these milestones shaped how I think about building for the web.
          </p>
        </header>

        <div className="relative mt-16 pl-8 sm:pl-16">
          <span className="pointer-events-none absolute left-3 top-0 h-full w-px bg-gradient-to-b from-[#35c3ff] via-white/50 to-transparent" />

          <div className="space-y-12">
            {education.map((edu) => (
              <article
                key={edu.id}
                className="relative rounded-3xl border border-white/10 bg-white/5 px-6 py-8 backdrop-blur-lg transition duration-500 hover:border-[#35c3ff]/60 hover:shadow-[0_28px_70px_-35px_rgba(53,195,255,0.7)] sm:px-10"
              >
                <span className="absolute -left-8 top-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-[#18162c] shadow-[0_20px_40px_-35px_rgba(53,195,255,0.9)]">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                </span>

                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <p className="mt-1 text-sm uppercase tracking-[0.35em] text-gray-500">
                      {edu.school}
                    </p>
                  </div>
                  <div className="text-right text-sm text-gray-400">
                    <p>{edu.date}</p>
                    <p className="mt-1 inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-[#b4e6ff]">
                      Grade&nbsp;{edu.grade}
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-gray-300">{edu.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
