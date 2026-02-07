import { ArrowRight } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import RecordsCard from "../components/RecordsCard";
import ExecutiveSum from "../components/ExecutiveSum";
  


export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen px-12 py-4 gap-12 md:max-w-[1200px]"> 
      {/* hero section */}

        <div className="flex flex-col items-center gap-8" id="hero-section">
          <div className="flex flex-col items-center ">
            <h1 className="font-header text-[48px] md:text-[76px] text-center w-full md:w-[80%] leading-tight">WHAT you <span  className="text-[var(--color-primary)]">donate</span>  today,
              creates <span className="text-[var(--color-primary)] textc">a brighter tomorrow</span></h1>
            <p className="text-center text-[12px] md:text-[14px] text-[#333333] font-medium max-w-[90%] md:max-w-[70%]">Nigeria faces significant poverty, with estimates showing over half the population struggling, particularly in rural areas (around 75.5%) compared to urban areas (around 41.3%), affecting roughly 139 million people by 2025, with children and uneducated adults being disproportionately impacted, despite recent economic growth figures, highlighting severe inequality and access issues to basic services like water and sanitation. </p>
          </div>
        <div className="hero-btn mb-6">
          <a href="/donate"><button className="bg-[var(--color-primary)] text-white font-semibold px-6 py-3 rounded-md hover:bg-[var(--color-secondary)] hover:text-[#333333] flex gap-2 items-center cursor-pointer text-sm md:text-md group">Lend a helping hand <span className=" transition-transform duration-300 group-hover:translate-x-2"><ArrowRight/></span></button></a>
        </div>
           <img className="w-full md:max-w-[1200px] mb-12 object-cover h-[80%] md:h-[400px] rounded-2xl" src="/images/image 4.png" alt="image of kids in the slum" />
    
      </div>

       {/* About section */}
      
      <div className="flex flex-col items-center gap-4 mb-12" id="about-section">
        <div className="flex flex-col items-center ">
            <h1 className="font-header text-[48px] md:text-[62px] text-center leading-tight"><span  className="text-[var(--color-primary)]">Heart</span> behind the heart</h1>
            <p className="text-center text-[12px] md:text-[16px] text-[#333333] font-medium max-w-[90%] mb-8">Here is what you need to know about us</p>
        </div>
       
            <img className="rounded-2xl h-[400px] w-full object-cover mb-6" src="/images/image 3.png" alt="images of kids happy" />
        
        <div className="about-text flex flex-col gap-4 mb-6">
            <h3 className="text-center text-[18px] md:text-3xl font-bold">This is what we stand for</h3>
            <p className="text-center text-[12px] md:text-[14px]">Feed The Heart Foundation is a humanitarian non-governmental organization committed to restoring hope and dignity to vulnerable individuals and communities. We focus on feeding the needy, supporting children’s education, and driving sustainable community development initiatives that empower people to thrive.</p>
        </div>
          <a href="/about"><button className="bg-[var(--color-primary)] text-white font-semibold px-6 py-3 rounded-md hover:bg-[var(--color-secondary)] hover:text-[#333333] flex gap-2 items-center cursor-pointer text-sm md:text-md group">Know more about us <span className=" transition-transform duration-300 group-hover:translate-x-2"><ArrowRight/></span></button></a>
      </div>

       {/* what-we-do section */}

      <div id="what-we-do" className="bg-gray-200 py-12 px-8 md:px-12 rounded-2xl">
        <div className="flex flex-col items-center gap-2">
            <h1 className="font-header text-[48px] md:text-[62px] text-center leading-tight">how we make <span  className="text-[var(--color-primary)]">Impact</span></h1>
            <p className="text-center text-[12px] md:text-[14px] text-[#333333] font-medium max-w-[90%]">These are our projects through which we touch lives and make impacts</p>
        </div>

        <div id="services-container" className="flex flex-col md:flex-row items-center gap-8 mt-12 mb-30 justify-center">
          <ServiceCard number="1" title="Love for a Community" description="Providing nutritious meals and relief support to vulnerable individuals and families"/>
          <ServiceCard number="2" title="Back to School" description="Sending children to school through scholarships, learning materials, and mentorship."/>
          <ServiceCard number="3" title="A Community Project" description="Empowering communities through skill acquisition, advocacy, and sustainable initiatives."/>
        </div>
       
       
        <div id="records-container" className="flex flex-col items-center md:items-start gap-8 mt-12 justify-center bg-[var(--color-black)] py-16 px-8 rounded-2xl">
          <div id="record-header" className="flex flex-col md:items-start md:px-8">
            <h3 className="text-white text-center font-semibold leading-tight md:text-left md:w-[80%] text-[20px] mb-2">Every impact made is a step towards creating a better future for humanity</h3>
            <p className="text-white text-center text-[12px] font-regular">Our efforts backed with numbers</p>
          </div>

          <div className="flex flex-col items-center md:items-start md:flex-row w-full gap-4 px-8">
            <RecordsCard number="1" score="10,000+" description="Individual lives touched"/>
            <RecordsCard number="2" score="2,000+" description="Students Empowered"/>
            <RecordsCard number="3" score="36+" description="Total outreach done"/>
          </div>
          
        </div>
      </div>


      <div id="donate-today" className="flex flex-col items-center gap-1 leading-tight mt-6 mb-10">
          <h3 className="text-center text-[26px] md:text-[42px] font-semibold mt-12 md:mb-2">Your Donation can <br />change lives</h3>
          <p className="text-center text-[12px] md:text-[16px] mb-6">We need you on this life changing journey, walk with us</p>
          <a href="/donate"><button className="bg-[var(--color-primary)] text-white font-semibold px-6 py-3 rounded-md hover:bg-[var(--color-secondary)] hover:text-[#333333] flex gap-2 items-center cursor-pointer text-sm md:text-md group">Lend a helping hand <span className=" transition-transform duration-300 group-hover:translate-x-2"><ArrowRight/></span></button></a>
        </div>

      


    </div>
  )
}