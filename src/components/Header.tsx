import { Link } from "react-router";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e0f1c]/95 backdrop-blur-sm border-b border-gray-800">
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <Link to="/">
          <div className="md:text-2xl text-xl font-bold">
            <span className="text-amber-400 font-semibold">AWS</span> Cloud{" "}
            <span className="text-teal-400 font-semibold">Engineer</span>
          </div>
        </Link>
        <ul className="flex gap-8">
          <li>
            <a href="#hero" className="hover:text-teal-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-teal-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#footer" className="hover:text-teal-400 transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
