

import Content from "./components/Content";
import React, { useState } from "react";
import { CiCloud } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
            <div className="w-auto h-16 bg-white flex items-center justify-between px-4">
        <h1 className=" font-custom font-semibold text-3xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
          GlobalXperts
        </h1>
        <div className="flex space-x-4 items-center">
          <button className="bg-white text-black px-4 py-2 rounded hidden sm:block border border-black">
            Contact Sales
          </button>
          <button className="bg-blue-500 text-white px-4 py-3 rounded hidden sm:flex items-center border-solid">
            <CiCloud className="mr-2 text-2xl" />
            Sign Up for Free
          </button>
          <button
            className="bg-white text-blue-400 px-4 py-2 rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="bg-blue-400 flex-col items-center py-4">
          <h1 className=" text-white px-4 py-2 rounded mt-2">Platform</h1>
          <h1 className=" text-white px-4 py-2 rounded mt-2">Products</h1>
          <h1 className=" text-white px-4 py-2 rounded mt-2">Developers</h1>
          <h1 className=" text-white px-4 py-2 rounded mt-2">Solutions</h1>
          <h1 className=" text-white px-4 py-2 rounded mt-2">Resources</h1>
          <h1 className=" text-white px-4 py-2 rounded mt-2">Company</h1>
        </div>
      )}
            <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div>
            {/* Logo */}
            <h1 className="text-xl font-custom text-neon shadow-neon">
              Prolific I/O
            </h1>
          </div>
          <div className="flex justify-center flex-1">
            {/* Navbar */}
            <nav className="text-center">
              <ul className="flex justify-center">
                <li className="mr-6">
                  <a href="#" className="hover:text-gray-400">
                    Overviews
                  </a>
                </li>
                <li className="mr-6">
                  <a href="#" className="hover:text-gray-400">
                    Features
                  </a>
                </li>
                <li className="mr-6">
                  <a href="#" className="hover:text-gray-400">
                    Use Cases
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Pricing
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 text-center mt-10">
          <p className="text-5xl font-semibold">Standardize secure remote</p>
          <p className="text-5xl font-semibold mt-1">access</p>
          <p className="text-lg mt-10 text-gray-400">
            Connect users and manage access across any environment with
            identity-
          </p>
          <p className="text-lg text-gray-400">based security.</p>
          <div className="flex justify-center mt-10">
            {" "}
            {/* Add this div to center the button */}
            <button className=" bg-red-400 text-white px-4 py-3 rounded flex items-center">
              <CiCloud className="mr-2 text-2xl" />
              Sign Up for Free
            </button>
            <p className=" mx-5 mt-2 flex font-normal">
              Request a demo{" "}
              <p className="mx-2 mt-1">
                <FaLongArrowAltRight />
              </p>
            </p>
          </div>
        </div>
      </header>
      <div className="text-black bg-black">
        <img
          src="https://www.datocms-assets.com/2885/1675117188-products-overview-hero-boundary.svg"
          alt="Your image alt text"
        />
      </div>

      {/* 2nd */}
      <div className=" w-full">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 mt-8">
          <div className=" mx-8  font-normal col-span-2 p-3">
            <h1 className=" text-4xl  font-semibold">
            Extend Consul across
            </h1>
            <h1 className="text-4xl  font-semibold">your IT environment</h1>

            <p className=" mt-5 text-gray-500">
            Consul provides a single control plane to enable a broad
              <br /> ecosystem for service networking.
              
            </p>
            <p className=" flex mt-5">
              Explore Boundary Integrations{" "}
              <IoIosArrowForward className=" mt-1 mx-2" />
            </p>
          </div>

          <div className="font-semibold col-span-1 ">
            <div className=" border-t border-gray-300  mx-3 mr-10 p-10 ">
              <h1 className="text-7xl mb-4">40+</h1>
              <p className=" font-normal text-2xl text-slate-500">
              Partners
              </p>
           
            </div>
          </div>

          <div className="font-semibold  col-span-1">
            <div className=" border-t border-gray-300  mx-3 mr-10 p-10 ">
              <h1 className="text-7xl mb-4">80+</h1>
              <p className=" font-normal text-xl text-slate-500">
              Partner integrations
              </p>
            </div>
          </div>
        </div>
      </div>
     <Content/>
     <div className=" w-full border-t-2 mt-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 mt-10">
          <div className=" mx-8  font-normal bg-pink-100 p-3">
            <h1 className=" text-4xl  font-semibold">Secure remote </h1>
            <h1 className="text-4xl  font-semibold">user access with</h1>
            <h1 className="text-4xl  font-semibold">Boundary</h1>
            <p className=" mt-5 text-gray-500">
              Boundary simplifies secure user access
              <br /> management. Get started for free and let HashiCorp
              <br />
              manage Boundary in the cloud. Or explore our self
              <br />
              -managed offering to deploy Boundary in your
              <br />
              own environment.
            </p>
            
          </div>
          <div className="font-semibold ">
            <div className=" shadow-lg bg-pink-100 mx-5 mr-10 p-10 hover:bg-pink-200 rounded-md">
              <h1 className="text-2xl mb-4">Get Started today</h1>
              <p>Managed</p>
              <p className="mt-10 text-sm flex">
                Sign up for free <IoIosArrowForward className=" mt-1 mx-2" />
              </p>
            </div>
            <p className=" mt-5 ">
              Looking for a self-managed solution? Contact Sales
            </p>
          </div>

          <div className=" font-semibold">
            <div className=" shadow-lg bg-gray-200 hover:bg-gray-300 mx-5 mr-10 p-10  rounded-md">
              <h1 className="text-2xl mb-4">Compare delivery</h1>
              <p className=" text-2xl">Model Options</p>
              <p className="mt-10 text-sm flex">
                Review Pricing <IoIosArrowForward className=" mt-1 mx-2" />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}

      <footer className="bg-gray-800 text-white p-4 mt-10">
        <div className="flex items-center justify-between">
          <div>
            <span className=" font-normal text-xl ">
              Sign up for the   Prolific I/O newsletter
            </span>
            <br />
            <div className="flex items-center mt-4">
              <input
                type="text"
                placeholder="Business Email Address"
                className="bg-gray-700 text-white border border-gray-600 px-4 py-2 rounded-l focus:outline-none w-[550px]" // Adjusted width here
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r p-4 mx-2">
                Submit
              </button>
            </div>
            <span className=" font-normal">
              <input type="checkbox" className=" mx-2 mt-5 w-4 h-4" />
              Send me news about   Prolific I/O products, releases, and events.
            </span>
          </div>

          <div className="text-sm font-normal">
            <p>
              {" "}
              By submitting this form, you acknowledge and agree that Prolific I/O
            </p>{" "}
            <p>will process your personal information in accordance with the</p>
            <p className=" text-blue-400"> Privacy Policy.</p>
          </div>
        </div>

        <div className=" border-t-2 mt-5">
          <div className="bg-gray-800 text-white p-4 mt-5">
            <div className="flex justify-between">
              <div>
                <h2 className="text-lg font-semibold mb-2 font-normal">
                Prolific I/O
                </h2>
              </div>
              <div>
                <h3 className="text-lg font-normal mb-2">PRODUCTS</h3>
                <ul className="list-none font-normal text-sm">
                  <li>Terraform</li>
                  <li>Packer</li>
                  <li>Vault</li>
                  <li>Consul</li>
                  <li>Nomad</li>
                  <li>Waypoint</li>
                  <li>Vagrant</li>
                  <li>Boundary</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-normal mb-2">RESOURCES</h3>
                <ul className="list-none text-sm font-normal">
                  <li>Whitepapers</li>
                  <li>Events</li>
                  <li>Webinars</li>
                  <li>Support</li>
                  <li>Community</li>
                  <li>Podcast</li>
                  <li>Training</li>
                  <li>Professional Services</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-normal mb-2">DEVELOPERS</h3>
                <ul className="list-none text-sm font-normal">
                  <li>Docs</li>
                  <li>Tutorials</li>
                  <li>Integrations</li>
                  <li>Resource Library</li>
                  <li>Community</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-normal mb-2">COMPANY</h3>
                <ul className="list-none text-sm font-normal">
                  <li>About</li>
                  <li>Press</li>
                  <li>Careers</li>
                  <li>Blog</li>
                  <li>Investors</li>
                  <li>Brand</li>
                  <li>Contact Us</li>
                  <li>Become a Partner</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-normal mb-2">
                  INTERNATIONAL SITES
                </h3>
                <ul className="list-none text-sm font-normal">
                  <li>French</li>
                  <li>German</li>
                  <li>Japanese</li>
                  <li>Korean</li>
                  <li>Portuguese</li>
                  <li>Spanish</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
