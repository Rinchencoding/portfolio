import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans"
    >
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-0 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#8245ec]/25 blur-3xl" />
        <span className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 rounded-full bg-[#35c3ff]/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <header className="text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-gray-500">
            Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold uppercase tracking-[0.35em] text-gray-300">
            Experience
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Roles that taught me how to scale teams, ship resilient features, and design human-centered interfaces end to end.
          </p>
        </header>

        <div className="relative mt-16 pl-8 sm:pl-16">
          <span className="pointer-events-none absolute left-3 top-0 h-full w-px bg-gradient-to-b from-[#8245ec] via-white/40 to-transparent" />

          <div className="space-y-12">
            {experiences.map((experience) => (
              <article
                key={experience.id}
                className="relative rounded-3xl border border-white/10 bg-white/5 px-6 py-8 backdrop-blur-lg transition duration-500 hover:border-[#8245ec]/60 hover:shadow-[0_28px_70px_-35px_rgba(130,69,236,0.7)] sm:px-10"
              >
                <span className="absolute -left-8 top-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-[#18162c] shadow-[0_18px_35px_-20px_rgba(130,69,236,0.9)]">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                </span>

                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <p className="mt-1 text-sm uppercase tracking-[0.4em] text-gray-500">
                      {experience.company}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-400">
                    {experience.date}
                  </p>
                </div>

                <p className="mt-6 text-gray-300">{experience.desc}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-white/10 bg-[#8245ec]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#ccaaff]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
