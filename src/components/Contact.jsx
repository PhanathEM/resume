import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaGithub,
  FaPaperPlane,
  FaArrowRight,
  FaWhatsapp
} from "react-icons/fa";

function Contact() {
  const contacts = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "emphanath@gmail.com",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "+856 209 634 3410",
    },
    {
      icon: FaGithub,
      title: "GitHub",
      value: "github.com/PhanathEM",
      href: "https://github.com/PhanathEM",
    }
  ];

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        py-24 md:py-32
        px-6 md:px-12
        bg-transparent
      "
    >
      {/* GLOW */}
      <div
        className="
          absolute top-20 left-10
          w-72 h-72
          bg-violet-500/10
          dark:bg-rose-500/10
          blur-3xl rounded-full
        "
      ></div>

      <div
        className="
          absolute bottom-10 right-10
          w-80 h-80
          bg-violet-400/10
          dark:bg-rose-400/10
          blur-3xl rounded-full
        "
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p
            className="
              text-sm uppercase
              tracking-[0.3em]
              text-violet-500 dark:text-rose-500
              mb-4
            "
          >
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800 dark:text-gray-100">
            Let’s{" "}
            <span className="text-violet-500 dark:text-rose-500">
              Connect
            </span>
          </h2>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              relative
              overflow-hidden
              rounded-md
              p-8 h-full md:p-10
              bg-white/70 dark:bg-slate-900/70
              backdrop-blur-xl
              border border-gray-200 dark:border-slate-800
            "
          >
            {/* TOP */}
            <div>
              <h3 className="text-2xl font-bold leading-tight text-gray-800 dark:text-gray-100">
                Find me on these platforms
              </h3>
            </div>

            {/* CONTACT CARDS */}
            <div className="mt-10 space-y-4">
              {contacts.map(({ icon: Icon, title, value, href }) => (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex items-center justify-between
                    p-2 rounded-full
                    bg-white dark:bg-slate-950
                    border border-gray-200 dark:border-slate-800
                    hover:border-violet-500
                    dark:hover:border-rose-400/30
                    hover:shadow-lg hover:shadow-violet-500/10
                    dark:hover:shadow-rose-500/10
                    transition-all duration-300
                  "
                >
                  <div className="flex items-center gap-4">
                    {/* ICON */}
                    <div
                      className="
                        w-12 h-12 rounded-full
                        bg-violet-100 dark:bg-rose-500
                        flex items-center justify-center
                        text-violet-500 dark:text-white
                      "
                    >
                      <Icon size={18} />
                    </div>

                    {/* TEXT */}
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {title}
                      </p>

                      <h4 className="font-medium mt-1 text-gray-800 dark:text-gray-100">
                        {value}
                      </h4>
                    </div>
                  </div>

                  {/* ARROW */}
                  <FaArrowRight
                    className="
                      text-gray-400
                      group-hover:text-violet-500
                      dark:group-hover:text-rose-400
                      group-hover:translate-x-1
                      transition-all duration-300
                      mr-4
                    "
                    size={14}
                  />
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              relative
              overflow-hidden
              rounded-md
              p-8 md:p-10
              bg-white/70 dark:bg-slate-900/70
              backdrop-blur-xl
              border border-gray-200 dark:border-slate-800
            "
          >
            {/* FORM HEADER */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Send Me a Message
              </h3>
            </div>

            {/* FORM */}
            <form
              action="https://formspree.io/f/meewgakr"
              method="POST"
              className="space-y-6"
            >
              {/* NAME + EMAIL */}
              <div className="grid md:grid-cols-2 gap-5">
                {/* NAME */}
                <div>
                  <label className="block mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="
                      w-full
                      px-5 py-4
                      rounded-full
                      bg-white dark:bg-slate-950
                      text-gray-800 dark:text-gray-100
                      border border-gray-200 dark:border-slate-800
                      hover:border-violet-400
                      dark:hover:border-rose-400
                      outline-none
                      focus:border-violet-500
                      dark:focus:border-rose-400
                      transition-all duration-300
                    "
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    className="
                      w-full
                      px-5 py-4
                      rounded-full
                      bg-white dark:bg-slate-950
                      text-gray-800 dark:text-gray-100
                      border border-gray-200 dark:border-slate-800
                      hover:border-violet-400
                      dark:hover:border-rose-400
                      outline-none
                      focus:border-violet-500
                      dark:focus:border-rose-400
                      transition-all duration-300
                    "
                  />
                </div>
              </div>

              {/* SUBJECT */}
              <div>
                <label className="block mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  placeholder="Project Collaboration"
                  className="
                    w-full
                    px-5 py-4
                    rounded-full
                    bg-white dark:bg-slate-950
                    text-gray-800 dark:text-gray-100
                    border border-gray-200 dark:border-slate-800
                    hover:border-violet-400
                    dark:hover:border-rose-400
                    outline-none
                    focus:border-violet-500
                    dark:focus:border-rose-400
                    transition-all duration-300
                  "
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>

                <textarea
                  rows="7"
                  name="message"
                  placeholder="Write your message..."
                  className="
                    w-full
                    px-5 py-4
                    rounded-2xl
                    resize-none
                    bg-white dark:bg-slate-950
                    text-gray-800 dark:text-gray-100
                    border border-gray-200 dark:border-slate-800
                    hover:border-violet-400
                    dark:hover:border-rose-400
                    outline-none
                    focus:border-violet-500
                    dark:focus:border-rose-400
                    transition-all duration-300
                  "
                ></textarea>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="
                  group
                  w-full
                  flex items-center justify-center gap-3
                  px-6 py-4
                  rounded-full
                  bg-violet-500 hover:bg-violet-600
                  dark:bg-rose-500 dark:hover:bg-rose-600
                  text-white font-medium
                  transition-all duration-300
                "
              >
                <FaPaperPlane
                  className="
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    transition-all duration-300
                  "
                  size={15}
                />

                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;