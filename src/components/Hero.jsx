import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  const codeLines = ["const webdeveloper = {", "  name: 'PHANATH EM',", "  role: 'Web Developer',", "  skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind', 'React', 'PHP', 'Laravel', 'MySQL'],", "};", "", "developer.buildAmazingWebsite();"];

  const [displayed, setDisplayed] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < codeLines.length) {
      if (charIndex < codeLines[lineIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayed((prev) => prev + codeLines[lineIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 25);

        return () => clearTimeout(timeout);
      } else {
        setDisplayed((prev) => prev + "\n");
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }
    }
  }, [charIndex, lineIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col md:flex-row justify-center gap-10 md:gap-12 bg-transparent px-5 sm:px-6 md:px-12 pt-28 md:pt-28 overflow-hidden">
      {/* GLOW BACKGROUND */}
      <div className="hidden dark:block absolute top-20 left-1/4 w-[300px] h-[300px] bg-red-400/10 blur-3xl rounded-full pointer-events-none"></div>

      {/* LEFT CONTENT */}
      <div className="relative z-10 flex-1 text-center md:text-left max-w-xl mt-10 md:mt-26">
        {/* SMALL LABEL */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-7">
          <span className="w-2 h-2 rounded-full bg-purple-500 dark:bg-red-400 animate-pulse"></span>
          Available For Internship
        </div>
        {/* TITLE */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-gray-800 dark:text-gray-100" id="Bricolage-Grotesque">
          Hi, I'm <span className="text-violet-500 dark:text-rose-500">Phanath Em</span>
        </h1>
        {/* DESCRIPTION */}
        <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-8 max-w-lg">I build modern web applications with clean UI, scalable backend, and smooth user experience.</p>

        {/* CTA */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

          {/* PROJECT BUTTON */}
          <Link
            to="/cv"
            className="px-7 py-3 text-sm sm:text-base rounded-full bg-violet-500 hover:bg-violet-600 transition-all duration-300 dark:bg-rose-500 dark:hover:bg-rose-600 text-white font-medium shadow-lg shadow-violet-500/20 dark:shadow-rose-500/20">
            View My CV
          </Link>

          {/* CONTACT BUTTON */}
          <a
            href="#contact"
            className="px-7 py-3 text-sm sm:text-base rounded-full border border-gray-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md hover:border-purple-500 dark:hover:border-red-400 text-gray-700 dark:text-gray-200 transition-all duration-300">
            Contact Me
          </a>
        </div>
      </div>

      {/* RIGHT: CODE CARD */}
      <div className="relative z-10 flex-1 w-full max-w-xl mt-6 md:mt-26">
        <div className="rounded-3xl p-4 sm:p-5 md:p-6 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-gray-200 dark:border-slate-800 shadow-xl shadow-black/5 dark:shadow-black/30 hover:border-purple-500 dark:hover:border-red-400/30 transition-all duration-500">

          {/* TOP BAR */}
          <div className="flex items-center gap-2 mb-5">
            <span className="w-3 h-3 bg-red-400 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-green-400 rounded-full"></span>
          </div>

          {/* CODE */}
          <pre className="text-[11px] sm:text-xs md:text-sm font-mono text-gray-800 dark:text-gray-200 whitespace-pre-wrap leading-relaxed">
            {displayed}
            <span className="animate-pulse text-purple-500 dark:text-red-400">|</span>
          </pre>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 select-none">
        <span className="tracking-[0.25em] uppercase">Scroll</span>
        <ChevronDown className="animate-bounce w-4 h-4 text-zinc-500 dark:text-zinc-400" />
      </div>
    </section>
  );
}

export default Hero;
