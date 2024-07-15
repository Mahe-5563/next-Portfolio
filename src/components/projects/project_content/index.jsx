import React from "react";
import Image from "next/image";

export default function ProjectDetailsPage(props) {
  
  const { 
    title,
    description,
    banner,
  } = props;

	return (
		<div className="mx-10 mt-32">
      <div className="">
        <h1 className="text-4xl mb-3 text-[#D2C228] | md:text-6xl md:mb-5">{title}</h1>
        <p className="text-md mb-3 | md:text-xl md:mb-5">{description}</p>
        <Image
          className="mx-auto rounded-md"
          alt="collabb"
          src={banner}
          width={700}
          height={400}
        />
      </div>
      {/* Steps and Sections */}
    </div>
  )
}