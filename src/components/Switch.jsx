import "../index.css";
import React, { useState } from 'react';

// function Switch({mode, setMode}) {
// const onToggle=()=>{
//   if(mode==='light'){
//   setMode('dark')
//   document.body.style.backgroundColor ='white';
//   document.body.style.color ='black';
// }
// else{
//   setMode('light')
//   document.body.style.backgroundColor ='black';
//   document.body.style.color ='white';

// }
// setMode(mode == "light" ? "dark" : "light");
// };
  
//   return (
//     <div>

//       <label class="switch">
//   <input onClick={onToggle} type="checkbox"/>
//   <span class="slider round"></span>
// </label>
//     </div>
//   )
// }

// export default Switch;
// import { useState } from "react";

export default function Switch({mode, setMode}) {
  // const [dark, setDark] = useState(false);
const onToggle=()=>{
  if(mode==='light'){
  setMode('dark')
  document.body.style.backgroundColor ='white';
  document.body.style.color ='black';
}
else{
  setMode('light')
  document.body.style.backgroundColor ='black';
  document.body.style.color ='white';

}
// setMode(mode === 'light' ? 'dark' : 'light');
};


  return (
    <div
      onClick={onToggle}
      className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-all
      ${ mode=== 'light' ? "bg-gray-800" : "bg-gray-300"}`}
    >
      <div
        className={`w-6 h-6 rounded-full shadow-md transform transition-all
        flex items-center justify-center text-xs
        ${mode=== 'light' ? "translate-x-7 bg-black text-yellow-300" : "bg-white text-gray-700"}`}
      >
        { mode==='light' ? "🌙" : "☀️"}
      </div>
    </div>
  );
}
