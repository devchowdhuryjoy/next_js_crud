
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      {/* Hero / Banner Section */}
      <section className="pt-24 bg-blue-100 min-h-[40vh] flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700 max-w-xl">
          Learn more about our mission, vision, and values. We are committed to providing the best services to our clients.
        </p>
      </section>

      {/* About Content Section */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <div className="mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div>
            <img
              src="/about.jpg" 
              alt="About Us"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              We started with a vision to provide high-quality solutions that empower businesses and individuals alike. Our team is dedicated to innovation, creativity, and excellence.
            </p>

            <h2 className="text-3xl font-semibold">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To deliver top-notch services and create value for our clients while maintaining integrity and professionalism in everything we do.
            </p>

            <h2 className="text-3xl font-semibold">Our Values</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Integrity and Transparency</li>
              <li>Innovation and Creativity</li>
              <li>Customer Satisfaction</li>
              <li>Teamwork and Collaboration</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
