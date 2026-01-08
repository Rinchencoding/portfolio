import React from "react";
import { certificates } from "../../constants";

const Certificate = () => {
  return (
    <div
      className="relative overflow-hidden py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-1/4 top-0 h-60 w-60 -translate-x-1/2 rounded-full bg-[#8245ec]/20 blur-3xl" />
        <span className="absolute bottom-0 right-6 h-72 w-72 rounded-full bg-[#35c3ff]/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-gray-500">
            Recognition
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold uppercase tracking-[0.35em] text-gray-300">
            Certificates
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Courses and credentials that validate my ongoing commitment to mastering new technologies and practices.
          </p>
        </header>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {certificates.map((certificate) => (
            <article
              key={certificate.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg transition duration-500 hover:border-[#8245ec]/60 hover:shadow-[0_30px_70px_-35px_rgba(130,69,236,0.75)]"
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#8245ec] via-white/40 to-[#35c3ff] opacity-60 transition duration-500 group-hover:opacity-100" />
              <div className="overflow-hidden">
                <img
                  src={certificate.thumbnail}
                  alt={certificate.title}
                  className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 px-6 py-8">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {certificate.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">
                    {certificate.issuer} · {certificate.date}
                  </p>
                </div>

                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#bfa7ff] transition hover:text-white"
                >
                  <span>View Certificate</span>
                  <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
