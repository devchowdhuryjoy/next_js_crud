"use client"; // required for interactivity like onSubmit

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/auth/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.success) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus(result.error || "Failed to send message");
      }
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong");
    }
  };

  return (
    <div className="relative min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 bg-gradient-to-r from-blue-100 to-blue-200 min-h-[30vh] flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-700 max-w-xl">
          We’d love to hear from you! Fill out the form or reach us directly
          through our contact details.
        </p>
      </section>

      {/* Contact Form + Info */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 mb-2">Your Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Your Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
            {status && <p className="mt-4 text-green-600">{status}</p>}
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <p className="text-gray-700">
              Feel free to reach out to us through any of the methods below.
              We’re always here to help!
            </p>
            <div className="space-y-4">
              <p className="flex items-center space-x-3">
                <span className="text-blue-600 text-xl">📍</span>
                <span>123 Main Street, Dhaka, Bangladesh</span>
              </p>
              <p className="flex items-center space-x-3">
                <span className="text-blue-600 text-xl">📞</span>
                <span>+880 1234 567 890</span>
              </p>
              <p className="flex items-center space-x-3">
                <span className="text-blue-600 text-xl">📧</span>
                <span>contact@yourcompany.com</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
