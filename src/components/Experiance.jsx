import React, { useState , useEffect} from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.png";
import png from "../../public/png.png";
import php1 from "../../public/php1.png";
import python from "../../public/python.png"
import c from "../../public/c.png"
import powerbi from "../../public/powerbi.png"
import ml from "../../public/ML.png"
function Experiance(props) {
  const cardItem = [
    {
      id: 1,
      logo: powerbi,
      name: "Power BI",
    },
    {
      id: 2,
      logo: ml,
      name: "Machine Learning",
    },
    {
      id: 3,
      logo: c,
      name: "C/C++",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: python,
      name: "python",
    },
    {
      id: 6,
      logo: php1,
      name: "php",
    },
    {
      id: 7,
      logo: png,
      name: "laravel",
    },
  ];
  const[shadow, setShadow]= useState('shadow-[0_6px_12px_rgba(0,0,0,0.25),4px_0_12px_rgba(0,0,0,0.15),-4px_0_12px_rgba(0,0,0,0.15)]');
  
 useEffect(()=>{
  if( props.mode === 'dark'){
      setShadow('shadow-[0_6px_12px_rgba(0,0,0,0.25),4px_0_12px_rgba(0,0,0,0.15),-4px_0_12px_rgba(0,0,0,0.15)]')
    }
    else{
      setShadow("shadow-[0_6px_20px_rgba(255,255,255,0.9)]")
    }
  
    },[props.mode]);
 
  
  return (
    <div
      name="skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-5">My Tech Stack</h1>
        <p className="mb-20">
         Tools & technologies I use to craft responsive, scalable, and modern web experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-1 my-3" >
          {cardItem.map(({ id, logo, name }) => (
            <div   key={id}
              data-aos="zoom-in"> 
            <div
            className={`flex flex-col items-center justify-center border-[px] rounded-lg md:w-[180px] md:h-[180px] ${shadow} p-1 cursor-pointer hover:scale-110 duration-300`}
            
            >
              <img src={logo} className="w-[80px] rounded-semi" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
