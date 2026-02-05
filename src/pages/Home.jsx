import { ArrowRight } from "lucide-react";
import ServiceCard from "../components/ServiceCard";


export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen px-12 py-4 gap-12 md:max-w-[1200px]"> 
        <div className="flex flex-col items-center gap-8" id="hero-section">
          <div className="flex flex-col items-center ">
            <h1 className="font-header text-[48px] md:text-6xl text-center leading-tight">WHAT you <span  className="text-[var(--color-primary)]">donate</span>  today,
              creates <span className="text-[var(--color-primary)] textc">a brighter tomorrow</span></h1>
            <p className="text-center text-[12px] text-[#333333] font-medium max-w-[90%]">Nigeria faces significant poverty, with estimates showing over half the population struggling, particularly in rural areas (around 75.5%) compared to urban areas (around 41.3%), affecting roughly 139 million people by 2025, with children and uneducated adults being disproportionately impacted, despite recent economic growth figures, highlighting severe inequality and access issues to basic services like water and sanitation. </p>
          </div>
        <div className="hero-btn mb-6">
          <a href="/donate"><button className="bg-[var(--color-primary)] text-white font-semibold px-6 py-3 rounded-md hover:bg-[var(--color-secondary)] hover:text-[#333333] flex gap-2 items-center cursor-pointer text-sm md:text-md group">Lend a helping hand <span className=" transition-transform duration-300 group-hover:translate-x-2"><ArrowRight/></span></button></a>
        </div>
            <img className="w-full md:max-w-[1200px] mb-12 bg-cover bg-center h-[80%] rounded-2xl" src="./public/image 4.png" alt="image of kids in the slum" />
      </div>
      
      <div className="flex flex-col items-center gap-4" id="about-section">
        <div className="flex flex-col items-center ">
            <h1 className="font-header text-[48px] md:text-6xl text-center leading-tight"><span  className="text-[var(--color-primary)]">Heart</span> behind the heart</h1>
            <p className="text-center text-[12px] text-[#333333] font-medium max-w-[90%]">Here is what you need to know about us</p>
        </div>
        <div className="about-content">
            <img className="rounded-2xl" src="./public/image 3.png" alt="images of kids happy" />
        </div>
        <div className="about-text flex flex-col gap-4 mb-6">
            <h3 className="text-center text-[18px] font-bold">This is what we stand for</h3>
            <p className="text-center text-[12px]">Feed The Heart Foundation is a humanitarian non-governmental organization committed to restoring hope and dignity to vulnerable individuals and communities. We focus on feeding the needy, supporting children’s education, and driving sustainable community development initiatives that empower people to thrive.</p>
        </div>
        <button className="bg-[var(--color-primary)] text-white font-semibold px-6 py-3 rounded-md hover:bg-[var(--color-secondary)] hover:text-[#333333] flex gap-2 items-center cursor-pointer text-sm md:text-md group">Know More about us <span className=" transition-transform duration-300 group-hover:translate-x-2"><ArrowRight/></span></button>
      </div>

      <div id="what-we-do" className="bg-gray-200 py-12 px-4 rounded-2xl">
        <div className="flex flex-col items-center gap-2">
            <h1 className="font-header text-[48px] md:text-6xl text-center leading-tight">how we make <span  className="text-[var(--color-primary)]">Impact</span></h1>
            <p className="text-center text-[12px] text-[#333333] font-medium max-w-[90%]">These are our projects through which we touch lives and make impacts</p>
        </div>

        <div id="services-container" className="flex flex-col md:flex-row items-center gap-8 mt-12 justify-center">
          <ServiceCard number="1" title="Love for a Community" description="Providing nutritious meals and relief support to vulnerable individuals and families"/>
          <ServiceCard number="2" title="Back to School" description="Sending children to school through scholarships, learning materials, and mentorship."/>
          <ServiceCard number="3" title="A Community Project" description="Empowering communities through skill acquisition, advocacy, and sustainable initiatives."/>
        </div>


      </div>

    </div>
  )
}