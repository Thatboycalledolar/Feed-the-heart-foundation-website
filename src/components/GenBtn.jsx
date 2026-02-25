import { ArrowRight, Link } from "lucide-react";

export default function GenBtn({ link, text }) {
  return(
    <Link to={link}> 
    <button className="bg-[var(--color-primary)] text-white font-semibold px-6 py-4 rounded-md hover:bg-[var(--color-secondary)] hover:text-[#333333] cursor-pointer text-[14px] md:text-[18px] group">
      <a className="flex gap-2 items-center w-full">{text}<span className=" transition-transform duration-300 group-hover:translate-x-2"><ArrowRight size={22} /></span></a>
    </button>
    </Link>
  )
}