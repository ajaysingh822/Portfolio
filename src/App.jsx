// import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import React, { useState } from 'react';

function App() {
  
  const [ mode , setMode] = useState('dark') ;

   useEffect(() => {
    AOS.refresh();
    AOS.init({ duration: 1000, once: false ,
       mirror: true,
      
       
    });
     // animations last 1s, play once
       const handleScroll = () => AOS.refresh();
        const handleScroll1 = () => AOS.refresh();
    window.addEventListener("scrollTop", handleScroll);
 window.addEventListener("scrollHeight", handleScroll1);
    return () => window.removeEventListener("scrollTop", handleScroll);
return () => window.removeEventListener("scrollHeight", handleScroll1);
  }, 
  []);
   
  return (
    <>
      <div>
        <Navbar mode={mode} setMode={setMode}/>
        <Home mode={mode}/>
        <About />
        <PortFolio mode={mode}/>
        <Experiance mode={mode} />
        <Contact mode={mode}/>
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
