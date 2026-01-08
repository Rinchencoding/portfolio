import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";
import Certificate from "./components/Certificate/Certificate.jsx";

const App = () => {
  return (
    <div className="bg-[#050414]">
      {/* Background Effects */}
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Content */}
      <div className="relative pt-20 pb-40"> {/* Added pb-40 to prevent overlap with bottom nav */}
        <Navbar />

        <section id="about" className="scroll-mt-32 min-h-screen">
          <About />
        </section>

        <section id="skills" className="scroll-mt-32 min-h-screen">
          <Skills />
        </section>

        <section
          id="certificate"
          className="scroll-mt-32 min-h-screen flex items-center justify-center"
        >
          <Certificate />
        </section>

        <section id="experience" className="scroll-mt-32 min-h-screen">
          <Experience />
        </section>

        <section id="work" className="scroll-mt-32 min-h-screen">
          <Work />
        </section>

        <section id="education" className="scroll-mt-32 min-h-screen">
          <Education />
        </section>

        <section id="contact" className="scroll-mt-32 min-h-screen">
          <Contact />
        </section>

        {/* Extra bottom padding ensures Footer never gets hidden behind bottom nav */}
        <div className="h-5"></div>

        <Footer />
      </div>
    </div>
  );
};

export default App;
