import { ArrowRight } from "lucide-react";

export default function VolunteerWithUsCard() {
  return (
    <div className="bg-white py-8 w-full rounded-lg flex flex-col items-center justify-center md:max-w-[1200px] ">
      <h1 className="text-[var(--color-primary)] text-2xl font-bold text-center mb-[-25px] p-4">Donate time and <br /> Expertise</h1>
      <p className="text-[var(--color-black)] text-center font-semibold mb-4 text-sm p-4">Volunteer and Partner with us.</p>
      <a href="/contact"><button className="bg-[var(--color-primary)] text-white font-semibold px-6 py-3 rounded-md hover:bg-[var(--color-secondary)] hover:text-[#333333] flex gap-2 items-center cursor-pointer text-sm md:text-md group">Volunteer with us today <span className=" transition-transform duration-300 group-hover:translate-x-2"><ArrowRight/></span></button></a>
   
    </div>
  )
} 

