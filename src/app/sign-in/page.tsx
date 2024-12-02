"use client";
import React, { useState } from "react";
import Link from "next/link";
import "@/app/styles/sign-in.css";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="sign-in min-h-screen flex justify-center items-center px-4">
      <div className="image-container">
        <Image
          src="/assets/spaceship.png"
          width={170}
          height={170}
          alt="spaceship image"
          className="spaceship"
        />
        <Image
          priority
          src="/assets/space-trooper.png"
          width={220}
          height={220}
          alt="space trooper image"
          className="space-trooper"
        />
        <Image
          src="/assets/planet-2.png"
          width={120}
          height={120}
          alt="planet image"
          className="planet"
        />
        <Image
          src="/assets/dronebot.png"
          width={200}
          height={200}
          alt="dronebot image"
          className="dronebot"
        />
      </div>
      <div className="z-10 w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center text-purple-800 mb-4">
          Sign In
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-purple-800 focus:border-purple-800"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-800 focus:border-purple-800"
              placeholder="example@domain.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-800 focus:border-purple-800"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 px-4 text-gray-500 hover:text-purple-800 focus:outline-none"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          {/* <button
            type="submit"
            className="w-full bg-purple-900 text-white py-2 rounded-md text-lg font-medium hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-800"
          >
            Log In
          </button> */}
          <Link href="/huddle-page">
            <button
              type="submit"
              className="mt-4 w-full bg-purple-900 text-white py-2 rounded-md text-lg font-medium hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-800"
            >
              Log In
            </button>
          </Link>
          <section className="items-center">
            <button
              type="submit"
              className="w-full bg-white border-purple-800 border-2 text-white py-2 rounded-md text-lg font-medium hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-800"
            >
              <FcGoogle className="mx-auto text-2xl" />
            </button>
          </section>
        </form>
        <div className="text-center mt-4">
          <Link
            href="#"
            className="text-purple-500 hover:text-purple-900 text-lg font-medium underline"
          >
            Interested in our app? Get Access
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
