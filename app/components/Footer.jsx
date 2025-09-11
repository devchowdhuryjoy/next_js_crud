export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      {/* Top Section (CTA / Links / Socials) */}
      <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1: About */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About Us</h3>
          <p className="text-gray-300 text-sm">
            We are dedicated to providing the best services to our clients with
            innovation and integrity.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-blue-400 text-2xl">🌐</a>
            <a href="#" className="hover:text-blue-500 text-2xl">📘</a>
            <a href="#" className="hover:text-pink-400 text-2xl">📸</a>
            <a href="#" className="hover:text-sky-400 text-2xl">🐦</a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-900 text-gray-400 text-sm text-center py-4">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}

