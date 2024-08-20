

export default function ProjectCard(props) {
  const { items } = props;

	return (
    <>
      <div className="flex justify-center flex-wrap gap-4 px-7">
        {items?.map((item, index) => (
          <section 
            key={`item_${item.id}`}
            className="w-full border border-slate-200 p-5 text-center rounded bg-[#0D1345] | md:w-1/3"
          >
            <h3 className="mb-4 text-3xl">{item.header}</h3>
            <p>{item.content}</p>
          </section>
        ))}
      </div>
    </>
  )
}