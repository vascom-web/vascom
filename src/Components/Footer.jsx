import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa6";

const NAV_LINKS = [
  { label: "Discover", target: "discover" },
  { label: "About", target: "about" },
  { label: "Hire Us", target: "contact" },
  { label: "Contact", target: "contact" },
  { label: "Profile", target: "profile" },
];

const SOCIALS = [
  { icon: FaFacebookF, href: "https://www.facebook.com/share/1E1jxbJ7vt/?mibextid=wwXIfr", label: "Facebook" },
  { icon: FaXTwitter, href: "https://x.com/nvasatile1?s=11", label: "X (Twitter)" },
  { icon: FaInstagram, href: "https://www.instagram.com/vasatilecommunication?stkn=amU2OGNxbGg1amY4", label: "Instagram" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/vasatile-communication-476270370", label: "LinkedIn" },
  { icon: FaWhatsapp, href: "https://wa.me/2348144435028", label: "WhatsApp" },
  { icon: FaGithub, href: "https://github.com/vascom-web", label: "GitHub" },
];

export default function Footer() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="w-full bg-black text-white">
      {/* Separator line from the section above */}
      <hr className="border-white/10" />

      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* ══ Top: Brand + Nav + Socials ══ */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand block */}
          <div className="flex max-w-sm flex-col gap-4">
            <h2 className="text-2xl font-extrabold">
              <span className="text-green-500">Vasatile</span> Communication
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              Design + Code + Documentation, under one roof. We turn ideas into
              working digital products that look good and perform even better.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV_LINKS.map(({ label, target }) => (
              <button
                key={label}
                type="button"
                onClick={() => scrollToSection(target)}
                className="text-sm font-semibold text-gray-300 transition-colors hover:text-green-500"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex flex-wrap gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] text-gray-300 transition-colors hover:bg-green-500 hover:text-white"
              >
                <Icon className="text-sm" />
              </a>
            ))}
          </div>
        </div>

        {/* ══ Divider ══ */}
        <div className="my-8 h-px w-full bg-white/10" />

        {/* ══ Bottom: Copyright + Back to top ══ */}
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-gray-500 sm:text-sm">
            &copy; {new Date().getFullYear()} Vasatile Communication. All rights
            reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full bg-white/[0.06] px-4 py-2 text-xs font-semibold text-gray-300 transition-colors hover:bg-green-500 hover:text-white sm:text-sm"
          >
            Back to top
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}