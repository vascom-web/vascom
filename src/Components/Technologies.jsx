import HtmlImage from "/home/vascom/myPortfolio/my-project/src/assets/HtmlImage.png";
import CssImage from "/home/vascom/myPortfolio/my-project/src/assets/CSSImage.png";
import TailwindImage from "/home/vascom/myPortfolio/my-project/src/assets/TAILWINDIMAGE.png";
import JavascriptImage from "/home/vascom/myPortfolio/my-project/src/assets/JavascriptImage.png";
import ReactImage from "/home/vascom/myPortfolio/my-project/src/assets/ReactImage.png";
import PythonImage from "/home/vascom/myPortfolio/my-project/src/assets/PythonImage.png";
import BootstrapImage from "/home/vascom/myPortfolio/my-project/src/assets/BootstrapImage.png";
import FigmaImage from "/home/vascom/myPortfolio/my-project/src/assets/FigmaIMage.png";
import PowerPointImage from "/home/vascom/myPortfolio/my-project/src/assets/PowerPointIMage.png";
import GoogleDocsImage from "/home/vascom/myPortfolio/my-project/src/assets/GOOGLEDOCSIMAGE.png";
import GitImage from "../assets/GItAndGItHubImage.png";

const skills = [
  { src: HtmlImage, alt: "HTML" },
  { src: CssImage, alt: "CSS" },
  { src: JavascriptImage, alt: "JavaScript" },
  { src: TailwindImage, alt: "Tailwind" },
  { src: ReactImage, alt: "React" },
  { src: PythonImage, alt: "Python" },
  { src: BootstrapImage, alt: "Bootstrap" },
  { src: FigmaImage, alt: "Figma" },
  { src: PowerPointImage, alt: "PowerPoint" },
  { src: GoogleDocsImage, alt: "Google Docs" },
  { src: GitImage, alt: "Git" },
];

export default function Technologies() {
  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0%); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      <section className="w-full overflow-hidden bg-black py-12 text-white lg:py-16">
         <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* ══ Heading ══ */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2">
              
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

        <div className="flex w-max gap-2 animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused] m-5">
          {[...skills, ...skills].map(({ src, alt }, i) => (
            <div key={i} className="w-96  p-1 rounded-2xl ">
              <img src={src} alt={alt} className="w-full h-auto rounded-2xl" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}