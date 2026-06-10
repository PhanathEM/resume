import StarsBackground from "./components/StarsBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import LearningExperience from "./components/LearningExperience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Home() {
    return (
        <div className="relative min-h-screen text-white overflow-x-hidden">
            {/* STAR BACKGROUND */}
            <StarsBackground />
            {/* CONTENT */}
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <LearningExperience />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;