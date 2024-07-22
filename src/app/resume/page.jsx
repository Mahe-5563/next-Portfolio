import { Amaranth } from "next/font/google";

import "../globals.css";
import Footer from "@/components/header-footer/footer";
import Header from "@/components/header-footer/header";
import ResumeComponent from "@/components/resume";

const font = Amaranth({
  subsets: ["latin"],
  weight: '400',
})

export default function Resume() {
  
	return (
		<main className={font.className}>
      <head>
        <title>Resume | Maheshwar Arulraj</title>
      </head>
      <Header page={"resume"} />
      <ResumeComponent />
      <Footer/>
    </main>
  )
}
