
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "We build responsive and modern websites tailored to your business needs.",
      icon: "💻",
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive and engaging interfaces to enhance user experience.",
      icon: "🎨",
    },
    {
      title: "Digital Marketing",
      description: "Boost your online presence with SEO, social media, and paid campaigns.",
      icon: "📈",
    },
    {
      title: "Consulting",
      description: "Professional advice to optimize your business processes and growth.",
      icon: "🤝",
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive and engaging interfaces to enhance user experience.",
      icon: "🎨",
    },
    {
      title: "Digital Marketing",
      description: "Boost your online presence with SEO, social media, and paid campaigns.",
      icon: "📈",
    },
    {
      title: "Consulting",
      description: "Professional advice to optimize your business processes and growth.",
      icon: "🤝",
    },
    {
      title: "Web Development",
      description: "We build responsive and modern websites tailored to your business needs.",
      icon: "💻",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <Navbar />

      {/* Hero / Banner Section */}
      <section className="pt-24 bg-green-100 min-h-[30vh] flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-gray-700 max-w-xl">
          Explore the services we offer to help your business grow and succeed.
        </p>
      </section>

      {/* Services Section */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-300 text-center"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
