// import  useState from "react";
import pic from "../../public/photo.avif";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
// import { Link } from "react-scroll";
import { Link } from "react-scroll";
import Switch from "./Switch";
import React, { useState , useEffect} from 'react';

function Navbar({mode , setMode}) {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Skills",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  const togglemode=()=>{
    if(mode==='light'){
      setMode('');}
      else{
        setMode('light')
      }
    }
  
  const [bg, setBg] = useState({
     bag: "white", 
     text: "black",
     shad:"shadow-[0_4px_10px_rgba(0,0,0,0.5)]"});
  useEffect(() => {
    if (mode === 'light') {
      setBg({bag: "black", text: "white",shad:'shadow-[0_4px_6px_rgba(255,255,255,0.5)]'});
    } else {
      setBg({bag: "white", text: "black",shad:"shadow-[0_4px_10px_rgba(0,0,0,0.5)]"});
    }
  }, [mode]);

  return (
    <>
      <div  className={`max-w-screen-2xl rounded-b-xl container mx-auto px-4 md:px-20 h-16 ${bg.shad} fixed top-0 left-0 right-0 z-50 text-${bg.text} bg-${bg.bag}`}>
        <div className="flex justify-between items-center h-16">
          <div className=" flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            AJAY SINGH 
              <p className="text-sm">Data Analytics & Web Developer </p>
            </h1>
          </div>
          <div className="md:hidden ml-20"> <Switch  mode={mode} setMode={setMode}/></div> 
          {/* desktop navbar */} 
          <div>
             
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={600}
                    offset={-100}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
              
               <Switch  mode={mode} setMode={setMode}/>
               {/* <button onClick={togglemode } type="button">hii</button> */}
            </ul>
         
            <div onClick={() => setMenu(!menu)} className="md:hidden">
 
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} /> }
            
            </div>
            
          </div>
         
        </div>
       
        {/* mobile navbar */}
        {menu && (
          <div className="bg-white">
            
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
             
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            
          </div>
          
        )}
      </div>
    </>
  );
}

export default Navbar;
