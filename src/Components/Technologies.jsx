import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaBootstrap,
  FaFigma,
  FaFilePowerpoint,
  FaFileLines,
  FaGitAlt,
  FaWind,
} from "react-icons/fa6";

const skills = [
  { icon: FaHtml5, label: "HTML", color: "#E34F26" },
  { icon: FaCss3Alt, label: "CSS", color: "#1572B6" },
  { icon: FaJs, label: "JavaScript", color: "#F7DF1E" },
  { icon: FaWind, label: "Tailwind", color: "#06B6D4" },
  { icon: FaReact, label: "React", color: "#61DAFB" },
  { icon: FaPython, label: "Python", color: "#3776AB" },
  { icon: FaBootstrap, label: "Bootstrap", color: "#7952B3" },
  { icon: FaFigma, label: "Figma", color: "#F24E1E" },
  { icon: FaFilePowerpoint, label: "PowerPoint", color: "#B7472A" },
  { icon: FaFileLines, label: "Google Docs", color: "#4285F4" },
  { icon: FaGitAlt, label: "Git", color: "#F05032" },
];

export default function Technologies() {
  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0%); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <section className="w-full overflow-hidden bg-black py-12 text-white lg:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* ══ Heading ══ */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-green-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-green-500">
                Skills
              </span>
            </div>

            <h1 className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
              Technologies <span className="text-green-500">We Use</span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
              We use these technologies to create, build, and develop outstanding
              projects.
            </p>
          </div>
        </div>

        {/* ══ Marquee row ══ */}
        <div
          className="relative mt-10 w-full"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div
            className="flex w-max gap-5 animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]"
            style={{ willChange: "transform" }}
          >
            {[...skills, ...skills].map(({ icon: Icon, label, color }, i) => (
              <div
                key={`${label}-${i}`}
                className="group flex shrink-0 flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-7 transition-colors hover:border-green-500/40 hover:bg-white/[0.06] sm:px-10 sm:py-8"
              >
                {/* Icon chip with brand-colored glow */}
                <span
                  className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl text-6xl transition-transform duration-300 group-hover:scale-110 sm:h-28 sm:w-28 sm:text-7xl"
                  style={{
                    color,
                    backgroundColor: `${color}1A`,
                    boxShadow: `0 0 40px ${color}33`,
                  }}
                >
                  <Icon />
                </span>

                {/* Label */}
                <span className="whitespace-nowrap text-base font-bold text-white sm:text-lg">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}