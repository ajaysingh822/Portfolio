// import React,{useState, useEffect}  from "react";
// import java from "../../public/java.png";
// import mongoDB from "../../public/mongodb.jpg";
// import port from "../../public/port.jpg";
// import htmlcss from "../../public/htmlcss.jpg";
// import python from "../../public/python.png";
// import ML from "../../public/ML.png";
// import  laravel from "../../public/png.png";

// function PortFolio(props) {
//   const cardItem = [
//     {
//       id: 1,
//       logo: mongoDB,
//       name: "Travel Advisory",
//       description:"The Travel Advisory Website is an interactive platform designed to help users plan safer and smarter trips using real-time travel information. The system integrates a dynamic Map API to display locations, routes, tourist spots, safety alerts, and regional advisories."
//     ,link:"https://piyush-travel.netlify.app/"
//   },
//      {
//       id: 2,
//       logo: port,
//       name: "Portfolio Website",
//        description:"I have created my responsive portfolio website using ReactJS and Tailwind CSS to showcase my skills, projects, and experiences in a visually appealing manner.dark and light mode feature is also added with a modern design and smooth navigation."
//     ,link:""
//   },
//     {
//       id: 3,
//       logo: htmlcss,
//       name: "Yoga Website Template by html/css",
//       description:"I devloped a template for a Yoga Website By pura vanila Html And CSS with responsive design for various devices such as mobile tablet"
//     ,link:"https://yoga-piyush.netlify.app/"
//   },
   
//     {
//       id: 4,
//       logo: ML,
//       name: "machine learning",
//        description:"working on "
//     ,link:""
//   },
//     {
//       id: 5,
//       logo: python,
//       name: "Python",
//        description:"working on "
//     ,link:""
//   },
//     {
//       id: 6,
//       logo: laravel,
//       name: "laravel",
//        description:"working on "
//     ,link:""
//   },
//   ];
//   const[shad , setShadow]= useState("shadow-[0_4px_10px_rgba(0,0,0,0.5)]")
//    useEffect(()=>{
//   if( props.mode === 'light'){
//       setShadow('shadow-[0_4px_6px_rgba(255,255,255,0.5)]')
//     }
//     else{
//       setShadow("shadow-[0_4px_10px_rgba(0,0,0,0.5)]")
//     }
  
//     },[props.mode]);
  
