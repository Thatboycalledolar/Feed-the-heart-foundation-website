import ExecutiveSum from "../components/ExecutiveSum"

export default function About() {
  return (
    <div className="flex flex-col items-center mt-4 mb-30 justify-center gap-12 px-8 md:px-12">
      <div id="header-wrapper" className="flex flex-col items-center">
        <h1 className="font-header text-[48px] md:text-[76px] "><span className="text-(--color-primary)">heart</span> behind the heart</h1>
        <p className="text-(--color-black) font-medium text-[14px] md:text-[18px] md:mt-[-10px]">Here is what we stand for</p>
      </div>

      <div id="cards-wrapper" className="flex flex-col lg:grid lg:grid-cols-2 items-center gap-12 max-w-[1200px] w-full">
        <div className="col-span-2 w-full">
          <ExecutiveSum image="/images/about 1.JPG" header="About Us" description="Feed The Heart Foundation is a humanitarian non-governmental organization committed to restoring hope and dignity to vulnerable individuals and communities. We focus on feeding the needy, supporting children’s education, and driving sustainable community development initiatives that empower people to thrive." />
        </div>
      
        <ExecutiveSum image="/images/girl child.JPG" header="Our Mission" description="To serve humanity with love and compassion by providing food for the hungry, access to quality education for underprivileged children, and sustainable community development programs that uplift lives and create lasting impact." />
      
      
        <ExecutiveSum image="/images/cloth drive.JPG" header="Our Vision" description="A world where no one is forgotten—where every child has access to education, every family has hope, and communities are strengthened through love, service, and purposeful development." />
      </div>



    </div>
  )
}