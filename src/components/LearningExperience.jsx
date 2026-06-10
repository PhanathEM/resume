import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import certificate1 from "../assets/learningexperience/cert1.png";
import certificate2 from "../assets/learningexperience/cert2.png";
import certificate3 from "../assets/learningexperience/cert3.png";

function LearningExperience() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      title: "Programming with JavaScript",
      provider: "Coursera",
      date: "June 10, 2024",
      image: certificate1
    },

    {
      title: "Basic Mobile App Development using Flutter(Workshop)",
      provider: "Faculty of Natural Sciences",
      date: "February 25, 2024",
      image: certificate2,
    },

    {
      title: "Full-Stack Web Development Bootcamp",
      provider: "Udemy",
      date: "May 16, 2026",
      image: certificate3,
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12">
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
              text-sm uppercase tracking-[0.3em]
              text-violet-500 dark:text-rose-500
              mb-4
            "
          >
            Continuous Growth
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100">
            Learning{" "}
            <span className="text-violet-500 dark:text-rose-500">
              Experience
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
            I have studied in school with teachers and I also have taken online courses, short courses, and workshops. I spent a lot of time learning it.
          </p>
        </motion.div>

        {/* CERTIFICATES */}
        <div className="mt-24">
          {/* TITLE */}
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-16 bg-gray-300 dark:bg-slate-700"></div>

              <span
                className="
                  text-sm font-medium
                  text-violet-500 dark:text-rose-500
                  uppercase tracking-[0.25em]
                "
              >
                Certificates
              </span>

              <div className="h-[1px] w-16 bg-gray-300 dark:bg-slate-700"></div>
            </div>
          </div>

          {/* CERTIFICATE CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((certificate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="
                  group
                  overflow-hidden
                  rounded-md
                  bg-white/70 dark:bg-slate-900/70
                  backdrop-blur-md
                  border border-gray-200 dark:border-slate-800
                  hover:border-violet-500
                  dark:hover:border-rose-500/30
                  transition-all duration-500
                "
              >
                {/* IMAGE */}
                <div
                  className="relative overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(certificate.image)}
                >
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="
                      w-full h-56 object-cover
                      transition-all duration-700
                      group-hover:scale-105
                    "
                  />

                  <div
                    className="
                      absolute inset-0
                      bg-black/10
                      group-hover:bg-black/20
                      transition-all duration-500
                    "
                  ></div>
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    {certificate.title}
                  </h3>

                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {certificate.provider}
                  </p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
                    {certificate.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* IMAGE POPUP */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="
              fixed inset-0 z-50
              bg-black/80 backdrop-blur-sm
              flex items-center justify-center
              p-6
            "
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Certificate Preview"
              className="
                max-w-5xl
                w-full
                max-h-[90vh]
                object-contain
                rounded-2xl
                shadow-2xl
              "
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default LearningExperience;