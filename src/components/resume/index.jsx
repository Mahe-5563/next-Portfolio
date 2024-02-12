import Link from "next/link";
import Image from "next/image";




export default function ResumeComponent() {
  
  const resumeLink = "https://drive.google.com/file/d/1ETp-m3MsO6FMFVtmPUQVXOkqEQdrVPnZ/view?usp=drive_link";
	return (
		<div className="mx-10 mt-32">
      <div className="text-center | md:text-left md:flex md:justify-between">
        <h1 className="text-6xl text-[#D2C228] mb-6 | md:mb-0">Resume</h1>
        <Link
          href={resumeLink}
          target="_blank"
          className="h-fit bg-[#D2C228] px-4 py-2 text-[#05071A] rounded-[5px] mt-auto w-full block | md:inline-block md:w-fit"
        >
          Download Full Resume
        </Link>
      </div>
      {/* <hr className='mt-10 mx-10 border-t-[#D2C228]' /> */}
      <div className="mt-16">
        <h3 className="text-3xl text-center | md:text-left md:text-4xl">
          Work Experience
          <div className="border-b border-[#D2C228] mt-4 w-28 ml-auto mr-auto | md:ml-3 md:mr-0"></div>
        </h3>
        <div className="mt-9">
          <div>
            <div className=" | md:flex md:justify-between">
              <div className="">
                <label className="text-2xl text-[#D2C228]">
                  Software Developer&nbsp;
                </label>
                <label className="text-2xl">
                  @ Vakilsearch Legal Solutions
                </label>
              </div>
              <div className="mt-3 | md:mt-0">
                <label>Dec 2019 - Jul 2022</label>
              </div>
            </div>
            <div className="mt-3 mx-10">
              <p className="text-lg">{"Begun my career as a Frontend developer and worked for close to 3 years, at Vakilsearch Legal Solutions, Chennai - India, developing single-page applications and responsive and dynamic webpages using React.js, JavaScript, HTML/CSS, Redux and Next.js."}</p>
            </div>
          </div>
          <div className="mt-8">
            <div className=" | md:flex md:justify-between">
              <div className="">
                <label className="text-2xl text-[#D2C228]">
                  Android Intern&nbsp;
                </label>
                <label className="text-2xl">
                  @ Full Creative Pvt. Ltd.
                </label>
              </div>
              <div className="mt-3 | md:mt-0">
                <label>Jan 2019 - Feb 2019</label>
              </div>
            </div>
            <div className="mt-3 mx-10">
              <p className="text-lg">{"Interned at Full Creative Pvt. Ltd., Chennai - India as Android Developer Intern working with concepts of Core Java, Android and touch typing."}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h3 className="text-3xl text-center | md:text-left md:text-4xl">
          Education
          <div className="border-b border-[#D2C228] mt-4 w-28 ml-auto mr-auto | md:ml-3 md:mr-0"></div>
        </h3>
        <div className="mt-9">
          <div>
            <div className=" | md:flex md:justify-between">
              <div className="">
                <label className="text-2xl text-[#D2C228]">
                  MSc. in Creative Digital Media and User Experience&nbsp;
                </label>
                <label className="text-2xl">
                  @ Technological University Dublin
                </label>
              </div>
              <div className="mt-3 | md:mt-0">
                <label>2022 - 2023</label>
              </div>
            </div>
            <div className="mt-3 mx-10">
              <p className="text-lg">{"The Master's course focused on designing and developing applications with good experience to users, building a product from scratch and presenting the product to the users."}</p>
            </div>
          </div>
          <div className="mt-8">
            <div className=" | md:flex md:justify-between">
              <div className="">
                <label className="text-2xl text-[#D2C228]">
                  B.E. in Computer Science and Engineering&nbsp;
                </label>
                <label className="text-2xl">
                  @ Easwari Engineering College
                </label>
              </div>
              <div className="mt-3 | md:mt-0">
                <label>2015 - 2019</label>
              </div>
            </div>
            <div className="mt-3 mx-10">
              <p className="text-lg">{"The Bachelor's course focused on intricate components of computer hardware and software such as Computer Architecture, Database Management, Grid system architecture, Cloud infrastructure, Web applications and Networking."}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h3 className="text-3xl text-center | md:text-left md:text-4xl">
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
      <div className="mt-20">
        <Link
          href={resumeLink}
          target="_blank"
          className="bg-[#D2C228] px-8 py-2 text-[#05071A] rounded-[5px] w-full block text-center | md:w-fit md:mx-auto"
        >
          Checkout my Resume to know more about my works!
        </Link>
      </div>
    </div>
  )
}
