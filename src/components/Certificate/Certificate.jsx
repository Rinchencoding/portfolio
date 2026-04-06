import React, { useEffect, useState } from "react";
import { certificates } from "../../constants";

const Certificate = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isViewerVisible, setIsViewerVisible] = useState(false);

  const openViewer = (certificate) => {
    setSelectedCertificate(certificate);

    // Delay visibility toggle to let transition classes animate on mount.
    requestAnimationFrame(() => {
      setIsViewerVisible(true);
    });
  };

  const closeViewer = () => {
    setIsViewerVisible(false);
    setTimeout(() => {
      setSelectedCertificate(null);
    }, 250);
  };

  useEffect(() => {
    if (!selectedCertificate) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeViewer();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedCertificate]);

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
              onClick={() => openViewer(certificate)}
              className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg transition duration-500 hover:border-[#8245ec]/60 hover:shadow-[0_30px_70px_-35px_rgba(130,69,236,0.75)]"
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

                <p className="text-xs uppercase tracking-[0.2em] text-[#bfa7ff]">
                  Click to preview
                </p>

                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
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

      {selectedCertificate && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm transition-opacity duration-300 ${
            isViewerVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeViewer}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedCertificate.title} preview`}
        >
          <div
            className={`relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/20 bg-[#0c0c14] shadow-[0_30px_80px_-30px_rgba(130,69,236,0.85)] transition-all duration-300 ${
              isViewerVisible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-4 scale-95 opacity-80"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeViewer}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/60 px-3 py-1 text-sm font-semibold text-white transition hover:bg-[#8245ec]"
              aria-label="Close certificate preview"
            >
              Close
            </button>

            <img
              src={selectedCertificate.thumbnail}
              alt={selectedCertificate.title}
              className="max-h-[82vh] w-full object-contain bg-[#0c0c14]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;
