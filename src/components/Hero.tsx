import { Link } from "react-router";
import developerImg from "/developer.svg";
import { navToElement } from "../helpers/navigatior";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
            Kristijan
            <br />
            <span className="text-teal-400">Jovanovski</span>
          </h1>

          <p className="text-gray-400 leading-relaxed text-xl">
            Hello, I am a{" "}
            <span className="text-teal-400 font-semibold">
              Full-Stack Cloud Engineer
            </span>
            {", "}
            based in Skopje, Macedonia. I build scalable, cloud-native
            applications and infrastructure on{" "}
            <span className="text-amber-400 font-semibold">AWS</span>.
          </p>

          <div className="flex gap-4">
            <Link
              to="/projects"
              className="bg-amber-400 hover:bg-amber-300 text-black px-20 py-3 rounded-full font-semibold transition hover:cursor-pointer"
            >
              Browse work
            </Link>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-200 max-w-[50vw] flex items-center justify-center flex-col">
            <img src={developerImg} alt="" />
          </div>
        </div>
      </div>

      {/* Scroll down button */}
      <button
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 border-2 border-gray-600 rounded-lg flex items-center justify-center hover:border-teal-400 transition group hover:cursor-pointer"
        onClick={() => navToElement("about")}
      >
        <svg
          className="w-6 h-6 group-hover:text-teal-400 transition"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>
    </section>
  );
}

export default Hero;
