import { Amaranth } from "next/font/google";

import "../globals.css";
import Footer from "@/components/header-footer/footer";
import Header from "@/components/header-footer/header";
import ProjectsHomeComponent from "@/components/projects/home";

const font = Amaranth({
  subsets: ["latin"],
  weight: '400',
})

export default function ProjectsPage(props) {
  
  // console.info("Props: ", props);
	return (
		<main className={font.className}>
      <head>
        <title>Projects | Maheshwar Arulraj</title>
      </head>
      <Header page={"projects"} />
      <ProjectsHomeComponent />
      <Footer/>
    </main>
  )
}