//   return (
//     <div
//       name="Portfolio"
//       className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
//     >
//       <div>
//         <h1 className="text-3xl font-bold text-center  mb-5">Projects</h1>
//         <p className=" underline font-semibold text-center">Featured Projects</p>
//         <div className="grid grid-cols-1 md:grid-cols-3 place-items-center  gap-3 my-5">
//           {cardItem.map(({ id, logo, name , description , link}) => (
//             <div
//               key={id}
//               data-aos="flip-left"
//             >
//              <div  className={`flex flex-col items-center shine-effect md:w-[450px]  md:h-[300px] border-[3px] rounded-lg ${shad} p-1 cursor-pointer duration-300 hover:scale-105 hover:rotate-3`}>
//               <img
//                 src={logo}
//                 className=" w-[100px] h-[100px] p-1 rounded-full border-[2px]"
//                 alt=""
//               />
//               <div>
//                 <div className="px-2 font-bold text-xl text-center w-auto  ">{name}</div>
//                 <p className="px-2 pb-20 overflow-auto text-center h-5 text-gray-700">
//                 {description}
//                 </p>
//               </div>
//               <div className="mt-5">
//         <a href={`${link}`} target="_blank"  rel="noopener noreferrer">
//                 <button className="bg-green-500 hover:bg-green-700 text-white font-bold  center  rounded">
//                   View Project
//                 </button></a>
//               </div>
//             </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PortFolio;
import React,{useState, useEffect}  from "react";
import java from "../../public/java.png";
// import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import laravel from "../../public/png.png";
import port from "../../public/port.jpg";
import htmlcss from "../../public/htmlcss.jpg"
import msn from "../../public/msn.jpeg";
import { LiaLinkedin } from "react-icons/lia";
// import hotel from ""
function PortFolio(props) {
  const cardItem = [
     {
      id: 1,
      logo: "hotel.jpeg",
      name: "Hotel Pos System",
       description: "Built React.js-based dashboard for hotel billing operations ,and PHP CODEIGNITOR4 For Backend Operations , Implemented guest check-in & check-out system , Managed guest records, billing history, and reportsٜٜٜٜ Developed dynamic billing module with  Room charges Extra charges (food, services, etc.) Auto bill calculation Designed invoice / bill print functionality (thermal printer support) Created secure admin panel using CodeIgniter 4 Implemented REST APIs for real-time data sync between frontend and backend Used MySQL with proper relational tables & foreign keys"
    ,
    link:"https://drhotel.site/"
  }
   ,
     {
      id: 2,
      logo: port,
      name: "Portfolio Website",
       description:"I have created my responsive portfolio website using ReactJS and Tailwind CSS to showcase my skills, projects, and experiences in a visually appealing manner.dark and light mode feature is also added with a modern design and smooth navigation."
    ,link:""
  },
    {
      id: 3,
      logo: "cart.jpeg",
      name: "E-Commerce Product Showcase Website",
       description:"Developed React.js frontend to display product listings with a clean, Built Admin Panel using CodeIgniter 4 (CI4) for Product management (Add / Edit / Delete) Order monitoring Image uploading  responsive UI Implemented login-free customer flow for easy product browsing Integrated WhatsApp direct order API for instant customer ordering",
    link:"https://spicesshreeganesh.com/"
  },
  
  //   {
  //     id: 4,
  //     logo: mongoDB,
  //     name: "Travel Advisory",
  //     description:"The Travel Advisory Website is an interactive platform designed to help users plan safer and smarter trips using real-time travel information. The system integrates a dynamic Map API to display locations, routes, tourist spots, safety alerts, and regional advisories."
  //   ,link:"https://piyush-travel.netlify.app/"
  // },
  //   {
  //     id: 5,
  //     logo: msn,
  //     name: "Msn NewsApi",
  //      description:"Develop the clone of MSN News website using NewsAPI to fetch real-time news articles across various categories like technology, sports, entertainment, and more. Implemented features such as search functionality, category filters, and responsive design for optimal viewing on different devices."
  //   , link:"https://msn-py.netlify.app/"
  // },
   
  
  //   {
  //     id:6 ,
  //     logo: htmlcss,
  //     name: "Landing Page (Singer)",
  //     description:"Animated, responsive React landing page using motion libraries for smooth UI transitions and dynamic layout."
  //   ,link:"https://vladingpages.vercel.app/landing1"
  // },
  ];
  const[shad , setShadow]= useState("shadow-[0_4px_10px_rgba(0,0,0,0.5)]")
   useEffect(()=>{
  if( props.mode === 'black'){
      setShadow('shadow-[0_4px_6px_rgba(255,255,255,0.5)]')
    }
    else{
      setShadow("shadow-[0_4px_10px_rgba(0,0,0,0.5)]")
    }
  
    },[props.mode]);
  
  return (
    <div
      name="Portfolio"
      className={`max-w-screen-2xl bg-${props.mode} container mx-auto px-4 md:px-20 mt-10`}
    >
      <div>
        <h1 className="text-3xl font-bold text-center  mb-5">Projects</h1>
        <p className=" underline font-semibold text-center">Featured Projects</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center  gap-3 my-5">
          {cardItem.map(({ id, logo, name , description , link}) => (
            <div
              key={id}
              data-aos="flip-left"
            >
             <div  className={`flex flex-col bg-${props.mode} items-center  shine-effect w-full sm:w-[320px] md:w-[450px]
  md:h-[300px]  rounded-lg ${shad} p-1 cursor-pointer duration-300 md:hover:scale-105 md:hover:rotate-3
`}>
              <img
                src={logo}
                className=" w-[100px] h-[100px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl  text-center w-auto  ">{name}</div>
                <p className="px-2  text-center max-h-[90px] overflow-y-auto text-gray-500">
                {description}
                </p>
              </div>
              <div className={`fixed bottom-0 o p-2 w-full justify-center flex bg-${props.mode}`}>
        <a href={`${link}`} target="_blank"  rel="noopener noreferrer">
                <button className="bg-purple-500 text-white font-bold p-2   center  rounded-3xl">
                  View Live
                </button></a>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;