import { motion } from "framer-motion";

import { FaReact, FaGitAlt, FaHtml5, FaCss3, FaJsSquare, FaPhp, FaBootstrap } from "react-icons/fa";

import { SiTailwindcss, SiMysql, SiLaravel } from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    icon: <FaCss3 />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare />,
  },
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "PHP",
    icon: <FaPhp />,
  },
  {
    name: "Laravel",
    icon: <SiLaravel />,
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
  },
];

const Skills = () => {
  return (
    <section
      id="skill"
      className="py-24 md:py-32 px-6 md:px-12 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-violet-500 dark:text-rose-500 mb-4">
            What I Can Use
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800 dark:text-white">
            My <span className="text-violet-500 dark:text-rose-500">Skills</span>
          </h2>
          <p className="mt-6 text-gray-600 dark:text-gray-400 leading-8 text-base md:text-lg">
            Technologies and tools I use to build responsive, scalable, and modern web applications with clean user
            experiences.
          </p>
        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{
                rotateX: -10,
                rotateY: 10,
                scale: 1.05,
                y: -8,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
              className="
                group
                relative
                rounded
                p-6
                flex flex-col items-center justify-center
                text-center
                bg-white/70 dark:bg-slate-900/70
                backdrop-blur-md
                border border-gray-200 dark:border-slate-800
                shadow-lg shadow-black/5
                hover:border-violet-500
                dark:hover:border-rose-500
                hover:shadow-violet-500/20
                dark:hover:shadow-rose-500/20
                transition-all duration-500
                overflow-hidden
              "
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-violet-500/10 to-transparent dark:from-rose-500/10"></div>
              {/* ICON */}
              <div
                className="text-5xl mb-4 text-violet-500 dark:text-rose-500 relative z-10 transition-all duration-300 group-hover:scale-110"
                style={{
                  transform: "translateZ(40px)",
                }}
              >
                {skill.icon}
              </div>

              {/* TEXT */}
              <h3
                className="text-lg font-semibold text-gray-800 dark:text-white relative z-10 group-hover:text-violet-500 dark:group-hover:text-rose-500 transition-all duration-300"
                style={{
                  transform: "translateZ(30px)",
                }}
              >
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
