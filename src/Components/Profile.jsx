import {
  FaBuilding,
  FaCalendarDays,
  FaLocationDot,
  FaEnvelope,
  FaPhone,
  FaHandshake,
  FaLightbulb,
  FaAward,
  FaHeart,
  FaQuoteLeft,
  FaLinkedinIn,
} from "react-icons/fa6";

import Logo from "/home/vascom/myPortfolio/my-project/src/assets/Logo.jpg";
import FounderImage from "/home/vascom/myPortfolio/my-project/src/assets/Founder.jpg";

// ══ Company info ══
const COMPANY = {
  name: "Vasatile Communication",
  tagline: "Design + Code + Documentation, Under One Roof",
  founded: "2024",
  location: "Umuahia North, Abia State, Nigeria",
  email: "vasatilecommunication@gmail.com",
  phone: "+234 814 443 5028",
  rc: "CAC Registration In Progress",
  about:
    "Vasatile Communication is a technology subsidiary of Vasatile a team of developers, designers, and technical writers focused on one thing: turning ideas into working digital products that look good and perform even better. We bring a unique blend of creativity, technical expertise, and intellectual rigor to every project, serving businesses, startups, and students across Nigeria.",
  vision:
    "To become Nigeria's most trusted one-stop hub for technology, design, and academic support  where every ambitious idea finds the team to bring it to life.",
  mission:
    "To make professional technology and academic support accessible to every Nigerian student, startup, and small business.",
};

// ══ Core values ══
const VALUES = [
  {
    icon: FaHandshake,
    title: "Integrity",
    text: "We do what we say transparently, honestly, and with your best interest at heart.",
  },
  {
    icon: FaLightbulb,
    title: "Innovation",
    text: "We embrace new tools and creative thinking to solve problems the smarter way.",
  },
  {
    icon: FaAward,
    title: "Excellence",
    text: "We deliver quality work, on time, every time no shortcuts, no compromises.",
  },
  {
    icon: FaHeart,
    title: "Client-First",
    text: "Your goals shape our work. We listen, adapt, and build around what truly matters to you.",
  },
];

// ══ Founder info ══
const FOUNDER = {
  name: "Uzochukwu David",
  role: "Founder & Lead Developer",
  bio: "Uzochukwu David founded Vasatile Communication in 2024 with a simple vision: give Nigerian businesses, startups, and students access to world-class technology and design without the usual agency runaround. A developer and problem-solver at heart, he leads the team with a hands-on approach from the first client conversation to the final line of code.",
  linkedin: "https://www.linkedin.com/in/vasatile-communication-476270370/?isSelfProfile=true",
};

