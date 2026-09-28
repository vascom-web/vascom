import {
  FaGlobe,
  FaWhatsapp,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa6";

export default function About() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/2348144435028", "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="about"
      className="w-full scroll-mt-24 bg-white px-4 py-6 text-black sm:px-6 lg:px-8"
    >
      {/* Page wrapper: stacks vertically, caps width on huge screens */}
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">

        {/* ══ Row 1: About card + CTA card ══ */}
        <div className="flex flex-col gap-5 lg:flex-row lg:flex-wrap">

          {/* About card */}
          <div className="flex min-w-0 grow shrink basis-full flex-col overflow-hidden rounded-2xl bg-white shadow-md lg:basis-96">
            <div className="flex flex-col gap-1 p-5 pb-0 text-start">
              <h5 className="font-extrabold text-green-600">About Us</h5>
              <h1 className="text-2xl font-bold sm:text-3xl">Who are we?</h1>
            </div>

            <div className="flex grow flex-col gap-4 p-5">
              <p className="leading-relaxed">
                <strong className="text-green-600">Vasatile Communication</strong>{" "}
                is a technology subsidiary of Vasatile a team of developers,
                designers and technical writers focused on one thing: turning
                ideas into working digital products that look good and perform
                even better.
              </p>

              <p className="leading-relaxed">
                From startups to students and growing businesses across Nigeria,
                we provide the complete package most agencies split up.
              </p>

              {/* mt-auto pins buttons to the bottom when cards are stretched */}
              <div className="mt-auto flex flex-wrap justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => scrollToSection("discover")}
                  className="flex min-w-0 grow shrink basis-32 items-center justify-center gap-2 rounded-2xl bg-white px-3 py-2 text-base font-extrabold text-green-600 ring-1 ring-green-600/20 transition-colors hover:bg-green-600 hover:text-white sm:text-lg"
                >
                  <small className="truncate">Discover</small>
                  <FaGlobe className="shrink-0" />
                </button>

                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="flex min-w-0 grow shrink basis-32 items-center justify-center gap-2 rounded-2xl bg-white px-3 py-2 text-base font-extrabold text-green-600 ring-1 ring-green-600/20 transition-colors hover:bg-green-600 hover:text-white sm:text-lg"
                >
                  <small className="truncate">WhatsApp</small>
                  <FaWhatsapp className="shrink-0" />
                </button>
              </div>
            </div>
          </div>

          {/* Why Clients Choose Us + Mission */}
          <div className="flex min-w-0 grow shrink basis-full flex-col rounded-2xl bg-white p-5 text-start shadow-md lg:basis-96">
            <h5 className="font-extrabold text-green-600">
              Why Clients Choose Us
            </h5>

            <p className="mx-auto mt-3 max-w-3xl leading-relaxed">
              Most clients come to us because they were tired of hiring a designer
              in one place, a developer in another, and still having to write their
              documentation alone. At{" "}
              <strong className="text-green-600">Vasatile Communication</strong>,
              you get design + code + documentation under one roof.
            </p>

            <div className="mt-6 border-t border-green-100 pt-5">
              <h5 className="font-extrabold text-green-600">Our Mission</h5>
              <p className="mx-auto mt-2 max-w-3xl leading-relaxed">
                To make professional technology and academic support accessible to
                every Nigerian student, startup and small business.
              </p>
            </div>
          </div>

          {/* CTA card */}
          <div className="flex min-w-0 grow shrink basis-full flex-col rounded-2xl bg-white p-5 text-start shadow-md lg:basis-96">
            <p className="text-3xl text-green-600">
              <FaRocket />
            </p>

            <small className="mt-2 block text-green-600">
              Let's Work Together
            </small>
            <h1 className="text-2xl font-extrabold sm:text-3xl">
              Have a Project in Mind?
            </h1>

            <p className="mt-2 leading-relaxed">
              We are based in Nigeria. We work online. We serve clients all over
              the country so we understand your market, your budget, and your
              deadline. Reach out anytime.
            </p>

            <div className="mt-auto flex flex-wrap justify-end pt-4">
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="flex min-w-0 grow shrink basis-40 items-center justify-center gap-2 rounded-2xl bg-green-600 px-3 py-2 text-base font-extrabold text-white transition-colors hover:bg-gray-300 hover:text-green-600 sm:text-lg"
              >
                <small className="truncate">Contact us</small>
                <FaArrowRight className="shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}