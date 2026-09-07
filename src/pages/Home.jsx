import ServiceCard from "../components/ServiceCard";
import RecordsCard from "../components/RecordsCard";
import GenBtn from "../components/GenBtn";
import { Link } from "react-router-dom";



export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen text-stone-800 w-full">

      <div className="flex flex-col items-center py-4 gap-48 md:gap-64 w-full">


        {/* hero section */}

        <div className="flex flex-col items-center gap-8 max-w-[1200px] w-[90%] md:w-full" id="hero-section">
          <div className="flex flex-col gap-6 items-center w-full my-8 md:my-8 lg:my-16">
            <h1 className="font-header text-[48px] tracking-tighter font-medium lg:text-[76px] md:text-[62px] text-center w-full md:w-[90%] leading-14 mb-6 md:leading-16 lg:leading-20">Improving life Today for <span className="text-[var(--color-primary)]">A better Tomorrow.</span> <br />walk with Us!
            </h1>
            <p className="text-center text-[14px] tracking-tight  md:text-[16px] text-[#333333]/80 font-medium w-full md:max-w-[80%]">Nigeria faces significant poverty, with estimates showing over half the population struggling, particularly in rural areas (around 75.5%) compared to urban areas (around 41.3%), affecting roughly 139 million people by 2025, with children and uneducated adults being disproportionately impacted, despite recent economic growth figures, highlighting severe inequality and access issues to basic services like water and sanitation. </p>
          </div>
          <div className="hero-btn mb-16 md:mb-32 ">
            <Link to="/donate"> <GenBtn text="Lend a helping hand" />
            </Link>

          </div>
          <img className="w-full md:max-w-[1200px] mb-12 object-cover h-full md:h-[600px] rounded-2xl"
            src="/images/homepage1.JPG"
            alt="image of kids in the slum" />

        </div>


        {/* About section */}
        <div className="w-full bg-gray-100 py-[48px] md:py-[64px]">
          <div className="flex flex-col items-center md:items-start gap-4 mb-12 max-w-[1200px] w-[90%] md:w-full mx-auto" id="about-section">
            <div className="flex flex-col items-center gap-4 md:items-start mb-8 md:mb-12 ">
              <h1 className="font-header text-[48px] md:text-[64px] text-center md:text-left font-medium leading-[110%]  tracking-tighter"><span className="text-[var(--color-primary)]">Hearts</span> <br />behind the Heart</h1>
              <p className="text-center md:text-left text-[14px] md:text-[18px] text-stone-500 font-medium w-full mb-8 tracking-tight">Here is what you need to know about us</p>
            </div>

            <img className="rounded-2xl h-full md:h-[600px] w-full object-cover mb-6 md:mb-12" src="/images/homepage2.JPG" alt="images of kids happy" />

            <div className="about-text items-center md:items-start flex flex-col gap-4 mb-6 md:mb-12">
              <h3 className="text-center text-[24px] md:text-[36px] font-medium font-header tracking-tighter">Here is who we are!</h3>
              <p className="text-center md:text-left text-[16px] md:text-[18px] tracking-tight">Feed The Heart Foundation is a humanitarian non-governmental organization committed to restoring hope and dignity to vulnerable individuals and communities. We focus on feeding the needy, supporting children’s education, and driving sustainable community development initiatives that empower people to thrive.</p>
            </div>
            <Link to="/about"> <GenBtn text="Continue Reading" />
            </Link>

          </div>
        </div>

        {/* what-we-do section */}

        <div id="what-we-do" className="bg-gray-100 py-12 px-8 md:px-12 rounded-2xl max-w-[1200px] w-[90%]">
          <div className="flex flex-col items-center gap-2 mb-20 md:mb-28">
            <h1 className="font-header text-[48px] md:text-[62px] text-center leading-tight tracking-tighter">how we make <span className="text-[var(--color-primary)]">Impact</span></h1>
            <p className="text-center text-[12px] md:text-[14px] text-[#333333] font-medium max-w-[90%]">These are our projects through which we touch lives and make impacts</p>
          </div>

          <div id="services-container" className="flex flex-col md:flex-row items-center gap-8 mt-12 mb-30 md:mb-48 justify-center">
            <ServiceCard number="1" title="Love for a Community" description="Providing nutritious meals and relief support to vulnerable individuals and families" />
            <ServiceCard number="2" title="Back to School" description="Sending children to school through scholarships, learning materials, and mentorship." />
            <ServiceCard number="3" title="A Community Project" description="Empowering communities through skill acquisition, advocacy, and sustainable initiatives." />
          </div>


          <div id="records-container" className="flex flex-col items-center md:items-start gap-8 mt-12 justify-center bg-[var(--color-black)] py-16 px-8 rounded-2xl">
            <div id="record-header" className="flex flex-col md:items-start md:px-8">
              <h3 className="text-white text-center font-medium font-header tracking-tighter leading-tight md:text-left md:w-[80%] text-[20px] md:text-[28px] mb-2">Every impact made is a step towards creating a better future for humanity</h3>
              <p className="text-white text-center text-[12px] md:text-[16px] opacity-[50%] font-regular">Our efforts backed with numbers</p>
            </div>

            <div className="flex flex-col items-center md:items-start md:flex-row w-full gap-4 px-8">
              <RecordsCard number="1" score="10,000+" description="Individual lives touched" />
              <RecordsCard number="2" score="2,000+" description="Students Empowered" />
              <RecordsCard number="3" score="36+" description="Total outreach done" />
            </div>

          </div>
        </div>


        <div id="donate-today" className="flex flex-col items-center gap-4 leading-tight mt-6 mb-24 md:mb-32 max-w-[1200px] w-[90%]">
          <h3 className="text-center text-[42px] md:text-[64px] font-medium tracking-tighter font-header mt-12 md:mb-2">What you give can <br />change lives</h3>
          <p className="text-center text-[14px] md:text-[18px] opacity-[80%] mb-10 md:mb-16">We need you on this life changing journey, walk with us</p>
          <Link to="/donate"> <GenBtn text="Lend a helping hand" />
          </Link>
        </div>


      </div>

    </div>
  )
}