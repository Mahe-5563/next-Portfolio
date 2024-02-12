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
          <h5 className="mb-2">Social Links</h5>
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
              Dublin
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
        {/* <FontAwesomeIcon icon={faLinkedin} fontSize={40} className="mr-3" color="#D2C228" /> */}
        {/* <FontAwesomeIcon icon={faSquareGithub} fontSize={40} className="mr-3" color="#D2C228" /> */}
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
            {"I am a "}
            <label className={`text-[${jsTWColors.secondaryColor}]`}>{"UX Designer"}</label>
            {" and "}
            <label className={`text-[${jsTWColors.secondaryColor}]`}>{"Frontend developer"}</label>
            {
              ". I am a curious piece of being looking to solve different problems in our world (not necessarily the tech world) with the provision of giving a good experience to my clientele. I began my career as a Frontend developer working on multiple webpages and single page applications. But even before I began my Frontend career, I always knew I have what it takes to design good experience applications. I had the knack for creativity and I was always fascinated by the designs and the experiences produced by various applications, every time I used one. I pursued Frontend development to strengthen my coding habit and created a developer profile out of it, since I had no idea how to kick start my designing career. Yet I never gave up my curiosity about creating good experience applications and after working as a Web developer for nearly 3 years, I decided to pursue my interest in designing apps. That's when I joined my Master's program in Technological University Dublin specializing in Creative Digital Media and User Experience to learn and enhance my designing and frontend skills with respect to providing the necessary experience to the user."
            }
          </p>
        </div>
      </div>
      <div className="mt-5">
        <h3 className={`text-2xl text-[${jsTWColors.secondaryColor}] mb-3`}>
          How I work and find my inspirations...
        </h3>
        <p>
          {
            "Understanding the user's requirements and designing according to that has never been something natural to me. Being an introvert, I have always found it difficult to approach my users to discuss the enhancements on my applications. Yet, I have always pushed myself beyond boundaries to meet my requirements. Working with User Experience has helped me interact with multiple users of different age groups and background sharing their experiences, views and thoughts towards the applications I have built. With my technical expertise and designing knowledge, I believe I am a whole package that can do research, design, prototype and develop any kind of application."
          }
        </p>
        <br />
        <p>
          {
            "I look for inspirations from various sources. From any mundane object, such as the color palette of a building opposite to my flat, to noticing the experience when using an application, such as YouTube music app, I try to find the underlying meaning of why the decision was taken to build the object the way it is and if there is a way to enhance the existing design. We have plenty of inspirations around us and all we have to do is look for it. All we have to do is look for it in the right place."
          }
        </p>
      </div>
    </div>
  );
}
