import {
  FaUserGear,
  FaScaleBalanced,
  FaCode,
  FaPaintbrush,
  FaFileWord,
  FaPalette,
  FaArrowRight,
} from "react-icons/fa6";

// Reusable card data — keeps JSX DRY
const services = [
  {
    icon: FaScaleBalanced,
    title: "Business Analysis",
    body: (
      <>
        <strong className="text-green-500">Vasatile Communication</strong> helps
        businesses understand what they truly need before investing time and money.
        We analyze goals, processes, data, and pain points; gather stakeholder
        requirements; and translate them into clear roadmaps, user stories, and
        technical specifications. The result is smarter decisions, fewer costly
        revisions, and solutions that genuinely fit the business.
      </>
    ),
  },
  {
    icon: FaUserGear,
    title: "Software Engineering",
    body: (
      <>
        Our software engineering team builds reliable, scalable, and secure
        digital products. From web applications and mobile apps to APIs,
        automation tools, and cloud-based systems,{" "}
        <strong className="text-green-500">Vasatile Communication</strong> handles
        architecture, development, testing, deployment, and maintenance. We focus
        on clean code, performance, security, and long-term maintainability.
      </>
    ),
  },
  {
    icon: FaCode,
    title: "Web Development",
    body: (
      <>
        <strong className="text-green-500">Vasatile Communication</strong> designs
        and develops websites that do more than look good — they load fast, rank
        well, and convert visitors. We build corporate websites, e-commerce
        stores, portals, landing pages, and custom CMS solutions. Our work covers
        front-end and back-end development, responsive design, SEO readiness,
        hosting, and ongoing support.
      </>
    ),
  },
  {
    icon: FaPaintbrush,
    title: "UI/UX Design",
    body: (
      <>
        Great products are built around people. At{" "}
        <strong className="text-green-500">Vasatile Communication</strong>, our
        UI/UX designers research user behavior, map user journeys, create
        wireframes and prototypes, and test interfaces before development. We
        design clean, accessible, and intuitive experiences that make digital
        products easy to use and aligned with business goals.
      </>
    ),
  },
  {
    icon: FaPalette,
    title: "Graphics Design",
    body: (
      <>
        <strong className="text-green-500">Vasatile Communication</strong> creates
        visual identities and marketing assets that communicate instantly. We
        design logos, brand kits, social media graphics, brochures, pitch decks,
        packaging, banners, and infographics. Our graphics design work helps
        brands look professional, consistent, and memorable across every channel.
      </>
    ),
  },
  {
    icon: FaFileWord,
    title: "Technical Writing",
    body: (
      <>
        <strong className="text-green-500">Vasatile Communication</strong> turns
        complex technical information into clear, usable documentation. We write
        user manuals, API documentation, standard operating procedures, white
        papers, proposals, training guides, reports, final year projects, and
        help-center content. Our technical writing helps customers, teams, and
        stakeholders understand products faster — and with fewer support issues.
      </>
    ),
  },
];

export default function Skill() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="discover"
      className="w-full scroll-mt-24 bg-black px-4 py-12 text-white sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* ══ Section heading ══ */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 bg-green-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-green-500">
              What We Do
            </span>
          </div>

          <h1 className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
            Design + Code + Documentation,{" "}
            <span className="text-green-500">Under One Roof</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
            At <strong className="text-green-500">Vasatile Communication</strong>,
            we combine strategy, technology, design, and clear communication to
            help businesses grow, launch better products, and connect with their
            audiences.
          </p>
        </div>

        {/* ══ Responsive flex grid ══ */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          {services.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="group relative flex min-w-0 grow shrink basis-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/40 hover:bg-white/[0.05] sm:basis-80 lg:basis-96"
            >
              {/* Green glow blob that appears on hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 sm:opacity-60"
              />

              {/* ── Icon hero ── */}
              <div className="relative mb-5 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-500/20 to-green-500/5 text-3xl text-green-500 transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20 sm:text-4xl">
                <Icon />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold leading-tight sm:text-2xl">
                {title}
              </h3>

              {/* Body text — grows to fill remaining space */}
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-400 sm:text-base">
                {body}
              </p>

              {/* CTA pinned to the bottom */}
              <div className="mt-6 flex justify-end pt-2">
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="flex items-center gap-2 rounded-xl bg-green-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-600 sm:text-base"
                >
                  Get in touch
                  <FaArrowRight className="text-xs" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}