import React, { useMemo } from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.jpg";
import "./About.css";

const About = () => {
  const stars = useMemo(
    () =>
      Array.from({ length: 14 }).map(() => ({
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

  return (
    <section
      id="about"
      className="relative py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 overflow-hidden"
    >
      <div className="shooting-stars" aria-hidden="true">
        {stars.map((s, i) => (
          <span
            key={i}
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

      <div className="flex flex-col-reverse md:flex-row justify-between items-center relative z-10">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Rinchen Dawa
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
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
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a passionate student at Gyelpozhing College of Information
            Technology (GCIT), exploring the world of web development. I am
            learning both front-end and back-end technologies, including the
            MERN stack, and enjoy building projects that combine creativity with
            functionality. I am eager to apply my skills to solve real-world
            problems and create seamless, interactive web experiences.
          </p>
          <a
            href="https://drive.google.com/file/d/1s8ZPZaK1rUd2Dg7u8-ydcx_8kJCBiUjZ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full ml-10"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Rinchen Dawa"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
