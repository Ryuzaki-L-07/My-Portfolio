import React from "react";
import propic from "@/public/images/Tanzim_Pic.jpg";
import Image from "next/image";
import getPersonalData from "@/app/lib/personalData";
import Education from "./education";
import Contact from "./contact";
import FindMeOn from "./findMe";
import CV from "./cv";

export default function LeftContents(){

    const personalData = getPersonalData();
    return(
        <div className="w-1/4  p-4 bg-black text-white">
            <Image src={propic} alt="Profile Picture" quality={100} className="rounded-full ml-5 mb-2"/>
            <hr></hr>
            {/* <h1 className="text-4xl font-bold">Left Section</h1> */}

            <Education/>
            <hr></hr>
            <CV/>
            <hr></hr>
            <Contact/>
            <hr></hr>
            <FindMeOn/>
            <hr></hr>
     
            <p>This is the left section content.</p>
        </div>
    )
}