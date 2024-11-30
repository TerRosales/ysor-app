import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid gap-8 md:grid-cols-3">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <h1 className="text-xl font-bold mb-2">MyLogo</h1>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h2 className="font-semibold mb-2">Quick Links</h2>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-sm hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-2">Resources</h2>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-sm hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col">
          <h2 className="font-semibold mb-2">Subscribe to our Newsletter</h2>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <p className="text-sm text-center my-7 sm:my-8">
        © {new Date().getFullYear()} MyCompany. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
