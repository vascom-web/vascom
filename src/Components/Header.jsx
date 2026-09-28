import { FaInfo, FaGlobe, FaDownload, FaQuestion } from "react-icons/fa6";

const NAV_ICONS = [
  { icon: FaQuestion, label: "Help", target: "faq" },
  { icon: FaInfo, label: "About", target: "about" },
  { icon: FaGlobe, label: "Discover", target: "discover" },
];

export default function Header() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-4 z-50 flex w-full justify-center px-4">
      <nav className="flex w-full max-w-xl items-center justify-between gap-3 rounded-full border border-white/10 bg-black/80 px-3 py-2 shadow-lg backdrop-blur-md sm:px-4">

        {/* ══ Icon buttons ══ */}
        <ul className="flex items-center gap-2 sm:gap-3">
          {NAV_ICONS.map(({ icon: Icon, label, target }) => (
            <li key={label}>
              <button
                type="button"
                aria-label={label}
                onClick={() => scrollToSection(target)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white transition-colors hover:bg-green-600 sm:h-11 sm:w-11"
              >
                <Icon />
              </button>
            </li>
          ))}
        </ul>

        {/* ══ Profile button ══ */}
        <button
          type="button"
          onClick={() => scrollToSection("profile")}
          className="flex items-center gap-2 rounded-full bg-white/[0.06] px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-green-500 sm:px-5 sm:text-base"
        >
          <FaDownload />
          <span>Profile</span>
        </button>
      </nav>
    </header>
  );
}