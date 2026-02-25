import { ArrowRight } from "lucide-react";

export default function GenBtnSmall({ link, text }) {
  return(
    <button className="bg-[var(--color-primary)] text-white font-semibold px-4 py-3 rounded-lg hover:bg-[var(--color-secondary)] hover:text-[#333333] cursor-pointer text-[12px] md:text-[14px] group">
      <a href={link} target="blank" className="flex gap-2 items-center w-full">{text}<span className=" transition-transform duration-300 group-hover:translate-x-1"><ArrowRight size={18}/></span></a>
    </button>
  )
}