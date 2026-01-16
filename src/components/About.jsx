import React from "react";
// import Experiance from "./Experiance.jsx";
import { Parallax,ParallaxLayer } from "@react-spring/parallax";
function About() {
  return (
    <div
      name="About"
      className="max-w-screen-xl shadow-[0_0_10px_rgba(59,130,246,0.7)] container mx-auto py-10 px-8 md:px-20 my-20 "
      data-aos="flip-right"
    >
     

      <div data-aos="slide-up" >
        <h1 className="text-4xl w-auto shadow text-center mb-10" data-aos="flip-left" >About Me</h1>
        <p>
          Hello, I'm Ajay Singh — an aspiring Data Scientist and Analyst with strong skills in Python, SQL, Power BI, and Machine Learning.
           I have experience in analyzing datasets, building dashboards, automating data cleaning tasks, and generating actionable insights to support business decision-making.<br/>

        </p>
        <br />
      

       <div className="flex items-center gap-2" data-aos="flip-right">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
  <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
  <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
  <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
</svg>


  <h1  className="text-2xl font-semibold text-blue-600">
    Education & Training
  </h1>
</div>

        <span data-aos="flip-right" >
          BCA :- Prestige Institute of Management Dewas (PIMD) Dewas(M.P), 2021-2023<br/>
          MCA :- Chameli Devi Group of Institutions (CDGI) Indore(M.P), 2024-2026
        </span>
        <br />
        {/* <br /> */}
         {/* <div className="flex items-center gap-2" data-aos="flip-right"> 
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
  <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clip-rule="evenodd" />
</svg> */}



  {/* <h1 className="text-2xl font-semibold text-blue-600">
     Skills And Expertize
  </h1> */}
{/* </div> */}
   <span>
       {/* <Experiance/> */}
          {/* <ol class="list-disc list-inside" data-aos="zoom-out" > <li  >Proficient in programming languages:  C, HTML, CSS, JavaScript, Python</li>
           
   <li> Experienced with frontend frameworks and libraries: React.js, Bootstrap, Tailwind CSS</li>
   <li> Familiar with backend and database: MongoDB, MYSQL</li>
   <li> Strong grasp of web design principles and responsive design</li>
   <li> Excellent problem-solving abilities and quick learner</li>
   <li> Effective communication and teamwork skills</li>
   <li> Strong soft skills including adaptability, collaboration, and time management</li>
   <li> I have created attractive and insightful dashboards using Advanced Excel and Power BI</li>
   <li>I have developed a Machine Learning project as part of my learning and practical experience.</li>
          </ol> */}
        </span>
        <br />
        <div className="flex items-center gap-2" data-aos="flip-right" >
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
  <path fill-rule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z" clip-rule="evenodd" />
</svg>

 <h1 className="text-2xl font-semibold text-blue-600">
    Achievements and Awards
  </h1>
</div>
        <span>
            <ol class="list-disc list-inside" > <li >Proficient in programming languages:  C, HTML, CSS, JavaScript</li>
   <li> HTML5/CSS Advance course by UDEMY</li>
   <li>Cloud for beginner by IBM</li>
   <li> Data science with python by IBM</li>
  </ol>

        </span>
        <br />
      <div className="flex items-center gap-2" data-aos="fade-up">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z" clip-rule="evenodd" />
</svg>

 <h1 className="text-2xl font-semibold text-blue-600">
   Mission Statement
  </h1>
</div>
        <p>
          My mission is to build data-driven and user-friendly digital solutions by understanding client needs and communicating effectively. I am always learning to enhance my skills and deliver better results.
        </p>
      </div>
    </div>
  );
}

export default About;
