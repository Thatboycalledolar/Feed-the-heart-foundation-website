import ExecutiveSum from "../components/ExecutiveSum"
import ExecutiveSum2 from "../components/ExecutiveSum2"

export default function About() {
  return (
    <div className="flex flex-col items-center mt-12 md:mt-24 mb-30 justify-center gap-12 px-8 md:px-12">
      <div id="header-wrapper" className="flex flex-col items-center mb-18 md:mb-24 gap-8">
        <h1 className="font-header text-[52px] md:text-[72px] tracking-tighter font-medium text-center leading-[110%] md:leading-[64px]"><span className="text-(--color-primary)">Hearts</span> <br />Behind the Heart</h1>
        <p className="text-(--color-black)/60 bg-gray-100 px-[24px] py-[4px] tracking-tight rounded-[4px] font-medium text-[16px] md:text-[20px]">Here is what we stand for</p>
      </div>

      <div id="cards-wrapper" className="flex flex-col items-center gap-48  md:gap-24 max-w-[1200px] w-full">
        <div className="w-full">
          <ExecutiveSum image="/images/about 1.JPG" header="About Us" description="Feed The Heart Foundation is a humanitarian non-governmental organization committed to restoring hope and dignity to vulnerable individuals and communities. We focus on feeding the needy, supporting children’s education, and driving sustainable community development initiatives that empower people to thrive." />
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-48  lg:gap-12">
          <ExecutiveSum2 image="/images/girl child.JPG" header="Our Mission" description="To serve humanity with love and compassion by providing food for the hungry, access to quality education for underprivileged children, and sustainable community development programs that uplift lives and create lasting impact." />

          <ExecutiveSum2 image="/images/cloth drive.JPG" header="Our Vision" description="A world where no one is forgotten—where every child has access to education, every family has hope, and communities are strengthened through love, service, and purposeful development." />
        </div>



      </div>



    </div>
  )
}