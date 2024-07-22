'use client';
import Link from "next/link";

import Footer from "@/components/header-footer/footer";
import { jsTWColors } from "@/common";

import { Amaranth } from "next/font/google";

const font = Amaranth({
  subsets: ["latin"],
  weight: '400',
})

export default function Custom404() {

  return(
    <main className={font.className}>
      <head>
        <title>404 - Page Not Found</title>
      </head>
      <div
        className="absolute top-[40%] bottom-[50%] text-center w-full px-4"
      >
        <h1 className="text-4xl mb-4">{"404 - you know what it means!!"} &#128542;</h1>
        <div>{"Oops! Seems like the page you were looking for doesn't exist! "}</div>
        <div>
          {"you can either head"}
          <Link 
            className={`text-secondary`} 
            href={"#"} 
            onClick={() => { window.history.back(); }}
          >
            back
          </Link> 
          {"or go to the"}
          <Link className="text-secondary" href={"/"}
          >
            home page
          </Link>
          .
        </div>
      </div>
      <div className="absolute bottom-10 w-full">
        <Footer />
      </div>
    </main>
  )
}