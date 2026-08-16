import GenBtnSmall from "./GenBtnSmall"
import { galleryItems } from "../data/GaleryItems.js"
import { Link } from "react-router-dom"


export default function GalleryCard() {
  return (
    galleryItems.map((item) => (
      <div key={item.id} className="bg-gray-200 h-full rounded-2xl px-4 py-4 md:py-4 flex md:flex-col w-full gap-4 items-center md:items-start">
        <img src={item.coverImage} alt={item.name} className="rounded-lg w-[60%] md:w-full h-[220px] md:h-[300px] object-cover" />
        <div className="flex flex-col justify-between h-full flex-1 gap-auto items-start w-full">
          <div className="flex flex-col gap-1 mb-4 " >
            <h3 className="text-[16px] md:text-[20px] lg:text-[24px] font-medium tracking-tighter leading-tight font-header text-(--color-black)">{item.name}</h3>
            <p className="text-[12px] md:text-[14px] lg:text-[16px] font-semibold opacity-60 text-(--color-black)">{item.location}</p>
            <p className="text-[12px] md:text-[14px] lg:text-[16px] font-semibold opacity-60 text-(--color-black)">{item.date}</p>
          </div>
          <Link to={`/Media/${item.id}`}><GenBtnSmall text="View Pictures" /></Link>

        </div>


      </div>
    ))
  )
}