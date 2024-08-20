import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

import { weburls, jsTWColors } from "@/common";

export default function AboutContent() {
  return (
    <div className="mx-10 mt-32">
      <div className="md:flex">
        <h1 className={`mr-3 text-5xl md:text-6xl break-words`}>
          Maheshwar
        </h1>
        <h1 className="text-5xl md:text-6xl mt-auto">Arulraj</h1>
      </div>
      <div className={`mt-5 flex justify-between`}>
        <div>
          <h5 className="mb-2">social links</h5>
          {weburls.map((link) => (
            <section id={link.id} key={link.id}>
              {link.about && (
                <Link href={link.href}>
                  <FontAwesomeIcon
                    icon={link.icon}
                    fontSize={50}
                    className="mr-3"
                    color="#D2C228"
                  />
                </Link>
              )}
            </section>
          ))}
        </div>
        <div className="mt-auto">
          <div className="text-right">
            <label className={`text-secondary`}>
              Dublin, Ireland &#127470;&#127466;
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
            <label className={`text-secondary`}>
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
          src={"/images/me.jpeg"}
          alt="Profile Photo"
          width={350}
          height={350}
          className="rounded-lg border-2 border-[#D2C228]"
        />
        <div className="mt-5 | md:ml-5 md:mt-0 md:text-base">
          <p>
            {"I am a "}
            <label className={`text-secondary`}>
              {"UX Designer"}
            </label>
            {" and "}
            <label className={`text-secondary`}>
              {"Frontend Developer"}
            </label>
            {
              ". I am a curious piece of being looking to solve different problems in our world (not necessarily the tech world) with the provision of giving a good experience to my clientele. I began my career as a frontend developer working on multi-page apps and single page applications. But even before I began my frontend career, I always knew I have what it takes to design good experience applications. The knack for creativity and the interest towards designs drived me forward along wit the experiences produced by various applications, every time I used one. I pursued frontend development to strengthen my coding habit and created a developer profile out of it, since I had no idea how to kick start my designing career. Yet I never gave up my curiosity about creating good experience applications and after working as a web developer for close to 3 years, I decided to pursue my interest in designing apps. That's when I decided to join the Master's program in Technological University Dublin, specializing in creative digital media and user experience, to learn and enhance my designing and frontend skills with respect to providing the necessary experience to the user."
            }
          </p>
        </div>
      </div>
      <div className="mt-5">
        <h3 className={`text-2xl text-secondary mb-3`}>
          How I work and find my inspirations...
        </h3>
        <p>
          {
            "Understanding the user's requirements and designing according to that has never been something natural to me. Being an introvert, I have always found it difficult to approach my users to discuss the enhancements on any applications. Yet, I have always pushed myself beyond boundaries to meet my requirements. Working with user experience has helped me interact with people of different age groups and background sharing their experiences, views and thoughts towards the applications I have built. With my technical expertise and designing knowledge, I believe I am a whole package that can do research, design, prototype and develop any kind of application - the bridge that covers the gap between frontend development and ux designing."
          }
        </p>
        <br />
        <p>
          {
            "I look for inspirations from various sources. From any mundane object, such as the color palette of a building opposite to my flat, to noticing the experience when using an application, such as YouTube music, I try to find the underlying meaning of why the decision was taken to build the object the way it is and if there is a way to enhance the existing design. We have plenty of inspirations around us and all we have to do is look for it. All we have to do is look for it in the right place."
          }
        </p>
      </div>
    </div>
  );
}
