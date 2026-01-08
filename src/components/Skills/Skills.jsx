// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="relative overflow-hidden py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    <div className="pointer-events-none absolute inset-0">
      <span className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#8245ec]/25 blur-3xl" />
      <span className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-[#35c3ff]/20 blur-3xl" />
    </div>

    <div className="relative z-10 mx-auto max-w-6xl">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold uppercase tracking-[0.35em] text-gray-300">
          Skills
        </h2>
        <p className="mt-6 text-lg text-gray-400">
          The stacks, tools, and languages I rely on to ship accessible, high-quality products.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {SkillsInfo.map((category) => (
          <Tilt
            key={category.title}
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            perspective={1400}
            scale={1.02}
            transitionSpeed={1200}
            gyroscope
            className="h-full"
          >
            <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_25px_60px_-25px_rgba(15,23,42,0.8)] transition duration-500 hover:border-[#8245ec]/60 hover:shadow-[0_32px_65px_-28px_rgba(130,69,236,0.75)]">
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#8245ec] via-transparent to-[#35c3ff] opacity-60 transition duration-500 group-hover:opacity-100" />
              <h3 className="text-2xl font-semibold text-white md:text-3xl">
                {category.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400 md:text-base">
                Curated tools and frameworks that anchor my {category.title.toLowerCase()} work.
              </p>

              <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {category.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-left transition duration-300 hover:border-[#8245ec]/60 hover:bg-[#8245ec]/10 hover:shadow-[0_18px_30px_-18px_rgba(130,69,236,0.8)]">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#8245ec]/20 text-white">
                        <img
                          src={skill.logo}
                          alt={`${skill.name} logo`}
                          className="h-5 w-5 object-contain"
                        />
                      </span>
                      <span className="text-sm font-medium text-gray-200">
                        {skill.name}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </Tilt>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
