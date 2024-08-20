
import { jsTWColors } from "@/common";

export default function ProjectText(props) {
  const { items, title } = props;
  // console.info("text: ", props);
  return (
    <>
      <div className="flex justify-center gap-4 flex-wrap px-7">
        {items.map((item, index) => {
          const titleNo = `${(index+1) > 0 && (index+1) < 10 ? "0" : ""}${index+1}`
          return (
            <section 
              key={item.id}
              className="w-1/3 p-5"
            >
              <h3 className={`text-4xl text-secondary`}>{titleNo}</h3>
              <h3 className="text-2xl font-bold my-2">{item.header}</h3>
              {item.content && <p>{item.content}</p>}
              {item.listContent && 
                <ul>
                  {item.listContent.map((listItem, index) => (
                    <li key={`${listItem.id}`}>
                      {listItem.title} - {listItem.content}
                    </li>
                  ))}
                </ul>
              }
            </section>
          )
        })}
      </div>
    </>
  );
}
