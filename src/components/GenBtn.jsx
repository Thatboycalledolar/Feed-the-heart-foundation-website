import { ArrowRight, Link } from "lucide-react";

export default function GenBtn({ text }) {
  return (
    <button className="bg-[var(--color-black)] font-header text-white font-semibold px-6 py-4 rounded-md hover:bg-[var(--color-primary)] hover:text-[#333333] hover:text-white cursor-pointer text-[14px] md:text-[18px] group">
      <a className="flex gap-2 items-center w-full">{text}<span className=" transition-transform duration-300 group-hover:translate-x-2"><ArrowRight size={22} /></span></a>
    </button>
  )
}