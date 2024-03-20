import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

import { weburls, jsTWColors } from "@/common";

export default function AboutContent() {
  return (
    <div className="mx-10 mt-32">
      <div className="flex">
        <h1 className="mr-3 text-6xl text-[${jsTWColors.secondaryColor}]">
          Maheshwar
        </h1>
        <h1 className="text-6xl mt-auto">
          Arulraj
        </h1>
      </div>
      <div className={`mt-5 flex justify-between`}>
        <div>
          <h5 className="mb-2">social links</h5>
          {weburls.map((link) => (
            <>
              {link.about && (
                <Link id={link.id} key={link.id} href={link.href}>
                  <FontAwesomeIcon
                    icon={link.icon}
                    fontSize={50}
                    className="mr-3"
                    color="#D2C228"
                  />
                </Link>
              )}
            </>
          ))}
        </div>
        <div className="mt-auto">
          <div className="text-right">
            <label className={`text-[${jsTWColors.secondaryColor}]`}>
              dublin, ireland &#127470;&#127466;
            </label>
            <label>
              <FontAwesomeIcon
                icon={faLocationDot}
                size="20"
                className="ml-4"
              />
            </label>
          </div>
          <div className="text-right">
            <label className={`text-[${jsTWColors.secondaryColor}]`}>
              mahepharulraj@gmail.com
            </label>
            <label>
              <FontAwesomeIcon icon={faEnvelope} size="20" className="ml-3" />
            </label>
          </div>
        </div>
      </div>
      <div className="mt-6 | md:flex ">
        <Image
          src={"/images/profile_photo.jpg"}
          alt="Profile Photo"
          width={350}
          height={350}
          className="rounded-lg border-2 border-[#D2C228]"
        />
        <div className="mt-5 | md:ml-5 md:mt-0 md:text-base">
          <p>
            <label className="text-3xl">i</label>{" am a "}
            <label className={`text-[${jsTWColors.secondaryColor}]`}>{"ux designer"}</label>
            {" and "}
            <label className={`text-[${jsTWColors.secondaryColor}]`}>{"frontend developer"}</label>
            {
              ". i am a curious piece of being looking to solve different problems in our world (not necessarily the tech world) with the provision of giving a good experience to my clientele. i began my career as a frontend developer working on multiple webpages and single page applications. but even before i began my frontend career, i always knew i have what it takes to design good experience applications. the knack for creativity and the interest towards designs drived me forward along wit the experiences produced by various applications, every time i used one. i pursued frontend development to strengthen my coding habit and created a developer profile out of it, since i had no idea how to kick start my designing career. yet i never gave up my curiosity about creating good experience applications and after working as a web developer for close to 3 years, i decided to pursue my interest in designing apps. that's when i joined my master's program in technological university dublin specializing in creative digital media and user experience to learn and enhance my designing and frontend skills with respect to providing the necessary experience to the user."
            }
          </p>
        </div>
      </div>
      <div className="mt-5">
        <h3 className={`text-2xl text-[${jsTWColors.secondaryColor}] mb-3`}>
          how i work and find my inspirations...
        </h3>
        <p>
          {
            "understanding the user's requirements and designing according to that has never been something natural to me. being an introvert, i have always found it difficult to approach my users to discuss the enhancements on my applications. yet, i have always pushed myself beyond boundaries to meet my requirements. working with user experience has helped me interact with multiple users of different age groups and background sharing their experiences, views and thoughts towards the applications i have built. with my technical expertise and designing knowledge, i believe i am a whole package that can do research, design, prototype and develop any kind of application."
          }
        </p>
        <br />
        <p>
          {
            "i look for inspirations from various sources. from any mundane object, such as the color palette of a building opposite to my flat, to noticing the experience when using an application, such as youtube music app, i try to find the underlying meaning of why the decision was taken to build the object the way it is and if there is a way to enhance the existing design. we have plenty of inspirations around us and all we have to do is look for it. all we have to do is look for it in the right place."
          }
        </p>
      </div>
    </div>
  );
}
