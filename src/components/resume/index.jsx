import Link from "next/link";
import Image from "next/image";

export default function ResumeComponent() {
  
  const resumeLink = "https://drive.google.com/file/d/1ETp-m3MsO6FMFVtmPUQVXOkqEQdrVPnZ/view?usp=sharing";

  const workExp = [
    {
      id: 3,
      logo: "/images/mystartup_ai.svg",
      position: "Frontend Developer",
      organisation: "MyStartup AI",
      duration: "Mar 2024 - Present",
      description: "Became a co-founding member of a startup company with MyStartup AI and began developing website and dashboard app to gain experience on a foreign soil."
    },
    {
      id: 2,
      logo: "/images/vakilsearch.png",
      position: "Software Engineer",
      organisation: "Vakilsearch Legal Solutions (Currently Zolvit)",
      duration: "Dec 2019 - Jul 2022",
      description: "Begun my career as a Frontend Developer and worked for nearly 3 years, at Vakilsearch Legal Solutions, Chennai - India, developing single-page applications and responsive and dynamic webpages using React.js, JavaScript, HTML/CSS, Redux and Next.js."
    },
    {
      id: 1,
      logo: "/images/full_creative_logo.jpg",
      position: "Android Intern",
      organisation: "Full Creative Pvt. Ltd.",
      duration: "Jan 2019 - Feb 2019",
      description: "Interned at Full Creative Pvt. Ltd., Chennai - India as an Android Developer Intern working with concepts of Core Java, Android Studio, Data Structures and touch typing."
    }
  ]

  const education = [
    {
      id: 1,
      logo: "/images/tud.jpg",
      course: "MSc. in Creative Digital Media and User Experience",
      institution: "Technological University Dublin",
      duration: "Sept 2022 - Mar 2024",
      description: "The master's course focused on designing and developing applications with good experience to users, building a product from scratch and presenting the product to the users."
    },
    {
      id: 2,
      logo: "/images/eec.png",
      course: "B.E. in Computer Science & Engineering",
      institution: "Easwari Engineering College (Anna University)",
      duration: "Aug 2015 - Apr 2019",
      description: "The bachelor's course focused on intricate components of computer hardware and software such as Computer Architecture, Database Management, Grid System Architecture, Cloud Infrastructure, Web Applications and Networking."
    }
  ];

	return (
		<div className="mx-10 mt-32">
      <div className="text-center | md:text-left md:flex md:justify-between">
        <h1 className="text-6xl text-[#D2C228] mb-6 | md:mb-0">Resume</h1>
        <Link
          href={resumeLink}
          target="_blank"
          className="h-fit bg-[#D2C228] px-4 py-2 text-[#05071A] rounded-[5px] mt-auto w-full block | md:inline-block md:w-fit"
        >
          Download full resume
        </Link>
      </div>
      {/* <hr className='mt-10 mx-10 border-t-[#D2C228]' /> */}
      <div className="mt-20">
        <h3 className="text-3xl text-center | md:text-left md:text-4xl">
          {/* <label className="text-6xl">t</label>echnology <label className="text-6xl">s</label>tack */}
          Technology Stack
          <div className="border-b border-[#D2C228] mt-4 w-28 ml-auto mr-auto | md:ml-3 md:mr-0"></div>
        </h3>
        <div className="mt-9 flex flex-wrap justify-evenly">
          <Image
            title="React framework (ReactJS and React Native)"
            src={"/images/tech/react_light.svg"}
            height={100}
            width={100}
            alt="React logo"
            className="mb-4 gap-3 | md:mb-0"
          />
          <Image
            title="Next.js 14"
            src={"/images/tech/nextjs.svg"}
            height={100}
            width={100}
            alt="Next.js logo"
            className="bg-white rounded-[80px] border-2 border-white mb-4 gap-3 | md:mb-0"
          />
          <Image
            title="NodeJS 18"
            src={"/images/tech/nodejs.png"}
            height={100}
            width={100}
            alt="NodeJS logo"
            className="mb-4 gap-3 | md:mb-0"
          />
          <Image
            title="JavaScript"
            src={"/images/tech/javascript.png"}
            height={100}
            width={100}
            alt="NodeJS logo"
            className="mb-4 gap-3 | md:mb-0"
          />
          <Image
            title="HTML 5"
            src={"/images/tech/html.png"}
            height={100}
            width={100}
            alt="NodeJS logo"
            className="mb-4 gap-3 | md:mb-0"
          />
          <Image
            title="CSS 3"
            src={"/images/tech/css.png"}
            height={100}
            width={100}
            alt="NodeJS logo"
            className="mb-4 gap-3 | md:mb-0"
          />
        </div>
        <div className="mt-5 flex flex-wrap justify-evenly">
          <Image
            title="Git"
            src={"/images/tech/git.png"}
            height={100}
            width={100}
            alt="Git logo"
            className="mb-4 gap-3 | md:mb-0"
          />
          <Image
            title="GitHub"
            src={"/images/tech/github.png"}
            height={100}
            width={100}
            alt="GitHub logo"
            className="mb-4 gap-3 | md:mb-0"
          />
          <Image
            title="Figma"
            src={"/images/tech/figma.png"}
            height={100}
            width={100}
            alt="Figma logo"
            className="mb-4 gap-3 | md:mb-0"
          />
          <Image
            title="Adobe Illustrator"
            src={"/images/tech/illustrator.png"}
            height={100}
            width={100}
            alt="Illustrator logo"
            className="mb-4 gap-3 | md:mb-0"
          />
          <Image
            title="MongoDB"
            src={"/images/tech/mongodb.png"}
            height={100}
            width={100}
            alt="MongoDB logo"
            className="mb-4 gap-3 | md:mb-0"
          />
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-3xl text-center | md:text-left md:text-4xl">
          {/* <label className="text-6xl">w</label>ork <label className="text-6xl">e</label>xperience */}
          Work Experience
          <div className="border-b border-[#D2C228] mt-4 w-28 ml-auto mr-auto | md:ml-3 md:mr-0"></div>
        </h3>
        {workExp.map(exp => (
          <section className="mt-9" key={`work_exp_${exp.id}`}>
            <div className=" | md:flex md:justify-between">
              <div className="md:flex ">
                <Image 
                  src={exp.logo}
                  alt={exp.organisation}
                  height={50}
                  width={50}
                  className="mr-4 mb-1 md:mb-0"
                />
                <label className="text-2xl text-[#D2C228] my-auto">
                  {/* <label className="text-4xl">s</label>oftware <label className="text-4xl">d</label>eveloper&nbsp; */}
                  {exp.position}&nbsp;
                </label>
                <label className="text-2xl my-auto">
                  @ {exp.organisation}
                </label>
              </div>
              <div className="mt-3 | md:my-auto">
                <label>{exp.duration}</label>
              </div>
            </div>
            <div className="mt-3 mx-10">
              <p className="text-lg">{exp.description}</p>
            </div>
          </section>
        ))}
      </div>
      <div className="mt-20">
        <h3 className="text-3xl text-center | md:text-left md:text-4xl">
          Education
          <div className="border-b border-[#D2C228] mt-4 w-28 ml-auto mr-auto | md:ml-3 md:mr-0"></div>
        </h3>
        <div className="mt-9">
          {education.map(edu => (
            <section key={`edu_${edu.id}`} className="mt-8">
              <div className=" | md:flex md:justify-between">
                <div className="md:flex">
                  <Image 
                    src={edu.logo}
                    alt={edu.institution}
                    height={50}
                    width={50}
                    className="mr-4 mb-4 md:mb-0"
                  />
                  <label className="text-2xl text-[#D2C228] my-auto">
                    {edu.course}&nbsp;
                  </label>
                  <label className="text-2xl my-auto">
                    @ {edu.institution}
                  </label>
                </div>
                <div className="mt-3 | md:my-auto">
                  <label>{edu.duration}</label>
                </div>
              </div>
              <div className="mt-3 mx-10">
                <p className="text-lg">{edu.description}</p>
              </div>
            </section>
          ))}
        </div>
      </div>
      <div className="mt-20">
        <Link
          href={resumeLink}
          target="_blank"
          className="bg-[#D2C228] px-8 py-2 text-[#05071A] rounded-[5px] w-full block text-center | md:w-fit md:mx-auto"
        >
          Checkout my resume to know more about my works!
        </Link>
      </div>
    </div>
  )
}
