import Link from "next/link";

import headerStyles from "./styles.module.css"

export default function Header(props) {
	const { page } = props;
  
	return (
		<>
			<div className={headerStyles.navbar_fix}>
				<Link 
					className='absolute left-5 right-5 top-5 | md:left-5 md:w-fit'
					href={"/"}
				>
					<h1 className='text-3xl text-center | md:text-left'>works by Mahe!</h1>
				</Link>
				{page != "about" && 
					<div className='invisible | md:visible md:absolute md:right-5 md:top-5'>
						<h5 className=''>maheshwar arulraj</h5>
					</div>
				}
			</div>
		</>
  )
}
