import GalleryCard from "../components/GalleryCard";


export default function Gallery() {
  return (
    <div className="flex flex-col items-center mt-4 mb-30 justify-center gap-12 px-8 md:px-12 w-full">
      <div id="header-wrapper" className="flex flex-col items-center md:gap-4 mt-12 md:mt-24 mb-12 md:mb-18">
        <h1 className="font-header text-center leading-12 md:leading-18 tracking-tighter font-medium mb-4 md:mb-8 text-[48px] md:text-[76px] ">Check out <span className="text-[var(--color-primary)]">the impact</span> <br /> we've made</h1>
        <p className="text-(--color-black)/60 bg-gray-100 px-[24px] py-[4px] tracking-tight rounded-[4px] font-medium text-[16px] md:text-[20px]">Pictorial proof of our mission and dedication to a better society</p>
      </div>

      <div id="gallery-container" className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 w-full max-w-[1200px]">
        <GalleryCard />


      </div>
    </div>
  )
}