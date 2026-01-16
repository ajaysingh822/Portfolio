// import axios from "axios";
// import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
// import emailjs from "@emailjs/browser";
// function Contact() {
  // const {
  //   register,
  //   handleSubmit,

  //   formState: { errors },
  // } = useForm();

  // const onSubmit = async (data) => {
  //   const userInfo = {
  //     name: data.name,
  //     email: data.email,
  //     message: data.message,
  //   };
  //   try {
  //     await axios.post("https://getform.io/f/raeqjora", userInfo);
  //     toast.success("Your message has been sent");
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Something went wrong");
  //   }
  // };
//   const Contact = () => {
//   const [status, setStatus] = useState("");

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     emailjs
//       .sendForm(
//         "service_6s1nfrx",    // from EmailJS
//         "template_9fw8qo6",   // from EmailJS
//         e.target,
//         "TiS8VAFdJ7NlnRTQw"     // from EmailJS
//       )
//       .then(
//         () => {
//           setStatus("Message sent successfully!");
//           e.target.reset();
//         },
//         (error) => {
//           console.error(error);
//           setStatus("Failed to send message. Try again.");
//         }
//       );
//   };
//   return (
//     <>
//       <div
//         name="Contact"
//         className="max-w-screen-2xl  container mx-auto px-4 md:px-20 my-16 "
//       >
//         <h1 className="text-4xl font-bold text-center mb-4">Contact me</h1>
//         <p className="text-center">Please fill out the form below to contact me</p>
//         <div className=" flex flex-col items-center justify-center mt-5 hover:scale-110 duration-300">
//           <form
//             onSubmit={sendEmail}
//             // action="https://getform.io/f/raeqjora"
//             // method="POST"
//             className="bg-black w-96 px-8 py-6 rounded-xl"
//           >
//             <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
//             <div className="flex flex-col mb-4">
//               <label className="block text-gray-700">FullName</label>
//               <input
//                 {...register("name", { required: true })}
//                 className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="name"
//                 name="name"
//                 type="text"
//                 placeholder="Enter your fullname"
//               />
//               {errors.name && <span>This field is required</span>}
//             </div>
//             <div className="flex flex-col mb-4">
//               <label className="block text-gray-700">Email Address</label>
//               <input
//                 {...register("email", { required: true })}
//                 className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="email"
//                 name="email"
//                 type="text"
//                 placeholder="Enter your email address"
//               />
//               {errors.email && <span>This field is required</span>}
//             </div>
//             <div className="flex flex-col mb-4">
//               <label className="block text-gray-700">Message</label>
//               <textarea
//                 {...register("message", { required: true })}
//                 className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="message"
//                 name="message"
//                 type="text"
//                 placeholder="Enter your Query"
//               />
//               {errors.message && <span>This field is required</span>}
//             </div>
//             <button
//               type="submit"
//               className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Contact;
import React, { useState,useEffect } from "react";
import emailjs from "@emailjs/browser";
export default function Contact({mode}){
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

   emailjs
      .sendForm(
        "service_oje6xab",    // from EmailJS
        "template_a32movq",   // from EmailJS
        e.target,
        "BqrvPYnqba9IDBRvG"     // from EmailJS
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message. Try again.");
        }
      );
  };
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
 return (<>
  <div
        name="Contact"
        className="max-w-screen-2xl  container mx-auto px-4 md:px-20 my-16 "
      >
        <h1 className="text-4xl font-bold text-center mb-4">Contact me</h1>
        <p className="text-center">Please fill out the form below to contact me</p>
        <div className=" flex flex-col items-center justify-center mt-5 hover:scale-110 duration-300 ">
          <form
            onSubmit={sendEmail}
            //  text-${mode ==="dark" ? 'white':'black'} 
            className={`bg-${bg.bag} w-96 px-8 py-6 border ${bg.shad} ${ bg.bag === "black" ? "border-white" : "border-black"} rounded-xl`}
          >
            <h1 className={`text-xl text-${bg.text} font-semibold mb-4`}>Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block  text-gray-700">FullName</label>
              <input
                // {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="from_name"
                type="text"
                placeholder="Enter your fullname"
              />
              {/* {errors.name && <span>This field is required</span>} */}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                // {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="from_email"
                type="text"
                placeholder="Enter your email address"
              />
              {/* {errors.email && <span>This field is required</span>} */}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                // {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                type="text"
                placeholder="Enter your Query"
              />
              {/* {errors.message && <span>This field is required</span>} */}
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
            >
              Send
            </button>
             <p className={`text-center text-${bg.text} text-sm mt-2`}>{status}</p>
          </form>
        </div>
      </div>
 </>
// <div className={`w-full max-w-md mx-auto p-4 bg-${bg.bag} text-${bg.text}`}>
//       <form onSubmit={sendEmail} className="flex flex-col gap-4">
//         <input
//           className="border p-2 rounded"
//           type="text"
//           name="from_name"
//           placeholder="Your Name"
//           required
//         />
//         <input
//           className="border p-2 rounded"
//           type="email"
//           name="from_email"
//           placeholder="Your Email"
//           required
//         />
//         <textarea
//           className="border p-2 rounded h-32"
//           name="message"
//           placeholder="Your Message"
//           required
//         ></textarea>

//         <button
//           type="submit"
//           className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//         >
//           Send Message
//         </button>

//         <p className="text-center text-sm mt-2">{status}</p>
//       </form>
//     </div>
   );
};

// export default Contact;
