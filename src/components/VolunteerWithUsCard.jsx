import GenBtn from "./GenBtn"
import { Link } from "react-router-dom";

export default function VolunteerWithUsCard() {
  return (
    <div className="bg-white py-8 w-full rounded-lg flex flex-col items-center justify-center md:max-w-[1200px] ">
      <h1 className="text-[var(--color-primary)] text-2xl font-bold text-center mb-[-25px] p-4">Donate time and <br /> Expertise</h1>
      <p className="text-[var(--color-black)] text-center font-semibold mb-4 text-sm p-4">Volunteer and Partner with us.</p>
      <Link to="/contact"><GenBtn text="Volunteer with us today"/></Link>
    </div>
  )
} 

