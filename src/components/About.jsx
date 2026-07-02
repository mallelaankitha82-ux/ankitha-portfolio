import { motion } from "framer-motion";
import { GraduationCap, Code2, BrainCircuit } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-cyan-400"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 mt-6 max-w-3xl mx-auto leading-8"
        >
          I am a Computer Science Engineering student passionate about software development, 
          Full Stack Development, and Artificial Intelligence. 
          I have experience building full-stack applications using React.js, FastAPI, Python, and REST APIs. 
          I enjoy solving challenging problems, learning modern technologies, 
          and developing scalable applications that deliver meaningful user experiences.
           I am currently seeking opportunities to apply my skills, grow as a developer,
            and contribute to impactful projects.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-900 rounded-xl p-8 shadow-lg"
          >
            <GraduationCap
              size={45}
              className="text-cyan-400"
            />

            <h3 className="text-2xl font-semibold mt-5">
              Education
            </h3>

            <p className="text-gray-400 mt-4">
              B.Tech in Computer Science and Engineering

              <br />

              Kuppam Engineering College

              <br />

              Expected Graduation: May 2027
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-900 rounded-xl p-8 shadow-lg"
          >
            <Code2
              size={45}
              className="text-cyan-400"
            />

            <h3 className="text-2xl font-semibold mt-5">
              Development
            </h3>

            <p className="text-gray-400 mt-4">
              Skilled in React.js, FastAPI, Python,
              REST APIs, JWT Authentication,
              SQLite and Full Stack Development.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-900 rounded-xl p-8 shadow-lg"
          >
            <BrainCircuit
              size={45}
              className="text-cyan-400"
            />

            <h3 className="text-2xl font-semibold mt-5">
              AI
            </h3>

            <p className="text-gray-400 mt-4">
              Built AI-powered applications using
              Google Gemini API including Notes
              Generation, PDF Summarization and
              Question Answering.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;