// src/components/Contact.js
import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-red-700 font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs m-20">
        <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src="https://cdn.discordapp.com/attachments/1125426619230732308/1125426722750332950/IMG_20230212_105706-modified.png" alt="product designer" />
        <h1 className="text-lg text-white font-bold "> Arjuna Dwi Damara Putra</h1>
        <h3 className="text-m text-white "> MAHASISWA </h3>
        <p className="text-s text-white mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
  
      </div>
      <div className="bg-red-700 font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs m-20">
        <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto " src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="product designer" />
        <h1 className="text-lg text-white"> John Doe </h1>
        <h3 className="text-m text-white "> Creative Director </h3>
        <p className="text-s text-white mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
   
      </div>
    </div>

    
  );
};

export default Contact;

