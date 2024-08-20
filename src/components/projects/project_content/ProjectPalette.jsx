export default function ProjectPalette(props) {
  const { items } = props;

  return (
    <>
      {items.map((item, index) => (
        <section
          key={`palette_item_${index}`}
          className="mx-6"
        >
          <h4 className="text-2xl text-center">{item.header}</h4>
          <div className="flex flex-wrap justify-center flex-wrap gap-4 my-4">
            {item.listContent.map((listItem, listindex) => {
              // const bgcolor = `bg-[#${listItem.content}]`;
              return (
                <section
                  key={`palette_${listindex}`}
                >
                  <div 
                    className={`border border-slate-300 w-48 p-5 border`}
                    style={{ backgroundColor: listItem.content }}
                  />
                  <p className="text-right">{listItem.title}</p>
                </section>
              )
            })}
          </div>
        </section>
      ))}
    </>
  );
}
