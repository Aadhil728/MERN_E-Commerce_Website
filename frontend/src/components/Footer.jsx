import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-20 bg-black text-gray-200">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-4 text-sm">
          <div className="">
            <img src={assets.logo} className="mb-5 w-32" alt="" />
            <p className="md:w-1/2">
              Your one-stop destination for trendy collections and seamless
              shopping experiences. Shop with ease and style!
            </p>
            <div className="mt-20 flex gap-4">
              {/* Facebook Link */}
              <Link
                to={"/"}
                className="text-white hover:text-primary flex flex-col justify-center items-center group gap-2"
              >
                <i className="ml-2 opacity-0 translate-y-[10px] group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.845c0-2.5 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.261c-1.243 0-1.629.771-1.629 1.56v1.87h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </i>
                <span>Facebook</span>
              </Link>

              {/* Instagram Link */}
              <Link
                to={"/"}
                className="text-white hover:text-primary flex flex-col justify-center items-center group gap-2"
              >
                <i className="ml-2 opacity-0 translate-y-[10px] group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.5 2C4.42 2 2 4.42 2 7.5v9C2 19.58 4.42 22 7.5 22h9c3.08 0 5.5-2.42 5.5-5.5v-9C22 4.42 19.58 2 16.5 2h-9zm12 5.25a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-7.5 1c2.9 0 5.25 2.35 5.25 5.25S14.4 18.75 11.5 18.75 6.25 16.4 6.25 13.5 8.6 8.25 11.5 8.25zM4.5 7.5A3 3 0 017.5 4.5h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9zm7 2c-1.93 0-3.5 1.57-3.5 3.5S9.57 16.5 11.5 16.5 15 14.93 15 13s-1.57-3.5-3.5-3.5z" />
                  </svg>
                </i>
                <span>Instagram</span>
              </Link>

              {/* Twitter Link */}
              <Link
                to={"/"}
                className="text-white hover:text-primary flex flex-col justify-center items-center group gap-2"
              >
                <i className="ml-2 opacity-0 translate-y-[10px] group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6.003c-.77.343-1.594.575-2.461.678.885-.525 1.562-1.353 1.884-2.342-.826.49-1.738.83-2.718 1.02-.774-.826-1.88-1.344-3.04-1.344-2.31 0-4.176 1.866-4.176 4.176 0 .33.038.65.11.95-3.466-.173-6.53-1.833-8.587-4.352-.358.616-.56 1.332-.56 2.09 0 1.441.734 2.713 1.85 3.464-.678-.021-1.314-.207-1.872-.515v.052c0 2.015 1.429 3.71 3.323 4.097-.347.095-.713.146-1.088.146-.267 0-.526-.026-.782-.078.526 1.64 2.06 2.836 3.877 2.866-1.423 1.116-3.21 1.78-5.157 1.78-.334 0-.664-.02-.991-.058 1.838 1.176 4.021 1.86 6.342 1.86 7.618 0 11.785-6.313 11.785-11.785 0-.178-.003-.356-.01-.533.808-.58 1.51-1.31 2.07-2.14z" />
                  </svg>
                </i>
                <span>Twitter</span>
              </Link>

              {/* YouTube Link */}
              <Link
                to={"/"}
                className="text-white hover:text-primary flex flex-col justify-center items-center group gap-2"
              >
                <i className="opacity-0 translate-y-[10px] group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.5 6.28c-.27-.99-.94-1.77-1.88-2.08-1.67-.49-8.21-.49-8.21-.49s-6.55 0-8.21.49c-.94.31-1.61 1.09-1.88 2.08-.55 2.06-.55 6.22-.55 6.22s0 4.16.55 6.22c.27.99.94 1.77 1.88 2.08 1.67.49 8.21.49 8.21.49s6.55 0 8.21-.49c.94-.31 1.61-1.09 1.88-2.08.55-2.06.55-6.22.55-6.22s0-4.16-.55-6.22zM9.92 15.69v-7.38l6.18 3.69-6.18 3.69z" />
                  </svg>
                </i>
                <span>YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-300">
              <li className="hover:text-primary">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="hover:text-primary">
                <Link to={"/collection"}>Collection</Link>
              </li>
              <li className="hover:text-primary">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="hover:text-primary">
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-300">
              <li>+974 33009179</li>
              <li>contact@forever.com</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <hr className="bg-gray-300" />
        <div className="flex justify-between items-center px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
          <p className="py-5 text-sm text-center text-gray-200">
            Copyright&copy;<Link to={"/"}>Forever.com</Link> 2025 - All Rights Reserved. 
          </p>
          <div className="flex justify-center items-center gap-2 text-gray-300">
            <p className="hover:text-primary"><Link to={"/contact"}>Privacy Policy</Link></p>
            <p className="hover:text-primary"><Link to={"/contact"}>Terms & Condition</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
