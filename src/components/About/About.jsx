import React, { useMemo, useCallback } from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile.png";
import "./About.css";

const About = () => {
  const videoResumeDriveInput =
    "https://drive.google.com/file/d/1Ov-p-rrrARhBhUWC32b2oqr2aCLoIuQK/view?usp=sharing";

  const videoResumeDriveFileId = useMemo(() => {
    const input = videoResumeDriveInput.trim();
    if (!input) return "";

    const filePathMatch = input.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (filePathMatch?.[1]) return filePathMatch[1];

    const idParamMatch = input.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (idParamMatch?.[1]) return idParamMatch[1];

    return /^[a-zA-Z0-9_-]+$/.test(input) ? input : "";
  }, [videoResumeDriveInput]);

  const videoResumeEmbedUrl = videoResumeDriveFileId
    ? `https://drive.google.com/file/d/${videoResumeDriveFileId}/preview?autoplay=1`
    : "";

  const stars = useMemo(
    () =>
      Array.from({ length: 18 }).map(() => ({
        left: -10 + Math.random() * 120,
        top: -5 + Math.random() * 110,
        size: 3 + Math.random() * 3,
        delay: Math.random() * 8,
        duration: 3 + Math.random() * 3,
        trail: 140 + Math.random() * 180,
        angle: -40 + Math.random() * 18,
        travelX: 260 + Math.random() * 140,
        travelY: 120 + Math.random() * 160,
      })),
    []
  );

  const highlightCards = useMemo(
    () => [
      {
        title: "Fullstack Delivery",
        description:
          "React, Next.js, Node.js, and Spring Boot — shipping scalable products end to end.",
      },
      {
        title: "Design Systems",
        description:
          "Reusable component libraries, consistent motion, and accessible UI patterns.",
      },
      {
        title: "Rapid Iteration",
        description:
          "Collaborative sprints to turn rough concepts into polished prototypes fast.",
      },
    ],
    []
  );

  const focusAreas = useMemo(
    () => [
      "Obsessed with clear user journeys and thoughtful micro-interactions.",
      "Comfortable across databases, CI/CD tooling, and modern cloud hosting.",
      "Collaborates closely with designers, stakeholders, and engineers.",
    ],
    []
  );

  const handleContactScroll = useCallback(() => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 px-[6vw] md:px-[6vw] lg:px-[4vw] font-sans"
    >
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute -left-28 top-16 h-72 w-72 rounded-full bg-[#8245ec]/25 blur-3xl" />
        <span className="absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 translate-x-1/3 rounded-full bg-[#35c3ff]/15 blur-3xl" />
        <span className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#ff7ad9]/10 blur-3xl" />
      </div>

      <div className="shooting-stars" aria-hidden="true">
        {stars.map((s, index) => (
          <span
            key={index}
            className="star"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
              "--star-size": `${s.size}px`,
              "--tail-length": `${s.trail}px`,
              "--tail-rotation": `${s.angle}deg`,
              "--travel-x": `${s.travelX}px`,
              "--travel-y": `${s.travelY}px`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col gap-16 lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
        <div className="order-2 text-center lg:order-1 lg:text-left">

          <h1 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">
            Hi, I am Rinchen
          </h1>
          <div className="mt-4 text-2xl font-semibold text-[#bba4ff] sm:text-3xl">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                "Fullstack Developer",
                "App Developer",
                "UI/UX Designer",
                "Coder",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </div>

          <p className="mt-6 text-base text-gray-300 sm:text-lg">
            I am a computer science student at Gyelpozhing College of Information Technology, crafting responsive interfaces, reliable APIs, and experiences that feel effortless. From prototyping to deployment, I enjoy translating ideas into digital products people want to use.
          </p>

          <ul className="mt-8 space-y-3 text-left text-sm text-gray-400">
            {focusAreas.map((area, index) => (
              <li key={area} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-[#8245ec]/20 text-xs text-[#d8c7ff]">
                  •
                </span>
                <span>{area}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {highlightCards.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6 text-left transition duration-300 hover:border-[#8245ec]/50 hover:bg-[#8245ec]/10 hover:shadow-[0_20px_50px_-35px_rgba(130,69,236,0.8)]"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                  {item.title}
                </p>
                <p className="mt-3 text-sm text-gray-200">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
            <a
              href="https://drive.google.com/file/d/1s8ZPZaK1rUd2Dg7u8-ydcx_8kJCBiUjZ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#8245ec] to-[#a855f7] px-7 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-white shadow-[0_22px_45px_-28px_rgba(130,69,236,0.9)] transition hover:brightness-110"
            >
              Download CV
              <span aria-hidden>↓</span>
            </a>
            <button
              type="button"
              onClick={handleContactScroll}
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-gray-200 transition hover:border-[#8245ec]/60 hover:bg-[#8245ec]/10"
            >
              Let’s Talk
              <span aria-hidden>→</span>
            </button>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <Tilt
            className="w-64 sm:w-80 md:w-[24rem]"
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={1400}
            scale={1}
            transitionSpeed={900}
            gyroscope
          >
            <div className="flex flex-col items-center">
              <img
                src={profileImage}
                alt="Rinchen Dawa"
                className="h-auto w-full object-contain"
              />
              <p className="mt-5 text-sm font-medium uppercase tracking-[0.28em] text-[#d8c7ff]">
                Fullstack Developer
              </p>
            </div>
          </Tilt>
        </div>

        <div className="order-3 mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[#0f111a]/90 via-[#171226]/90 to-[#120e1f]/90 shadow-[0_28px_70px_-35px_rgba(53,195,255,0.55)] lg:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4 sm:px-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#8f9bff]">
                Featured
              </p>
              <h3 className="mt-1 text-lg font-semibold text-white sm:text-xl">
                Video Resume
              </h3>
            </div>
            <span className="rounded-full border border-[#35c3ff]/40 bg-[#35c3ff]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#8be4ff]">
              2 mins
            </span>
          </div>

          <div className="px-4 pb-4 pt-4 sm:px-6 sm:pb-6">
            {videoResumeEmbedUrl ? (
              <div className="mx-auto aspect-video w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-black/70">
                <iframe
                  src={videoResumeEmbedUrl}
                  title="Rinchen video resume"
                  className="h-full w-full"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-[#35c3ff]/40 bg-[#35c3ff]/5 px-4 py-8 text-center sm:px-6">
                <p className="text-sm text-[#d8ecff] sm:text-base">
                  Paste your Google Drive file id in
                  <span className="mx-1 font-semibold text-white">
                    videoResumeDriveFileId
                  </span>
                  and keep link sharing set to Anyone with the link.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;