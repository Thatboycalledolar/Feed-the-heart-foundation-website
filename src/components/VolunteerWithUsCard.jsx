import SecondaryBtn from "./SecondaryBtn"
import { Link } from "react-router-dom";

export default function VolunteerWithUsCard() {
  return (
    <div className=" py-8 w-full rounded-lg flex flex-col items-center text-white justify-center md:max-w-[1200px] ">
      <h1 className=" font-header text-[48px] md:text-[64px] font-medium leading-[64px] tracking-tighter text-center mb-4 md:mb-6">Donate time and <br /> Expertise</h1>
      <p className="text-center opacity-60 font-light text-[14px] md:text-[18px] mb-8 md:mb-12">Volunteer and Partner with us.</p>
      <Link to="/contact"><SecondaryBtn text="Volunteer with us today" /></Link>
    </div>
  )
}

