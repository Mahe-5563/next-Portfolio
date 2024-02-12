import { Amaranth } from "next/font/google";

import "../globals.css";
import Footer from "@/components/header-footer/footer";
import Header from "@/components/header-footer/header";
import AboutContent from "@/components/about";

const font = Amaranth({
  subsets: ["latin"],
  weight: '400',
})

export default function About() {
  
	return (
		<main className={font.className}>
      <head>
        <title>About Me - Works by Mahe</title>
      </head>
      <Header page="about"/>
      <AboutContent />
      <Footer/>
    </main>
  )
}
