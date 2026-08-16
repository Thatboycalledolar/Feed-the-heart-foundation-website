import { ArrowRight } from "lucide-react";

export default function GenBtnSmall({ text }) {
  return (
    <button className="bg-[var(--color-black)] font-header text-white font-semibold px-4 py-3 rounded-lg hover:bg-[var(--color-primary)] cursor-pointer text-[12px] md:text-[14px] group">
      <div className="flex gap-2 items-center w-full">{text}<span className=" transition-transform duration-300 group-hover:translate-x-1"><ArrowRight size={18} /></span></div>
    </button>
  )
}