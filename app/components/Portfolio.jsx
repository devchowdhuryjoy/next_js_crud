
export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A modern and fully responsive e-commerce platform.",
      image: "/about.jpg",
    },
    {
      title: "Business Landing Page",
      description: "Clean and elegant landing page for business solutions.",
      image: "/about.jpg",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing skills and projects.",
      image: "/about.jpg",
    },
    {
      title: "Blog Platform",
      description: "Dynamic blog system with admin panel and SEO features.",
      image: "/about.jpg",
    },
  ];

  return (
    <section className="px-6 md:px-20 py-16 bg-gray-50 mb-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Portfolio</h2>
        <p className="text-gray-600 mb-12">
          Here are some of our recent works that showcase creativity and
          innovation.
        </p>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-t-xl"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
