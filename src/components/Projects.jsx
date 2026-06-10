import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";
import { Hammer } from "lucide-react";

import big1 from "../assets/projects/big1.png";
import big2 from "../assets/projects/big2.png";

import mini_calculator1 from "../assets/projects/mini_calculator1.png";
import mini_todolist2 from "../assets/projects/mini_todolist2.png";
import mini_digitalclock3 from "../assets/projects/mini_digitalclock3.png";
import mini_countdowntimer4 from "../assets/projects/mini_countdowntimer4.png";

function Projects() {
  const projects = [
    {
      title: "A Phone Shop Website",
      description:
        "Build a frontend and backend for a phone shop website using Laravel 12",
      image: big1,
      tech: ["Tailwind CSS", "Laravel", "MySQL"],
      github: "https://github.com/PhanathEM/phoneshop-project",
      live: "#",
    },
    {
      title: "A Clothing Store Website",
      description:
        "Build a frontend and backend for a clothing store website using Laravel 12",
      image: big2,
      tech: ["Tailwind CSS", "Laravel", "MySQL", "Stripe Payment"],
      github: "https://github.com/PhanathEM/ecommerce-clothes-laravel12",
      live: "#",
    },
  ];

  const miniProjectGroups = [
    {
      projects: [
        {
          title: "Calculator",
          description: "A modern and responsive calculator built with HTML, CSS, and JavaScript.",
          image: mini_calculator1,
          github: "https://github.com/PhanathEM/Calculator-Project",
          live: "https://phanathem.github.io/Calculator-Project/",
        },
        {
          title: "To Do List",
          description: "A modern and responsive to-do list application built with HTML, CSS, and JavaScript.",
          image: mini_todolist2,
          github: "https://github.com/PhanathEM/ToDoList-Project",
          live: "https://phanathem.github.io/ToDoList-Project/",
        },
        {
          title: "Digital Clock",
          description: "Digital Clock built with HTML, CSS, and JavaScript.",
          image: mini_digitalclock3,
          github: "https://github.com/PhanathEM/DigitalClock-Project",
          live: "https://phanathem.github.io/DigitalClock-Project/",
        },
        {
          title: "Countdown Timer",
          description: "This is a countdown timer built with HTML, CSS, and JavaScript.",
          image: mini_countdowntimer4,
          github: "https://github.com/PhanathEM/CountdownTimer-Project",
          live: "https://phanathem.github.io/CountdownTimer-Project/",
        },
      ],
    }
  ];

  return (
    <section
      id="project"
      className="py-24 md:py-32 px-6 md:px-12 bg-transparent"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <p
            className="
              text-sm uppercase
              tracking-[0.3em]
              text-violet-500 dark:text-rose-500
              mb-4
            "
          >
            Let's See My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800 dark:text-gray-100">
            Featured{" "}
            <span className="text-violet-500 dark:text-rose-500">
              Projects
            </span>
          </h2>

          <p
            className="
              mt-6
              text-gray-600 dark:text-gray-400
              leading-8
              text-base md:text-lg
            "
          >
            Here are some of the large-scale and mini projects I have built
            during my studies. These projects helped me strengthen my frontend,
            backend, and problem-solving skills while gaining experience in
            building real-world web applications.
          </p>

          {/* DIVIDER */}
          <div className="flex items-center justify-center gap-4 mt-14">
            <div className="h-[1px] w-16 bg-gray-300 dark:bg-slate-700"></div>

            <span
              className="
                text-sm font-medium
                text-violet-500 dark:text-rose-500
                uppercase tracking-wider
              "
            >
              Big Projects
            </span>

            <div className="h-[1px] w-16 bg-gray-300 dark:bg-slate-700"></div>
          </div>
        </motion.div>

        {/* BIG PROJECTS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
                group
                rounded-md
                overflow-hidden
                bg-white/70 dark:bg-slate-900/70
                backdrop-blur-md
                border border-gray-200 dark:border-slate-800
                hover:border-purple-500
                dark:hover:border-red-400/20
                transition-all duration-500
              "
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-t">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-60 object-cover
                    scale-100
                    group-hover:scale-110
                    group-hover:rotate-1
                    transition-all duration-700 ease-out
                  "
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-700"></div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  {project.title}
                </h3>

                <p className="mt-4 text-gray-600 dark:text-gray-400 leading-7">
                  {project.description}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        px-2 py-1 rounded-full text-sm
                        bg-violet-100 text-violet-600
                        dark:bg-rose-500/10 dark:text-rose-500
                        border border-violet-200
                        dark:border-rose-400/20
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
                  <span className="px-5 py-2 rounded-full bg-amber-500 text-white font-medium cursor-not-allowed">
                  Demo Coming Soon
                  </span>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition font-medium"
                  >
                  Source Code
                  </a>
                </div>
                <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
                  *Note: Sorry! Live demo coming soon. I can show you on my local servers. Source code available on GitHub.
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MINI PROJECTS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          {/* HEADER */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-16 bg-gray-300 dark:bg-slate-700"></div>

              <span
                className="
                  text-sm font-medium
                  text-violet-500 dark:text-rose-500
                  uppercase tracking-[0.25em]
                "
              >
                Frontend Mini Projects
              </span>

              <div className="h-[1px] w-16 bg-gray-300 dark:bg-slate-700"></div>
            </div>
          </div>

          {/* GROUPS */}
          <div className="space-y-14">
            {miniProjectGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                {/* CATEGORY */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                      {group.category}
                    </h3>
                  </div>
                </div>

                {/* CARDS */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {group.projects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.05,
                      }}
                      viewport={{ once: true }}
                      className="
                        group
                        relative
                        overflow-hidden
                        p-5 rounded-md
                        bg-white/70 dark:bg-slate-900/70
                        backdrop-blur-md
                        border border-gray-200 dark:border-slate-800
                        hover:border-violet-500
                        dark:hover:border-rose-500/30
                        transition-all duration-300
                      "
                    >
                      {/* Glow */}
                      <div
                        className="
                          absolute inset-0
                          opacity-0 group-hover:opacity-100
                          transition-all duration-500
                          bg-gradient-to-br
                          from-violet-500/5
                          to-transparent
                          dark:from-rose-400/5
                        "
                      ></div>

                      {/* IMAGE */}
                      <div className="relative z-10 overflow-hidden rounded-xl mb-5">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="
                            w-full h-60 object-cover
                            transition-all duration-500
                          "
                        />
                      </div>

                      {/* CONTENT */}
                      <div className="relative z-10">
                        {/* TEXT */}
                        <div className="mt-5">
                          <h4
                            className="
                              text-lg font-semibold
                              transition-all duration-300
                              text-gray-800 dark:text-gray-100
                            "
                          >
                            {project.title}
                          </h4>

                          <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                            {project.description}
                          </p>

                          {/* FOOTER */}
                          <div className="mt-5 flex items-center justify-between">
                            <div className="flex gap-3">
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                px-4 py-2 rounded-full
                                bg-violet-600 text-white text-sm font-medium
                                hover:bg-violet-700
                                transition-all duration-300
                                shadow-md hover:shadow-lg
                                dark:bg-rose-500 dark:hover:bg-rose-600
                              "
                              >
                                Live Demo
                              </a>

                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                px-4 py-2 rounded-full
                                border border-gray-300 dark:border-gray-700
                                text-gray-700 dark:text-gray-300
                                text-sm font-medium
                                hover:border-violet-500
                                transition-all duration-300
                                dark:hover:border-rose-500
                              "
                              >
                                Source Code
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;