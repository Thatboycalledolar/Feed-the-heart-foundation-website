import GenBtnSmall from "./GenBtnSmall"


export default function GalleryCard({ image, header, date, link }) {
  return(
    <div className="bg-gray-200 rounded-2xl px-4 py-2 md:py-4 flex md:flex-col w-full gap-4 items-center md:items-start">
      <img src={image} alt={header} className="rounded-lg w-[50%] md:w-full h-44 object-cover"/>
      <div className="flex flex-col gap-2 items-start justify-center w-[50%] md:w-full">
        <div className="flex flex-col gap-1 mb-4 " >
          <h3 className="text-[16px] font-bold text-(--color-black)">{header}</h3>
          <p className="text-[12px] font-semibold opacity-60 text-(--color-black)">{date}</p>
        </div>
       
        <GenBtnSmall link={link} text="View Pictures" />
      </div>

    </div>
  )
}