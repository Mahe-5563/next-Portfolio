'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { jsTWColors } from "@/common";

export default function ProjectPrototype(props) {
  const { items, type, additional_item } = props;
  const [modalState, setModalState] = useState();
  
  // document.addEventListener("click", (event) => {
  //   console.info("Event Click: ", event.target.id);
  // })
  
	return (
    <>
      {additional_item && additional_item.type == "url" &&
        <Link
          className={`bg-secondary text-primary px-6 py-3 my-8 mx-auto w-2/3 block text-center cursor-pointer md:w-1/3`}
          href={additional_item.url}
          target="_blank"
        >
          {additional_item.title}
        </Link>
      }
      <>
      {type == "prototype_web_mobile" ?
        <div className="px-7 flex flex-col items-center">
          {items?.map((item, index) => {
            return (
              <>
                <h4 className="text-2xl">{item.header}</h4>
                <div className="md:flex gap-4 mb-6 mt-2" key={item.id}>
                  <Image
                    src={item.image}
                    alt={item.header}
                    width={600}
                    height={200}
                    onClick={() => {setModalState({...item, type})}}
                    className="cursor-pointer"
                  />
                  <Image
                    src={item.image2}
                    alt={item.header}
                    width={150}
                    height={100}
                    onClick={() => {setModalState({...item, type})}}
                    className="cursor-pointer"
                  />
                </div>
              </>
            )
          })}
        </div>
      : 
        <div className="flex justify-center flex-wrap gap-4 px-7">
          {items?.map((item, index) => {
            return (
              <div className="w-1/3" key={item.id}>
                <Image
                  src={item.image}
                  alt={item.header}
                  width={type == "prototype_web" ? 600 : 300}
                  height={200}
                  onClick={() => {setModalState({...item, type})}}
                  className="cursor-pointer"
                />
              </div>
            )
          })}
        </div>}
      </>
      {modalState && 
        <div id="modal-prototype" className="fixed z-50 h-screen w-screen bg-gray-200 bg-modalbg transition-opacity top-0 left-0">
          <div id="modal-prototype-body" className="w-4/5 h-4/5 p-12 bg-modalco mx-auto mt-24 rounded overflow-auto relative">
            <button className="text-black absolute top-3 right-3" onClick={() => setModalState()}>Close</button>
            <h4 className="text-black text-3xl mb-4">{modalState?.header}</h4>
            <div className={`${(modalState.type == "prototype_web" ? "" : "md:flex md:justify-center")}`}>
              <Image
                src={modalState?.image}
                alt={modalState?.header || "Prototype Image"}
                width={600}
                height={200}
                className="border border-slate-200 rounded mr-4"
              />
              <p className="text-black">{modalState?.content}</p>
            </div>
          </div>
        </div>
      }
    </>
  )
}