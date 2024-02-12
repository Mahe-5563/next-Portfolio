import Image from 'next/image'

import HeadSection from '../headsection';
import Header from '@/components/header-footer/header';
import Footer from '@/components/header-footer/footer';

export default function Home() {
  
	return (
		<>
			<Header />
			<HeadSection />
			<Footer />
		</>
  )
}