export default function Profile() {
  return (
    <section
      id="profile"
      className="w-full scroll-mt-24 bg-black px-4 py-12 text-white sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-14">

        {/* ══════════ Section heading ══════════ */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2">
          
            <span className="text-xs font-bold uppercase tracking-widest text-green-500">
              Company Profile
            </span>
          </div>
          <h1 className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
            Who We Are, <span className="text-green-500">In Full</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
            Everything you need to know about Vasatile Communication our
            identity, our values, and the people behind the work.
          </p>
        </div>

        {/* ══════════ Row 1: Logo + Identity + About ══════════ */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch">

          {/* ── Identity card (logo + company info) ── */}
          <div className="flex min-w-0 grow shrink basis-full flex-col items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center lg:basis-96 lg:items-start lg:text-left">
            {/* Logo */}
            <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
              <img
                src={Logo}
                alt={`${COMPANY.name} logo`}
                className="h-full w-full object-contain p-2"
              />
            </div>

            {/* Company name */}
            <div>
              <h2 className="text-xl font-extrabold leading-tight sm:text-2xl">
                {COMPANY.name}
              </h2>
              <p className="mt-1 text-sm text-green-500 sm:text-base">
                {COMPANY.tagline}
              </p>
            </div>

            {/* Info rows */}
            <div className="flex w-full flex-col gap-3 border-t border-white/10 pt-5 text-left">
              <div className="flex items-start gap-3">
                <FaCalendarDays className="mt-1 shrink-0 text-green-500" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Founded
                  </p>
                  <p className="text-sm text-gray-200 sm:text-base">
                    {COMPANY.founded}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaBuilding className="mt-1 shrink-0 text-green-500" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Registration
                  </p>
                  <p className="text-sm text-gray-200 sm:text-base">
                    {COMPANY.rc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaLocationDot className="mt-1 shrink-0 text-green-500" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Location
                  </p>
                  <p className="text-sm text-gray-200 sm:text-base">
                    {COMPANY.location}
                  </p>
                </div>
              </div>

              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className="flex items-start gap-3 transition-opacity hover:opacity-80"
              >
                <FaPhone className="mt-1 shrink-0 text-green-500" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Phone
                  </p>
                  <p className="text-sm text-gray-200 sm:text-base">
                    {COMPANY.phone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-start gap-3 transition-opacity hover:opacity-80"
              >
                <FaEnvelope className="mt-1 shrink-0 text-green-500" />
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Email
                  </p>
                  <p className="break-all text-sm text-gray-200 sm:text-base">
                    {COMPANY.email}
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* ── About card ── */}
          <div className="flex min-w-0 grow shrink basis-full flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:basis-96">
            <div>
              <div className="flex items-center gap-2">
               
                <span className="text-xs font-bold uppercase tracking-widest text-green-500">
                  About Us
                </span>
              </div>
              <h2 className="mt-3 text-xl font-bold sm:text-2xl">
                Our Story
              </h2>
              <p className="mt-3 leading-relaxed text-gray-300">
                {COMPANY.about}
              </p>
            </div>

            <div className="border-t border-white/10 pt-5">
              <h3 className="text-sm font-bold uppercase tracking-widest text-green-500">
                Our Vision
              </h3>
              <p className="mt-2 leading-relaxed text-gray-300">
                {COMPANY.vision}
              </p>
            </div>

            <div className="border-t border-white/10 pt-5">
              <h3 className="text-sm font-bold uppercase tracking-widest text-green-500">
                Our Mission
              </h3>
              <p className="mt-2 leading-relaxed text-gray-300">
                {COMPANY.mission}
              </p>
            </div>
          </div>
        </div>

        {/* ══════════ Row 2: Core Values ══════════ */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2">
              
              <span className="text-xs font-bold uppercase tracking-widest text-green-500">
                Our Core Values
              </span>
            </div>
            <h2 className="mt-3 text-xl font-extrabold sm:text-2xl lg:text-3xl">
              What We <span className="text-green-500">Stand For</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            {VALUES.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="flex min-w-0 grow shrink basis-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-green-500/40 sm:basis-64 lg:basis-72"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10 text-xl text-green-500">
                  <Icon />
                </span>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{text}</p>
              </article>
            ))}
          </div>
        </div>

        {/* ══════════ Row 3: Founder ══════════ */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2">
             
              <span className="text-xs font-bold uppercase tracking-widest text-green-500">
                Meet The Founder
              </span>
            </div>
            <h2 className="mt-3 text-xl font-extrabold sm:text-2xl lg:text-3xl">
              The Person <span className="text-green-500">Behind The Vision</span>
            </h2>
          </div>

          <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:flex-row lg:items-center lg:gap-10">
            {/* Founder image */}
            <div className="flex w-full justify-center lg:w-auto lg:shrink-0">
              <div className="relative w-40 sm:w-48 lg:w-56">
                {/* Green glow */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 rounded-full bg-green-500/20 blur-3xl"
                />
                <img
                  src={FounderImage}
                  alt={FOUNDER.name}
                  className="aspect-square w-full rounded-full border-2 border-green-500/40 object-cover shadow-lg"
                />
              </div>
            </div>

            {/* Founder bio */}
            <div className="flex min-w-0 flex-1 flex-col gap-4 text-center lg:text-left">
              <FaQuoteLeft className="mx-auto text-2xl text-green-500/50 lg:mx-0" />

              <div>
                <h3 className="text-xl font-extrabold sm:text-2xl">
                  {FOUNDER.name}
                </h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-green-500 sm:text-base">
                  {FOUNDER.role}
                </p>
              </div>

              <p className="leading-relaxed text-gray-300">{FOUNDER.bio}</p>

              <a
                href={FOUNDER.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-bold text-white transition-colors hover:border-green-500 hover:bg-green-500 lg:mx-0"
              >
                <FaLinkedinIn />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}