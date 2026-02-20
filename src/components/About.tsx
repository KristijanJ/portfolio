import { Link } from "react-router";
import { getRecentWork, getWhatIBuild } from "../services/experienceList";

function About() {
  const whatIBuild = getWhatIBuild();
  const recentWork = getRecentWork();

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="container mx-auto px-6 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-6xl font-bold">
            About <span className="text-teal-400">me</span>
          </h2>
          <p className="text-teal-400">
            Building Cloud Infrastructure That Works
          </p>

          <div className="space-y-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* What I Build */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg">
                  What I Build
                </h3>
                <ul className="text-gray-400 space-y-2 leading-relaxed">
                  {whatIBuild.map((itemIBuild, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-amber-400 mr-2">▹</span>
                      <span>
                        {itemIBuild.map((item, index) => (
                          <span key={index} className={item.className}>
                            {item.text}{" "}
                          </span>
                        ))}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Work */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg">
                  Recent Work
                </h3>
                <ul className="text-gray-400 space-y-2 leading-relaxed">
                  {recentWork.map((work, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-400 mr-2">✓</span>
                      <span>{work}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Link
                to="/projects"
                className="bg-amber-400 hover:bg-amber-300 text-black px-20 py-3 rounded-full font-semibold transition hover:cursor-pointer"
              >
                Browse work
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-teal-400">A bit of history</p>
                <p className="text-gray-400 leading-relaxed">
                  My career started in customer success and frontend development
                  before transitioning to cloud engineering. That journey taught
                  me something valuable:{" "}
                  <span className="text-gray-300 italic">
                    the best technical solutions are the ones that teams can
                    actually use and maintain
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
