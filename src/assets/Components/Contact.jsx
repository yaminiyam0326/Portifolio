import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Contact Me</h2>
        <form className="mt-8 max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input className="w-full px-3 py-2 text-gray-800" type="text" id="name" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="w-full px-3 py-2 text-gray-800" type="email" id="email" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea className="w-full px-3 py-2 text-gray-800" id="message" rows="4" placeholder="Your Message"></textarea>
          </div>
          <div className="text-center">
            <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact
