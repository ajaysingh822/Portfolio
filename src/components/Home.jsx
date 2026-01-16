  // import React from "react";

import pic from "../../public/img.jpeg";
import React, { useState , useEffect} from 'react';

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";

import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FaLaravel } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import { Parallax,ParallaxLayer } from "@react-spring/parallax";
function Home(props) {
const [bg, setBg] = useState({bag: "gradient-to-r  from-white to-blue-100", text: "black"});
  useEffect(() => {
    if (props.mode === 'light') {
      setBg({bag: "black", text: "white"});
    } else {
      setBg({bag: "gradient-to-r from-white to-blue-100 to black", text: "black"});
    }
  }, [props.mode]);
  return (
    <>
      <div
        name="Home"
        className={`shine-effect max-w-screen-2xl bg-opacity-100 rounded-2xl container mx-auto px-4 md:px-20 mt-20 bg-${bg.bag}`}
       
      >
    <div className={`flex flex-col md:flex-row text-${bg.text}`}>
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["data analyst","Developer", "Programmer" ]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
        
            <p className="text-sm md:text-md text-justify">
              I’m a skilled Web Developer and Data Analyst, creating clean, responsive, and user-centric websites while transforming data into meaningful business insights. With strong attention to design, performance, and problem-solving, I collaborate closely with clients to deliver customized, high-quality digital solutions—turning ideas into seamless web experiences supported by data-driven decision-making.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between ">
              <div className=" space-y-2 " data-aos="fade-up">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5"  >
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaSquareFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/ajay-singh-56403b361/
" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/ajaybanna7773/
" target="_blank">
                      <FaInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/918224950286" target="_blank">
                      <FaWhatsapp className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2" data-aos="fade-up">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                 
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaLaravel className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />

                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 p-5 order-1">
            <img  data-aos="fade-up"
              src={pic}
              className="image rounded-full  shadow-[0_4px_10px_rgba(0,0,0,0.5)] md:w-[350px] md:h-[350px] "
              alt="userDp"
            />
          </div>
        </div>
        {/* <a href="/AJAY-RESUME.pdf" download target="_blank" rel="noopener noreferrer">
        <button className={`btn hover:shadow-2xl transition duration-300 p-2 shadow-black rounded-full m-5 text-${bg.text} bg-${bg.bag} border ${ bg.bag === "black" ? "border-white" : "border-black"}`}>DOWNLOAD CV</button>
        </a> */}
        <a href="/AJAY-RESUME.pdf" download target="_blank" rel="noopener noreferrer">
  <button className={`btn block md:mx-0 mx-auto hover:shadow-2xl transition duration-300 p-2 shadow-black rounded-full m-5 text-${bg.text} bg-${bg.bag} border ${ bg.bag === "black" ? "border-white" : "border-black"}`}>
    DOWNLOAD CV
  </button>
</a>

      </div>
    </>
  );
}

export default Home;
