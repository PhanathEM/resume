import { motion } from "framer-motion";

import image1 from "../assets/about/image1.jpeg";

function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 px-6 md:px-12 flex items-center justify-center bg-transparent overflow-hidden"
    >
      {/* BLUR BACKGROUND */}
      <div
        className="
          absolute top-20 left-10
          w-72 h-72
          bg-violet-500/10
          dark:bg-rose-500/10
          blur-3xl
        "
      ></div>

      <div
        className="
          absolute bottom-10 right-10
          w-80 h-80
          bg-fuchsia-400/10
          dark:bg-red-400/10
          blur-3xl
        "
      ></div>

      <div className="relative z-10 max-w-7xl w-full">
        {/* TITLE */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-500 dark:text-rose-500 mb-3">
            Get To Know Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            About{" "}
            <span className="text-violet-500 dark:text-rose-500">
              Me
            </span>
          </h2>
        </div>

        {/* GLASS CONTAINER */}
        <div
          className="
            grid md:grid-cols-2 gap-16 items-center
            p-8 md:p-12
            bg-white/60 dark:bg-slate-900/60
            backdrop-blur-xl
            border border-gray-200 dark:border-slate-700
            shadow-2xl shadow-black/5
          "
        >
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center"
          >
            {/* IMAGE CONTAINER */}
            <div
              className="
                relative z-10
                overflow-hidden
                border border-gray-200 dark:border-slate-700
                shadow-2xl shadow-black/10
              "
            >
              <img
                src={image1}
                alt="Phanath"
                className="
                  w-[280px]
                  sm:w-[340px]
                  md:w-[420px]
                  h-[380px]
                  md:h-[520px]
                  object-cover
                  hover:scale-105
                  transition-all duration-700
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/40
                  via-transparent
                  to-transparent
                "
              ></div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            {/* DESCRIPTION */}
            <div className="text-gray-600 dark:text-gray-300 leading-8 text-base sm:text-lg">
              <p>
                I am a third-year Website Development student at the National
                University of Laos, passionate about building modern and responsive
                web applications using React.js, Tailwind CSS, Laravel, and MySQL.
              </p>

              <br />

              <p>
                I enjoy creating clean user interfaces and continuously improving
                my skills in front-end and back-end to become a skilled
                Full-Stack Developer.
              </p>

              <br />

              <p>
                I am also pursuing an Associate Degree in English Communication at
                Logos Institute of Foreign Languages, where I have developed strong
                English communication and teamwork skills.
              </p>
            </div>
            <div
              className="
              mt-4
              p-5
              bg-white/60 dark:bg-slate-800/60
              backdrop-blur-md
              shadow-lg shadow-black/5
            "
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Availability
              </p>

              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mt-1">
                Open for Internship
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;