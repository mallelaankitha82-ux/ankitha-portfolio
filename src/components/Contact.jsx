import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Contact Me
        </h2>

        <div className="bg-slate-800 rounded-2xl p-8 border border-cyan-500 shadow-lg">

          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-400 text-2xl" />
              <a
                href="mailto:mallelaankitha82@gmail.com"
                className="text-gray-300 hover:text-cyan-400"
              >
                mallelaankitha82@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-cyan-400 text-2xl" />
              <a
                href="tel:+916301350084"
                className="text-gray-300 hover:text-cyan-400"
              >
                +91 6301350084
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
              <p className="text-gray-300">
                Andhra Pradesh, India
              </p>
            </div>

            <div className="flex gap-6 pt-4">

              <a
                href="https://github.com/YOUR_GITHUB_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-white text-3xl"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-white text-3xl"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;