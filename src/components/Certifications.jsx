function Certifications() {
  const certifications = [
    {
      title: "Python Full Stack Development with AI/ML Internship",
      issuer: "VAI",
      year: "2026",
    },
    {
      title: "Advanced Python Programming",
      issuer: "Certification",
      year: "2024",
    },
    {
      title: "Learn Java Programming",
      issuer: "Heriot-Watt University",
      year: "2025",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded-xl border border-cyan-500 hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold text-cyan-400">
                {cert.title}
              </h3>

              <p className="text-gray-300 mt-3">
                Issued By: {cert.issuer}
              </p>

              <p className="text-gray-400 mt-2">
                Year: {cert.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;