import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaGithub,
  FaArrowUp,
  FaWhatsapp,
} from "react-icons/fa";

const navLinks = [
  "About",
  "Skill",
  "Project",
  "Experience",
  "Contact",
];

const socialLinks = [
  {
    icon: FaEnvelope,
    label: "emphanath@gmail.com",
  },
  {
    icon: FaWhatsapp,
    label: "+856 209 634 3410",
  },
  {
    icon: FaGithub,
    label: "GitHub.com/PhanathEM",
    href: "https://github.com/PhanathEM",
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-gray-50 dark:bg-slate-900
        border-t border-gray-200 dark:border-slate-800
      "
    >
      {/* GLOW BACKGROUND */}
      <div
        className="
          absolute
          top-0 left-1/4
          w-[400px] h-[400px]
          bg-purple-500/10
          dark:bg-red-400/10
          blur-3xl
          rounded-full
          pointer-events-none
        "
      ></div>

      <div
        className="
          absolute
          bottom-0 right-1/4
          w-[350px] h-[350px]
          bg-purple-400/10
          dark:bg-red-500/10
          blur-3xl
          rounded-full
          pointer-events-none
        "
      ></div>

      {/* TOP BORDER */}
      <div
        className="
          absolute top-0 inset-x-0 h-px
          bg-gradient-to-r
          from-transparent
          via-purple-500/40
          dark:via-red-400/40
          to-transparent
        "
      ></div>

      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          px-6 md:px-12
          pt-24 pb-8
        "
      >
        {/* MAIN GRID */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1.3fr_0.7fr_0.7fr]
            gap-16
            pb-16
            border-b border-gray-200 dark:border-slate-800
          "
        >
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* STATUS BADGE */}
            <div
              className="
                inline-flex items-center gap-2
                px-4 py-2
                rounded-full
                border border-gray-200 dark:border-slate-700
                bg-white/70 dark:bg-slate-800/70
                backdrop-blur-md
                text-xs uppercase tracking-[0.2em]
                text-gray-500 dark:text-gray-400
                mb-7
              "
            >
              <span
                className="
                  w-2 h-2 rounded-full
                  bg-purple-500
                  dark:bg-red-400
                  animate-pulse
                "
              ></span>

              Available For Internship
            </div>

            {/* NAME */}
            <h2
              className="
                text-5xl md:text-6xl
                font-black
                leading-none
                tracking-tight
                mb-6
              "
            >
              <span className="text-gray-900 dark:text-white">
                PHANATH
              </span>

              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-purple-500
                  to-purple-400
                  dark:from-red-400
                  dark:to-red-500
                  bg-clip-text
                  text-transparent
                "
              >
                EM
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                text-gray-600 dark:text-gray-400
                leading-8
                max-w-md
                text-sm md:text-base
              "
            >
              Creating modern web applications with clean UI and powerful backend systems.
            </p>
          </motion.div>

          {/* NAVIGATION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p
              className="
                text-xs uppercase tracking-[0.3em]
                text-gray-500
                mb-7
              "
            >
              Navigation
            </p>

            <nav className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="
                    px-1 py-1
                    rounded-full
                    bg-white/70 dark:bg-slate-800/70
                    w-28 text-center
                    hover:border-purple-500/40
                    dark:hover:border-red-400/30
                    transition-all duration-300
                    border border-gray-200 dark:border-slate-700
                    text-gray-700 dark:text-gray-300
                  "
                >
                  <span className="text-sm md:text-base">
                    {item}
                  </span>
                </a>
              ))}
            </nav>
          </motion.div>

          {/* SOCIALS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p
              className="
                text-xs uppercase tracking-[0.3em]
                text-gray-500 dark:text-gray-500
                mb-7
              "
            >
              Connect
            </p>

            <div className="flex flex-col gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex items-center gap-4
                    p-1 rounded-full
                    w-61
                    bg-white/70 dark:bg-slate-800/70
                    backdrop-blur-md
                    border border-gray-200 dark:border-slate-700
                    hover:border-purple-500/40
                    dark:hover:border-red-400/30
                    transition-all duration-300
                  "
                >
                  {/* ICON */}
                  <div
                    className="
                      w-11 h-11 rounded-full
                      bg-gray-100 dark:bg-slate-900
                      border border-gray-200 dark:border-slate-700
                      flex items-center justify-center
                      text-purple-500 dark:text-red-400
                      transition-all duration-300
                    "
                  >
                    <Icon size={16} />
                  </div>

                  {/* TEXT */}
                  <div>
                    <p
                      className="
                        text-sm font-medium
                        text-gray-800 dark:text-white
                      "
                    >
                      {label}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="
            flex flex-col md:flex-row
            items-center justify-between
            gap-5
            pt-8
          "
        >
          {/* COPYRIGHT */}
          <p
            className="
              text-sm
              text-gray-500 dark:text-gray-500
              text-center md:text-left
            "
          >
            © {currentYear} PHANATH EM - All rights reserved.
          </p>

          {/* BACK TO TOP */}
          <a
            href="#"
            className="
              group
              inline-flex items-center gap-3
              px-2 py-2
              rounded-full
              bg-white/70 dark:bg-slate-800/70
              backdrop-blur-md
              border border-gray-200 dark:border-slate-700
              hover:border-purple-500/40
              dark:hover:border-red-400/30
              transition-all duration-300
            "
          >
            <span
              className="
                text-sm
                text-gray-600 dark:text-gray-400
                group-hover:text-gray-900
                dark:group-hover:text-white
                transition-all
              "
            >
              Back To Top
            </span>

            <div
              className="
                w-8 h-8 rounded-full
                bg-purple-500 dark:bg-red-600
                text-white
                flex items-center justify-center
              "
            >
              <FaArrowUp size={12} />
            </div>
          </a>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;