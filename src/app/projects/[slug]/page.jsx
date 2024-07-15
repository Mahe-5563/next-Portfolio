import { Amaranth } from "next/font/google";

import "../../globals.css";
import Footer from "@/components/header-footer/footer";
import Header from "@/components/header-footer/header";
import projectsdata from "@/data/projects_data.json";
import Custom404 from "@/app/not-found";
import ProjectDetailsPage from "@/components/projects/project_content";

const font = Amaranth({
  subsets: ["latin"],
  weight: '400',
})

async function getPageData (pageUrl) {
  const currentPageData = projectsdata.filter(data => data.url == pageUrl)[0];
  return currentPageData;
}

export default async function ProjectsURLPage({ params: { slug } }) {

  let isPageExist = true;
  const pageDetails = await getPageData(slug);
  // console.info("pageDetails: ", pageDetails);
  if(!pageDetails) {
    isPageExist = false;
  }

	return (
		<main className={font.className}>
      {isPageExist ?
        <>
          <head>
            <title>Projects</title>
          </head>
          <Header/>
          <ProjectDetailsPage {...pageDetails} />
          <Footer/>
        </>
      : <Custom404 /> }
    </main>
  )
}