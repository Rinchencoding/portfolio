import React from "react";
import { certificates } from "../../constants";

const Certificate = () => {
  return (
    <section
      id="certificates"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-transparent"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">CERTIFICATES</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Selected online course certificates and professional training.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((c) => (
          <div key={c.id} className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
            <img src={c.thumbnail} alt={c.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-200">{c.title}</h3>
              <p className="text-sm text-gray-400">{c.issuer} · {c.date}</p>
              <a href={c.link} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-[#8245ec] font-semibold">
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
