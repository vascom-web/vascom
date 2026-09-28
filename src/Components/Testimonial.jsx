import FirstAvatar from "../assets/FirstAvatar.png";
import SecondAvatar from "../assets/SecondAvatar.png";
import ThirdAvatar from "../assets/ThirdAvatar.png";

const testimonials = [
  {
    avatar: FirstAvatar,
    name: "Amaka Eze",
    role: "Student",
    quote:
      "Vasatile Communication delivered our website beyond expectations. Professional, creative, and timely.",
  },
  {
    avatar: SecondAvatar,
    name: "Chinedu Okafor",
    role: "Business Owner",
    quote:
      "Their team is highly skilled and always ready to help. Our project was a huge success.",
  },
  {
    avatar: ThirdAvatar,
    name: "Tunde Adebayo",
    role: "Bank Manager",
    quote:
      "Excellent service! The UI/UX design for our app was top-notch. Highly recommended.",
  },
];

export default function Testimonial() {
  return (
    <section className="w-full bg-white px-4 py-12 text-black sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-7xl">
        {/* ══ Heading ══ */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 bg-green-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-green-500">
              Testimonials
            </span>
          </div>

          <h1 className="mt-4 text-2xl font-extrabold leading-tight text-black sm:text-3xl lg:text-4xl">
            What Our <span className="text-green-500">Clients Say</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
            We take pride in the trust our clients place in us. Here's what some
            of them have to say.
          </p>
        </div>

        {/* ══ Testimonial cards ══ */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          {testimonials.map(({ avatar, name, role, quote }) => (
            <article
              key={name}
              className="flex min-w-0 grow shrink basis-full flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-colors hover:border-green-500/60 sm:basis-80 lg:basis-96"
            >
              {/* Quote mark */}
              <span
                aria-hidden="true"
                className="font-serif text-5xl leading-none text-green-500"
              >
                &ldquo;
              </span>

              {/* Quote text */}
              <p className="flex-1 text-sm font-semibold leading-relaxed text-gray-800 sm:text-base">
                {quote}
              </p>

              {/* Author */}
              <div className="mt-auto flex items-center gap-4 border-t border-gray-200 pt-4">
                <img
                  src={avatar}
                  alt={name}
                  className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-green-500/30"
                />
                <div className="min-w-0">
                  <p className="font-bold text-black">{name}</p>
                  <small className="font-semibold text-green-500">{role}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}