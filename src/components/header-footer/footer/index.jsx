import Image from 'next/image'

export default function Footer() {
  
	return (
		<>
      <hr className='mt-10 mx-10 border-t-[#D2C228]' />
			<div className='text-center my-4'>
        <label className='text-xl text-[#D2C228]'>created with passion!</label>
				<br />
        <label className='text-sm block'>and ofcourse, on next.js &#x1F913;</label>
			</div>
		</>
  )
}
