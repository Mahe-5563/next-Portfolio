"use client";
import Image from "next/image";
import Link from "next/link";

import homepageStyles from "./styles.module.css";
import { weburls } from "@/common";

export default function HeadSection() {

  return (
    <div className="mt-20">
      <div className="mb-12 h-64 relative | md:flex md:justify-center md:mb-22 md:flex-row">
        <Image
          src={"/images/cartoon_dp.JPG"}
          alt="Profile Photo"
          height={200}
          width={200}
          className={`${homepageStyles.profile_image} flex place-content-center ml-auto mr-auto mt-auto mb-4 | md:mb-auto`}
        />
        <div className="flex place-content-center mt-7 | md:flex-col md:absolute md:right-3 md:top-5 md:bottom-0">
          {weburls.map((url) => (
            <>
              {url.home &&
                <a key={`weburl_${url.id}`} href={url.href} target="_blank">
                  <Image
                    src={url.src}
                    alt={url.alt}
                    height={50}
                    width={50}
                    className={homepageStyles.icons}
                  />
                </a>
              }
            </>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl self-center text-center mb-3 mx-5 | md:text-4xl md:mx-px">
          frontend developer - ux designer
        </h1>
        <h2 className="w-9/12 text-center self-center | md:text-xl">
          <label className="text-4xl | md:text-6xl">{"d"}</label>
          {
            "esigning and developing web and mobile applications has always been something i loved to do. with a curious and a creative approach towards solving problems, i push myself to produce applications that make sense to the user's experience while using it."
          }
        </h2>
      </div>
      <div
        className={`flex items-center flex-col mt-8 gap-y-6 | md:flex-row md:justify-center md:gap-x-8`}
      >
        <Link 
					className={`${homepageStyles.redirection_button} text-center w-1/2 | md:w-1/5`}
					href={"/projects"}
				>
          <div>projects</div>
          <div className={`${homepageStyles.overlay}`}>
            <div className={`${homepageStyles.text}`}>take a peek into my works!</div>
          </div>
        </Link>
        <Link 
					className={`${homepageStyles.redirection_button} text-center w-1/2 | md:w-1/5`}
					href={"/resume"}
				>
          <div>resume</div>
          <div className={`${homepageStyles.overlay}`}>
            <div className={`${homepageStyles.text}`}>checkout my resume!</div>
          </div>
        </Link>
        <Link 
					className={`${homepageStyles.redirection_button} text-center w-1/2 | md:w-1/5`}
					href={"/about"}
				>
          <div>about me</div>
          <div className={`${homepageStyles.overlay}`}>
            <div className={`${homepageStyles.text}`}>
              get to know more about me!
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
