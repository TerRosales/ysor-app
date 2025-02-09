import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-neutral-950 text-white h-[25%]">
      <div className="p-8 md:p-8 mx-auto grid gap-6 lg:grid-cols-3">
        {/* Logo Section */}
        <div className="flex flex-col md:items-start">
          <h1 className="text-xl font-bold mb-2 text-left">LOasdasdGO</h1>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0">
          <div className="text-left">
            <h2 className="font-semibold mb-2">Quick Links</h2>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-sm hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  About The App
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Use Cases
                </a>
              </li>
            </ul>
          </div>
          <div className="text-left">
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
        <div className="flex flex-col text-left">
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
              Get Access
            </button>
          </form>
        </div>
      </div>
      <p className="text-sm text-center py-6 sm:py-8">
        © {new Date().getFullYear()} Ysor App. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
