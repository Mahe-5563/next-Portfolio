import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faFaceGrinStars,
  faFile,
} from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
  const { page } = props;

	const links = [
		{
			id: "projects",
			href: "/projects",
			name: "Projects",
			faIcon: faFile,
		},
		{
			id: "resume",
			href: "/resume",
			name: "Experience",
			faIcon: faBriefcase
		},
		{
			id: "about",
			href: "/about",
			name: "About",
			faIcon: faFaceGrinStars
		}
	]

  return (
    <>
      <div
        className={`fixed h-20 top-0 w-full z-50 bg-primary py-5 px-8 border-b border-secondary | md:flex md:justify-between`}
      >
        <Link className="mx-auto md:mx-0 md:w-1/3" href={"/"}>
          <h1 className="text-3xl text-center | md:text-left">
            works by Mahe!
          </h1>
        </Link>
        <div className="invisible | md:w-1/3 md:flex md:justify-evenly md:visible">
          {links.map(link => (
						<Link 
							key={`link_${link.id}`}
							href={link.href} 
							className={`text-center flex justify-center px-2 py-1 rounded-md w-1/3 ${page == link.id && "bg-secondary"}`}
						>
							<FontAwesomeIcon icon={link.faIcon} className={`my-auto mr-2 ${page == link.id && "text-primary"}`} />
							<h5 className={`${page == link.id && "text-primary"} my-auto`}>{link.name}</h5>
						</Link>
					))}
        </div>
        <div className="invisible | md:visible md:text-right md:my-auto md:w-1/3">
          <h5 className="">maheshwar arulraj</h5>
        </div>
				
      </div>

      <div className={`visible z-50 fixed bottom-10 mx-auto left-0 right-0 bg-primary w-3/5 p-4 flex justify-evenly border border-secondary rounded-xl shadow-lg shadow-primary | md:invisible`}>
        {links.map(link => (
					<Link 
						key={`link_${link.id}`}
						href={link.href} 
						className={`text-center ${page == link.id && 'bg-secondary'} px-2 py-1 rounded-md`}
					>
						<FontAwesomeIcon icon={link.faIcon} className={`${page == link.id && 'text-primary'}`} />
					</Link>
				))}
      </div>
    </>
  );
}
