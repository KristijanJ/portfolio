import { Link, useLocation, useNavigate } from "react-router";
import { navToElement } from "../helpers/navigatior";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const navToAbout = () => {
    navigate("/");
    setTimeout(() => {
      navToElement("about");
    }, 100);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e0f1c]/95 backdrop-blur-sm border-b border-gray-800">
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <Link to="/">
          <div className="md:text-2xl text-md font-bold">
            <span className="text-amber-400 font-semibold">AWS</span> Cloud{" "}
            <span className="text-teal-400 font-semibold">Engineer</span>
          </div>
        </Link>
        <ul className="flex md:gap-8 gap-4 md:text-base text-sm">
          <li>
            {location.pathname === "/" ? (
              <button
                onClick={() => navToElement("hero")}
                className="hover:text-teal-400 transition"
              >
                Home
              </button>
            ) : (
              <Link to="/" className="hover:text-teal-400 transition">
                Home
              </Link>
            )}
          </li>
          <li>
            {location.pathname === "/" ? (
              <button
                onClick={() => navToElement("about")}
                className="hover:text-teal-400 transition"
              >
                About
              </button>
            ) : (
              <button
                onClick={navToAbout}
                className="hover:text-teal-400 transition"
              >
                About
              </button>
            )}
          </li>
          <li>
            <button
              onClick={() => navToElement("footer")}
              className="hover:text-teal-400 transition"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
