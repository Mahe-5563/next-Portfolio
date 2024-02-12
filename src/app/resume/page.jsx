import { Amaranth } from "next/font/google";

import "../globals.css";
import Footer from "@/components/header-footer/footer";
import Header from "@/components/header-footer/header";
import AboutContent from "@/components/about";
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
      <Header/>
      <ResumeComponent />
      <Footer/>
    </main>
  )
}
