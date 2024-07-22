import Image from "next/image";


export default function ProjectImage(props) {
  const { items } = props;

	return (
    <>
      <div className="flex justify-center gap-4 px-7">
        {items?.map((item, index) => (
          <Image
            key={item.id}
            src={item.image}
            height={200}
            width={200}
            alt={item.header}
          />
        ))}
      </div>
    </>
  )
}