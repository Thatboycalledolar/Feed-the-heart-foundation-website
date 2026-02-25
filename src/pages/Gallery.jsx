import GalleryCard from "../components/GalleryCard";


export default function Gallery() {
  return (
    <div className="flex flex-col items-center mt-4 mb-30 justify-center gap-12 px-8 md:px-12 w-full">
      <div id="header-wrapper" className="flex flex-col items-center md:gap-4">
        <h1 className="font-header text-center leading-14 md:leading-20 text-[48px] md:text-[76px] ">Check out <span className="text-[var(--color-primary)]">the impact</span> <br /> we've made</h1>
        <p className="text-[var(--color-black)] font-medium text-[14px] text-center md:text-[18px] md:mt-[-10px]">Pictorial proof of our mission and dedication to a better society</p>
      </div>

      <div id="gallery-container" className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 w-full max-w-[1200px]">
        <GalleryCard image="/images/covid relief.JPG" header="After Covid Relief" date="June 1st 2020 (Badagry)" link="https://drive.google.com/drive/folders/1yXW9SwcpF9LAk0Hqwu177K1cKhBn3ij7"/>
        <GalleryCard image="/images/cloth drive.JPG" header="Food and cloth drive" date="February 27 2022 (Ebuttemetta) Sponsored by bigi" link="https://drive.google.com/drive/folders/1lptdy4uzGwbvfUlRHcZFLNGzpSI4gcnB?usp=sharing"/>
        <GalleryCard image="/images/give back ann.JPG" header="Give back Anniversary" date="June 26 2022 Egbeda" link="https://drive.google.com/drive/folders/1K4UpWgWxd1ZRqDmKxncXIPwVhPQnkpQt?usp=sharing"/>
        <GalleryCard image="/images/girl child.JPG" header="International girl child day" date="July 2021 (in partnership with Executives helping Innitiatives)" link="https://drive.google.com/drive/folders/1veJ1mKshQ1VbAfv8s1H01VmBSOb4Esdd?usp=sharing"/>
      
      </div>
    </div>
  )
}