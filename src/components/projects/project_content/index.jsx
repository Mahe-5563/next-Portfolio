import React from "react";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import ProjectText from "./ProjectText";
import ProjectPalette from "./ProjectPalette";
import ProjectImage from "./ProjectImage";
import ProjectFontface from "./ProjectFontface";
import ProjectPrototype from "./ProjectPrototype";

export default function ProjectDetailsPage(props) {
  const { title, description, banner, steps } = props;
  // console.info("Props: ", props);

  return (
    <div className="mx-10 mt-32">
      <div className="">
        <h1 className="text-4xl mb-3 text-[#D2C228] | md:text-6xl md:mb-5">
          {title}
        </h1>
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
      <>
        {steps?.map((step, index) => {
          return (
            <section key={`step_${index}`}>
              <h2 className="text-4xl mt-16 mb-6 text-center underline underline-offset-8">
                {step.title}
              </h2>
              {step.type == "card" && <ProjectCard {...step} />}
              {step.type == "text" && <ProjectText {...step} />}
              {step.type == "color_palette" && <ProjectPalette {...step} />}
              {step.type == "image" && <ProjectImage {...step} />}
              {step.type == "fontface" && <ProjectFontface {...step} />}
              {(step.type == "prototype_design" 
                || step.type == "prototype_mobile"
                || step.type == "prototype_web"
                || step.type == "prototype_web_mobile") && <ProjectPrototype {...step} />}
            </section>
          );
        })}
      </>
    </div>
  );
}
