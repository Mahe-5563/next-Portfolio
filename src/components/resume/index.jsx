import Link from "next/link";
import Image from "next/image";




export default function ResumeComponent() {
  
  const resumeLink = "https://drive.google.com/file/d/1ETp-m3MsO6FMFVtmPUQVXOkqEQdrVPnZ/view?usp=drive_link";
	return (
		<div className="mx-10 mt-32">
      <div className="text-center | md:text-left md:flex md:justify-between">
        <h1 className="text-6xl text-[#D2C228] mb-6 | md:mb-0">resume</h1>
        <Link
          href={resumeLink}
          target="_blank"
          className="h-fit bg-[#D2C228] px-4 py-2 text-[#05071A] rounded-[5px] mt-auto w-full block | md:inline-block md:w-fit"
        >
          download full resume
        </Link>
      </div>
      {/* <hr className='mt-10 mx-10 border-t-[#D2C228]' /> */}
      <div className="mt-16">
        <h3 className="text-3xl text-center | md:text-left md:text-4xl">
          <label className="text-6xl">w</label>ork <label className="text-6xl">e</label>xperience
          <div className="border-b border-[#D2C228] mt-4 w-28 ml-auto mr-auto | md:ml-3 md:mr-0"></div>
        </h3>
        <div className="mt-9">
          <div>
            <div className=" | md:flex md:justify-between">
              <div className="">
                <label className="text-2xl text-[#D2C228]">
                  <label className="text-4xl">s</label>oftware <label className="text-4xl">d</label>eveloper&nbsp;
                </label>
                <label className="text-2xl">
                  @ vakilsearch legal solutions
                </label>
              </div>
              <div className="mt-3 | md:mt-0">
                <label>dec 2019 - jul 2022</label>
              </div>
            </div>
            <div className="mt-3 mx-10">
              <p className="text-lg"><label className="text-2xl">b</label>{"egun my career as a frontend developer and worked for close to 3 years, at vakilsearch legal solutions, chennai - india, developing single-page applications and responsive and dynamic webpages using react.js, javascript, html/css, redux and next.js."}</p>
            </div>
          </div>
          <div className="mt-8">
            <div className=" | md:flex md:justify-between">
              <div className="">
                <label className="text-2xl text-[#D2C228]">
                  <label className="text-4xl">a</label>ndroid <label className="text-4xl">i</label>ntern&nbsp;
                </label>
                <label className="text-2xl">
                  @ full creative pvt. ltd.
                </label>
              </div>
              <div className="mt-3 | md:mt-0">
                <label>jan 2019 - feb 2019</label>
              </div>
            </div>
            <div className="mt-3 mx-10">
              <p className="text-lg"><label className="text-2xl">i</label>{"nterned at full creative pvt. ltd., chennai - india as android developer intern working with concepts of core java, android and touch typing."}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h3 className="text-3xl text-center | md:text-left md:text-4xl">
          <label className="text-6xl">e</label>ducation
          <div className="border-b border-[#D2C228] mt-4 w-28 ml-auto mr-auto | md:ml-3 md:mr-0"></div>
        </h3>
        <div className="mt-9">
          <div>
            <div className=" | md:flex md:justify-between">
              <div className="">
                <label className="text-2xl text-[#D2C228]">
                  msc. in <label className="text-4xl">c</label>reative digital media and user experience&nbsp;
                </label>
                <label className="text-2xl">
                  @ technological university dublin
                </label>
              </div>
              <div className="mt-3 | md:mt-0">
                <label>2022 - 2023</label>
              </div>
            </div>
            <div className="mt-3 mx-10">
              <p className="text-lg"><label className="text-2xl">t</label>{"he master's course focused on designing and developing applications with good experience to users, building a product from scratch and presenting the product to the users."}</p>
            </div>
          </div>
          <div className="mt-8">
            <div className=" | md:flex md:justify-between">
              <div className="">
                <label className="text-2xl text-[#D2C228]">
                  b.e. in <label className="text-4xl">c</label>omputer science and engineering&nbsp;
                </label>
                <label className="text-2xl">
                  @ easwari engineering college
                </label>
              </div>
              <div className="mt-3 | md:mt-0">
                <label>2015 - 2019</label>
              </div>
            </div>
            <div className="mt-3 mx-10">
              <p className="text-lg"><label className="text-2xl">t</label>{"he bachelor's course focused on intricate components of computer hardware and software such as computer architecture, database management, grid system architecture, cloud infrastructure, web applications and networking."}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h3 className="text-3xl text-center | md:text-left md:text-4xl">
          <label className="text-6xl">t</label>echnology <label className="text-6xl">s</label>tack
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
          checkout my resume to know more about my works!
        </Link>
      </div>
    </div>
  )
}
