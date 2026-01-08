import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    if (!isSent) {
      return undefined;
    }
    const timer = window.setTimeout(() => setIsSent(false), 4000);
    return () => window.clearTimeout(timer);
  }, [isSent]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_61jn8dr", // Replace with your EmailJS Service ID
        "template_gwls62t", // Replace with your EmailJS Template ID
        form.current,
        "8JTLQH4thPcMr1nYn" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute -left-10 top-12 h-64 w-64 rounded-full bg-[#8245ec]/25 blur-3xl" />
        <span className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/4 rounded-full bg-[#35c3ff]/20 blur-3xl" />
      </div>

      <ToastContainer />

      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-gray-500">
            Connect
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold uppercase tracking-[0.35em] text-gray-300">
            Contact
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Tell me about your next idea or opportunity. I aim to reply within a couple of days and look forward to collaborating.
          </p>
        </header>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_minmax(0,1fr)]">
          <aside className="flex flex-col justify-between gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg shadow-[0_28px_70px_-35px_rgba(130,69,236,0.65)]">
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Let’s build something meaningful.
              </h3>
              <p className="mt-4 text-sm text-gray-300">
                Whether it is a full-stack product, rapid prototype, or UX refresh, I enjoy partnering with teams who care about detail and usability.
              </p>
            </div>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#8245ec]/15 text-[#cbb3ff]">
                  •
                </span>
                Collaborative and transparent process
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#8245ec]/15 text-[#cbb3ff]">
                  •
                </span>
                Focus on accessible interfaces
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#8245ec]/15 text-[#cbb3ff]">
                  •
                </span>
                End-to-end product thinking
              </li>
            </ul>

            {isSent && (
              <div className="rounded-2xl border border-[#35c3ff]/40 bg-[#0f1a39] px-4 py-3 text-sm text-[#b4e6ff]">
                Thanks for reaching out. I will get back to you soon.
              </div>
            )}
          </aside>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg shadow-[0_25px_65px_-38px_rgba(53,195,255,0.7)]">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-5"
            >
              <label className="flex flex-col gap-2 text-sm font-medium text-gray-300">
                Email
                <input
                  type="email"
                  name="user_email"
                  placeholder="you@example.com"
                  required
                  className="h-12 rounded-2xl border border-white/10 bg-[#0f1124]/60 px-4 text-white transition focus:border-[#8245ec]/60 focus:outline-none focus:ring-2 focus:ring-[#8245ec]/30"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium text-gray-300">
                Name
                <input
                  type="text"
                  name="user_name"
                  placeholder="How should I address you?"
                  required
                  className="h-12 rounded-2xl border border-white/10 bg-[#0f1124]/60 px-4 text-white transition focus:border-[#8245ec]/60 focus:outline-none focus:ring-2 focus:ring-[#8245ec]/30"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium text-gray-300">
                Subject
                <input
                  type="text"
                  name="subject"
                  placeholder="Project, collaboration, hello..."
                  required
                  className="h-12 rounded-2xl border border-white/10 bg-[#0f1124]/60 px-4 text-white transition focus:border-[#8245ec]/60 focus:outline-none focus:ring-2 focus:ring-[#8245ec]/30"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium text-gray-300">
                Message
                <textarea
                  name="message"
                  placeholder="Share details about the idea, timeline, or scope."
                  rows="5"
                  required
                  className="rounded-2xl border border-white/10 bg-[#0f1124]/60 px-4 py-3 text-white transition focus:border-[#8245ec]/60 focus:outline-none focus:ring-2 focus:ring-[#8245ec]/30"
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#8245ec] to-[#5c56ff] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:brightness-110"
              >
                Send Message
                <span aria-hidden>→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
