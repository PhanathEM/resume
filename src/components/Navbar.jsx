import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Worm } from "lucide-react";

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const navLinks = ["About", "Skill", "Project", "Experience", "Contact"];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto">
      {/* Pill Container */}
      <nav className="flex items-center justify-between md:justify-center gap-4 md:gap-6 px-5 py-3 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-lg shadow-black/10 dark:shadow-black/40 text-black dark:text-white">
        {/* Logo */}
        <h1 className="tracking-wide"><a href="#hero">PHANATH EM</a></h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-3 text-sm font-medium">
          <span className="text-lg">{"{"}</span>

          {/* Nav Links */}
          <ul className="flex items-center gap-6">
            {navLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-purple-500 dark:hover:text-red-400 transition-all"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <span className="text-lg">{"}"}</span>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="
              rounded-full p-2
              bg-gray-100 dark:bg-white
              shadow-sm shadow-purple-400/40
              dark:shadow-red-400/40
              text-gray-600
              hover:text-purple-500
              dark:hover:text-red-400
              transition-all
            "
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div
          className="
            mt-3
            rounded-2xl
            bg-white/90 dark:bg-gray-900/90
            backdrop-blur-md
            border border-gray-200 dark:border-gray-700
            shadow-lg shadow-black/10 dark:shadow-black/40
            flex flex-col items-center gap-5 py-6
            md:hidden
          "
        >
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="
                text-base font-medium
                hover:text-purple-500
                dark:hover:text-red-400
                transition-all
              "
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
