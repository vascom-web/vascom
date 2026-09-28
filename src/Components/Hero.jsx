import { FaGithub, FaWhatsapp, FaXTwitter, FaTiktok, FaYoutube, FaArrowRight, FaGlobe } from "react-icons/fa6";

import HeroImage from '/home/vascom/myPortfolio/my-project/src/assets/HeroImage.png'

const SOCIALS = [
  { icon: FaGithub, href: "https://github.com/vascom-web", label: "GitHub" },
  { icon: FaWhatsapp, href: "https://wa.me/2348144435028", label: "WhatsApp" },
  { icon: FaXTwitter, href: "https://x.com/yourusername", label: "X (Twitter)" },
  { icon: FaTiktok, href: "https://tiktok.com/@yourusername", label: "TikTok" },
  { icon: FaYoutube, href: "https://youtube.com/@yourusername", label: "YouTube" },
];

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <section className=" text-center sm:text-start mt-5 text-white sm:flex gap-2 p-5">
        <div className=" sm:w-1/2 md:w-1/2 lg:w-1/2 sm:flex sm:items-center">
          <div>
            <div>
              <h1 className="text-5xl sm:text-7xl font-extrabold font-sans">VASATILE</h1>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-sans text-green-700">communication</h3>
            </div>
            <div>
              <p className="p-2 text-xl sm:text-end">
                bringing a unique blend of creativiy, technical expertise, and intellectual rigor to every project.
                whether you are a business looking to establish a powerful online presence, a startup needing a refined UI/UX design or a student requiring expert assistance with academic reports, we the <strong className="text-green-700">vasatile communication </strong> gat you covered.
              </p>
            </div>
            <div className='text-end gap-5 flex justify-center sm:justify-end p-5 w-full'>
              <div className='w-80 flex text-center justify-around gap-5'>
                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className='bg-green-700 font-extrabold text-xl rounded-2xl w-1/2 hover:text-green-600 hover:bg-white flex gap-2 py-2 px-1 justify-center'
                >
                  <small> Hire us</small>
                  <FaArrowRight className="p-0.5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection("discover")}
                  className='bg-white font-extrabold text-xl rounded-2xl w-1/2 hover:text-white hover:bg-green-600 flex gap-2 py-2 px-1 justify-center text-green-600'
                >
                  <small> Discover</small>
                  <FaGlobe className="p-0.5" />
                </button>
              </div>
            </div>
            <div className=" flex justify-center sm:justify-end">
              <div className="w-96 m-2 ">
                <ul className="flex gap-5 w-full justify-center sm:justify-end font-mono font-bold text-xl text-white p-2 ">
                  {SOCIALS.map(({ icon: Icon, href, label }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="inline-flex transition-colors hover:text-green-700"
                      >
                        <Icon />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center sm:w-1/2 md:w-1/2 lg:w-1/2">
          <img src={HeroImage} alt="" className='w-full' />
        </div>
      </section>
    </>
  );
}