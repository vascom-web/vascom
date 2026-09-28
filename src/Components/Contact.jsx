import { useState } from "react";
import {
  FaPaperPlane,
  FaCircleCheck,
  FaCircleExclamation,
  FaSpinner,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";

// ⬇️ Paste your Web3Forms access key here (from web3forms.com)
const ACCESS_KEY = "ee6e0717-9b97-4367-b4c8-58deb10dcd97";

const SERVICE_OPTIONS = [
  "Business Analysis",
  "Software Engineering",
  "Web Development",
  "UI/UX Design",
  "Graphics Design",
  "Technical Writing",
  "Academic Report Assistance",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          from_name: "Vasatile Portfolio",
          subject: `New Enquiry — ${form.service || "General"}`,
          name: form.name,
          email: form.email,
          service: form.service,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="w-full scroll-mt-24 bg-[#0a0f0d] px-4 py-12 text-white sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
        {/* ══ LEFT: Contact info ══ */}
        <div className="flex flex-col justify-center">
          {/* Label with dash */}
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 bg-green-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-green-500">
              Get In Touch
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Let's Work Together
          </h1>

          {/* Subtext */}
          <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-400 sm:text-base">
            Have a project in mind or need professional support?
            <br />
            We'd love to hear from you.
          </p>

          {/* Contact details row */}
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="tel:+2348144435028"
              className="flex items-center gap-3 transition-opacity hover:opacity-80"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500 text-base text-white">
                <FaPhone />
              </span>
              <span className="text-sm text-gray-200 sm:text-base">
                +234 814 443 5028
              </span>
            </a>

            <a
              href="mailto:vasatilecommunication@gmail.com"
              className="flex items-center gap-3 transition-opacity hover:opacity-80"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500 text-base text-white">
                <FaEnvelope />
              </span>
              <span className="break-all text-sm text-gray-200 sm:text-base">
                vasatilecommunication@gmail.com
              </span>
            </a>

            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500 text-base text-white">
                <FaLocationDot />
              </span>
              <span className="text-sm text-gray-200 sm:text-base">
                Umuahia North, Abia State, Nigeria
              </span>
            </div>
          </div>
        </div>

        {/* ══ RIGHT: Form ══ */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Row 1: Name + Email */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition focus:border-green-500 focus:bg-white/[0.05]"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition focus:border-green-500 focus:bg-white/[0.05]"
            />
          </div>

          {/* Row 2: Service + Message + Button */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Left column: service + button */}
            <div className="flex flex-col gap-4">
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="w-full cursor-pointer appearance-none rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-gray-300 outline-none transition focus:border-green-500 focus:bg-white/[0.05]"
              >
                <option value="" disabled className="bg-[#0a0f0d]">
                  Service Needed
                </option>
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s} value={s} className="bg-[#0a0f0d]">
                    {s}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                disabled={status === "loading"}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane />
                  </>
                )}
              </button>
            </div>

            {/* Right column: message textarea */}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={5}
              className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition focus:border-green-500 focus:bg-white/[0.05]"
            />
          </div>

          {/* Status banners */}
          {status === "success" && (
            <p className="flex items-center justify-center gap-2 rounded-lg bg-green-500/10 px-4 py-3 text-center text-sm font-semibold text-green-400">
              <FaCircleCheck className="shrink-0" />
              Message sent! We'll reply to you shortly.
            </p>
          )}

          {status === "error" && (
            <p className="flex items-center justify-center gap-2 rounded-lg bg-red-500/10 px-4 py-3 text-center text-sm font-semibold text-red-400">
              <FaCircleExclamation className="shrink-0" />
              Something went wrong. Please try again or email
              vasatilecommunication@gmail.com directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}