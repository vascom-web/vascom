import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const FAQS = [
  {
    question: "What services does Vasatile Communication offer?",
    answer:
      "We offer a complete package under one roof Business Analysis, Software Engineering, Web Development, UI/UX Design, Graphics Design, and Technical Writing (including academic report assistance). Whether you need a full product built or just documentation, we've got you covered.",
  },
  {
    question: "How much does a typical project cost?",
    answer:
      "Pricing depends on the scope, complexity, and timeline of your project. We're affordable and transparent  after a quick chat about your needs, we'll send you a clear quote with no hidden fees. Small projects start low; full builds are quoted per project.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Timelines vary by project type. A landing page can take 3–7 days, a full website 2–4 weeks, and larger software builds are scoped individually. We always agree on a deadline upfront and keep you updated at every stage.",
  },
  {
    question: "Do you work with clients outside Nigeria?",
    answer:
      "Yes! We are based in Nigeria but work online with clients all over the country and internationally. Everything  from consultation to delivery  is handled remotely, so location is never a barrier.",
  },
  {
    question: "How do I get started on a project with you?",
    answer:
      "Simple  fill out the Hire Us form on our Contact page with your name, email, the service you need, and a short message about your project. We'll get back to you within 24 hours to discuss details, timeline, and pricing.",
  },
  {
    question: "Can you help with academic reports and final year projects?",
    answer:
      "Absolutely. We provide expert support for technical reports, research documentation, formatting, and presentation. We help you structure and polish your work to meet academic standards  always ethically and with your own research leading the way.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const toggle = (index) =>
    setOpenIndex((prev) => (prev === index ? -1 : index));

  return (
    <section
      id="faq"
      className="w-full scroll-mt-24 bg-black px-4 py-12 text-white sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* ══ Heading ══ */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 bg-green-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-green-500">
              FAQs
            </span>
          </div>

          <h1 className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
            Frequently Asked{" "}
            <span className="text-green-500">Questions</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
            Got questions? We've got answers. If you can't find what you're
            looking for, feel free to reach out.
          </p>
        </div>

        {/* ══ FAQ list: stacked on mobile, two columns on desktop ══ */}
        <div className="mt-10 flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:gap-5">
          {FAQS.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={question}
                className={`flex min-w-0 flex-col overflow-hidden rounded-2xl border transition-colors lg:basis-[calc(50%-0.625rem)] ${
                  isOpen
                    ? "border-green-500/50 bg-white/[0.05]"
                    : "border-white/10 bg-white/[0.03] hover:border-green-500/30"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors sm:p-6"
                >
                  <span className="min-w-0 text-sm font-bold sm:text-base lg:text-lg">
                    {question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm transition-colors ${
                      isOpen
                        ? "bg-green-500 text-white"
                        : "bg-white/[0.06] text-green-500"
                    }`}
                  >
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-gray-400 sm:px-6 sm:pb-6 sm:text-base">
                      {answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}