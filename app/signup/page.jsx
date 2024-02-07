import React from "react";
import Form from "./SignupForm";
import Image from "next/image";

const Signup = () => {
  return(
    <div className="md:max-width md:flex flex-row md:w-[100%] md:padding-y md:px-20 mt-10 md:gap-5">
    <div className="px-8 md:pt-20 md:w-[40%] md:mt-[10%] md:fixed">
       <Image
         src="/assets/image/pana.svg"
         alt="hero-image"
         width="100"
         height="100"
         className="w-full object-cover"
       />
     </div>
     <div className="md:w-[100%] md:pl-[40%]">
        <Form/>
     </div>
 </div>
  );
};

export default Signup;
