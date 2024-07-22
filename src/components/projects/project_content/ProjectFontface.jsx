import Image from "next/image";
import { Lato, Cormorant, Amaranth } from "next/font/google";


const lato = Lato({
  subsets: ["latin"],
  weight: '400',
})

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: '400',
})

const amaranth = Amaranth({
  subsets: ["latin"],
  weight: '400',
})

export default function ProjectFontface(props) {
  const { items } = props;
	return (
    <>
      <div className="flex justify-center gap-4 px-7">
        {items?.map((item, index) => {
          // const classN = item.content == "lato" && lato.className;
          let classN;
          switch (item.content) {
            case "lato" :
              classN = lato.className;
              break;
            case "cormorant":
              classN = cormorant.className;
              break;
            default:
              classN = amaranth.className;
          }
          return (
            <h4 key={item.id} className={`${classN} text-4xl`}>{item.header}</h4>
          )
        })}
      </div>
    </>
  )
}