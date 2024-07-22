'use client';
import projectsHomeStyles from "./styles.module.css";
import uxProjects from "../../../data/ux_projects.json";
import webProjects from "../../../data/web_projects.json";
import Link from "next/link";

export default function ProjectsHomeComponent(props) {
  
	return (
		<div className="mx-10 mt-32">
      <div className="text-center | md:text-left md:flex md:justify-between">
        <h1 className="text-6xl text-[#D2C228] mb-6 | md:mb-0">Projects</h1>
      </div>
      <div className="mt-16">
        <h3 className="text-3xl text-center | md:text-left md:text-4xl">
          UI/UX Projects
          <div className="border-b border-[#D2C228] mt-4 w-28 ml-auto mr-auto | md:ml-3 md:mr-0"></div>
        </h3>
        <div className="mt-4">
          {uxProjects.map(uxp => (
            <Link
              href={`/projects/${uxp.url}`}
              id={`uxp_${uxp.id}`}
              key={`uxp_${uxp.id}`}
            >
              <div
                className={`
                  ${projectsHomeStyles[uxp.projectClass]} 
                  ${projectsHomeStyles.project_cards}
                  mt-5
                `}
              >
                
                  {uxp.viewTitle && 
                    <h1 className={`${projectsHomeStyles.project_card_title} ${uxp.additionalTitleClassNames}`}>
                      {uxp.title}
                    </h1>
                  }
                  <p className={`${projectsHomeStyles.project_description}`}>{uxp.description}</p>
              
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-3xl text-center | md:text-left md:text-4xl">
          Frontend Projects
          <div className="border-b border-[#D2C228] mt-4 w-28 ml-auto mr-auto | md:ml-3 md:mr-0"></div>
        </h3>
        <div className="mt-4">
          {webProjects.map(wbp => (
            <Link
              href={`/projects/${wbp.url}`}
              id={`wbp_${wbp.id}`}
              key={`wbp_${wbp.id}`}
            >
              <div
                
                href={"/projects/project_content"}
                className={`
                  ${projectsHomeStyles[wbp.projectClass]} 
                  ${projectsHomeStyles.project_cards}
                  mt-5
                `}
              >
                {wbp.viewTitle && 
                  <h1 className={`${projectsHomeStyles.project_card_title} ${wbp.additionalTitleClassNames}`}>
                    {wbp.title}
                  </h1>
                }
                <p className={`${projectsHomeStyles.project_description}`}>{wbp.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
